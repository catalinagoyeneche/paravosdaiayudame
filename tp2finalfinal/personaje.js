class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 5;
    this.ancho = 100;
    this.altura = 20;
  }

  dibujar() {
    fill(255, 0, 0); 
    rect(this.posX, this.posY, this.ancho, this.altura); // Dibuja el personaje
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.velocidad;
    }
    this.posX = constrain(this.posX, 0, width - this.ancho);
  }

  teclaPresionada(keyCode) {
  }

  teclaLiberada(keyCode) {
  }
}
