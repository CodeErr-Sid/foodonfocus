// cookie js
const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has previously accepted or declined the cookie consent
    var cookieConsentStatus = sessionStorage.getItem("cookieConsentStatus");

    // If the user has not previously accepted or declined the cookie consent, and the preloader animation completes
    if (!cookieConsentStatus) {
        setTimeout(function() {
            document.body.classList.add("preloader-complete");
            document.getElementById("cookieWrapper").style.display = "block"; // Show cookie wrapper
        }, 6000); // Adjust time as needed
    }

    // Get reference to accept and decline buttons
    var acceptBtn = document.getElementById("acceptBtn");
    var declineBtn = document.getElementById("declineBtn");

    // Add event listener to accept button
    acceptBtn.addEventListener("click", function() {
        document.getElementById("cookieWrapper").style.display = "none"; // Hide cookie wrapper
        sessionStorage.setItem("cookieConsentStatus", "accepted"); // Set consent status to accepted
    });

    // Add event listener to decline button
    declineBtn.addEventListener("click", function() {
        document.getElementById("cookieWrapper").style.display = "none"; // Hide cookie wrapper
        sessionStorage.setItem("cookieConsentStatus", "declined"); // Set consent status to declined
    });
});

// Clear sessionStorage when leaving the page
window.addEventListener("unload", function() {
    sessionStorage.removeItem("cookieConsentStatus");
});


   // Function to check and show the popup only once
   function showPopupOnce() {
    var popupDisplayed = getCookie("popupDisplayed");
    if (!popupDisplayed) {
        $("#popup").show();
        setCookie("popupDisplayed", true, 1); // Set cookie to expire in 1 day
    }
}
});

// Function to set cookie
function setCookie(name, value, days) {
var expires = "";
if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
}
document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie
function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
}
return null;
}