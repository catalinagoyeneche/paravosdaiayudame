class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearPersonaje();
    this.bala = null;
  }

  dibujar() {
    this.personaje.dibujar();
    this.personaje.mover();
    
    if (this.bala) {
      this.bala.mover();
      this.bala.dibujar();
      this.bala.rebotePersonaje(this.personaje);
      this.bala.reboteEnemigo(this.enemigos); 
      if (this.bala.posX < 0 || this.bala.posX > width || this.bala.posY < 0 || this.bala.posY > height) {
        this.bala = null; 
      }
    }
    
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 50, 100);
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
    if (keyCode === 32 && !this.bala) {
      this.dispararBala();
    }
  }

  teclaLiberada(keyCode) {
    this.personaje.teclaLiberada(keyCode);
  }

  dispararBala() {
    this.bala = new Bala(this.personaje.posX + 25, this.personaje.posY - 25, 5, 5);
  }
}
