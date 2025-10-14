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


let transactions = [];
const storedTransactions = localStorage.getItem('transactions');
if (storedTransactions !== null) {
   transactions = JSON.parse(storedTransactions);
} else {
   transactions = [];
}

// Adding new transactions
const form = document.getElementById('form');

function updateLocalStorage() {
   const jsonString = JSON.stringify(transactions);
   localStorage.setItem('transactions', jsonString)
}

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
}

console.log(transactions);

form.addEventListener('submit', addTransaction);