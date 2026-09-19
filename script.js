/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "✕";
  } else {
    menuBtn.innerHTML = "☰";
  }
});


/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* ==========================================
   BOOKING FORM
========================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;
  const selectedPackage = document.getElementById("packageSelect").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !date) {
    alert("Please enter your name, phone number and travel date.");
    return;
  }

  const whatsappMessage =
`Hello Tanoj Travel Agency! 🌴

I am interested in your Kerala tour package.

Name: ${name}
Phone: ${phone}
Travel Date: ${date}
People: ${people || "Not specified"}
Package: ${selectedPackage}

Message:
${message || "No additional message"}

Please share the complete details. Thank you!`;

  const whatsappURL =
    "https://wa.me/919390355758?text=" + encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
});


/* ==========================================
   SET MINIMUM TRAVEL DATE
========================================== */

const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;


/* ==========================================
   SIMPLE IMAGE FALLBACK
========================================== */

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.background = "#dfeee2";
    img.alt = "Kerala Travel";
  });
});
