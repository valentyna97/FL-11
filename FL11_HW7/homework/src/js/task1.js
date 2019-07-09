let emailValue= '';
let passwordValue= '';
let output = prompt('Please enter your e-mail:', emailValue );
const numLength = 6;
const numLengthPass = 5;
if (output === null || output === ''){
    alert('Canceled');
}else if (output.length < numLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
}else if( output === 'user@gmail.com' ) {
    let outputPassword = prompt('Please enter your password:', passwordValue);
    if(outputPassword === null || outputPassword === ''){
        alert('Canceled');
    }else if(outputPassword === 'UserPass'){
        let password = confirm('Do you want to change your password?');
            if(password === false){
                alert('You have failed the change.');
            } else{
                passwordValue = prompt('Please enter your password:', '');
                if(outputPassword === passwordValue){
                    let changePasswordAdm = prompt('Enter a new password', '');
                    if(changePasswordAdm.length < numLengthPass){
                        alert('It\'s too short password. Sorry.');
                    }else {
                        let rePasswordAdmn = prompt('Re-password', '');
                        if (changePasswordAdm === rePasswordAdmn) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }else{
                    alert('Wrong password');
                }
            }
    }else{
        alert('Wrong password');
    }
}else if(output === 'admin@gmail.com'){
    let outputPassword = prompt('Please enter your password:', passwordValue);
    if(outputPassword === null || outputPassword === ''){
        alert('Canceled');
    }else if(outputPassword === 'AdminPass') {
        let password = confirm('Do you want to change your password?');
        if(password === false){
            alert('You have failed the change.');
        } else{
            passwordValue = prompt('Please enter your password:','');
            if(outputPassword === passwordValue){
                let changePassword = prompt('Enter a new password', '');
                if(changePassword.length < numLengthPass){
                    alert('It\'s too short password. Sorry.');
                }else {
                    let rePassword = prompt('Re-password', '');
                    if (changePassword === rePassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }else{
                alert('Wrong password');
            }
        }
    }else{
        alert('Wrong password');
    }
}else {
    alert('I don\'t know you');
}

 