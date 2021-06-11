$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function teste(){
    video = document.getElementById('bg-video');
    $(video).empty();
    };
    
function replay(valor){
    video = document.getElementById(valor);
    $(video).empty();
    $(video).show();
    conteudo = '<video id="fifa21" autoplay onended="teste()"><source src="video/esportes/FIFA21.mp4" type="video/mp4"><source src="video/esportes/FIFA21_VP8.webm" type="video/webm"><source src="video/esportes/FIFA21_libtheora.ogv" type="video/ogg"></video>'
    $(video).append(conteudo);
}    

function jogar(valor){
    window.location.href="https://www.ea.com/pt-br/games/fifa/fifa-21"
}

function req(valor){
    window.location.href="https://globoesporte.globo.com/esports/fifa/noticia/fifa-21-requisitos-minimos-e-recomendados-do-jogo-no-pc.ghtml"
}      
        
        