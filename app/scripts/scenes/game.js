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
    this.hitRock = (player, rock) =>
    {
        player.disableBody(true, true);
        this.gameOver()
    }
    this.gameOver = () =>
    {
      this.scene
      .stop('Game')
      .start('Menu')
    }
}

  create() {
    const x = 0//this.cameras.main.width / 2;
    const y = 0//this.cameras.main.height / 2;
    this.waterBack = this.add.existing(new WaterBackground(this, x, y, 480, 680));
    this.waterBack2 = this.add.existing(new WaterBackground(this, x, y, 480, 640));
    this.treesBack = this.add.existing(new TreesBackground(this, x, y, 480, 640));
    this.player = this.physics.add.sprite(200, 200, 'fishSpriteTest').setVelocity(0, 0)
    .setCollideWorldBounds(true);
    this.rock = this.physics.add.sprite(200, 100, 'rockSpriteTest').setVelocity(0, 0)
    .setCollideWorldBounds(true);
    this.anims.create({
      key: 'normal',
      frames: this.anims.generateFrameNumbers('fishSpriteTest', { start: 0, end: 7 }),
      frameRate: 7,
      repeat: 1
    });
    this.anims.create({
      key: 'normalRock',
      frames: this.anims.generateFrameNumbers('rockSpriteTest', { start: 0, end: 7 }),
      frameRate: 7,
      repeat: 1
    });
    this.physics.add.collider(this.player, this.rock);
    this.physics.add.overlap(this.player, this.rock, this.hitRock, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.waterBack.blendMode = 2;
    this.waterBack2.blendMode = 10;
    this.waterBack2.alpha = 0.6;
    this.waterBack2.setOrigin(1,0)
    this.waterBack2.scaleX *= -1;
    this.waterBack.scaleY = 2.5;
    this.waterBack2.scaleY = 5.5;
  }

  update() {
    this.waterBack.scroll(2);
    this.waterBack2.scroll(0.5);
    this.treesBack.scroll();
    this.player.anims.play('normal', true);
    this.rock.anims.play('normalRock', true);
    if (this.cursors.left.isDown)
    {
      if (this.player.x > 68) {
        this.player.x -= 5
      }  
    }
    else if (this.cursors.right.isDown)
    {
      if (this.player.x < 415) {
        this.player.x += 5 
      }
    }
    if (this.cursors.up.isDown)
    {
        if (this.player.y > 20) {
          this.player.y -= 5
        }
    }
    else if (this.cursors.down.isDown)
    {
      if (this.player.y < 610) {
        this.player.y += 5
      }
    }
  }
}