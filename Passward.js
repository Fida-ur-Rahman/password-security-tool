function checkPassword() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength");
    const message = document.getElementById("message");

    let strength = 0;

    // Conditions
    const hasLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpper = /[A-Z]/.test(password);

    document.getElementById("length").style.color = hasLength ? "lightgreen" : "white";
    document.getElementById("number").style.color = hasNumber ? "lightgreen" : "white";
    document.getElementById("special").style.color = hasSpecial ? "lightgreen" : "white";
    document.getElementById("upper").style.color = hasUpper ? "lightgreen" : "white";

    if (hasLength) strength += 25;
    if (hasNumber) strength += 25;
    if (hasSpecial) strength += 25;
    if (hasUpper) strength += 25;

    strengthBar.style.width = strength + "%";

    if (strength <= 25) {
        strengthBar.style.background = "red";
        message.innerText = "Weak Password ❌";
    } else if (strength <= 50) {
        strengthBar.style.background = "orange";
        message.innerText = "Medium Password ⚠";
    } else if (strength <= 75) {
        strengthBar.style.background = "yellow";
        message.innerText = "Good Password 👍";
    } else {
        strengthBar.style.background = "green";
        message.innerText = "Strong Password 🔐";
    }
}
