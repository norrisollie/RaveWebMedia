function windowDown() {



var container = document.getElementById("container");
var content = document.getElementById("content");
var contentContainer = document.getElementById("content-container");

var height = container.offsetHeight;

content.style.top = 0 + "px";
contentContainer.style.top = height + "px";

}

var rellax = new Rellax('.rellax');

window.onload = windowDown();

window.addEventListener('resize', windowDown)