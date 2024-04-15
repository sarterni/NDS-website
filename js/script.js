document.querySelector('nav-Togle-btn').onclick = toggleNav;



function toggleNav() {
    let nav = document.querySelector('.nav-content');
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

document.querySelector('#tipee').parentNode.addEventListener('click', function(e) {
    if (document.querySelector('#tipee').disabled) {
        e.preventDefault();
    }
});