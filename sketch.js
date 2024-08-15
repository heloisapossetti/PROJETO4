let palavra;
let song;
let foto;

function setup() {
   createCanvas(600, 600);
  palavra = diogo();
  song.loop();
}
function preload(){
  foto = loadImage("foto.jpg");
  song = loadSound("song.mp3");
}
 
function draw() {
  batata();
  diogo();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0,width, 1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300,300);
}

function batata(){
  background("lightpink");
  image(foto,0,0,600,600)
  fill("rgb(240,116,138)");
  textSize(80);
  textAlign(CENTER,CENTER);
}

function diogo(){
   let palavras = ["coxinha"];
  return random(palavras);
}