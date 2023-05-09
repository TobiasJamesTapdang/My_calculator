// get number function

var me;
var output;

function number(x){
    document.getElementById("show").value += x;    
}
// get result

function result(){
   var result = document.getElementById("show").value;
    output = eval(result)
    document.getElementById("show_me").value = output;
}
// clear function

function wipe(){
    document.getElementById("show").value = "";
    document.getElementById("show_me").value = "";
    
}

// delete function

function deleteChar(){
    var number = document.getElementById("show");
    var remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;
}

// Implementing trig functions 

function sin(){
    me = Math.sin(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function cos(){
    me = Math.cos(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function tan(){
    me = Math.tan(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function square(){
    me = Math.pow(document.getElementById("show").value, 2);
    document.getElementById("show_me").value = me;
}
function cube(){
    me = Math.pow(document.getElementById("show").value, 3);
    document.getElementById("show_me").value = me;
}
function sqrt2(){
    me = Math.pow(document.getElementById("show").value, 1/2);
    document.getElementById("show_me").value = me;
}
function sqrt3(){
    me = Math.pow(document.getElementById("show").value, 1/3);
    document.getElementById("show_me").value = me;
}
function exponent(){
    document.getElementById("show_me").value = Math.E;
}
function pi(){
    document.getElementById("show_me").value = Math.PI;
}
function nat_log(){
    me = Math.log(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function log(){
    me = Math.log10(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function exp_num(){
    me = Math.exp(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}


//creating inverse trig function

function sin_inv(){
    me = Math.asin(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function cos_inv(){
    me = Math.acos(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}
function tan_inv(){
    me = Math.atan(document.getElementById("show").value);
    document.getElementById("show_me").value = me;
}

// finding factorial of a number

function factorial(x){
    me = 1;
    if(x == 0 || x == 1){
        document.getElementById("show_me").value = me;
    }else{
        for(var i = x; i >= 1; i--){
            me = me * i;
        }
        document.getElementById("show_me").value = me;
    }
}