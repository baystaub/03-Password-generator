// Assignment Code
var genBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmopqrstuvwxyz";
var special = "!@#$%^&*<>?/";
var RanNumber = "1234567890";
var password = "";
var passwordreset = document.querySelector("#password");

genBtn.addEventListener("click", function(event) {
    event.preventDefault()
    passwordreset = "";
    password = "";
    var length = 0
    length = prompt("how long would you like your password from 8-25?")
    if (length >= 8, length <= 25) {
        password.length = length;
        var lowerQ = confirm("would you like lower cases in your password?");
        console.log(lowerQ)
        var upperQ = confirm("would you like upper casses in your password?");
        console.log(upperQ)
        var specialQ = confirm("would you like special charecters in your password?")
        console.log(specialQ)
        var numberQ = confirm("would you like numbers in your password?");
        console.log(numberQ)
    } else {
        alert("please pick a number within the range!")
    }

    if (lowerQ === true); {
        password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length - 1)));
        console.log(password)
    }

    if (upperQ === true); {
        password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
        console.log(password)
    }

    if (specialQ === true); {
        password = password + special.charAt(Math.floor(Math.random() * Math.floor(special.length)));
        console.log(password)
    }

    if (upperQ === true); {
        password = password + RanNumber.charAt(Math.floor(Math.random() * Math.floor(RanNumber.length)));
        console.log(password)
    }


    passwordreset = password
})