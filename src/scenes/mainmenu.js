import Button from "../js/button.js";


export class MainMenu extends Phaser.Scene {
    constructor() {
        
        super("MainMenu")
    }

    create() {

        let audiomenu = this.sound.add("intro", { loop: true });
        audiomenu.play();
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.1);
        
        
        this.add.image(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'partido').setInteractive().on("pointerdown",
        ()=>this.scene.start("Partido", audiomenu.pause(),
        
        ));

        this.add.image(this.cameras.main.centerX,  this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'botonopciones').setInteractive().on("pointerdown",
        ()=>this.scene.start("Opciones",  audiomenu.pause() 
        
        ));

        this.add.image(this.cameras.main.centerX + this.cameras.main.centerX/1.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'botoncreditos').setInteractive().on("pointerdown",
        ()=>this.scene.start("Creditos", audiomenu.pause()
        
        ));

       
        
        







      




    }
}