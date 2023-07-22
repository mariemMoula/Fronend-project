console.log(screen.width);
console.log(screen.colorDepth);

setTimeout(function(){
console.log("hello")
},5000);

function repeat() {
    for(let i=0 ;i<10;i++){
        console.log(i);
    }
}
setInterval(repeat(),1000);