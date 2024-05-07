let left = 6000;
let times = 0;
let count = document.getElementById("count");
let leftcoin = document.getElementById("left_coin");

function counter() {
    times++;
    count.innerHTML = times;
    left--;
    leftcoin.innerHTML = left;
}