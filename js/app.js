const header = document.querySelector('header');
let body = document.querySelector("body");
let toggle = document.querySelector(".toggle-btn");

/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);

/* --------------- Reveal Animation --------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: '60px',
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        toggle.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    } else {
        document.body.classList.remove("dark");
        toggle.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }

}

toggle.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* --------------- Open & Close Navbar Menu --------------- */


