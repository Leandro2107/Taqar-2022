import Button from "../js/button.js";




export class ResultadoFinal2 extends Phaser.Scene {
  constructor() {
    super("ResultadoFinal2");
  }

 

  create() {
   
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "resultado_final2"
      )
    

      this.add.image(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'volver').setInteractive().on("pointerdown",
      ()=>this.scene.start("MainMenu", 
      
      ));





  }
}
