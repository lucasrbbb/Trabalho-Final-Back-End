// login

// Get the modal
var modalCol = document.getElementById("colaborador");
var modalAdm = document.getElementById("administracao");

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modalCol) {
    modalCol.style.display = "none";
  }

  if (event.target == modalAdm) {
    modalAdm.style.display = "none";
  }
};

