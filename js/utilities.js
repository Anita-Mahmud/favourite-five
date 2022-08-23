function getExpenseValueByInput(inputId) {
    const perMember = document.getElementById(inputId);
    const perMemberExpenseString = perMember.value;
    const perMemberExpense = parseFloat(perMemberExpenseString);
    perMember.value = '';
    return perMemberExpense;
}

function getExpenseValueByElement(inputId) {
    const element = document.getElementById(inputId);
    const elementExpenseString = element.innerText;
    const elementExpense = parseFloat(elementExpenseString);
    return elementExpense;
}

function setValue(inputId, newValue) {
    const inputElement = document.getElementById(inputId);
    inputElement.innerText = newValue;
}