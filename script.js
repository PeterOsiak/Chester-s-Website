/**********************
FIXED SCROLL BUTTON
**********************/

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if  (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector('#scroll-btn').style.display = 'block';
        console.log("I'm ON");
    } else {
        document.querySelector('#scroll-btn').style.display = 'none'; 
        console.log("I'm OFF");
    }
};


/**********************
MOBILE NAVIGATION (HAMBURGER MENU)
**********************/

//klikam w hamburgera, to zamienia się w X i odwrotnie

document.querySelector('.icon').addEventListener('click', classToggle);

function classToggle() {
    this.classList.toggle('ion-ios-menu');
    this.classList.toggle('ion-ios-close');
}

//
//
//document.querySelector('.mobile-nav-icon').onclick = function() {
//    hamburgerFunction();
//}

document.querySelector('.icon').addEventListener('click', hamburgerFunction)

/* Jezeli klikam w ikonę, KIEDY JEST HAMBURGEREM, zmenia się w X i pojawia się rozwijane menu */
function hamburgerFunction() {
    //jeżeli klikam w hamburgera to zamienia się w X oraz wysuwa się menu
    var x = 'none';
        if(document.querySelector('.icon').hasClass = '.hamburger') {
             document.querySelector('.js--main-nav').style.display = 'block';
        } else {
             document.querySelector('.js--main-nav').style.display = 'none';
        }
    
}

//
///* Jeżeli klikamy w ikonę, KIEDY JEST X, pojawia się hamburger i zwija się menu */
//
//document.getElementsByClassName("ion-ios-close").onclick = function() {
//    closeFunction();
//}
//
//function closeFunction() {
//    //jeżeli klikam w hamburgera to zamienia się w X oraz wysuwa się menu
//    document.querySelector('.ion-ios-close').addEventListener('click', function() {
//        if(document.querySelector('.icon').hasClass = '.ion-ios-close') {
//             document.querySelector('.js--main-nav').style.display = 'none';
//             document.querySelector('.icon').classList.remove('ion-ios-close');
//             document.querySelector('.icon').classList.add('ion-ios-menu');
//        } 
//    })
//}