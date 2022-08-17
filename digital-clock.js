window.onload = function() {
    // document.getElementById("btn-on").addEventListener('click', startClock);
    btnClick();
}

// function startedClock() {
//     setInterval(myTime,1000);
// }

function myTime() {
    const d = new Date();
    document.getElementById("digital-display").innerHTML = d.toLocaleTimeString();
}

let myTimer;

function startClock() {
   myTimer = setInterval(myTime, 1000);
   return myTimer;
}

//fix this!
function stopClock() {
    window.clearInterval(myTimer);
    return myTimer;
}

function btnClick() {
    let e1 = document.getElementById('btn-on');
    // let e2 = document.getElementById('btn-off');
    // let btnClicked = false;
    if(e1) {
        e1.addEventListener('click',startClock);
        // btnClicked = true;
    } 
    // if (btnClicked) {
    //     e2.addEventListener('click',stopClock);
    // }
}

function btnOffClick() {
    let e = document.getElementById('btn-off');
    if(e) {
        e.addEventListener('click',stopClock);
    }
}
