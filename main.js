const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    console.log(nav)
    const navLinks = document.querySelectorAll('.navbar li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        console.log(nav)
        navLinks.forEach((links,index) => {
            if (links.style.animation) {
                links.style.animation = "";
            } else {
            links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        });
        burger.classList.toggle('toggle');
    })
    
}

navSlide();


