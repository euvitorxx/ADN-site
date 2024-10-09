// Função para alternar o menu de navegação em dispositivos móveis
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.maxHeight) {
        navMenu.style.maxHeight = null;
    } else {
        navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
}

// Animação de fade-in para a seção "hero"
window.onload = function() {
    const heroText = document.querySelector('.hero h2');
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 500);
};
