import Button from "../js/button.js";


export class Partido extends Phaser.Scene {
  constructor() {
    
    super("Partido");
  }

  create() {
    
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "partido"
      )

    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 2,
      "Siguiente",
      this,
      () => {
        
        this.scene.start("Grilla");
      }
    );

    }
}