# 03-Password-generator

Password Generator for you everyday use!

started off with some html code

```
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Password Generator</title>
    <link rel="stylesheet" href="./Stylee.css" />
</head>

<body>
    <div class="wrapper">
        <header>
            <h1>Password Generator</h1>
        </header>
        <div class="card">
            <div class="card-header">
                <h2>Generate a Password</h2>
            </div>
            <div class="card-body">
                <textarea readonly id="password" placeholder="Your Secure Password" aria-label="Generated Password"></textarea>
            </div>
            <div class="card-footer">
                <button id="generate" class="btn">Generate Password</button>
            </div>
        </div>
    </div>
    <script src="./Scriptt.js"></script>
</body>

</html>
```

which wasnt very hard, we are writing a whole lot to the page on load.

had to add some styling to get the over all product to look like this

![initial pic](./Assets/03-javascript-homework-demo.png)

next was the challenging part of this entire assignmnet,
the javescript.

we started off by declaring our variables,

```
var genBtn = document.querySelector("#generate");
var confirmCharacter = ''
var length = ''
var confirmLowercase = ''
var confirmNumber = ''
var confirmUppercase = ''
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var RanNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var choices = '';
```

which wasnt to hard just took some time.
than we just had to make this giant pile of a function

```
function generatePassword() {
    length = parseInt(prompt("How Long would you like your password? please choose between 8 and 50"));

    if (!length) {
        alert('Please enter a value')

    } else if (length < 8 || length > 50) {
        length = parseInt(prompt("Must choose between 8 and 50"));

    } else {
        confirmNumber = confirm('Would you like numbers in this password?')
        confirmCharacter = confirm('Would you like special charecters in this password?')
        confirmLowercase = confirm("would you like lowercase letters in this password?")
        confirmUppercase = confirm("would you like uppercase letters in this password?")
    };


    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(RanNumber, upperCase, lowerCase);

    } else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(RanNumber, upperCase);

    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(RanNumber, lowerCase);

    } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
        choices = character.concat(upperCase, lowerCase);

    } else if (confirmNumber && confirmUppercase && confirmLowercase) {
        choices = RanNumber.concat(upperCase, lowerCase);

    } else if (confirmCharacter && confirmNumber) {
        choices = character.concat(RanNumber);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperCase);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = RanNumber.concat(upperCase);

    } else if (confirmNumber && confirmLowercase) {
        choices = RanNumber.concat(lowerCase);

    } else if (confirmUppercase && confirmLowercase) {
        choices = upperCase.concat(lowerCase);

    } else if (confirmCharacter) {
        choices = character;

    } else if (confirmNumber) {
        choices = RanNumber;

    } else if (confirmUppercase) {
        choices = upperCase;

    } else if (confirmLowercase) {
        choices = lowerCase;
    }


    var password = [];

    for (var i = 0; i < length; i++) {
        var picked = choices[Math.floor(Math.random() * choices.length)]
        password.push(picked)
    }

    var pw = password.join("");
    Input(pw);
    return pw;
}
```

gave us the final product that you see today!
