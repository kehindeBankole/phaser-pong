import Phaser from "phaser";
import "./style.css";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";

var config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
 width: window.innerWidth - 100,
 height: 600,
  scale: {
  // mode: Phaser.Scale.RESIZE,
   // autoCenter: Phaser.Scale.CENTER_BOTH
  },
  parent: "game-container",
  scene: [Scene1, Scene2],
  physics: {
    default: "arcade",
    arcade: {
    // debug: true
    },
  },
};

var game = new Phaser.Game(config);

export default game;
