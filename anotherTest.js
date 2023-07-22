let txt = document.getElementById("txt");

if(localStorage.length > 0 ){
    txt.value = localStorage.txt;
}

txt.onkeyup=function(){
    localStorage.setItem('txt',txt.value) ;
}


// if(sessionStorage.length > 0 ){
//     txt.value = sessionStorage.txt1;
// }

// txt.onkeyup=function(){
//     sessionStorage.setItem('txt1',txt.value) ;
// }
