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
        let username = $('#reg-username').val();
        let email = $('#reg-email').val();
        let password = $('#reg-password').val();
        registratration(username, email, password);

    }
});

//! login in
document.querySelector('#log-in').addEventListener('click', () => {
    let logUsername = $('#log-username').val();
    let logPassword = $('#log-password').val();

    if (!logUsername || !logPassword) {
        $('.error').removeClass('hide');
    } else {
        login(logUsername, logPassword);

    }
});


//!Insert Data in DB
function registratration(username, email, password) {
    $.ajax({
        url: '../php/registration.php',
        type: 'POST',
        data: {
            username: username,
            email: email,
            password: password
        },
        success: function (result) {
            if (result.replace(/\s/g, '') === "Success!") {
                successRegistare();
                $('.error').addClass('hide');
                $('#register').addClass('hide');
                $('#login').removeClass('hide');
            } else {
                console.log(result + " ERROR!");
            }
        }
    });
}

//!Select Data from DB
function login(uname, pass) {
    $.ajax({
        url: '../php/login.php',
        type: 'POST',
        data: { username: uname, password: pass },
        success: function (result) {
            if (result == "Success!") {
                setTimeout(() => {
                    $('.error').addClass('hide');
                    $('.login').addClass('hide');
                    $('.success').removeClass('hide');
                    $('.success .name').text(uname);
                    $('header .header-right > a:first-child').html('<img src="https://static.vecteezy.com/system/resources/previews/006/951/976/non_2x/cute-penguin-cartoon-working-in-front-of-a-laptop-animal-technology-icon-illustration-concept-premium-vector.jpg" style="width: 50px; border-radius: 50px;" alt="picture">');
                    localStorage.setItem('user', uname);
                }, 1000)
            } else {
                setTimeout(() => {
                    $('.error').removeClass('hide');
                }, 1000)
            }
        }
    });
}

//! sucessfully registration 
function successRegistare() {
    swal({
        title: `${$('#reg-username').val()}`,
        text: `You registered successfully 👍`,
        icon: "success",
    });
}

//! Log out
$('section.success button').on('click', () => {
    localStorage.clear();
    $('#login').removeClass('hide');
    $('.success').addClass('hide');
});

//! save to localstorage 
// localStorage.setItem();
// localStorage.getItem();