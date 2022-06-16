import Button from "../js/button.js";




export class SeleccionEquipos extends Phaser.Scene {
  constructor() {
    super("SeleccionEquipos");
  }

 

  create() {
   
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "seleccion_equipo"
      )

    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Comenzar",
      this,
      () => {
        
        this.scene.start("Partido");
      }
    );

    const boton2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.5, 'Volver', this, () => {
            
        this.scene.start("MainMenu");
    });





  }
}
