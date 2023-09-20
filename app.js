// var ul = document.getElementById('ul')

// function sendbtn(){
//     var a = document.getElementById('inpt')
//     var b = document.getElementById('inpn')
//     var c = document.getElementById('balance')
//     c.innerHTML = b.value
//     var li = document.createElement('li')
//     var litext = document.createTextNode(b.value)
//     li.appendChild(litext)
//     ul.appendChild(li)
//     var sum = litext + b.value
//     c.innerHTML = sum
//     b.value = ''    

// }
// app.js
// app.js
document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");
    const expenseList = document.getElementById("expense-list");
    const totalBalance = document.getElementById("total-balance");

    let balance = 0;

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);

        if (description && amount) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${description}: $${amount.toFixed(2)}`;
            expenseList.appendChild(listItem);

            // Update the balance
            balance += amount;
            totalBalance.textContent = `Total Balance: $${balance.toFixed(2)}`;

            // Clear input fields
            descriptionInput.value = "";
            amountInput.value = "";
        }
    });
});
