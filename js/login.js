document.getElementById('button-submit').addEventListener('click', function () {
    //get user email
    const userEmail = document.getElementById('user-email');
    const emailField = userEmail.value;
    //get user pass
    const userPassword = document.getElementById('user-password');
    const passwordField = userPassword.value;
    //check email and pass
    if(emailField == 'abc@gmail.com' && passwordField == 'secret'){
        window.location.href = 'banking.html';
    }
});