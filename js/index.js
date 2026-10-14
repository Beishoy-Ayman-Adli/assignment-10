const themeBtn = document.getElementById("theme-toggle-button");

themeBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});
/** hero */
const sidebar = document.getElementById("settings-sidebar");
const gearBtn = document.getElementById("settings-toggle");
const closeBtn = document.getElementById("close-settings");
const resetBtn = document.getElementById("reset-settings");
const fontButtons = document.querySelectorAll(".font-option");
const colorsGrid = document.getElementById("theme-colors-grid");


gearBtn.addEventListener("click", function () {
  sidebar.classList.remove("translate-x-full");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
});


fontButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.body.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
    document.body.classList.add("font-" + btn.dataset.font);

    fontButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});


const colors = [
  { primary: "#0ea5e9", secondary: "#06b6d4", accent: "#38bdf8" },   
  { primary: "#0BA876", secondary: "#059669", accent: "#34d399" },  
  { primary: "#F35E56", secondary: "#e11d48", accent: "#fb7185" }, 
  { primary: "#6366f1", secondary: "#4f46e5", accent: "#818cf8" },   
  { primary: "#F07E0B", secondary: "#ea580c", accent: "#fb923c" },
  { primary: "#ef4444", secondary: "#dc2626", accent: "#f87171" }, 
];

colors.forEach(function (color) {
  const dot = document.createElement("button");
  dot.className = "rounded-full";
  dot.style.width = "48px";
  dot.style.height = "48px";
  dot.style.backgroundColor = color.primary;

  dot.addEventListener("click", function () {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", color.primary);
    root.style.setProperty("--color-secondary", color.secondary);
    root.style.setProperty("--color-accent", color.accent);
  });
  colorsGrid.appendChild(dot);
});



resetBtn.addEventListener("click", function () {
  document.body.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
  document.body.classList.add("font-tajawal");

  fontButtons.forEach(function (b) {
    b.classList.remove("active");
  });
  document.querySelector('[data-font="tajawal"]').classList.add("active");

  document.documentElement.style.setProperty("--color-primary", "#6366f1");
});



/**السكشن الرابع */
 
const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

const activeClasses = ["bg-linear-to-r", "from-primary", "to-secondary", "text-white"];
const inactiveClasses = ["bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "border", "border-slate-300", "dark:border-slate-700"];


filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const selected = btn.dataset.filter;

    portfolioItems.forEach(function (item) {
      if (selected === "all" || item.dataset.category === selected) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

      filterButtons.forEach(function (b) {
      b.classList.remove(...activeClasses);
      b.classList.add(...inactiveClasses);
    });

    btn.classList.remove(...inactiveClasses);
    btn.classList.add(...activeClasses);
  });
});
 


/**السكشن اللي بعدو */

const carousel = document.getElementById("testimonials-carousel");
let cards = document.querySelectorAll(".testimonial-card");

const next = document.getElementById("next-testimonial");
const prev = document.getElementById("prev-testimonial");
const carouselButtons = document.querySelectorAll(".carousel-indicator");

let currentIndex = 0;
const maxIndex = cards.length - 3;

next.addEventListener("click", function () {
  if (currentIndex >= maxIndex) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  carousel.style.transform = "translateX(" + (currentIndex * cards[0].offsetWidth) + "px)";
});

prev.addEventListener("click", function () {
  if (currentIndex <= 0) {
    currentIndex = maxIndex;
  } else {
    currentIndex = currentIndex - 1;
  }
  carousel.style.transform = "translateX(" + (currentIndex * cards[0].offsetWidth) + "px)";
});

