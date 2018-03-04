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
    const x = 0//this.cameras.main.width / 2;
    const y = 0//this.cameras.main.height / 2;
    this.background1 = this.add.image(x, (y - 640), 'back').setOrigin(0, 0);
    this.background2 = this.add.image(x, y, 'back').setOrigin(0, 0);
    var titleString = "Salmon Joe";
    var titleStyle = { font: "65px Arial", fill: "#fff", align: "center" };
    var t = this.add.text(75, this.centerY, titleString, titleStyle);
    var b1 = this.add.text(100, 300, 'Play', { font: "35px Arial", fill: "#fff", align: "center" });
    var b2 = this.add.text(200, 300, 'Records', { font: "35px Arial", fill: "#fff", align: "center" });
    b1.setInteractive()
    b1.on('pointerup', () => this.scene.start('Game'));
  }

  update() {
    const x = this.cameras.main.width / 2;
    const y = 0;
    // this.logo.update();
    this.background1.y += 1
    this.background2.y += 1
    if (this.background1.y > this.cameras.main.height) {
      this.background1.y = (y - 640)
    }
    if (this.background2.y > this.cameras.main.height) {
      this.background2.y = (y - 640)
    }
    console.log(this.background2.y)
    
  }
}
