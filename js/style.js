const MenuToggleEl=document.querySelector('.menu-toggle')
const navEl=document.querySelector('header nav ul')

MenuToggleEl.addEventListener('click',()=>{
    navEl.classList.toggle('active');
});