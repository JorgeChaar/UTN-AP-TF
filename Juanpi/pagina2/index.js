var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.display = "none";
    window.close();
  }, 2000);


}