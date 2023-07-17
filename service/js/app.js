function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const case1Total = getInputvalue('case1') *50 ;
        const case2Total = getInputvalue('case2') * 60;
        const case3Total = getInputvalue('case3') *30 ;
        const case4Total = getInputvalue('case4') * 300;
        const case5Total = getInputvalue('case5') *10 ;
        const case6Total = getInputvalue('case6') *20 ;
        
        
        const subTotal = case1Total + case2Total + case3Total
                         +case4Total +case5Total + case6Total;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('case2-plus').addEventListener('click',function(){
       
   upadateCaseNumber('case2', 60 ,true);
});

document.getElementById('case2-minus').addEventListener('click',function(){
    
upadateCaseNumber('case2', 60, false);
});

// phone prcie update using add event linstner 
document.getElementById('case1-plus').addEventListener('click',function(){
    upadateCaseNumber('case1',50, true);
});


document.getElementById('case1-minus').addEventListener('click',function(){
    upadateCaseNumber('case1',50 , false);
});

document.getElementById('case3-plus').addEventListener('click',function(){
       
    upadateCaseNumber('case3', 30 ,true);
 });
 
 document.getElementById('case3-minus').addEventListener('click',function(){
     
 upadateCaseNumber('case3', 30, false);
 });

 document.getElementById('case4-plus').addEventListener('click',function(){
       
    upadateCaseNumber('case4', 300 ,true);
 });
 
 document.getElementById('case4-minus').addEventListener('click',function(){
     
 upadateCaseNumber('case4', 300, false);
 });

 document.getElementById('case5-plus').addEventListener('click',function(){
       
    upadateCaseNumber('case5', 10 ,true);
 });
 
 document.getElementById('case5-minus').addEventListener('click',function(){
     
 upadateCaseNumber('case5', 10, false);
 });

 document.getElementById('case6-plus').addEventListener('click',function(){
       
    upadateCaseNumber('case6', 20 ,true);
 });
 
 document.getElementById('case6-minus').addEventListener('click',function(){
     
 upadateCaseNumber('case6', 20, false);
 });

