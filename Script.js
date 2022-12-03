burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')


burger.addEventListener('click' , ()=>{
    navList.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
    navbar.classList.toggle('');
})