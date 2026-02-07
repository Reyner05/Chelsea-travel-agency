function scrollToBooking() {
  document.getElementById("book").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;

  document.getElementById("message").textContent =
    `Thank you, ${name}! Your trip to ${destination} has been received. 🌍`;
});
