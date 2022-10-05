import Button from "../js/button.js";


export class MainMenu extends Phaser.Scene {
    constructor() {
        
        super("MainMenu")
    }

    create() {
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.1);
        
        

        
        const boton = new Button(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.10, 'Partido', this, () => {
            
            this.scene.start("Partido");
        });

        const boton2 = new Button(this.cameras.main.centerX + this.cameras.main.centerX/1.50, this.cameras.main.centerY + this.cameras.main.centerY/1.10, 'Opciones', this, () => {
            
            this.scene.start("Opciones");
        });




    }
}