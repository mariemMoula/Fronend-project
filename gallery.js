let img = document.getElementsByClassName("photos");
let divPhoto = document.getElementById("main");
 
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover",function(){
            divPhoto.src = this.src;
        })  
    }
    ;
 