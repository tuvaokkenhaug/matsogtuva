
function scrollValue() {
    var navbar = document.getElementById('topnav');
    var scroll = window.scrollY;

    if (scroll < 20) {
        navbar.classList.remove('bgfarge');
    } else {
        navbar.classList.add('bgfarge');
    }
}

window.addEventListener('scroll', scrollValue);