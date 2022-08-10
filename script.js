let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password"); 

function generatePassword(len) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "0123456789"
    const symbol = "`~!@#$%^&*()_-=+/.,<>:;'[]{}"
    const curr = "∆˙ƒ∂œ∑´®†¥¨ˆøåß∂ƒ©¬π“‘…æ÷≥≤¡™£¢∞§¶•˚"

    const data = lowerCase + upperCase + number + symbol + curr
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}