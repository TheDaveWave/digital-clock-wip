
function myTime() {
    let d = new Date();
    document.getElementsByClassName("digital-display").innerHTML = d.toLocaleTimeString();
}