// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000"; 

dodger.style.backgroundColor = "#FF69B4"; 

dodger.style.bottom  = "100px";

dodger.style.bottom  = "0px";

dodger.style.left  = "0px";

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);

    if (left < (window.innerWidth - dodger.offsetWidth)) {
        dodger.style.left = `${left + 1}px`;
    }
}