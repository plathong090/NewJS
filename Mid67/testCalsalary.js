function calculateSalariesForEmployees(employees, dailyDeduction) {
    return employees.map(employee => {
        let deduction = employee.absentDays * dailyDeduction;
        let finalSalary = employee.baseSalary - deduction;
        return {
            ...employee,
            finalSalary: finalSalary
        };
    });
}

let employees = [
    { name: "John", baseSalary: 30000, absentDays: 3 },
    { name: "Sarah", baseSalary: 25000, absentDays: 1 },
    { name: "Mike", baseSalary: 35000, absentDays: 0 }
];

let dailyDeduction = 500; // ค่าหักวันละ 500 บาท
let updatedEmployees = calculateSalariesForEmployees(employees, dailyDeduction);

updatedEmployees.forEach(employee => {
    console.log(`${employee.name} - เงินเดือนสุดท้าย: ${employee.finalSalary}`);
});
/*  John - เงินเดือนสุดท้าย: 28500
Sarah - เงินเดือนสุดท้าย: 24500
Mike - เงินเดือนสุดท้าย: 35000
*/