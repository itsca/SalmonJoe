/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

import TreesBackground from '../objects/trees-background';
import WaterBackground from '../objects/water-background';

export default class Game extends Phaser.Scene {
  constructor(config = {}) {
    super(Object.assign({key: 'Game'}, config));
  }

  create() {
    const x = 0//this.cameras.main.width / 2;
    const y = 0//this.cameras.main.height / 2;
    this.waterBack = this.add.existing(new WaterBackground(this, x, y, 480, 640));
    this.treesBack = this.add.existing(new TreesBackground(this, x, y, 480, 640));
  }

  update() {
    this.waterBack.scroll();
    this.treesBack.scroll();
  }
}