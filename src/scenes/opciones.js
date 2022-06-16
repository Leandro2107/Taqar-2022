import Button from "../js/button.js";




export class Opciones extends Phaser.Scene {
  constructor() {
    super("Opciones");
  }

  create() {

    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "opciones"
      )
   

    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Volver",
      this,
      () => {
        
        this.scene.start("MainMenu");
      }
    );




  }


}

