/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

import Logo from '../objects/logo';
import TreesBackground from '../objects/trees-background';
import WaterBackground from '../objects/water-background';

export default class Menu extends Phaser.Scene {
  constructor(config = {}) {
    super(Object.assign({key: 'Menu'}, config));
  }

  create() {
    const x = 0//this.cameras.main.width / 2;
    const y = 0//this.cameras.main.height / 2;
    this.waterBack = this.add.existing(new WaterBackground(this, x, y, 480, 640));
    this.treesBack = this.add.existing(new TreesBackground(this, x, y, 480, 640));
    var titleString = "Salmon Joe";
    var titleStyle = { font: "65px Arial", fill: "#fff", align: "center" };
    var t = this.add.text(75, this.centerY, titleString, titleStyle);
    var b1 = this.add.text(100, 300, 'Play', { font: "35px Arial", fill: "#fff", align: "center" });
    var b2 = this.add.text(200, 300, 'Records', { font: "35px Arial", fill: "#fff", align: "center" });
    b1.setInteractive()
    b1.on('pointerup', () => this.scene.start('Game'));
  }

  update() {
    this.waterBack.scroll();
    this.treesBack.scroll();
  }
}
