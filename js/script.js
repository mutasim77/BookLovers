'use strict';
import { slider } from "./Helpers/slider.js";
import { timer } from "./Helpers/utils.js";

//! Change Sliders By Clicking 
let btn = document.querySelectorAll('.dot');
btn.forEach(item => {
    item.addEventListener('click', slider.bind(event));
})

//! MenuBar -> mobile, tablet adaptation;
$('.burger-menu').on('click', () => {
    $('body').toggleClass('hide');
    $('#show-menu').toggleClass('active');
})

//!timer -> for Home 
timer();


//!Animataion AOS
AOS.init({
    duration: 700
});


//! changing prifile image
window.onload = getLocalStorage();

localStorage.setItem('user', 'Nasim');
// localStorage.clear();
//!localStorage
function getLocalStorage() {
    // return localStorage.getItem('user');

    let storage = localStorage.getItem('user');
    if (storage) {
        $('header .header-right > a:first-child').html('<img src="https://static.vecteezy.com/system/resources/previews/006/951/976/non_2x/cute-penguin-cartoon-working-in-front-of-a-laptop-animal-technology-icon-illustration-concept-premium-vector.jpg" style="width: 50px; border-radius: 50px;" alt="picture">');
        $('section.log-in-out #login').addClass('hide');
        $('section.log-in-out #register').addClass('hide');
        $('section.success').removeClass('hide');
    } else {
        console.log('No');
    }

}


