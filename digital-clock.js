window.onload = function() {
    setInterval(myTime,1000);
}

function myTime() {
    const d = new Date();
    document.getElementById("digital-display").innerHTML = d.toLocaleTimeString();
}