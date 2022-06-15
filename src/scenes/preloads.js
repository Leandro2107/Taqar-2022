
export class Preloads extends Phaser.Scene { 
    constructor() {
       
        super("Preloads")
    }

    preload() {
        this.load.image('grilla', 'public/assets/images/grilla.png')
        this.load.image('mainmenu_bg', 'public/assets/images/main_menu.png')
        this.load.image('partido', 'public/assets/images/partido.png');
        
      
    }

    create() {
        
        this.scene.start('MainMenu');
    }
}