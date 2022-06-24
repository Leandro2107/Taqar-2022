
export class Preloads extends Phaser.Scene { 
    constructor() {
       
        super("Preloads")
    }

    preload() {
        this.load.image('resultado_final', 'public/assets/images/resultado_final.png')
        this.load.image('mainmenu_bg', 'public/assets/images/main_menu.png')
        this.load.image('partido', 'public/assets/images/partido.png');
        this.load.image('opciones', 'public/assets/images/opciones.png')
        
        
      
    }

    create() {
        
        this.scene.start('MainMenu');
    }
}