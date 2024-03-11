var type = new Typed(".multiple-text", {
    strings: ["AI Developer", "Software Developer", "Frontend Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})
function changeTextColor() {
    document.getElementById("button_text").style.color = "black";
}

function resetTextColor() {
    document.getElementById("button_text").style.color = "white";
}
