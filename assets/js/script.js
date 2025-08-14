// Menu mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Formulário (simulação de envio)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Carrossel de depoimentos
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove('active');
    });
    testimonials[index].classList.add('active');
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 4000);






// Efeito de revelar elementos ao rolar a página
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // distância antes de aparecer

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
