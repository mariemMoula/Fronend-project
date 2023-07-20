let open = document.getElementById("open"); 
let close = document.getElementById("close"); 
let container = document.querySelector("#container");
close.onclick = function(){
    container.classList.add('hide') ;
    close.classList.add("hide") ; 
    open.classList.remove('hide') ; 
}

open.onclick= function(){
    this.classList.add('hide');
    container.classList.remove('hide');
    close.classList.remove('hide');
}