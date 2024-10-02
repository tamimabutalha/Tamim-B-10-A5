// Card 1 
document.getElementById('c1-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoney = document.getElementById('input-money').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const inputMoneyNumber = parseFloat(inputMoney);
    const totaleMoneyNumber = parseFloat(totaleMoney);

    if (isNaN(inputMoneyNumber) || inputMoney.trim() === "") {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (inputMoneyNumber <= 0) {
        alert("Donation amount must be greater than zero.");
        return;
    }

    if (inputMoneyNumber > totaleMoneyNumber) {
        alert("Insufficient balance.");
        return;
    }

    const newMoney = totaleMoneyNumber - inputMoneyNumber;

    document.getElementById('Donet-money').innerText = inputMoneyNumber;
    document.getElementById('totale-money').innerText = newMoney;

    //  history
    addHistoryItem(`${inputMoneyNumber} BDT donated for Flood at Noakhali, Bangladesh`, new Date().toLocaleDateString());

    //  success modal
    showModal(inputMoneyNumber);

    console.log(newMoney, inputMoneyNumber);
});

// Card 2 
document.getElementById('c2-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoneyTwo = document.getElementById('input-money-2').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const inputMoneyTwoNumber = parseFloat(inputMoneyTwo);

    if (isNaN(inputMoneyTwoNumber) || inputMoneyTwo.trim() === "") {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (inputMoneyTwoNumber <= 0) {
        alert("Donation amount must be greater than zero.");
        return;
    }

    if (inputMoneyTwoNumber > totaleMoneyNumber) {
        alert("Insufficient balance.");
        return;
    }

    const TwoNewMoney = totaleMoneyNumber - inputMoneyTwoNumber;

    document.getElementById('Donet-money-2').innerText = inputMoneyTwoNumber;
    document.getElementById('totale-money').innerText = TwoNewMoney;

    // history
    addHistoryItem(`${inputMoneyTwoNumber} BDT donated for Children's Education`, new Date().toLocaleDateString());

    //  success modal
    showModal(inputMoneyTwoNumber);

    console.log(inputMoneyTwoNumber, TwoNewMoney);
});

// Card 3 
document.getElementById('c3-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoneyThree = document.getElementById('input-money-3').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const inputMoneyThreeNumber = parseFloat(inputMoneyThree);

    if (isNaN(inputMoneyThreeNumber) || inputMoneyThree.trim() === "") {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (inputMoneyThreeNumber <= 0) {
        alert("Donation amount must be greater than zero.");
        return;
    }

    if (inputMoneyThreeNumber > totaleMoneyNumber) {
        alert("Insufficient balance.");
        return;
    }

    const ThreeNewMoney = totaleMoneyNumber - inputMoneyThreeNumber;

    document.getElementById('Donet-money-3').innerText = inputMoneyThreeNumber;
    document.getElementById('totale-money').innerText = ThreeNewMoney;

    // Update history
    addHistoryItem(`${inputMoneyThreeNumber} BDT donated for Health Relief`, new Date().toLocaleDateString());

    // Show success modal
    showModal(inputMoneyThreeNumber);

    console.log(inputMoneyThreeNumber, ThreeNewMoney);
});

// Function 
function addHistoryItem(description, date) {
    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-2 border-black border-2';
    historyItem.innerHTML = `
        <p>${description}</p>
        <p>${date}</p>
    `;

    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

// History 
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-lime-500");
    donationTab.classList.remove("bg-lime-500");
    document.getElementById('all-card').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

donationTab.addEventListener('click', function () {
    donationTab.classList.add("bg-lime-500");
    historyTab.classList.remove("bg-lime-500");
    document.getElementById('all-card').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});

// Show the success modal
function showModal(donationAmount) {
    const modal = document.getElementById('success-modal');
    const donationDisplay = document.getElementById('donation-amount-display');
    modal.classList.remove('hidden');
    donationDisplay.innerText = `Your donation of ${donationAmount} BDT has been received. Thank you for your contribution!`;
}

// Close the modal
document.getElementById('modal-close').addEventListener('click', function () {
    document.getElementById('success-modal').classList.add('hidden');
});
