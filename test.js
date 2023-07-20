
let dollar = document.getElementById('dollar');
let dinnar = document.getElementById('dinnar');

dinnar.onkeyup = function () {
    dollar.value = dinnar.value / 3;
}
dollar.onkeyup = function () {
    dinnar.value = dollar.value * 3;
}
