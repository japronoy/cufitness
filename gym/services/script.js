// script.js

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu li");
  
    menuItems.forEach(function(item) {
      item.addEventListener("mouseover", function() {
        this.querySelector(".submenu").style.display = "block";
      });
  
      item.addEventListener("mouseout", function() {
        this.querySelector(".submenu").style.display = "none";
      });
    });
  });
  