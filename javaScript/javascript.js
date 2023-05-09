var sign = '';
var x1 = 0;
var x2 = 0;

function insert(x){
    document.getElementById("text").value += x;
}
function getSign(s){
    x1 = document.getElementById("text").value;
    sign = s;
    document.getElementById("text").value = '';

}
function fitOn(){
   
    document.getElementById("text").value = 0;
    
}
function clearOn(){
    document.getElementById("text").value = '';
    
}
function equals(){
    x2 = document.getElementById("text").value;
    if (sign == "+"){
        document.getElementById("text").value = parseFloat(x1) + parseFloat(x2);
        
    }
    else if (sign == "-"){
        document.getElementById("text").value = parseFloat(x1) - parseFloat(x2);
    }
    else if (sign == "x"){
        document.getElementById("text").value = parseFloat(x1) * parseFloat(x2);
    }
    else if (sign == "/"){
        document.getElementById("text").value = parseFloat(x1) / parseFloat(x2);
    }
}