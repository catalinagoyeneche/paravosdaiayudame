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
  
  haTocadoBala (bala){
  let d = dist(bala.posX, bala.posY, this.posX + 25, this.posY + 25);
      if (d < bala.radio + 25) {
bala.reboteEnemigo()
       return null;
      
      }
      return this;
  }
}
