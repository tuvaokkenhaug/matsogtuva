function myFunction() {
    var x = document.getElementById("myLinks");
    var navbar = document.getElementById('topnav');


    if (x.style.display === "block") {
        navbar.classList.remove('bgfarge')
        x.style.display = "none";
    } else {
        x.style.display = "block";
        navbar.classList.add('bgfarge')
    }
}