document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your feedback, " + document.getElementById("name").value + "!");
    form.reset();
  });
});
