const password_validation = document.getElementById("password_validation");

function verifyPassword() {
    const password1 = document.getElementById("user_password").value;
    const password2 = document.getElementById("confirm_password").value;

    if(password1 === password2) {
        console.log("match");
        password_validation.classList.add("hidden");
        return true;
    } else {
        password_validation.classList.remove("hidden");
        return false;
    }
}