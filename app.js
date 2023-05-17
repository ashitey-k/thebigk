var burger = document.getElementById('hamburger')
var nav = document.getElementById('nav')
const close = document.getElementById('close')

burger.addEventListener('click',()=>{
    nav.classList.toggle('active')
});
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})



