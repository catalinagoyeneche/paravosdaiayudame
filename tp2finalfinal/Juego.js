class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearPersonaje();
    this.bala = null;
    this.estado= "jugando"
  }

  dibujar() {
    if (this.estado== "jugando") {
      this.dibujarPartida()
    } else if (this.estado=="ganado") {
      this.pantalla.ganaste()
    }
  }

  dibujarPartida() {
    console.log("entro dibujar");
    this.personaje.dibujar();
    this.personaje.mover();

    if (this.bala) {
      this.bala.mover();
      this.bala.dibujar();
      this.personaje.haTocadoLaBala(this.bala)

        for (let i = this.enemigos.length - 1; i >= 0; i--) {
        let enemigo = this.enemigos[i];
        if (enemigo) {
          this.enemigos[i] = enemigo.haTocadoBala (this.bala)
        }
      }
    }
    this.JuegoGanado()
      this.JuegoPerdido()
      for (let i = 0; i < this.enemigos.length; i++) {
      if (this.enemigos[i]) {
        this.enemigos[i].dibujar();
      }
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

  JuegoGanado() {
    for (let i = 0; i < this.enemigos.length; i++) {
      if (this.enemigos[i]) {
        return;
      } //si todos los enemigos estan en null el jugador gana kpo tuki
    }
    this.estado="ganado"
  }
  JuegoPerdido() {
    if (this.bala && this.personaje.estadebajo(this.bala)) {
      this.estado="perdido"
    }
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
