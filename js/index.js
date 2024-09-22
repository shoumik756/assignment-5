// for 1st card
document.getElementById('donate-now-btn').addEventListener('click', function(){
    
    const inputFliedValue = getDonationInputFliedValues();
    const myTotalDonatedBalance = getTotalDonatedbalance ();

    if(isNaN(inputFliedValue) ){
        alert('You have entered an invalid number');
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
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);
});

// for 2nd card
document.getElementById('donate-now-btn2').addEventListener('click', function(){

    const inputFliedValue2 = getDonationInputFliedValues2();
    const myTotalDonatedBalance2 = getTotalDonatedbalance2 ();

    if(isNaN(inputFliedValue2) ){
        alert('You have entered an invalid number');
        return
    }
    if(inputFliedValue2 > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }

    const totalDonated2 = inputFliedValue2 + myTotalDonatedBalance2;

    document.getElementById('total-donated-balance2').innerText = totalDonated2;
    
    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue2;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);
});

// for 3rd card
document.getElementById('donate-now-btn3').addEventListener('click', function(){
    
    const inputFliedValue3 = getDonationInputFliedValues3();
    const myTotalDonatedBalance3 = getTotalDonatedbalance3 ();

    if(isNaN(inputFliedValue3) ){
        alert('You have entered an invalid number');
        return
    }
    if(inputFliedValue3 > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }

    const totalDonated3 = inputFliedValue3 + myTotalDonatedBalance3;

    document.getElementById('total-donated-balance3').innerText = totalDonated3;
    
    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue3;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);
});


