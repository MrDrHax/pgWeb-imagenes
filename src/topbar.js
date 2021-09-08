document.write('\
<div id="Topbar">\
    <a href="index.html" class="h1">Example</a>\
    <a href="#">About us</a>\
    <a href="#">Projects</a>\
    <a href="#">Objects display</a>\
    <a href="maps.html">Maps examples</a>\
    <a href="#">Photo galerie</a>\
    <a href="#">Give us info</a>\
</div>\
');

//Get the button:
topbarNav = document.getElementById("Topbar");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    topbarNav.style.position = "fixed";
  } else {
    topbarNav.style.position = "relative";
  }
}