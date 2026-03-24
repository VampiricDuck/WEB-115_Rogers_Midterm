const daoutput = document.getElementById("daoutput").addEventListener("click", runcode);

let loanamount = 15//Number(prompt("what is your initial loan amount"));
let downpay = 0.5//Number(prompt("what is your down patment as a percentage"));
let loanterm = 15//Number(prompt("what is the loan year, 15 or 30 years"));
let morgageterm = document.getElementById("morgageterm")
let intrrate = document.getElementById("intrrate")
let Loanamntd = document.getElementById("Loanamntd")
let monthbrake = document.getElementById("monthbrake")
function runcode (){
    let v = false
    while(v == false){
        if(isNaN(loanamount)){
            alert("please enter a number");
            loanamount = Number(prompt("what is your initial loan amount"));
        }else if(isNaN(downpay)){
            alert("downpay needs to be a decimal persentage");
            downpay = Number(prompt("what is your down patment as a percentage"));
            i = isNaN(downpay)
        }else if(downpay > 1){
            alert("downpay needs to be a decimal persentage");
            downpay = Number(prompt("what is your down patment as a percentage"));
            i = isNaN(downpay)
        }else if(loanterm != 15 & loanterm != 30){
            alert("loanterm needs to be ether 15 or 30");
            loanterm = Number(prompt("what is the loan year, 15 or 30 years"));
        }else{
            v = true;
        };
    };
    console.log(loanamount);
    console.log(downpay);
    console.log(loanterm);
    let actdownpayment = loanamount * downpay
    console.log(actdownpayment) 
    let printloan = loanamount - actdownpayment
    console.log(printloan)
    let intrest = 0.0575
    let totalMonths = loanterm * 12
    let monthpay = ((intrest * printloan) / (1 - Math.pow(1 + intrest, -totalMonths))).toFixed(2);
    console.log(monthpay)
    let intrestpay = (monthpay * totalMonths)-printloan
    console.log(intrestpay)
    let loancost = printloan + intrestpay
    console.log(loancost)
    morgageterm.textContent = ("text")
}