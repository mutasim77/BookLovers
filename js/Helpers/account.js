//! login page
$('#have-account').on('click', () => {
    $('#register').addClass('hide');
    $('#login').removeClass('hide');
    $('.error').addClass('hide');
});

//! registration page
$('#create-account').on('click', () => {
    $('#register').removeClass('hide');
    $('#login').addClass('hide');
    $('.error').addClass('hide');
});

//! registration 
document.querySelector('#log-out').addEventListener('click', () => {
    let regUsername = $('#reg-username').css('borderColor');
    let regEmail = $('#reg-email').css('borderColor');
    let regPass = $('#reg-password').css('borderColor');
    if (regPass == 'rgb(228, 41, 41)' || regEmail == 'rgb(228, 41, 41)' || regUsername == 'rgb(228, 41, 41)') {
        $('.error').removeClass('hide');
    } else {
        successRegistare();
        $('.error').addClass('hide');
        $('#register').addClass('hide');
        $('#login').removeClass('hide');
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


//! sucessfully registration 
function successRegistare() {
    swal({
        title: `${$('#reg-username').val()}`,
        text: `You registered successfully 🤞🏻`,
        icon: "success",
    });
}




//! save to localstorage 
// localStorage.setItem();
// localStorage.getItem();