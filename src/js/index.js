
//1 - pegar todos os icones

const icones = document.querySelectorAll(".selection-content .img");

//2 - pegar todas as cartas

const cartas = document.querySelectorAll(".selection-card");

//3 -percorer todas as icones

icones.forEach(function(icone, indice) {
    //4-descobrir qual icone foi clicada
    icone.addEventListener("click", function() {
        //5- Remover a classe 'visible' da carta atual
        cartas.forEach(function(carta) {
            carta.classList.remove("visible");
        });
        //6-Adicionar a classe 'visible' na carta correspondente ao ícone clicado
        cartas[indice].classList.add("visible");
    });
});
