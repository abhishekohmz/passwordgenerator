
function checkPasswordStrength() {
    var password = document.getElementById("passwordInput").value;
    var message = document.getElementById("strengthIndicator");

    var strength = 0;

    if (password.length >= 8) strength += 1;


    if (/[A-Z]/.test(password)) strength += 1;


    if (/[a-z]/.test(password)) strength += 1;


    if (/\d/.test(password)) strength += 1;


    if (/[@#$%^&*()_+!]/.test(password)) strength += 1;

    if (strength < 3) {
        message.textContent = "Weak";
        message.style.color = "white";
        message.style.backgroundColor = 'red'
        message.style.borderRadius = '5px'
        message.style.padding = '10px'
    } else if (strength >= 3 && strength < 5) {
        message.textContent = "Medium";
        message.style.color = "white";
        message.style.backgroundColor = 'orange'
        message.style.borderRadius = '5px'
        message.style.padding = '10px'
    } else {
        message.textContent = "Strong";
        message.style.color = "white";
        message.style.backgroundColor = 'green'
        message.style.borderRadius = '5px'
        message.style.padding = '10px'
        


    }
   
   
}

function generatePassword(){
    let a='abcdefghijklmnopqrstuvwxyz'
    let password=[]


    for(i=0;i<12;i++){
        let newPass=Math.floor(Math.random()* a.length)
        password+=a[newPass]
        
    }
    
    password=addUpperLetter(password)
    
    password=addChar(password)
    password=addChar(password)
    password=addUpperLetter(password)
    password=addUpperLetter(password)
    password=addNum(password)

    document.getElementById("passwordInput").value=password

    checkPasswordStrength()
}

function addUpperLetter(str) {
    let letters = ['A','G','G','K','L']
    let ch = letters[Math.floor(Math.random()* 5)]
    let position=Math.floor(Math.random()* 11)
    return str.substring(0, position) + ch + str.substring(position);
}

function addChar(str) {
    let letters = ['@','-','=','+','%']
    let ch = letters[Math.floor(Math.random()* 5)]
    let position=Math.floor(Math.random()* 11)
    return str.substring(0, position) + ch + str.substring(position);
}

function addNum(str){
    let letters = [1,2,3,4,5,6,7,8,9,0]
    let ch = letters[Math.floor(Math.random()* 9)]
    let position=Math.floor(Math.random()* 11)
    return str.substring(0, position) + ch + str.substring(position);
}






