// let color = document.getElementsByClassName("color"); 
// let body = document.getElementById("myBody");

// for(let i=0 ; i<color.length ; i++){
//     color[i].onclick=function(){
//         body.style.backgroundColor=this.style.backgroundColor;
//     }
// }
if(localStorage.length > 0 ){
    document.body.style.background=localStorage.color ;
}
function setColor(color){
    localStorage.setItem('color',color) ; 
    document.body.style.background=color ; 
}