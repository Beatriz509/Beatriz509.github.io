
// apanhar o ver mais
const verMais = document.querySelector('.ver-mais');

// apanhar a div com mais imagens
const maisProjetos = document.querySelector('.mais-projetos');


// evento de clique

verMais.addEventListener('click', () => {

    // torna vísivel o maisProjetos
    maisProjetos.style.display = 'block';

    // desaparece o botão ver mais
    verMais.style.display = 'none';
});


