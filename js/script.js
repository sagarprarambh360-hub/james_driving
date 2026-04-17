 ////////////////////////////////// onscroll
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}



$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
         margin: 0,
      },
      1200: {
        items: 2,
          margin:0,
      },
      
      1400: {
        items: 2,
          margin: 0,
      },
    },
  });
});
 




$(function () {
  AOS.init({
    duration: 650,
    once: true,
  });
});
  // box
const boxes = gsap.utils.toArray('.box');

boxes.forEach((box, i) => {
  const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add("animating");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("animating");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const offset = 95; // top space in px
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });


$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
  $('.carousel-indicators button').removeClass('activenew');

  $('.carousel-indicators button.active')
    .next('button')
    .addClass('activenew');
});
const activeBtn = document.querySelector('.carousel-indicators button.active');

if (activeBtn && activeBtn.nextElementSibling) {
  activeBtn.nextElementSibling.classList.add('activenew');
}
