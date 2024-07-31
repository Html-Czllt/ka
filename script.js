document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const visitCounter = document.getElementById('visit-counter');
    let counter = localStorage.getItem('visitCounter') || 0;

    // Inicializa o contador de visitas
    counter++;
    localStorage.setItem('visitCounter', counter);
    visitCounter.textContent = counter;

    // Alterna o tema
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleButton.textContent = document.body.classList.contains('dark-mode') 
            ? 'Alternar para Tema Claro' 
            : 'Alternar para Tema Escuro';
    });

    // Abre o lightbox
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImg.src = image.src;
            lightbox.classList.remove('hidden');
        });
    });

    // Fecha o lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Fecha o lightbox clicando fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    // Esconde o menu ao rolar para baixo
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            document.getElementById('header').style.top = '-100px'; // Esconde o cabeçalho
        } else {
            document.getElementById('header').style.top = '0'; // Mostra o cabeçalho
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para no topo
    });
});
