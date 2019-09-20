let navBurger = document.querySelector('.nav-burger');

let navActive = false;

navBurger.addEventListener('click', (evt) => {
    navActive = !navActive;
    
    document.querySelectorAll('.nav-item').forEach((item)=>{
        if(!navActive){
            item.classList.add('nav-item-hidden');
            navBurger.classList.remove('nav-burger-rotate-cw');
            navBurger.classList.add('nav-burger-rotate-acw');
        } else {
            item.classList.remove('nav-item-hidden');
            navBurger.classList.add('nav-burger-rotate-cw');
            navBurger.classList.remove('nav-burger-rotate-acw');
        }
    });
});