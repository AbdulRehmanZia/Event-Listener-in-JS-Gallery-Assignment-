var largeImg = document.getElementById("large-img");
var smallImages = document.getElementsByClassName("small-images");
console.log(smallImages);
for (var index = 0; index < smallImages.length; index++) {
  smallImages[index].addEventListener("mouseover", function () {
    largeImg.src = this.src;
    this.style.border = "3px solid white";
  });

  smallImages[index].addEventListener("mouseout", function () {
    largeImg.src = this.src;
    this.style.border = "transparent";
  });
}
