const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('../land-page/img/Ilha-de-Pascoa.jpg')";
    title.innerText = 'ILHA DE PÁSCOA';
    textCard.innerText = 'A Ilha de Páscoa é um desses pontos que mais despertam a curiosidade e os sonhos de vários viajantes. Isolada do continente, a ilha acaba sendo um dos destinos turísticos mais caros do Chile, quase como uma Fernando de Noronha de lá.';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/buggyPepeu.jpg')";
    title.innerText = 'Dunnas de Jenipabú';
    textCard.innerText = 'O oásis em meio ao deserto, disposto a partir das dunas brancas que cercam a praia e as lagoas de água doce, faz da paisagem a mais exótica e variada do Rio Grande do Norte.'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/parrachos.jpg')";
    title.innerText = 'Parrachos de Maracajaú';
    textCard.innerText = 'O local é cercado por paisagens de tirar o fôlego, como dunas, coqueirais à beira mar e lagoas, que é um dos pontos turísticos mais procurados da região. A principal fonte de renda dos moradores é o turismo e a pesca. Por estar localizado em área de Proteção Ambiental, Maracajaú – RN é totalmente preservada, com águas calmas e cristalinas.';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/lagoaPitangui.jpg')";
    title.innerText = 'Passeios da Águas';

    textCard.innerText = 'A lagoa tem águas claras em sua parte mais rasa e mais escuras em sua parte mais profunda. Como suas águas são muito calminhas, é o lugar ideal para quem não gosta de ondas ou está com crianças.';
})

/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU AO CLICAR NO LINK */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})