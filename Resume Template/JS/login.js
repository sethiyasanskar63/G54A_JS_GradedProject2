let username;
let password;
function getCredentials() {

    /* storing username and passwords into local storage */
    localStorage.setItem("admin", "admin");

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    checkCredentials(username, password)

}

/* Function to check the crenditials */
function checkCredentials(user_name, passwords) {

    if (passwords == localStorage.getItem(user_name)) {

        window.open("resume.html", "_self")
    }
    else {

        document.getElementById("msg").innerHTML = "Invalid username/password";
    }
}