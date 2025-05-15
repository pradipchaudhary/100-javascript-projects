// DOM Element
const transactionFormEl = document.getElementById("transactionForm");
const netAmountEl = document.getElementById("netAmount");
const transactionsContainerEl = document.querySelector(".transactions");

const initState = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transaction: [
        //? Example data
        {
            id: 1,
            text: "Demo transaction",
            amount: 200,
            type: "credit",
        },
        {
            id: 1,
            text: "Demo transaction",
            amount: 200,
            type: "debit",
        },
        {
            id: 1,
            text: "Demo transaction",
            amount: 300,
            type: "credit",
        },
    ],
};

const renderTransaction = function () {
    const transactionLists = initState.transaction;

    transactionLists.map(function (transaction, index) {
        const { id, text, amount, type } = transaction;
        const isCredit = type === "credit" ? true : false;

        // Create a new transaction item
        const transactionEl = document.createElement("div");
        transactionEl.className = "transaction";
        transactionEl.setAttribute("key", index);

        // Create left div and append to transaction div
        const leftEl = document.createElement("left");
        leftEl.className = "left";
        transactionEl.appendChild(leftEl);

        // Create status div and append to parent div
        const statusDiv = document.createElement("div");
        statusDiv.classList.add("status");
        const debitCredit = isCredit ? "credit" : "debit";
        statusDiv.classList.add(debitCredit);

        if (transaction.type === "debit") {
            statusDiv.className = "status debit";
            statusDiv.innerHTML = "D";
        } else {
            statusDiv.className = "status credit";
            statusDiv.innerHTML = "C";
        }
        transactionEl.appendChild(statusDiv);

        // Create Title Tag and append to parent div
        const titleEl = document.createElement("p");
        titleEl.innerHTML = text;
        leftEl.appendChild(titleEl);

        // Create right div and append to transaction div
        const priceEl = document.createElement("p");
        priceEl.innerHTML = `${isCredit ? "+" : "-"}  Rs. ${amount}`;
        leftEl.appendChild(priceEl);

        transactionsContainerEl.appendChild(transactionEl);
        // console.log(transactionEl);
        // transactionsContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
    });
};

// renderTransactions();

const addTransaction = (e) => {
    e.preventDefault();
    const isEarn = e.submitter.id === "earnBtn" ? true : false;

    const formData = new FormData(transactionFormEl);
    let title = formData.get("text");
    let amount = formData.get("amount");
    console.log(title, amount);

    if (title === "" || amount === "") {
        return false;
    }

    const transaction = {
        id: Math.floor(Math.random() * 1000),
        text: title,
        amount: +amount,
        type: isEarn ? "credit" : "debit",
    };
    initState.transaction.push(transaction);

    // renderTransaction();
    console.log(transaction);
    title = "";
    amount = "";
};

// Event Called
transactionFormEl.addEventListener("submit", addTransaction);
renderTransaction();
