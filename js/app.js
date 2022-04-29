/* --------------- Grab elements from DOM --------------- */

const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skill svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const links = document.querySelectorAll('.nav-link');

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) skillsCounter();
    if (!mlPlayed) mlCounters();
});


let body = document.querySelector("body");
let toggle = document.querySelector(".toggle-btn");


function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

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

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}


let skillsPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = parseInt(counter.dataset.target);
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}

skillsCounter();

/* --------------- Services Counter Animation --------------- */

let mlPlayed = false;

function mlCounters() {
    if (!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach(ctr => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target);
        }, 400);
    });
}

mlCounters();

/* --------------- Portfolio Filter Animation --------------- */

let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    }, animation: {
        duration: 500,
    }
});

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    }).filter(sct => sct.y <= 0);

    let currSectionID = passedSections.at(-1).id;
    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

activeLink()


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


