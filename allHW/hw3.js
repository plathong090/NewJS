/*
จากข้อมูล (log) ในรูปแบบ JSON ซึ่งเก็บข้อมูลการทำกิจกรรมของผู้ใช้ โดยแต่ละบันทึกจะมีฟิลด์ดังนี้
    timestamp: เวลาที่เกิดกิจกรรม
    user: ชื่อผู้ใช้ที่ทำกิจกรรม
    action: ประเภทของกิจกรรมที่เกิดขึ้น เช่น LOGIN, REQUEST, LOGOUT, ERROR
    details: รายละเอียดของกิจกรรม

เขียนฟังก์ชันที่ทำการประมวลผลไฟล์บันทึก และสร้างรายงานตามความต้องการต่อไปนี้
    - จำนวนกิจกรรมทั้งหมดของแต่ละผู้ใช้ นับจำนวนกิจกรรมทั้งหมดที่ผู้ใช้แต่ละคนทำ
    - ระยะเวลาเซสชัน สำหรับผู้ใช้แต่ละคน ให้คำนวณระยะเวลา (เป็นนาที) ของแต่ละเซสชัน โดยเซสชันเริ่มต้นด้วยกิจกรรม LOGIN และสิ้นสุดด้วยกิจกรรม LOGOUT
    - จำนวนข้อผิดพลาด นับจำนวนกิจกรรมที่เป็น ERROR ของผู้ใช้แต่ละคน
    - ผู้ใช้ที่ทำกิจกรรมมากที่สุด ระบุชื่อผู้ใช้ที่มีจำนวนกิจกรรมรวมมากที่สุด
*/

const logs = [
    { "timestamp": "2024-09-15T08:23:45Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:25:12Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 123" },
    { "timestamp": "2024-09-15T08:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-15T08:40:22Z", "user": "Bob", "action": "REQUEST", "details": "Requested resource 124" },
    { "timestamp": "2024-09-15T08:42:08Z", "user": "Bob", "action": "ERROR", "details": "Database connection failed" },
    { "timestamp": "2024-09-15T08:45:15Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:50:30Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 125" },
    { "timestamp": "2024-09-15T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-15T09:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T09:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" },
    { "timestamp": "2024-09-16T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-16T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-16T10:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" }
];

function processLogs(logs) {
    const report = {}; // สร้างเก็บข้อมูล

    logs.forEach(log => {
        const { timestamp, user, action } = log;
        const time = new Date(timestamp).getTime(); // แปลง timestamp เป็นเวลาในรูปแบบ milliseconds

        // ถ้ายังไม่มีผู้ใช้ใน report ให้สร้างข้อมูลใหม่
        if (!report[user]) {
            report[user] = {
                totalActions: 0, // นับจำนวนกิจกรรม
                sessions: [],    // เก็บระยะเวลาการทำงานในแต่ละ session
                errorCount: 0,   // นับจำนวนข้อผิดพลาด
                sessionStart: null // เก็บเวลาเริ่ม session
            };
        }

        report[user].totalActions++; // เพิ่มจำนวนกิจกรรมของผู้ใช้

        // ถ้าผู้ใช้ทำ LOGIN ให้บันทึกเวลาเริ่ม session
        if (action === "LOGIN") {
            report[user].sessionStart = time;
        }

        // ถ้าผู้ใช้ทำ LOGOUT คำนวณระยะเวลา session และเก็บไว้
        if (action === "LOGOUT" && report[user].sessionStart) {
            const sessionDuration = (time - report[user].sessionStart);
            const sessionDurationInMinutes = Math.round(sessionDuration / 60000);
            report[user].sessions.push(sessionDurationInMinutes); // บันทึกระยะเวลา
            report[user].sessionStart = null; // รีเซ็ตเวลาเริ่ม session
        }

        // ถ้าผู้ใช้ทำ ERROR นับจำนวนข้อผิดพลาด
        if (action === "ERROR") {
            report[user].errorCount++;
        }
    });

    // หาผู้ใช้ที่ทำกิจกรรมมากที่สุด
    let mostActiveUser = "";
    let maxActions = 0;

    // ตรวจสอบจำนวนกิจกรรม
    for (let user in report) {
        if (report[user].totalActions > maxActions) {
            mostActiveUser = user;
            maxActions = report[user].totalActions;
        }
    }

    // คืนค่า report ที่รวมข้อมูลทั้งหมด
    return {
        totalActionsPerUser: Object.fromEntries(Object.entries(report).map(([user, data]) => [user, data.totalActions])),
        sessionDurations: Object.fromEntries(Object.entries(report).map(([user, data]) => [user, data.sessions])),
        errorCount: Object.fromEntries(Object.entries(report).map(([user, data]) => [user, data.errorCount])),
        mostActiveUser
    };
}

const report = processLogs(logs);
console.log(report);

/*
Expected Output:
{
    totalActionsPerUser: { Alice: 6, Bob: 8 },
    sessionDurations: { Alice: [4, 42], Bob: [25, 85] },
    errorCount: { Alice: 0, Bob: 3 },
    mostActiveUser: 'Bob'
}
*/

//module.exports = processLogs;
