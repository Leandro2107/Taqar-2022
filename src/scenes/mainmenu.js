import Button from "../js/button.js";


export class MainMenu extends Phaser.Scene {
    constructor() {
        
        super("MainMenu")
    }

    create() {
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.1);
        
        

        
        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Play', this, () => {
            
            this.scene.start("Partido");
        });
    }
}