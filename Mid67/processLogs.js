function processLogs(logs) {
    const userActions = {};  // เก็บจำนวนกิจกรรมทั้งหมดของผู้ใช้
    const sessionDurations = {};  // เก็บระยะเวลาเซสชันของผู้ใช้
    const errorCount = {};  // เก็บจำนวนข้อผิดพลาดของแต่ละผู้ใช้
    let mostActiveUser = '';  // เก็บชื่อผู้ใช้ที่ทำกิจกรรมมากที่สุด
    let maxActions = 0;  // เก็บจำนวนกิจกรรมสูงสุด

    // ใช้เพื่อเก็บเวลาล็อกอินล่าสุดของผู้ใช้
    const userSessions = {};

    // ประมวลผลแต่ละ log
    logs.forEach(log => {
        const { timestamp, user, action } = log;
        const date = new Date(timestamp);
        
        // 1. นับจำนวนกิจกรรมทั้งหมด
        if (!userActions[user]) {
            userActions[user] = 0;
        }
        userActions[user]++;
        
        // 2. นับจำนวนข้อผิดพลาด
        if (action === 'ERROR') {
            if (!errorCount[user]) {
                errorCount[user] = 0;
            }
            errorCount[user]++;
        }
        
        // 3. คำนวณระยะเวลาเซสชัน
        if (action === 'LOGIN') {
            userSessions[user] = date;  // เก็บเวลาล็อกอิน
        } else if (action === 'LOGOUT') {
            if (userSessions[user]) {
                const loginTime = userSessions[user];
                const sessionDuration = (date - loginTime) / (1000 * 60);  // แปลงเป็นนาที
                if (!sessionDurations[user]) {
                    sessionDurations[user] = [];
                }
                sessionDurations[user].push(sessionDuration);
                delete userSessions[user];  // ลบเวลาล็อกอินหลังจากออก
            }
        }
    });

    // 4. หาผู้ใช้ที่ทำกิจกรรมมากที่สุด
    for (const user in userActions) {
        if (userActions[user] > maxActions) {
            maxActions = userActions[user];
            mostActiveUser = user;
        }
    }

    // สร้างรายงานตามที่กำหนด
    return {
        totalActionsPerUser: userActions,
        sessionDurations: sessionDurations,
        errorCount: errorCount,
        mostActiveUser: mostActiveUser
    };
}

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

const report = processLogs(logs);
console.log(report);
