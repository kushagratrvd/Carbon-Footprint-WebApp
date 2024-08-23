// JavaScript for image slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.image-slider .slider img');
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    document.querySelector('.image-slider .slider').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 5000);
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
  /* Demo purposes only */
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
