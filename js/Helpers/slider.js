//! Change Sliders By Clicking 
let btn = document.querySelectorAll('.dot');
btn.forEach(item => {
    item.addEventListener('click', slider.bind(event));
})

function slider(event) {
    document.querySelectorAll('.dot').forEach(i => i.style.backgroundColor = '#ccc');
    let data = (event.target).getAttribute('data-set');
    let section = $('section.slider');
    if (data == 1) {
        $("section.slider h1").css({ "opacity": '0' });
        $('section.slider p').css({ "opacity": '0' });
        $('section.slider a').css({ "opacity": '0' });
        setTimeout(() => {
            event.target.style.backgroundColor = '#f65d4e';
            $("section.slider h1").animate({ opacity: '1' }, 'slow');
            $("section.slider p").animate({ opacity: '1' }, 'slow');
            $("section.slider a").animate({ opacity: '1' }, 'slow');
            section.css('background', 'url("../img/slider1.png")')
            // section.css('background', 'red')
            section.css('backgroundSize', 'cover');
        }, 1000)
        setTimeout(() => {
            $('section.slider h1').html('Christmas Pop Up Book Gift Ideas');
            $('section.slider p').html('Find the perfect gift for everyone on your list');
        }, 1000)
    } else {
        $("section.slider h1").css({ "opacity": '0' });
        $('section.slider p').css({ "opacity": '0' });
        $('section.slider a').css({ "opacity": '0' });
        setTimeout(() => {
            event.target.style.backgroundColor = '#f65d4e';
            $("section.slider h1").animate({ opacity: '1' }, 'slow');
            $("section.slider p").animate({ opacity: '1' }, 'slow');
            $("section.slider a").animate({ opacity: '1' }, 'slow');
            section.css('background', 'url("../img/slider2.png")')
            section.css('backgroundSize', 'cover');
        }, 1000)
        setTimeout(() => {
            $('section.slider h1').html('Reading is for <br> all Ages');
            $('section.slider p').html('Buy your Books in a Store');
        }, 1000)
    }
}
