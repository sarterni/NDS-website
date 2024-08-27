

window.addEventListener('load', () => {
    console.log('Page is fully loaded');
    const scrollingText = document.querySelector('.scrolling-text');
    scrollingText.style.animationDuration = '15s';
});

document.querySelector('nav-Togle-btn').onclick = toggleNav;



function toggleNav() {
    let nav = document.querySelector('.nav-content');
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

document.querySelector('#tipee').parentNode.addEventListener('click', function (e) {
    if (document.querySelector('#tipee').disabled) {
        e.preventDefault();
    }
});

