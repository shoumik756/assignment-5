// for 1st card
document.getElementById('donate-now-btn').addEventListener('click', function(){
    
    const inputFliedValue = getDonationInputFliedValues();
    const myTotalDonatedBalance = getTotalDonatedbalance ();
    if(inputFliedValue <= 0 ){
        alert('Invalid Number');
        return
    }
    if(isNaN(inputFliedValue) || inputFliedValue === "" ){
        alert('You have entered an invalid number');
        return
    }
    if(inputFliedValue > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }

    const totalDonated = inputFliedValue + myTotalDonatedBalance;

    document.getElementById('total-donated-balance').innerText = totalDonated.toFixed(2);

    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);

    // added to history list
    const historyList = document.createElement('div');
    historyList.className = "p-8 border-[1px] mx-5 mb-6 rounded-2xl";
    historyList.innerHTML = `
    
        <p class="text-2xl font-bold">${inputFliedValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p class="text-base">Date: ${new Date().toString()}</p>
    `;
    const historyListContainer = document.getElementById('history-list');
    historyListContainer.insertBefore(historyList, historyListContainer.firstChild);

    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-input-field').value = '';
    
});

// for 2nd card
document.getElementById('donate-now-btn2').addEventListener('click', function(){

    const inputFliedValue2 = getDonationInputFliedValues2();
    const myTotalDonatedBalance2 = getTotalDonatedbalance2 ();

    if(inputFliedValue2 <= 0 ){
        alert('Invalid Number');
        return
    }
    if(isNaN(inputFliedValue2) || inputFliedValue2 === ""){
        alert('You have entered an invalid number');
        return
    }
    if(inputFliedValue2 > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }

    const totalDonated2 = inputFliedValue2 + myTotalDonatedBalance2;

    document.getElementById('total-donated-balance2').innerText = totalDonated2.toFixed(2);
    
    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue2;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);

     // added to history list
     const historyList = document.createElement('div');
     historyList.className = "p-8 border-[1px] mx-5 mb-6 rounded-2xl";
     historyList.innerHTML = `
     
         <p class="text-2xl font-bold">${inputFliedValue2} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
         <p class="text-base">Date: ${new Date().toString()}</p>
     `;
     const historyListContainer = document.getElementById('history-list');
     historyListContainer.insertBefore(historyList, historyListContainer.firstChild);

    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-input-field2').value = '';
});

// for 3rd card
document.getElementById('donate-now-btn3').addEventListener('click', function(){
    
    const inputFliedValue3 = getDonationInputFliedValues3();
    const myTotalDonatedBalance3 = getTotalDonatedbalance3 ();

    if(inputFliedValue3 <= 0 ){
        alert('Invalid Number');
        return
    }
    if(isNaN(inputFliedValue3) || inputFliedValue3 === ""){
        alert('You have entered an invalid number');
        return
    }
    if(inputFliedValue3 > myCurrentBalance ()){
        alert ('You Have Insufficient Balance For Donation');
        return
    }
    

    const totalDonated3 = inputFliedValue3 + myTotalDonatedBalance3;

    document.getElementById('total-donated-balance3').innerText = totalDonated3.toFixed(2);
    
    const currentBalanceValue = myCurrentBalance();
    const currentBalance = currentBalanceValue - inputFliedValue3;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);

    // added to history list
    const historyList = document.createElement('div');
    historyList.className = "p-8 border-[1px] mx-5 mb-6 rounded-2xl";
    historyList.innerHTML = `
    
        <p class="text-2xl font-bold">${inputFliedValue3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-base">Date: ${new Date().toString()}</p>
    `;
    const historyListContainer = document.getElementById('history-list');
    historyListContainer.insertBefore(historyList, historyListContainer.firstChild);
    
    document.getElementById('my_modal_5').showModal();
    document.getElementById('donation-input-field3').value = '';
});


// history button functionality 

const donationBtn = document.getElementById('btn-donation');
const historyBtn = document.getElementById('btn-history');
historyBtn.addEventListener('click', function(){
    historyBtn.classList.add(
        "bg-primary",
        "text-textcolor" );
    historyBtn.classList.remove('text-textcolor1')
    donationBtn.classList.remove(
        "bg-primary",
        "text-textcolor"
    );
    donationBtn.classList.add(
        "bg-pri",
        "text-textcolor1",
        "border"
    )

    document.getElementById('donation-sec').classList.add('hidden')
    document.getElementById('history-sec').classList.remove('hidden')

});
// Donation button functionality 
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('donation-sec').classList.remove('hidden')
    donationBtn.classList.add(
        "bg-primary",
        "text-textcolor" );
    donationBtn.classList.remove('text-textcolor1')
    historyBtn.classList.remove(
        "bg-primary",
        "text-textcolor"
    );
    historyBtn.classList.add(
        "bg-pri",
        "text-textcolor1",
        "border"
    )
    document.getElementById('history-sec').classList.add('hidden')
});


