var platforms;
var esp;
var arg;
var player;
var player2;

var cursors;
let keyA;
let keyS;
let keyD;
let keyW;

var arco;
var arco2;
var pelotas;

var scoreText;
var scoreText2;
var gameOver 

var score =0;
var score2 =0;



import Button from "../js/button.js";



export class Partido extends Phaser.Scene {
  constructor() {
    
    super("Partido");
  }

  

  create() 
 {

    
    // crear campo de juego
    this.add.image(400, 300, "cancha");
    
    //  El grupo plataforms contiene las tribunas del estadio (donde la pelota rebota)
    platforms = this.physics.add.staticGroup();
    

    // Coordenada de cada plataforma o tribuna
    platforms.create(400, 556, 'ground');
    platforms.create(47,300, 'ground2');
    platforms.create(400,45, 'ground3');
    platforms.create(754,300, 'ground4');

    //Configuración esp
    esp = this.physics.add.staticGroup ();
  
    // Coordenada arquero esp
    esp.create(700,300, 'esp');
    // Coordenada defensores esp 
    esp.create(610,225, 'esp');
    esp.create(610,380, 'esp');
    // Coordenada mediocamp esp
    esp.create(500,125, 'esp');
    
    esp.create(500,300, 'esp');
    
    esp.create(500,475, 'esp');


    // Configuracion arg
    arg = this.physics.add.staticGroup ();

     // Coordenada arquero arg
     arg.create(100,300, 'arg');
    // Coordenada defensores arg 
    arg.create(190,225, 'arg');
    arg.create(190,380, 'arg');
    // Coordenada mediocamp arg
    arg.create(300,125, 'arg');
    
    arg.create(300,300, 'arg');
    
    arg.create(300,475, 'arg');
    

    // Configuración del jugador
    player = this.physics.add.sprite(150, 300, 'jugador');

    //Propiedades físicas del jugador. Dale al pequeño un ligero rebote.
    player.setBounce(0.6);
    player.setCollideWorldBounds(true);

    player2 = this.physics.add.sprite(600, 300, 'jugador2');

    player2.setBounce(0.6);
    player2.setCollideWorldBounds(true);

    // Crear las animaciones del jugador 1

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'jugador', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('jugador', { start: 0, end: 8 }),
            frameRate: 25,
            repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('jugador', { start: 0, end: 8 }),
        frameRate: 25,
        repeat: -1
    });

    // Se crean animaciones del jugador 2
 
    this.anims.create({
        key: 'turn2',
        frames: [ { key: 'jugador2', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers('jugador2', { start: 0, end: 8 }),
            frameRate: 25,
            repeat: -1
    });

    this.anims.create({
        key: 'left2',
        frames: this.anims.generateFrameNumbers('jugador2', { start: 0, end: 8 }),
        frameRate: 25,
        repeat: -1
    });

    // Cursores

    cursors = this.input.keyboard.createCursorKeys();

    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    // se agrega la zona de gol
    arco = this.physics.add.staticGroup();
    arco.create(80,304, 'arco');
    arco2 = this.physics.add.staticGroup();
    arco2.create(722, 304, 'arco2') 

    pelotas = this.physics.add.group();
    var pelota = pelotas.create(400,16, 'pelota');
    pelota.setBounce(1);
    pelota.setCollideWorldBounds(true);
    pelota.setVelocity(Phaser.Math.Between(-200, 200), 20);  
    pelota.allowGravity = true;
    

 
    // se hacen las coliciones
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(pelota, platforms);
    this.physics.add.collider(pelota, player);
    this.physics.add.collider(pelota, esp);
    this.physics.add.collider(pelota, arg);
    this.physics.add.collider(player2, platforms);
    this.physics.add.collider(pelota, player2);
    this.physics.add.collider(player, player2);

    this.physics.add.overlap(pelota, arco2, this.golArg, null, this);
    this.physics.add.overlap(pelota, arco, this.golEsp, null, this);
  
    
    //  The score
    scoreText = this.add.text(30, 5, 'Argentina 0 ', { fontSize: '32px', fill: '#000' });
    scoreText2 = this.add.text(600, 5, '0 España ', { fontSize: '32px', fill: '#000' });







     
   const boton = new Button(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.10, 'Siguiente', this, () => {
        
        this.scene.start("ResultadoFinal");
      }
    );

    gameOver = false;


 }

  update ()
  {
    if (gameOver)
    {
        return;
    }

    
    // movimientos jugador 1
    if (keyA.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (keyD.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    
    
    if (keyS.isDown)
    {
        player.setVelocityY(330);

        player.anims.play('turn')
    }
    if (keyW.isDown)
    {
        player.setVelocityY(-330);

        player.anims.play('turn')
    }

    
    // Movimientos jugador 2

    if (cursors.left.isDown)
    {
        player2.setVelocityX(-160);

        player2.anims.play('left2', true);
    }
    else if (cursors.right.isDown)
    {
        player2.setVelocityX(160);

        player2.anims.play('right2', true);
    }
    
    if (cursors.down.isDown)
    {
        player2.setVelocityY(330);

        player2.anims.play('turn2')
    } 
    else if (cursors.up.isDown)
    {
        player2.setVelocityY(-300);

        player2.anims.play('turn2')
    }

    

  }

      golArg (pelota, arco2)
    {
        pelota.disableBody(true, true);
        score += 1;
        scoreText.setText('Argentina ' + score);
        

        if (score >= 0){
          
            var pelota = pelotas.create(400,16, 'pelota');
            pelota.setBounce(1);
            pelota.setCollideWorldBounds(true);
            pelota.setVelocity(Phaser.Math.Between(-200, 200), 20);  
            pelota.allowGravity = true;
            this.physics.add.collider(pelota, platforms);
            this.physics.add.collider(pelota, player);
            this.physics.add.collider(pelota, player2);
            this.physics.add.collider(pelota, esp);
            this.physics.add.collider(pelota, arg);
            this.physics.add.overlap(pelota, arco2, this.golArg, null, this);
            this.physics.add.overlap(pelota, arco, this.golEsp, null, this);
        }
        else if (score(true) === 3){
            
            setTimeout(() => {
                // Instrucción que sera llamada despues del segundo
                this.scene.start(
                  "ResultadoFinal",
                  { score: score } // se pasa el puntaje como dato a la escena RETRY
                );
              }, 1000); // Ese número es la cantidad de milisegundos

        }

       
       
    }

      golEsp (pelota, arco)
    {
        
        pelota.disableBody(true, true);
        score2 += 1;
        scoreText2.setText(score2 + " España");
        

        if (score2 >= 0){
          
            var pelota = pelotas.create(400,16, 'pelota');
            pelota.setBounce(1);
            pelota.setCollideWorldBounds(true);
            pelota.setVelocity(Phaser.Math.Between(-200, 200), 20);  
            pelota.allowGravity = true;
            this.physics.add.collider(pelota, platforms);
            this.physics.add.collider(pelota, player);
            this.physics.add.collider(pelota, player2);
            this.physics.add.collider(pelota, esp);
            this.physics.add.collider(pelota, arg);
            this.physics.add.overlap(pelota, arco2, this.golArg, null, this);
            this.physics.add.overlap(pelota, arco, this.golEsp, null, this);
        }
        else if (score2(true) === 3){
            
            setTimeout(() => {
                // Instrucción que sera llamada despues del segundo
                this.scene.start(
                  "ResultadoFinal",
                  { score: score } // se pasa el puntaje como dato a la escena RETRY
                );
              }, 1000); // Ese número es la cantidad de milisegundos

        }


  
    }

    
    


}
