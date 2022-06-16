import Button from "../js/button.js";




export class ResultadoFinal extends Phaser.Scene {
  constructor() {
    super("ResultadoFinal");
  }

 

  create() {
   
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "resultado_final"
      )
    

    const boton = new Button(
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
