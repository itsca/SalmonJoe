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

  preload () {
    /*this.load.spritesheet('fishSpriteTest', 
        '../../static/assets/fishSpriteTest.png',
        { frameWidth: 50, frameHeight: 50 }
    );*/
}

  create() {
    const x = 0//this.cameras.main.width / 2;
    const y = 0//this.cameras.main.height / 2;
    this.waterBack = this.add.existing(new WaterBackground(this, x, y, 480, 640));
    this.treesBack = this.add.existing(new TreesBackground(this, x, y, 480, 640));
    this.player = this.add.sprite(200, 200, 'fishSpriteTest');
    this.anims.create({
      key: 'normal',
      frames: this.anims.generateFrameNumbers('fishSpriteTest', { start: 0, end: 7 }),
      frameRate: 8,
      repeat: 1
    });
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.waterBack.scroll();
    this.treesBack.scroll();
    this.player.anims.play('normal', true);
    if (this.cursors.left.isDown)
    {
        this.player.x -= 2
    }
    else if (this.cursors.right.isDown)
    {
      this.player.x += 2
    }
  }
}