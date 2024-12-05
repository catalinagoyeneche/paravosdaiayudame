class Enemigo {
  constructor(posX,posY) {
    this.posX = posX ;
    this.posY = posY;
    this.miColor = color (0, 255, 0);
    this.bala = new Bala();
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 50); //aca se cambia para imagen
  }
}
