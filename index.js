var timer = 6;
var score = 0;
var rnhit;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var CheckNumber = (Number(dets.target.innerHTML));
    if (CheckNumber === rnhit) {
        increaseScore();
        bubble();
        hitChange();
    }
})

function timeInterval() {

    var stopTimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(stopTimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}
function hitChange() {
    rnhit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rnhit;
}
function bubble() {
    var clutter = "";

    for (i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`
        console.log(i);
    }


    document.querySelector("#pbtm").innerHTML = clutter;
}

timeInterval();
bubble();
hitChange();