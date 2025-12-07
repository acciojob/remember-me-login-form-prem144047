//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // Check if saved credentials exist
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    // If credentials exist → show "Login as existing user"
    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    }

    // Submit button → Login
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        let user = usernameInput.value;
        let pass = passwordInput.value;

        alert(`Logged in as ${user}`);

        if (checkbox.checked) {
            localStorage.setItem("username", user);
            localStorage.setItem("password", pass);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    // Login as existing user
    existingBtn.addEventListener("click", function() {
        alert(`Logged in as ${localStorage.getItem("username")}`);
    });

});