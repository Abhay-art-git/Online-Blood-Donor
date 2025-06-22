document.addEventListener("DOMContentLoaded", () => {
const toggle = document.getElementById("darkToggle");

// Utility: Select all elements affected by dark mode
const darkElements = () =>
document.querySelectorAll("body, nav, footer, input, select, textarea, table");

// Apply dark mode from localStorage
if (localStorage.getItem("dark") === "true") {
document.body.classList.add("dark-mode");
darkElements().forEach(el => el.classList.add("dark-mode"));
}

// Toggle dark mode on button click
toggle?.addEventListener("click", () => {
const isDark = document.body.classList.toggle("dark-mode");
darkElements().forEach(el => el.classList.toggle("dark-mode"));
localStorage.setItem("dark", isDark);
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.backgroundColor = "#dc3545";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
scrollBtn.style.display = "block";
} else {
scrollBtn.style.display = "none";
}
});

scrollBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Animate fade-in on page load
document.querySelectorAll(".container, h1, h2, form, table").forEach(el => {
el.classList.add("fade-in");
});

// Optional: Basic input validation styling
document.querySelectorAll("input, textarea, select").forEach(input => {
input.addEventListener("blur", () => {
if (input.value.trim() !== "") {
input.style.borderColor = "#28a745";
} else {
input.style.borderColor = "#dc3545";
}
});
});
});
