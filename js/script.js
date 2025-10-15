// Displaying the amount. No Inputs
const balanceTotal = document.getElementById('balance-total');
const moneyPlusDisplay = document.getElementById('money-plus');
const moneyMinusDisplay = document.getElementById('money-minus');
const historyList = document.getElementById('list');

// Input variables
const txtDescription = document.getElementById('description');
const txtAmount = document.getElementById('amount');

// button
const btnAdd = document.getElementById('btn-add');

// array to store the stringify object of the transaction (description, amount)
let transactions = [];

// This handles the logic of getting the items in the local storage
const storedTransactions = localStorage.getItem('transactions');
if (storedTransactions !== null) {
   transactions = JSON.parse(storedTransactions);
} else {
   transactions = [];
}

// Adding new transactions
const form = document.getElementById('form');

// function to update the local storage for new transaction
function updateLocalStorage() {
   const jsonString = JSON.stringify(transactions);
   localStorage.setItem('transactions', jsonString)
}

// function to add the transaction to the local storage
function addTransaction(e) {
   e.preventDefault();

   const description = txtDescription.value.trim();
   const amount = txtAmount.value.trim();

   if (description === '' || amount === '') {
      alert('Please input a description and the amount!');
      return;
   }

   const parsedAmount = parseFloat(amount);
   const ID = Date.now();

   const transactionObj = {
      id: ID,
      description,
      amount: parsedAmount
   }

   transactions.push(transactionObj);
   txtDescription.value = '';
   txtAmount.value = '';
   updateLocalStorage();
   displayTransactions();
}

// console.log(transactions);

// This is the event listener inside the Form section in HTML
form.addEventListener('submit', addTransaction);

// ====================================================================

// Implement displayTransactions() function
console.log(transactions);

function createTransactionElement(transaction) {
   const li = document.createElement('li');
   const deleteBtn = document.createElement('button')


   const itemClass = transaction.amount < 0 ? 'minus' : 'plus';
   li.classList.add(itemClass);

   const sign = transaction.amount < 0 ? '-': '+';

   deleteBtn.classList.add('delete-btn');
   deleteBtn.setAttribute('data-id', transaction.id);
   deleteBtn.innerText = 'X';

   li.innerHTML = `${transaction.description}<span>${sign}${Math.abs(transaction.amount).toFixed(2)}</span>${deleteBtn.outerHTML}`;

   return li;
}

function displayTransactions() {
   historyList.innerHTML = '';

   transactions.forEach(function(transaction) {
      const transactionElement = createTransactionElement(transaction);
      historyList.append(transactionElement);
   })
}
displayTransactions();