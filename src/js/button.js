// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: "#0000FF" ,
                fontSize: '35px', 
                fill: "aliceblue", 
                fontFamily: 'Arial' ,
                
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: "#0000FF" }))
            .on('pointerout', () => button.setStyle({ fill: "aliceblue" }));
    }
}

export default Button;