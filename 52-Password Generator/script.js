function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars = "";

    if (uppercase) {
        allChars += uppercaseChars;
    }
    if (lowercase) {
        allChars += lowercaseChars;
    }
    if (numbers) {
        allChars += numberChars;
    }
    if (special) {
        allChars += specialChars;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    document.getElementById("password").innerText = password;
}
