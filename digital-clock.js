window.onload = function() {
    btnClick();
    btnOffClick();
}

function myTime() {
    const d = new Date();
    document.getElementById("digital-display").innerHTML = d.toLocaleTimeString();
}

function clearMyTime() {
    let el = document.getElementById("digital-display");
    // document.getElementById("digital-display").textContent = "";
    // el.textContent = "";
    el.innerHTML = "";
}

let myTimer;

function startClock() {
   myTimer = setInterval(myTime, 1000);
   return myTimer;
}

function stopClock() {
    window.clearInterval(myTimer);
    // return myTimer;
}

function btnClick() {
    let e1 = document.getElementById('btn-on');
    if(e1) {
        e1.addEventListener('click',startClock);
    } 
}

function btnOffClick() {
    let e = document.getElementById('btn-off');
    if(e) {
        e.addEventListener('click',stopClock);
        clearMyTime();
    }
}
