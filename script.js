let musicas = [
		{
    titulo: "Melhor só",
    artista: "Kayblack",
    src: "musicas/Kayblack - Melhor Só (Audio Oficial)-Trap zera.mp3",
    img: "imagens/musica2.png",
   },
   {
    titulo: "Preferida",
    artista: "Kayblack",
    src: "musicas/Preferida-KayBlack - Topic.mp3",
    img: "imagens/musica.jpg",
   },
   {
    titulo: "Segredo",
    artista: "Kayblack",
    src: "musicas/Segredo-KayBlack - Topic.mp3",
    img: "imagens/musica.jpg",
   },
   {
    titulo: "Contradições - Speed up",
    artista: "Kayblack",
    src: "musicas/Kayblack - Contradições (Álbum Completo)-Nz Speed Up.mp3",
    img: "imagens/musica2.png",
    
   },
	 {
    titulo: "Coração de Gelo",
    artista: "WIU",
    src: "musicas/WIU - Coração de Gelo-30PRAUM.mp3",
    img: "imagens/musica.jpg",
  },
  {
    titulo: "60K🐎",
    artista: "Major RD",
    src: "musicas/Major RD - 60K 🐎 (prod. @baratafather)-Major RD.mp3",
    img: "imagens/musica.jpg",
  },
  {
    titulo: "Copão - Sped Up",
    artista: "PJ houdini",
    src: "musicas/Pj houdini - Copão (sped up tiktok)-yauke.mp3",
    img: "imagens/musica.jpg",
  },
  {
    titulo: "Mirante - Sped up",
    artista: "Tz da coronel ft.Borges",
    src: "musicas/Tz da Coro - Mirante ft.Borges.mp3",
    img: "imagens/musica.jpg",
  },
  {
    titulo: "seção de cria",
    artista: "Arthurzim",
    src: "musicas/Fame remix.mp3",
    img: "imagens/musica.jpg",
  },
  {
    titulo: "Saque-185",
    artista: "Muitosk",
    src: "musicas/Saque-185 - Topic.mp3",
    img: "imagens/musica2.png",
    
  }

];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
let imagemMusica = document.querySelector(".imagemMusica");
renderizarMusica(indexMusica);


// Eventos
document.querySelector('.menu').addEventListener("click", mostrarCd);

document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);


document.querySelector(".anterior").addEventListener("click",musicaAnterior);

document.querySelector(".proxima").addEventListener("click", proximaMusica);


document.querySelector('.sair').addEventListener("click", sair);

// Funções

function musicaAnterior(){
	indexMusica--;
	if(indexMusica < 0){
		indexMusica = 9
	}
	renderizarMusica(indexMusica);
	
}


function sair(){
	document.querySelector('main').style.display = "none";
	document.querySelector('.container').style.opacity = 100.0;
	document.querySelector('.menu').style.display = "flex";
}

function mostrarCd(){
	document.querySelector('.menu').style.display = "none";
	document.querySelector('main').style.display = "flex";
	document.querySelector('main').style.display = "column";
  document.querySelector('.sairDiv').style.display = "flex";
	document.querySelector('.container').style.opacity = 0.15;
}

function proximaMusica(){
	indexMusica++;
	if(indexMusica > 9){
		indexMusica = 0;
	}
	renderizarMusica(indexMusica);
	pausarMusica()
}

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagemMusica.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
       
        
    });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}
function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    if (musica.duration === musica.currentTime) {
   	proximaMusica()
    };
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}
