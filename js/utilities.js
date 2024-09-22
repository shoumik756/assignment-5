// current balance
function myCurrentBalance (){
    const currentBalanceValue = parseFloat(document.getElementById('current-balance').innerText);
    return currentBalanceValue;
}


// for 1st card
function getDonationInputFliedValues (){
    const donationInputFiled = parseFloat(document.getElementById('donation-input-field').value);
    return donationInputFiled
}

function getTotalDonatedbalance (){
    const totalDonatedBalance = parseFloat(document.getElementById('total-donated-balance').innerText);
    return totalDonatedBalance;
}

