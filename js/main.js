const menuBtn = document.querySelector('.btn-toggle-nav');
const getSidebar = document.querySelector('.nav-sidebar');
const navCompleto = document.querySelector('.menu-nav')
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        getSidebar.style="visibility: visible"
       

    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        getSidebar.style="visibility: hidden"
    }
});