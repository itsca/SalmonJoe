/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

import TreesBackground from '../objects/trees-background';
import WaterBackground from '../objects/water-background';
import Rock from '../objects/rock';

export default class Game extends Phaser.Scene {
  constructor(config = {}) {
    super(Object.assign({key: 'Game'}, config));
  }

  preload () {
    this.hitRock = (player, rock) =>
    {   
        console.log('HIT');
        if (player && player !== undefined) {
          player.disableBody(true, true);
          this.gameOver() 
        }
    }
    this.addRock = () =>
    {
      let enemyObject = new Rock({
        scene: this,
        key: 'rockSpriteTest',
        x: Phaser.Math.Between(68, 415),
        y: -10
      });
      this.rocks.add(enemyObject);
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
    this.sys.physicsManager = this.physics.world;
    this.waterBack = this.add.existing(new WaterBackground(this, x, y, 480, 680));
    this.waterBack2 = this.add.existing(new WaterBackground(this, x, y, 480, 640));
    this.treesBack = this.add.existing(new TreesBackground(this, x, y, 480, 640));
    this.player = this.physics.add.sprite(200, 600, 'fishSpriteTest').setVelocity(0, 0)
    .setCollideWorldBounds(true);
  
    this.anims.create({
      key: 'normal',
      frames: this.anims.generateFrameNumbers('fishSpriteTest', { start: 0, end: 7 }),
      frameRate: 7,
      repeat: 1
    });
    
    let config = {
      key: 'rockStatic',
      frames: this.anims.generateFrameNumbers('rockSpriteTest', { start: 0, end: 7, first: 0 }),
      frameRate: 7,
      repeat: -1,
      repeatDelay: 0
    };
    this.anims.create(config)
    this.rocks = this.add.group();
    console.log(this.physics.world);
    this.cursors = this.input.keyboard.createCursorKeys();
    ///
    ///
    this.waterBack.blendMode = 2;
    this.waterBack2.blendMode = 10;
    this.waterBack2.alpha = 0.6;
    this.waterBack2.setOrigin(1,0)
    this.waterBack2.scaleX *= -1;
    this.waterBack.scaleY = 2.5;
    this.waterBack2.scaleY = 5.5;
    ///
    this.timedEvent = this.time.addEvent({
      delay: 4500,
      callback: this.addRock,
      callbackScope: this,
      loop: true
    })
  }

  update() {
    this.waterBack.scroll(2)
    this.waterBack2.scroll(0.5)
    this.treesBack.scroll()
    this.player.anims.play('normal', true)
    this.rocks.children.iterate(function (child) {
      if (child !== undefined) {
        child.update()        
      }
    })
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