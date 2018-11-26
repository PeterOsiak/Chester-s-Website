// FIXED SCROLL BUTTON

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if  (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector('#scroll-btn').style.display = "block";
    } else {
       document.querySelector('#scroll-btn').style.display = "none"; 
    }
}