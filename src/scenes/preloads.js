
export class Preloads extends Phaser.Scene { 
    constructor() {
       
        super("Preloads")
    }

    preload() {
        this.load.image('resultado_final', 'public/assets/images/resultado_final.png')
        this.load.image('mainmenu_bg', 'public/assets/images/main_menu.png')
        this.load.image('opciones', 'public/assets/images/opciones.png')
        
        
        // carga campo de juego
        this.load.image('cancha', 'public/assets/images/cancha.png');

        // carga de plataformas (tribuna)

        this.load.image('ground', 'public/assets/images/platform.png');
        this.load.image('ground2', 'public/assets/images/platform2.png');
        this.load.image('ground3', 'public/assets/images/platform3.png');
        this.load.image('ground4', 'public/assets/images/platform4.png');
        // carga jugadores visitantes 
        this.load.image('esp', 'public/assets/images/esp.png');

        // carga jugadores local
        this.load.image('arg', 'public/assets/images/arg.png');

        // carga jugadores, pelota, arcos
        this.load.image('arco', 'public/assets/images/arcolocal.png');
        this.load.image('arco2', 'public/assets/images/arcovisitante.png');
        this.load.image('pelota', 'public/assets/images/pelota.png');
        this.load.spritesheet('jugador', 'public/assets/images/jugador.png', { frameWidth: 32, frameHeight: 48 } );
        this.load.spritesheet('jugador2', 'public/assets/images/jugador2.png', { frameWidth: 32, frameHeight: 48 } );
        
      
    }

    create() {
        
        this.scene.start('MainMenu');
    }
}