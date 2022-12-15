'use strict';
import { slider } from "./Helpers/slider.js";

//! Change Sliders By Clicking 
let btn = document.querySelectorAll('.dot');
btn.forEach(item => {
    item.addEventListener('click', slider.bind(event));
})

//! MenuBar -> mobile, tablet adaptation;
$('.burger-menu').on('click', () => {
    $('#show-menu').toggleClass('active');
})


//!Animataion AOS
AOS.init({
    duration: 700
});