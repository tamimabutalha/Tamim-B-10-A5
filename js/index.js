document.getElementById('c1-donate').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputMoney = document.getElementById('input-money').value;
    const totaleMoney = document.getElementById('totale-money').innerText;
    const inputMoneyNumber = parseFloat(inputMoney);
    const totaleMoneyNumber = parseFloat(totaleMoney);
    const newMoney = totaleMoneyNumber - inputMoneyNumber;
    
    document.getElementById('Donet-money').innerText= inputMoneyNumber;
    document.getElementById('totale-money').innerText = newMoney;

    console.log(newMoney,inputMoneyNumber);
    
});