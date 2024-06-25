
const button = document.getElementById('menu-btn');

button.addEventListener('click', () => {
   button.classList.toggle('open');
   document.getElementById('menu').classList.toggle('hidden');
})