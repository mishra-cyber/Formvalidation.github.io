$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var user_err = true;
    var email_err = false;
    var password_err = false;
    var confirm_password_err = false;

    $('#username').focusout(function(){
        check_user();
    });

    $("#email").focusout(function(){
        check_email();
    });

    $("#password").focusout(function(){
        check_pass();
    });

    $("#confirmpassword").focusout(function(){
        check_conpass();
    });

    function check_user(){
        var user = $('#username').val();
        if(user.length == ''){
            $('#usernamevalidation').show();
            $('#username').css('border', '2px solid #F90A0A');
            $('#usernamevalidation').html('Please fill out the field!');
            user_err = false;
            return false;
        }
        else if(user.length < 4) {
            $('#usernamevalidation').show();
            $('#username').css('border', '2px solid #F90A0A');
            $('#usernamevalidation').html('Username must be of length greater than 4!');
            user_err = false;
            return false;
        }
        
        else {
            $('#username').css('border', '2px solid #34F458');
            $('#usernamevalidation').hide();
        }
    }

   function check_email(){
        var pattern1 = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,4})$/;
        var email = $('#email').val();
        if(pattern1.test(email)){
            $('#email').css('border', '2px solid #34F458');
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#email').css('border', '2px solid #F90A0A');
            $('#emailvalidation').html('Please enter email in xyz@abc.pqr format!');
            email_err = false;
            return false;
        }
    }

    function check_pass(){
        var pattern2 = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var password = $('#password').val();
        if(pattern2.test(password)){
            $('#password').css('border', '2px solid #34F458');
            $('#passwordvalidation').hide();
        }
        else{
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password must contain 8 characters and at least 1 number, 1 uppercase letter, 1 lowercase letter and 1 unique character!');
            $('#password').css('border', '2px solid #F90A0A');
            password_err = false;
            return false;
        }
    }

    function check_conpass(){
        var con_pass = $('#confirmpassword').val();
        var password1 = $('#password').val();
        if(con_pass == '' || password1 != con_pass){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match!');
            $('#confirmpassword').css('border', '2px solid #F90A0A');
            confirm_password_err = false;
            return false;
        }
        else{
            $('#confirmpassword').css('border', '2px solid #34F458');
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#validate_submit').click(function(){
        check_user();
        check_email();
        check_pass();
        check_conpass();

        if(user_err == true && email_err == true && password_err == true && confirm_password_err == true){
            alert('Registration Successful!');
            return true;
        }
        else{
            alert('Please fill the form correctly!');
            return false;
        }
    });
});
