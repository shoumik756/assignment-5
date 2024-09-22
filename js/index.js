// for 1st card
document.getElementById('donate-now-btn').addEventListener('click', function(){
    
    const inputFliedValue = getDonationInputFliedValues();
    const myTotalDonatedBalance = getTotalDonatedbalance ();

    if(isNaN(inputFliedValue) ){
        alert('You Have Input a Invalid Number');
        return
    }
    if(inputFliedValue > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }

    const totalDonated = inputFliedValue + myTotalDonatedBalance;

    document.getElementById('total-donated-balance').innerText = totalDonated;

    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue;
    document.getElementById('current-balance').innerText = currentBalance;
});

