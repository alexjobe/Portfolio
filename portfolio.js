
window.onload = function () {
  const navBack = document.getElementById('navbar-background');
  const navProjects = document.getElementById('nav-projects');
  const navContact = document.getElementById('nav-contact');
  const navTitle = document.getElementById('nav-title');
  const navAbout = document.getElementById('nav-about');

  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  const hero = document.getElementById('hero');

  document.addEventListener('scroll', () => {
    navBack.style.transition = 'opacity 1s';
    navTitle.style.transition = 'opacity 1s';

    if (document.documentElement.scrollTop > 600) {
      navBack.style.opacity = 100;
      navTitle.style.opacity = 100;
    } else {
      navBack.style.opacity = 0;
      navTitle.style.opacity = 0;
    }
  });

  navTitle.addEventListener('click', () => {
    hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  navAbout.addEventListener('click', () => {
    about.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  navProjects.addEventListener('click', () => {
    projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  navContact.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};
