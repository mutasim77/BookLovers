export function slider(event) {
    // event.target.style.backgroundColor = '#ccc';
    document.querySelectorAll('.dot').forEach(i => i.style.backgroundColor = '#ccc');
    let data = (event.target).getAttribute('data-set');
    let section = $('section.slider');
    if (data == 1) {
        $("section.slider h1").css({ "opacity": '0' });
        $('section.slider p').css({ "opacity": '0' });
        $('section.slider button').css({ "opacity": '0' });
        setTimeout(() => {
            event.target.style.backgroundColor = '#f65d4e';
            $("section.slider h1").animate({ opacity: '1' }, 'slow');
            $("section.slider p").animate({ opacity: '1' }, 'slow');
            $("section.slider button").animate({ opacity: '1' }, 'slow');
            section.css('background', 'url("/img/slider1.png")')
            section.css('backgroundSize', 'cover');
        }, 1000)
        setTimeout(() => {
            $('section.slider h1').html('Christmas Pop Up Book Gift Ideas');
            $('section.slider p').html('Find the perfect gift for everyone on your list');
        }, 1000)
    } else {
        $("section.slider h1").css({ "opacity": '0' });
        $('section.slider p').css({ "opacity": '0' });
        $('section.slider button').css({ "opacity": '0' });
        setTimeout(() => {
            event.target.style.backgroundColor = '#f65d4e';
            $("section.slider h1").animate({ opacity: '1' }, 'slow');
            $("section.slider p").animate({ opacity: '1' }, 'slow');
            $("section.slider button").animate({ opacity: '1' }, 'slow');
            section.css('background', 'url("/img/slider2.png")')
            section.css('backgroundSize', 'cover');
        }, 1000)
        setTimeout(() => {
            $('section.slider h1').html('Reading is for <br> all Ages');
            $('section.slider p').html('Buy your Books in a Store');
        }, 1000)
    }
}
