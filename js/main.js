 AOS.init();



 document.addEventListener("DOMContentLoaded", function () {
     const hiddenItems = document.querySelector(".hidden-items");
     const toggleBtn = document.getElementById("toggleBtn");

     // Ensure hidden items are initially hidden
     hiddenItems.style.display = "none";

     toggleBtn.addEventListener("click", function () {
         if (hiddenItems.style.display === "none" || hiddenItems.style.display === "") {
             hiddenItems.style.display = "contents"; // Show items properly in grid
             // hiddenItems.style.gridTemplateColumns = "repeat(2, 1fr)"; // Corrected syntax
             toggleBtn.textContent = "Show Less";
         } else {
             hiddenItems.style.display = "none"; // Hide items
             toggleBtn.textContent = "Show More";
         }
     });
 });



 $(document).ready(function () {
     $("#owl-demo2").owlCarousel({
         loop: true, // Enable infinite looping
         margin: 10,
         dots: false,
         nav: false,
         navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right-long'></i>"],
         animateOut: 'fadeOut',
         autoplay: true, // Enable autoplay
         autoplayTimeout: 3000, // Change slide every 3 seconds
         autoplayHoverPause: false, // Prevent pause on hover
         smartSpeed: 3000, // Smooth transition speed
         responsive: {
             0: {
                 items: 1
             },
             600: {
                 items: 1
             },
             1000: {
                 items: 1
             }
         }
     });

     // Force autoplay in case of conflicts
     setTimeout(function () {
         $("#owl-demo2").trigger('play.owl.autoplay', [3000]);
     }, 1000);
 });



 $(document).ready(function () {
     $(".pricing-carousel").owlCarousel({
         items: 1,
         loop: true,
         autoplay: false, // ✅ Autoplay disabled
         nav: false,
         dots: false,
         smartSpeed: 800,
         margin: 30
     });
 });





 gsap.registerPlugin(ScrollTrigger);

 // Select all elements with class `.animate` or attribute `[animate]`
 const elementsToAnimate = [...document.querySelectorAll('.animate'), ...document.querySelectorAll('[animate]')];

 elementsToAnimate.forEach(el => {
     // Split text into lines, words, chars within each element
     new SplitType(el, {
         types: 'lines, words, chars',
         tagName: 'span'
     });

     // Animate the chars inside the current element
     gsap.from(el.querySelectorAll('.char'), {
         y: '100%', // slide up from below
         opacity: 0, // fade in from 0
         duration: 0.5,
         ease: 'power1.out',
         stagger: 0.05,
         scrollTrigger: {
             trigger: el,
             start: 'top 80%',
             toggleActions: 'play none none none', // play only once
             // scrub: true, // uncomment if you want scrub effect
             markers: false
         }
     });
 });



 // back to top 


 const backToTopButton = document.getElementById("backToTop");

 window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
         backToTopButton.classList.add("visible");
     } else {
         backToTopButton.classList.remove("visible");
     }
 });

 backToTopButton.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });



 document.addEventListener("DOMContentLoaded", function () {
     const header = document.getElementById("mainHeader");

     window.addEventListener("scroll", function () {
         if (window.scrollY > 50) {
             header.classList.add("scrolled");
         } else {
             header.classList.remove("scrolled");
         }
     });
 });



 const carouselElement = document.querySelector('#fadeCarousel');
 const carousel = new bootstrap.Carousel(carouselElement);

 function animateCurrentSlide() {
     const activeSlide = document.querySelector('.carousel-item.active');
     const animatedEls = activeSlide.querySelectorAll('.animate-caption');

     gsap.fromTo(animatedEls, {
         opacity: 0,
         y: 40
     }, {
         opacity: 1,
         y: 0,
         duration: 1,
         stagger: 0.2,
         ease: "power3.out"
     });
 }

 // Initial load animation
 window.addEventListener('load', animateCurrentSlide);

 // Re-animate on slide change
 carouselElement.addEventListener('slid.bs.carousel', () => {
     animateCurrentSlide();
 });

 // Animate button click
 document.querySelectorAll('.animate-button').forEach(btn => {
     btn.addEventListener('click', () => {
         gsap.to(btn, {
             scale: 0.9,
             duration: 0.15,
             yoyo: true,
             repeat: 1,
             ease: "power1.inOut"
         });
     });
 });