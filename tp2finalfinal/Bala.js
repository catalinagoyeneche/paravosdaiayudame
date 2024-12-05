class Bala {
  constructor(posX, posY, velocidadX, velocidadY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidadX = velocidadX;
    this.velocidadY = velocidadY;
    this.radio = 10; 
  }

  dibujar() {
    fill(0); 
    ellipse(this.posX, this.posY, this.radio * 2, this.radio * 2); 
  }

  mover() {
    this.posX += this.velocidadX;
    this.posY += this.velocidadY;

    // Rebote en los límites de la pantalla
    if (this.posX - this.radio < 0 || this.posX + this.radio > width) {
      this.velocidadX = -this.velocidadX;
      this.posX = constrain(this.posX, this.radio, width - this.radio);
    }

    if (this.posY - this.radio < 0 || this.posY + this.radio > height) {
      this.velocidadY = -this.velocidadY;
      this.posY = constrain(this.posY, this.radio, height - this.radio);
    }
  }

  rebotePersonaje(personaje) {
    // Verificar si la bala colide con el personaje
    if (this.posX + this.radio > personaje.posX && this.posX - this.radio < personaje.posX + personaje.ancho &&
        this.posY + this.radio > personaje.posY && this.posY - this.radio < personaje.posY + personaje.altura) {
      this.velocidadY = -this.velocidadY; 
      this.velocidadX = constrain(this.velocidadX, -5, 5); 
    }
  }

  reboteEnemigo(enemigos) {
    for (let i = enemigos.length - 1; i >= 0; i--) {
      let enemigo = enemigos[i];
      let d = dist(this.posX, this.posY, enemigo.posX + 25, enemigo.posY + 25);
      if (d < this.radio + 25) { 
        this.velocidadY = -this.velocidadY; 
        
       
        enemigos.splice(i, 1); 
       
      }
    }
    
  }
}
