const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    form.reset();
  });
}
