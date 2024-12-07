export default class Scene2 extends Phaser.Scene {
  ball: Phaser.Physics.Arcade.Sprite | undefined;
  player1: Phaser.Physics.Arcade.Sprite | undefined;
  player2: Phaser.Physics.Arcade.Sprite | undefined;
  isGameStarted: boolean = false;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  sKey: Phaser.Input.Keyboard.Key | undefined;
  wKey: Phaser.Input.Keyboard.Key | undefined;

  constructor() {
    super("scene-2");
  }

  preload() {
    this.load.image("ball", "src/assets/images/ball.png");
    this.load.image("paddle", "src/assets/images/paddle.png");
  }

  create() {
    console.log(this.game);
    this.ball = this.physics.add.sprite(
      +this.game.config.width / 2,
      +this.game.config.height / 2,
      "ball"
    );
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1, 1);

    this.player1 = this.physics.add
      .sprite(+this.game.config.width, +this.game.config.height / 2, "paddle")
      .setImmovable()
      .setCollideWorldBounds(true);
    this.player2 = this.physics.add
      .sprite(-this.game.config.width, +this.game.config.height / 2, "paddle")
      .setImmovable()
      .setCollideWorldBounds(true);
    this.physics.add.collider(this.ball, this.player1);
    this.physics.add.collider(this.ball, this.player2);
    console.log(this.ball);

    this.cursors = this.input.keyboard?.createCursorKeys();
    this.sKey = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes["S"]
    );
    this.wKey = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes["W"]
    );
  }

  update() {
    if (!this.isGameStarted) {
      const initVelocityX = 150;
      const initVelocityY = 510;
      this.ball?.setVelocityX(initVelocityX);
      this.ball?.setVelocityY(initVelocityY);
      this.isGameStarted = true;
    }
    this.player1?.setVelocityY(0);
    if (this.cursors?.up.isDown) {
      this.player1?.setVelocityY(-350);
    }

    if (this.cursors?.down.isDown) {
      this.player1?.setVelocityY(350);
    }

    if (this.wKey?.isDown) {
      this.player2?.setVelocityY(-350);
  } else if (this.sKey?.isDown) {
      this.player2?.setVelocityY(350);
  } else {
      // If no key is pressed, stop vertical movement
      this.player2?.setVelocityY(0);
  }
    if ((this.ball?.body?.velocity.y as number) > 350) {
      this.ball?.setVelocityY(350);
    }
    if ((this.ball?.body?.velocity.y as number) < -350) {
      this.ball?.setVelocityY(-350);
    }
  }
}
