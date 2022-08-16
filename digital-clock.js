
function myTime() {
    const d = new Date();
    return document.getElementsByClassName("digital-display").innerHTML = d.toLocaleTimeString();
}

window.onload = myTime();

window.onload = function() {
    const display = document.getElementById("digital-display");
    display.innerHTML = "Hello World";  
}

