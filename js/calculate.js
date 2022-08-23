// per player
document.getElementById('btn-calculate').addEventListener('click', function() {
    const perPlayerExpense = getExpenseValueByInput('per-player');
    const l = document.getElementById('name-list').childElementCount;
    const totalPlayerExpense = perPlayerExpense * l;
    setValue('player-expenses', totalPlayerExpense)
})
document.getElementById('btn-calculate-total').addEventListener('click', function() {
    const playerExpenses = getExpenseValueByElement('player-expenses');
    const managerExpense = getExpenseValueByInput('manager');
    const coachExpense = getExpenseValueByInput('coach');
    const totalExpense = playerExpenses + managerExpense + coachExpense;
    setValue('total-expense', totalExpense)
})