let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");


 b1.onclick = function(){
     red();
 }
 b2.onclick = function(){
     yellow();
 }
 b3.onclick = function(){
     green();
 }
function red(){
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "gray";
    b3.style.backgroundColor = "gray";
    c1.style.backgroundColor = "red";
    c2.style.backgroundColor = "gray";
    c3.style.backgroundColor = "gray";
}

function yellow(){
    b2.style.backgroundColor = "#f7c948";
    b1.style.backgroundColor = "gray";
    b3.style.backgroundColor = "gray";
    c2.style.backgroundColor = "#f7c948";
    c1.style.backgroundColor = "gray";
    c3.style.backgroundColor = "gray";
}

function green(){
    b3.style.backgroundColor = "#0dbb47ff";
    b2.style.backgroundColor = "gray";
    b1.style.backgroundColor = "gray";
    c3.style.backgroundColor = "#0b9640ff";
    c2.style.backgroundColor = "gray";
    c1.style.backgroundColor = "gray";
}
