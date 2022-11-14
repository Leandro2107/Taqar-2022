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
    

      this.add.image(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'volver').setInteractive().on("pointerdown",
      ()=>this.scene.start("MainMenu", 
      
      ));




  }
}
