function fieldValues( btnClicked ){
    const inputField = document.getElementById( btnClicked );
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText);

    inputField.value = '';


    return inputFieldNumber;
}
function updateValue( clicked , a ){

    const depositTotalBox = document.getElementById(clicked);
    const depositTotalText = depositTotalBox.innerText;
    const depositTotal = parseFloat(depositTotalText);

    depositTotalBox.innerText = a + depositTotal;

    return depositTotalBox;
}
/*
 function totalBlnc (totalBalanceBox){
    const totalBalanceText = totalBalanceBox.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    !!!! --- Problem ----!!!
    totalBalanceBox.innerText = inputFieldNumber + totalBalance;
} */

document.getElementById('deposit-button').addEventListener('click', function(){
    // input field Value catch
   /*  
   const inputField = document.getElementById('deposit-input');
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText);
     */
    

  const inputFieldNumber =   fieldValues("deposit-input"); 

    // Deposit box value catch
   /* 
    const depositTotalBox = document.getElementById('deposit-total');
    const depositTotalText = depositTotalBox.innerText;
    const depositTotal = parseFloat(depositTotalText);

    depositTotalBox.innerText = munna + depositTotal; */

     updateValue( 'deposit-total',inputFieldNumber )

    // total balance for deposit
    const totalBalanceBox = document.getElementById('balance-total');

    /* 
    const totalBalanceText = totalBalanceBox.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    
    totalBalanceBox.innerText = inputFieldNumber + totalBalance; */
    // inputField.value = '';

    // totalBlnc(totalBalanceBox, inputFieldNumber) +++>> probelm

});


document.getElementById('withdraw-button').addEventListener('click', function(){
    // input field Value catch
   /* 
    const inputField = document.getElementById('withdraw-input');
    const inputFieldText = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldText); */

    const totalblc = 
    fieldValues( "withdraw-input" );

    // Deposit box value catch

   /* 
    const withdrawTotalBox = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotalBox.innerText;
    const withdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotalBox.innerText = inputFieldNumber + withdrawTotal; */

    
 updateValue('withdraw-total',totalblc )


    // total Balance for withdraw 

    // const totalBalanceBox = document.getElementById('balance-total');
    // const totalBalanceText = totalBalanceBox.innerText;
    // const totalBalance = parseFloat(totalBalanceText);
    // totalBalanceBox.innerText = totalBalance - inputFieldNumber;
    
    //inputField.value = '';


    // totalBlnc(inputFieldNumber)++>>problem
});





// function maruf(a , sum){
//     return a * sum;
// }
// maruf( 2, 5 ) >>> ans   =   10
// maruf( 10, 5 )>>>> ans  =   15


