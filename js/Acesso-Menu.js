document.addEventListener('DOMContentLoaded', function() {
    let linksDeNavegacao = document.querySelectorAll('nav ul li a');
  
    linksDeNavegacao.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        let href = link.getAttribute('href');
        let secao = document.querySelector(href);
  
        
        secao.style.opacity = 0;
        setTimeout(function() {
          secao.style.opacity = 1;
        }, 2000);
  
        
        secao.scrollIntoView({ behavior: 'smooth' });
  
        
        let mensagem = `Você clicou em ${link.textContent}`;
        alert(mensagem);
      });
    });
  });