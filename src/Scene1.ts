

export default class Scene1 extends Phaser.Scene{
    constructor(){
        super('scene-1')
    }

    preload() {}

    create() {
        this.add.text(+this.game.config.width/2, +this.game.config.height / 2, 'loading...');
        setTimeout(()=>this.scene.start('scene-2') , 1000)
    }
    
    update() {}
    
}