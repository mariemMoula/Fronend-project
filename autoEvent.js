
let btn = document.getElementById("btn");
let txt = document.getElementById("txt ");

window.onload=function(){
    txt.focus();
    btn.click();
    txt.style.backgroundColor='pink';
    txt.placeholder="test" ;
}

btn.onclick = function(){
    btn.style.backgroundColor='pink';
    txt.style.backgroundColor='pink';
}