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