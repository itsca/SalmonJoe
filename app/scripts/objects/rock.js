import Enemy from './Enemy';
export default class Rock extends Enemy {
  /**
   * My custom sprite.
   *
   * @constructor
   * @class Rock
   * @extends Phaser.GameObjects.Sprite
   * @param {Phaser.Scene} scene - The scene that owns this sprite.
   * @param {number} x - The horizontal coordinate relative to the scene viewport.
   * @param {number} y - The vertical coordinate relative to the scene viewport.
   */
  constructor(config) {
    super(config);
    this.anims.play('rockStatic');
    this.type = "rock";
    // return this;
    this.body.setVelocityY(100)
   // this.body.setSize(12, 12);
   // this.body.offset.set(2, 12);
   this.scene.physics.add.overlap(this.scene.player, this, this.scene.hitRock, null, this);
   
  }

  update() {
    if (this.y > 640) {
      this.kill()
    }
   // this.scene.physics.world.overlap(this.scene.player, this, this.scene.hitRock());
    /*if (!this.activated()) {
      return;
    }
    if (this.sliding) {
      this.scene.physics.world.collide(this, this.scene.groundLayer, this.scene.tileCollision);
      this.scene.enemyGroup.children.entries.forEach((enemy) => {
        if (this != enemy) {
          this.scene.physics.world.overlap(this, enemy, this.slidekill);
        }
      });
    }
    else {
      this.scene.physics.world.collide(this, this.scene.groundLayer);
    }
    this.scene.physics.world.overlap(this, this.scene.mario, this.marioHit);
    if (this.body.velocity.x === 0) {
      this.direction = -this.direction;
      this.body.velocity.x = this.direction;
      this.flipX = this.direction < 0;
    }*/
  }
  /*
  slidekill(turtle, victim) {
    if (typeof victim.starKilled !== "undefined") {
      victim.starKilled();
    }
  }

  marioHit(enemy, mario) {
    // direction
    // den av overlap x or overlap y som är störst
    //let verticalHit = Math.abs(enemy.x-mario.x)<Math.abs(enemy.y-mario.y);

    // console.log("vertical",verticalHit);
    if (mario.star.active) {
      enemy.hurtMario(enemy, mario);
      return;
    }


    if (enemy.verticalHit(enemy, mario)) {
      // get points
      enemy.scene.updateScore(100);
      if (!enemy.sliding || (enemy.sliding && enemy.body.velocity.x === 0)) {
        enemy.scene.sound.playAudioSprite('sfx', 'smb_kick');
        //enemy.body.height = 16;
        enemy.direction = 150 * (mario.x < enemy.x ? 1 : -1);

        enemy.body.velocity.x = enemy.direction;
        enemy.sliding = true;
        enemy.play("turtleShell");
      }
      else {
        enemy.scene.sound.playAudioSprite('sfx', 'smb_stomp');

        enemy.direction = 0;
        enemy.body.velocity.x = 0;
        enemy.sliding = true;
        enemy.play("turtleShell");
      }
      mario.enemyBounce(enemy);
    }
    else {
      if (enemy.sliding && enemy.body.velocity.x === 0) {
        enemy.scene.sound.playAudioSprite('sfx', 'smb_kick');

        enemy.direction = 150;
        enemy.body.velocity.x = 150;
      }
      else {
        enemy.hurtMario(enemy, mario);
      }
    }
  }
  */
}
