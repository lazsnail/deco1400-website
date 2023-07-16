// Global variables
var password = "45833553" // Password for station.html ;)
var count = 0
var opened_menu = false;

// Initialise menu form to no be displayed
document.getElementById("menu-form").style.display = "none"

// Create image slideshow
if (document.getElementById("station-1") != null) {
    var slider = tns({
        container: ".tiny-slider",
        controlsPosition: "bottom",
        nav: true,
        navPosition: "bottom",
        autoplayButtonOutput: false,
        items: 1,
        slideBy: "page",
    });
}

// Open navigation menu on click
function openForm() {
    var index_menu = document.getElementById("index-menu")
    if (opened_menu == false && index_menu != null) {
        // Pause animation on home page menu icon
        index_menu.style.animationPlayState = 'paused'
        opened_menu = true;
    }
    // If the menu form is closed, open it
    if (document.getElementById("menu-form").style.display == "none") {
        document.getElementById("menu-form").style.display = "block"
    }
    // If the menu form is open, close it
    else {
        document.getElementById("menu-form").style.display = "none"
    }
}

function closeForm() {
    document.getElementById("menu-form").style.display = "none";
}

// Function to determine if input date is available
function compareDates(input, label) {
    var dateEntered = new Date(input);
    const cutoff = new Date('2021-06-21');

    // Update labels accordingly
    if (dateEntered < cutoff) {
        label.style.color = "red"
        label.innerHTML = "Room is not available"
    }
    else {
        label.style.color = "green"
        label.innerHTML = "Room is available"
    }
}

// Listeners for change on date input
if (document.getElementById("date1") != null) {
    document.getElementById("date1").addEventListener("change", function() {
        var input = this.value;
        var label = document.getElementById("av1")
        compareDates(input, label);
    });

    document.getElementById("date2").addEventListener("change", function() {
        var input = this.value;
        var label = document.getElementById("av2")
        compareDates(input, label);
    });
    
    document.getElementById("date3").addEventListener("change", function() {
        var input = this.value;
        var label = document.getElementById("av3")
        compareDates(input, label);
    });
}

// Sets the backgrounds of all the keys to white
function clearKeys() {
    var x = document.getElementsByClassName('key')
    var i;
    // Iterate over all keys
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
    }
}

// Checks if user is inputting the password in correct order
function passwordCheck(value) {
    if (password.charAt(count) == value) {
        // Correct input
        clearKeys();
        document.getElementById("key_" + value).style.backgroundColor = "green"
        if (count == password.length - 1) {
            // Access granted
            console.log("access granted")
            document.getElementById("lock-screen").style.display = "none"
            document.getElementById("access-screen").style.display = "flex"
        }
        count += 1 // Move to next number in password
    }
    else {
        // Incorrect input
        clearKeys();
        document.getElementById("key_" + value).style.backgroundColor = "red"
        count = 0 // Go back to start of password
    }
}

function submitEmail() {
    input = document.getElementById("email").value
    if (input.includes("@")) {
        document.getElementById("valid-email").innerHTML = "Thanks for subscribing"
    }
    else {
        document.getElementById("valid-email").innerHTML = "Invalid email address"
    }
    document.getElementById("email").value = ''
}
