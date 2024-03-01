let [seconds, minutes, hour] = [0, 0, 0]
let displayTime = document.getElementById("displaytime")

let timer = null;
function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displayTime.innerHTML = h + ":" + m + ":" + s
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000)
}

function watchStop() {
    clearInterval(timer)
}
function watchReset() {
    clearInterval(timer)
    seconds = 0;
    minutes = 0;
    hour = 0;
    displayTime.innerHTML = "00: 00:00"
}