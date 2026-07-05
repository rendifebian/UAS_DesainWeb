// ================================
// NAVBAR SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// ================================
// ANIMASI SECTION
// ================================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach((el) => observer.observe(el));

// ================================
// COUNTER STATISTIK
// ================================

const stats = document.querySelector(".stats");

let counterRunning = false;

const statsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && !counterRunning) {

            counterRunning = true;

            const counters = document.querySelectorAll(".counter");

            counters.forEach(counter => {

                counter.innerText = "0";

                const target = Number(counter.dataset.target);

                let current = 0;

                const step = Math.max(1, Math.ceil(target / 100));

                function updateCounter() {

                    current += step;

                    if (current < target) {

                        counter.innerText = current;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                }

                updateCounter();

            });

        }

        if (!entry.isIntersecting) {

            counterRunning = false;

            document.querySelectorAll(".counter").forEach(counter => {

                counter.innerText = "0";

            });

        }

    });

}, {
    threshold: 0.5
});

statsObserver.observe(stats);

// ================================
// PARALLAX HERO
// ================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";

});

// ================================
// TESTIMONI SLIDER
// ================================

const testimonials = document.querySelectorAll(".testimonial-card");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    testimonials.forEach(card=>card.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    testimonials[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current>=testimonials.length){

        current=0;

    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current<0){

        current=testimonials.length-1;

    }

    showSlide(current);

}

next.onclick=nextSlide;

prev.onclick=prevSlide;

dots.forEach((dot,index)=>{

    dot.onclick=()=>{

        current=index;

        showSlide(current);

    }

});

setInterval(nextSlide,4000);

showSlide(current);
// ================================
// BACK TO TOP
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// ================================
// PROGRESS BAR
// ================================

window.addEventListener("scroll",()=>{

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});
// ================================
// LOADER
// ================================

window.onload=()=>{

    document.getElementById("loader").style.display="none";

};