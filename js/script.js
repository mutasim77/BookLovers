'use strict';
import { slider } from "./Helpers/slider.js";

//! Change Sliders By Clicking 
let btn = document.querySelectorAll('.dot');
btn.forEach(item => {
    item.addEventListener('click', slider.bind(event));
})

//! MenuBar -> mobile, tablet adaptation;
$('.burger-menu').on('click', () => {
    console.log('Hello');
    $('.burger-menu').addClass('active');
    if ($('.burger-menu').hasClass('active')) {
        $('.nav-list').addClass('show');
    }
})




AOS.init({
    duration: 700
});