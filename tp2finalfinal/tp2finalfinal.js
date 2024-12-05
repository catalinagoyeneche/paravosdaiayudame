let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(13);
}

function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function keyReleased() {
  objJuego.teclaLiberada(keyCode);
}
