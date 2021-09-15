function savings(input) {
    monthlyIncome = Number(input[0]);
    months = Number(input[1]);
    expensesPerMonth = Number(input[2]);
    
    let income = monthlyIncome * months;
    let expenses = expensesPerMonth * months;
    let unexpectedExpensesPerMonth = 30 * monthlyIncome / 100;
    let unexpectedExpenses = unexpectedExpensesPerMonth * months;
    let savings = income - expenses - unexpectedExpenses;
    let savingsPercentage = savings * 100 / income;
    
    console.log(`She can save ${savingsPercentage.toFixed(2)}%`);
    console.log(savings.toFixed(2));
}

savings('1500', '3', '800');