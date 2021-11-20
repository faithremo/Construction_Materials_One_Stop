// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides active");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
//footer starts here//
const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark__mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark__mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})