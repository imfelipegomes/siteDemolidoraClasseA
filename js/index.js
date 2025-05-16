document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Adiciona máscara ao campo de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            // Remove tudo que não é dígito
            let value = e.target.value.replace(/\D/g, '');
            
            // Aplica a máscara
            if (value.length > 2) {
                value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
            }
            if (value.length > 10) {
                value = `${value.substring(0, 10)}-${value.substring(10, 14)}`;
            }
            
            e.target.value = value;
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const nome = document.getElementById('name').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('message').value.trim();
        
        if (!nome || !telefone) {
            alert('Por favor, preencha pelo menos o nome e telefone!');
            return;
        }
        
        // Simulação de envio de dados
        const formData = {
            nome: nome,
            email: document.getElementById('email').value.trim(),
            telefone: telefone,
            mensagem: mensagem
        };
        
        console.log('Dados do formulário:', formData);
        
        // Mensagem de sucesso
        alert('Obrigado pelo seu contato! Entraremos em contato em breve pelo WhatsApp.');
        
        const whatsappNumber = '5511910824777';
        const whatsappMessage = `Olá, sou ${nome}. ${mensagem || 'Gostaria de mais informações sobre seus serviços.'}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        
        // Limpa o formulário
        form.reset();
        
        // Abre o WhatsApp
        window.open(whatsappUrl, '_blank');
    });

    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Galeria de Projetos - Versão Corrigida
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.gallery-track');
    const images = document.querySelectorAll('.gallery img');
    const nextBtn = document.querySelector('.next-arrow');
    const prevBtn = document.querySelector('.prev-arrow');
    const gallery = document.querySelector('.gallery');
    
    let currentIndex = 0;
    let imageWidth = images[0].offsetWidth + 20; // Largura + margem
    
    // Calcula quantas imagens são visíveis na galeria
    function getVisibleImagesCount() {
        return Math.floor(gallery.offsetWidth / imageWidth);
    }
    
    function updateGallery() {
        const displacement = currentIndex * imageWidth;
        track.style.transform = `translateX(-${displacement}px)`;
        
        // Desabilita seta anterior se estiver no início
        prevBtn.disabled = currentIndex === 0;
        
        // Desabilita próxima seta se estiver no final
        const visibleCount = getVisibleImagesCount();
        nextBtn.disabled = currentIndex >= images.length - visibleCount;
    }
    
    nextBtn.addEventListener('click', function() {
        const visibleCount = getVisibleImagesCount();
        if (currentIndex < images.length - visibleCount) {
            currentIndex++;
            updateGallery();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });
    
    // Recalcula ao redimensionar a janela
    window.addEventListener('resize', function() {
        imageWidth = images[0].offsetWidth + 20;
        updateGallery();
    });
    
    // Inicializa
    updateGallery();
});

// Atualiza o ano no footer automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Efeito suave para o botão do WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    // Faz o botão aparecer suavemente após 1 segundo
    setTimeout(() => {
        whatsappBtn.style.opacity = '1';
    }, 1000);
    
    // Configura a opacidade inicial como 0 para o efeito
    whatsappBtn.style.opacity = '0';
    whatsappBtn.style.transition = 'opacity 0.5s ease';
});