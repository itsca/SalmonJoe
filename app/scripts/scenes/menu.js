/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

import Logo from '../objects/logo';

export default class Menu extends Phaser.Scene {
  constructor(config = {}) {
    super(Object.assign({key: 'Menu'}, config));
  }

  create() {
    //  TODO: Replace this content with really cool game code here :)
    console.log(this)
    var titleString = "Salmon Joe";
    var titleStyle = { font: "65px Arial", fill: "#fff", align: "center" };
    var t = this.add.text(100, this.centerY, titleString, titleStyle);
    var b1 = this.add.text(100, 300, 'Play', { font: "35px Arial", fill: "#fff", align: "center" });
    var b2 = this.add.text(200, 300, 'Records', { font: "35px Arial", fill: "#fff", align: "center" });
    b1.setInteractive()
    b1.on('pointerup', () => this.scene.start('Game'));
  }

  update() {
    // this.logo.update();
  }
}
