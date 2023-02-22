function blurImage() {
  var img = document.getElementById("bild1");
  img.classList.toggle("blurry"); 

}

function resizeBild() {
  var img = document.getElementById("A4");
  var currentWidth = img.offsetWidth;
  var currentHeight = img.offsetHeight;
  var newWidth = 350
  var newHeight = 248
  img.style.width = newWidth + "px";
  img.style.height = newHeight + "px";
}


function resizePic() {
  var img = document.getElementById("A4");
  var currentWidth = img.offsetWidth;
  var currentHeight = img.offsetHeight;
  var newWidth = 248
  var newHeight =  350
  img.style.width = newWidth + "px";
  img.style.height = newHeight + "px";
}
