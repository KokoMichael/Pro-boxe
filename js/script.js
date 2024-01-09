let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let nav_link = document.querySelector('.nav-link');
let bars = document.querySelector('.bi-list');


let link = document.querySelectorAll('.nav-link a');


hamburger.addEventListener("click", ()=>{
    bars.classList.toggle('bi-x-lg');
    nav_link.classList.toggle('active');
})

window.addEventListener("scroll", ()=>{
    let scrollBar = window.scrollY;

    if(scrollBar > 0)
    {
        nav.classList.add('scrolled');
        for(i=0;i<link.length;i++)
        {
            link[i].style.color = '#343541';
        }
    }
    else
    {
        nav.classList.remove('scrolled');
        for(i=0;i<link.length;i++)
        {
            link[i].style.color = '#fff';
        }
    }
});

