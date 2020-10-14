// id-urile aceastea ce ai fi dorit sa folosesti pentru iconita si pentru meniul in sine sunt foarte asemanatoare si confusing
const seeMenuBtn = document.getElementById('mobile-menu');
const menuNavigation = document.getElementById('menu-mobile');
seeMenuBtn.addEventListener('click', function() {
    console.log('click');
    menuNavigation.classList.remove('hidden');

});

const closeButton = document.getElementById('close-menu');
closeButton.addEventListener('click', function() {
    console.log ('click');
    menuNavigation.classList.add('hidden');
});