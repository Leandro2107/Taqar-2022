import {Preloads} from '../scenes/preloads.js'
import {MainMenu} from '../scenes/mainmenu.js'
import {Partido} from '../scenes/partido.js'
import {ResultadoFinal} from '../scenes/resultadofinal.js'
import { Opciones } from '../scenes/opciones.js'
import { ResultadoFinal2 } from '../scenes/resultadofinal2.js'
import { Creditos } from '../scenes/creditos.js'


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale:{
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 400,
        height: 300,
      },
      max: {
        width: 1600,
        height: 1200,
      },
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200},
            debug: false
        }
    },
    scene: [Preloads, MainMenu, Partido, ResultadoFinal, Opciones, ResultadoFinal2, Creditos ] 
                                             
};

var game = new Phaser.Game(config);