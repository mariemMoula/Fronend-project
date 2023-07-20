let div = document.getElementById("div");
div.style.height='50px';
div.style.backgroundColor = "PINK";

let after = document.getElementById("after");
let before = document.getElementById("before");
let inside = document.getElementById("inside");
let p = document.getElementById("p");

after.onclick = function () {
    div.after(p);
}

before.onclick = function () {
    div.before(p);
    console.log(p.innerText)
   
}

inside.onclick = () => {
    div.append(p);
}
