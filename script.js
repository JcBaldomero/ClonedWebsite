// navbar
function toggleBtn() {
    let navbar = document.querySelector(".left-menu");
    navbar.classList.toggle("toggleNav");


}

// Testimonial buttons
function toggleCaru1() {
  let caru = document.querySelector(".caru-i1");
  caru.classList.toggle("toggleCarubtn");

}

function toggleCaru2() {
  let caru = document.querySelector(".caru-i2");
  caru.classList.toggle("toggleCarubtn");

}

function toggleCaru3() {
  let caru = document.querySelector(".caru-i3");
  caru.classList.toggle("toggleCarubtn");

}

function toggleCaru4() {
  let caru = document.querySelector(".caru-i4");
  caru.classList.toggle("toggleCarubtn");

}



// Up button

// scroll up shows logic
var up = document.querySelector(".up")
var rootElement = document.documentElement

function handleScroll() {
  //do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.09) {
    //shows button
    up.classList.add("upshow")
  } else {
    //hides button
    up.classList.remove("upshow")
  }
}

document.addEventListener("scroll", handleScroll)