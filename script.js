// ===== VARIABLES SECTION =====

// const variable (cannot change)
const userName = "Madhulatha";

// let variables (can change)
let userRole = "Viewer";
let loginCount = 1;

// Display values in console (Mandatory)
console.log("User Name:", userName);
console.log("User Role:", userRole);
console.log("Login Count:", loginCount);

// Try to change const (Test case)
// This will show error in console (Expected behavior)
try {
    userName = "New Name";
} catch (error) {
    console.log("Const cannot be reassigned:", error.message);
}

// Display values in webpage (DOM)
document.getElementById("userName").innerHTML =
    "User Name : " + userName;

document.getElementById("userRole").innerHTML =
    "Role : " + userRole;

document.getElementById("loginCount").innerHTML =
    "Login Count : " + loginCount;
// Function to increase login count
function increaseLogin() {
    loginCount = loginCount + 1;   // reassignment using let
    document.getElementById("loginCount").innerHTML =
        "Login Count : " + loginCount;

    console.log("Updated Login Count:", loginCount);
}

// Function to change role
function changeRole() {
    if (userRole === "Viewer") {
        userRole = "Admin";
    } else {
        userRole = "Viewer";
    }

    document.getElementById("userRole").innerHTML =
        "Role : " + userRole;

    console.log("Updated Role:", userRole);
}
// Function Declaration
function updateWelcome() {
    let name = document.getElementById("nameInput").value;

    let message = generateMessage(name); // calling reusable function

    document.getElementById("welcomeMsg").innerHTML = message;
}
// Function with parameter + return value
function generateMessage(name) {
    if (name === "") {
        return "Welcome to Instagram";
    }
    return "Welcome " + name + " 😊";
}
// Function Expression
const passwordStrength = function(password) {
    if (password.length < 5) {
        return "Weak Password ❌";
    } else if (password.length < 8) {
        return "Medium Password ⚠";
    } else {
        return "Strong Password ✅";
    }
};
// Arrow Function (Reusable)
const showResult = (text) => {
    document.getElementById("result").innerHTML = text;
};
function checkPassword() {
    let pass = document.getElementById("passInput").value;

    let strength = passwordStrength(pass); // using function expression
    showResult(strength);                  // using arrow function

    console.log("Password Checked:", strength);
}
// ===== OBJECT SECTION =====

// Create object (Real world entity)
let userProfile = {
    name: "Madhulatha",
    followers: 120,
    accountStatus: "Active"
};

// Console log object (Test case)
console.log("User Object:", userProfile);
function showProfile() {

    // Dot notation access
    let name = userProfile.name;
    let followers = userProfile.followers;

    // Bracket notation access
    let status = userProfile["accountStatus"];

    document.getElementById("profileData").innerHTML =
        "Name: " + name +
        "<br>Followers: " + followers +
        "<br>Status: " + status;

    console.log("Profile displayed");
}
function updateFollowers() {
    userProfile.followers = userProfile.followers + 1; // property update

    console.log("Followers updated:", userProfile.followers);
    showProfile(); // reuse function
}
function changeStatus() {
    if (userProfile.accountStatus === "Active") {
        userProfile.accountStatus = "Private";
    } else {
        userProfile.accountStatus = "Active";
    }

    console.log("Status changed:", userProfile.accountStatus);
    showProfile(); // reuse function
}
function welcomeUser() {
    let username = prompt("Enter your name:");

    if (username !== null && username !== "") {
        document.getElementById("popupResult").innerHTML =
            "Hello " + username + " 👋 Welcome to Instagram";
    } else {
        document.getElementById("popupResult").innerHTML =
            "User cancelled input";
    }
}
function confirmUpdate() {
    let decision = confirm("Do you want to make your account Private?");

    if (decision) {
        userProfile.accountStatus = "Private";
        document.getElementById("popupResult").innerHTML =
            "Account changed to Private 🔒";
    } else {
        document.getElementById("popupResult").innerHTML =
            "No changes made ❌";
    }
}
function showAlert() { 
    alert("This is an alert box! ⚠");
    document.getElementById("popupResult").innerHTML =
        "Alert was shown to the user.";
}
// ========= EVENTS & EVENT LISTENERS =========

// 1️⃣ CLICK EVENT → modify content
document.getElementById("eventBtn").addEventListener("click", function () {
    document.getElementById("eventText").innerHTML =
        "Button Clicked 🎉";
});

// 2️⃣ INPUT EVENT → live typing preview
document.getElementById("liveInput").addEventListener("input", function () {
    let text = document.getElementById("liveInput").value;
    document.getElementById("liveOutput").innerHTML =
        "You are typing: " + text;
});

// 3️⃣ MOUSEOVER EVENT → modify style
document.getElementById("instaLogo").addEventListener("mouseover", function () {
    document.getElementById("instaLogo").style.transform = "scale(1.3)";
});

// Mouse leave → return normal size
document.getElementById("instaLogo").addEventListener("mouseout", function () {
    document.getElementById("instaLogo").style.transform = "scale(1)";
});

