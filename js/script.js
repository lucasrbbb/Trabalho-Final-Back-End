document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});


// login

// Get the modal
var modalA = document.getElementById("colaborador");
var modalB = document.getElementById("administracao");
var modalC = document.getElementById("adicionar");

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modalA) {
    modalA.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modalC) {
    modalC.style.display = "none";
  }
};


