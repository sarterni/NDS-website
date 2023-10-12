// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Contenu de la modale
var modalContent = "";

// Bouton 1
document.getElementById("btn1").onclick = function () {
    modalContent = "Contenu du bouton 1";
    modal.querySelector(".modal-content").innerHTML = modalContent;
    modal.style.display = "block";
}

// Bouton 2
document.getElementById("btn2").onclick = function () {
    modalContent = "Contenu du bouton 2";
    modal.querySelector(".modal-content").innerHTML = modalContent;
    modal.style.display = "block";
}

// ...

// Bouton 10
document.getElementById("btn10").onclick = function () {
    modalContent = "Contenu du bouton 10";
    modal.querySelector(".modal-content").innerHTML = modalContent;
    modal.style.display = "block";
}
