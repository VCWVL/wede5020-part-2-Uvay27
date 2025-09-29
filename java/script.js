 // Welcome alert (only shows on Home page)
if (document.title.includes("Home")) {
  alert("Welcome to Checkpoint Gaming!");
}

// Show current date in footer
document.addEventListener("DOMContentLoaded", function() {
  let dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.innerHTML = "Today's Date: " + new Date().toDateString();
  }
});

// Contact form alert
function showMessage() {
  alert("Thank you! Your message has been sent.");
  return false; // prevent actual submission
}

// Products page - Add to cart alert
function addToCart(product) {
  alert(product + " has been added to your cart!");
}

// Cart page - Checkout
function checkout() {
  alert("Proceeding to checkout...");
}

// Function to show a random gaming tip
function showTip() {
  // List of gaming tips
  var tips = [
    "Remember to take breaks while gaming!",
    "Stay hydrated during long gaming sessions.",
    "Adjust your screen brightness to reduce eye strain.",
    "Use a comfortable chair to support your back.",
    "Keep your hands relaxed to avoid fatigue."
  ];

  // Pick a random tip
  var randomIndex = Math.floor(Math.random() * tips.length);

  // Show it in an alert
  alert(tips[randomIndex]);
}

// Function to show current date in the footer
function showDate() {
  var today = new Date();
  var dateString = today.toDateString(); // Example: Mon Sep 29 2025
  document.getElementById("date").textContent = "Today's date: " + dateString;
}

// Run showDate() when the page loads
window.onload = showDate;
