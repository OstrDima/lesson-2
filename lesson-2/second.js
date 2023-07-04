let employeeSalaries = {
    director: 2000,
    secretary: 1000,
    accountant: 500,
    programmer: 1000,
    nightWatchman: 350
};

let salaryFund = 0;
for (let salary in employeeSalaries) {
salaryFund += employeeSalaries[salary];
}

console.log("Фонд оплати праці склав " + salaryFund);