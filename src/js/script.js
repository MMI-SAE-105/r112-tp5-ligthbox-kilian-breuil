// *** LIGHTBOX ***
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('dialog');
        modal.style.width = '80%';
        modal.style.height = '80%';
        modal.style.border = 'none';
        modal.style.padding = '0';
        modal.style.background = 'transparent';
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.width = '100%';
        modalImg.style.height = '100%';
        modalImg.style.objectFit = 'contain';
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        modal.showModal();
        
        modal.addEventListener('click', function() {
            modal.close();
            document.body.removeChild(modal);
        });
    });
});