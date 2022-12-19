$('#have-account').on('click', () => {
    $('#register').addClass('hide');
    $('#login').removeClass('hide');
    $('.error').addClass('hide');
});

$('#create-account').on('click', () => {
    $('#register').removeClass('hide');
    $('#login').addClass('hide');
    $('.error').addClass('hide');
});

//! registration 
document.querySelector('#log-out').addEventListener('click', () => {
    let regUsername = $('#reg-username').val();
    let regEmail = $('#reg-email').val();
    let regPass = $('#reg-password').val();

    if (!regPass || !regEmail || !regUsername) {
        $('.error').removeClass('hide');
    } else {
        $('.error').addClass('hide');

        //backend
    }

});

//! login in
document.querySelector('#log-in').addEventListener('click', () => {
    let logUsername = $('#log-username').val();
    let logPassword = $('#log-password').val();

    if (!logUsername || !logPassword) {
        $('.error').removeClass('hide');
    } else {
        $('.error').addClass('hide');
        $('.login').addClass('hide');

        $('.success').removeClass('hide');
    }

});