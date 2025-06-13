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
    y: '100%',            // slide up from below
    opacity: 0,           // fade in from 0
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

