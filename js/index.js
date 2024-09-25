  // Card 1 Donation
  document.getElementById('c1-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoney = document.getElementById('input-money').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const inputMoneyNumber = parseFloat(inputMoney);
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const newMoney = totaleMoneyNumber - inputMoneyNumber;

    document.getElementById('Donet-money').innerText = inputMoneyNumber;
    document.getElementById('totale-money').innerText = newMoney;

    // Update history
    addHistoryItem(`${inputMoneyNumber} Donate for Flood at Noakhali, Bangladesh`, new Date().toLocaleDateString());

     alert("Success! Your donation of " + inputMoneyNumber + " BDT has been received.");

    console.log(newMoney, inputMoneyNumber);
});

// Card 2 Donation
document.getElementById('c2-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoneyTwo = document.getElementById('input-money-2').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const inputMoneyTwoNumber = parseFloat(inputMoneyTwo);
    const TwoNewMoney = totaleMoneyNumber - inputMoneyTwoNumber;

    document.getElementById('Donet-money-2').innerText = inputMoneyTwoNumber;
    document.getElementById('totale-money').innerText = TwoNewMoney;

    // Update history
    addHistoryItem(`${inputMoneyTwoNumber} Donate for Children's Education`, new Date().toLocaleDateString());

    alert("Success! Your donation of " + inputMoneyTwoNumber + " BDT has been received.");

    console.log(inputMoneyTwoNumber, TwoNewMoney);
});

// Card 3 Donation
document.getElementById('c3-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputMoneyThree = document.getElementById('input-money-3').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const inputMoneyThreeNumber = parseFloat(inputMoneyThree);
    const ThreeNewMoney = totaleMoneyNumber - inputMoneyThreeNumber;

    document.getElementById('Donet-money-3').innerText = inputMoneyThreeNumber;
    document.getElementById('totale-money').innerText = ThreeNewMoney;

    // Update history
    addHistoryItem(`${inputMoneyThreeNumber} Donate for Health Relief`, new Date().toLocaleDateString());

    alert("Success! Your donation of " + inputMoneyThreeNumber + " BDT has been received.");

    console.log(inputMoneyThreeNumber, ThreeNewMoney);
});

//  function
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

//  from history
donationTab.addEventListener('click', function () {
    donationTab.classList.add("bg-lime-500");
    historyTab.classList.remove("bg-lime-500");
    document.getElementById('all-card').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});