const daoutput = document.getElementById("daoutput").addEventListener("click", runcode);

let loanamount = 15//Number(prompt("what is your initial loan amount"));
let downpay = 0.5//Number(prompt("what is your down patment as a percentage"));
let loanterm = 15//Number(prompt("what is the loan year, 15 or 30 years"));

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
}