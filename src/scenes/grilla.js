import Button from "../js/button.js";




export class Grilla extends Phaser.Scene {
  constructor() {
    super("Grilla");
  }

 

  create() {
   
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "grilla"
      )
    

    const boton2 = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 2,
      "Menu Principal",
      this,
      () => {
        
        this.scene.start("MainMenu");
      }
    );





  }
}
