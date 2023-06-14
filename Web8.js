// Original Javascript from w3 schools, minor modification
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_slide
// When the user scrolls down a designated distance from the top of the document, slide down the navbar 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

    /***********************Photo Gallery**********************/
// Original Jasvascript from w3 schools, only minor modification to referenced classes
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow 
//  Consulted Bing Chat for information on 'onload' events to debug migration from sample in HTML -AK

let slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("gallery_dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" gallery_active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " gallery_active";
            }