import Button from "../js/button.js";




export class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

 

  create() {
   
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "creditos"
      )
    

      this.add.image(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'volver').setInteractive().on("pointerdown",
      ()=>this.scene.start("MainMenu", 
      
      ));





  }
}