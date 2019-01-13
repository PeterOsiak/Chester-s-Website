// FIXED SCROLL BUTTON

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if  (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector('#scroll-btn').style.display = 'block';
    } else {
        document.querySelector('#scroll-btn').style.display = 'none'; 
    }
}

// HEADER DISSAPERING BUTTONS

//
//window.onscrollTwo = function() {
//    scrollFunction()
////}
//
//function scrollFunctionTwo() {
//    if  (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//        document.getElementsByClassName('btn-header').style.display = "inline-blocksss";
//    } else {
//       document.getElementsByClassName('btn-header').style.display = "none"; 
//    }
//}