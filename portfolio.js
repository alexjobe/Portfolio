
window.onload=function(){
    var navBack = document.getElementById("navbar-background");
    var navProjects = document.getElementById("nav-projects");
    var navContact = document.getElementById("nav-contact");
    var navTitle = document.getElementById("nav-title");
    var navAbout= document.getElementById("nav-about");

    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var hero = document.getElementById("hero");

    document.addEventListener("scroll", function(){

        navBack.style.transition = "opacity 1s";
        navTitle.style.transition = "opacity 1s";

        if(document.documentElement.scrollTop > 600){

            navBack.style.opacity = 100;
            navTitle.style.opacity = 100;
        }
        else {
            navBack.style.opacity = 0;
            navTitle.style.opacity = 0;
        }
    });

    navTitle.addEventListener("click", function(){
        hero.scrollIntoView({behavior: "smooth"});
    });

    navAbout.addEventListener("click", function(){
        about.scrollIntoView({behavior: "smooth"});
    });

    navProjects.addEventListener("click", function(){
        projects.scrollIntoView({behavior: "smooth"});
    });

    navContact.addEventListener("click", function(){
        contact.scrollIntoView({behavior: "smooth"});
    });var navAbout = document.getElementById("nav-about");
}