export default class Enemy extends Phaser.GameObjects.Sprite {
  /**
   * My custom sprite.
   *
   * @constructor
   * @class Enemy
   * @extends Phaser.GameObjects.Sprite
   * @param {Phaser.Scene} scene - The scene that owns this sprite.
   * @param {number} x - The horizontal coordinate relative to the scene viewport.
   * @param {number} y - The vertical coordinate relative to the scene viewport.
   */
    constructor(config) {
      super(config.scene, config.x, config.y - 16, config.key);    
      config.scene.physics.world.enable(this);
      config.scene.add.existing(this);
      this.alive = true;
      // start still and wait until needed
      this.body.setVelocity(0, 0).setBounce(0, 0).setCollideWorldBounds(false);
      this.body.allowGravity = false;
      this.beenSeen = false;
      // know about Mario
      // this.mario = this.scene.mario; 
      // Base horizontal velocity / direction.
      this.direction = -50;    
      // Standard sprite is 16x16 pixels with a smaller body
      this.body.setSize(50, 50);
      // this.body.offset.set(2, 4);    
    }
  
    /*activated(){
      // Method to check if an enemy is activated, the enemy will stay put
      // until activated so that starting positions is correct
      if(!this.alive){
        if(this.y>240){
          this.kill();
        }
        return false;
      }
      if(!this.beenSeen){
        // check if it's being seen now and if so, activate it
        if(this.x<this.scene.cameras.main.scrollX+this.scene.sys.game.canvas.width+32){
          this.beenSeen = true;
          this.body.velocity.x = this.direction;
          this.body.allowGravity = true;
          return true;
        }
        return false;
      }
      return true;
    }*/
  
    /*verticalHit(enemy, mario){
       // quick check if a collision between the enemy and Mario is from above.
       if(!mario.alive){return false}
       return mario.body.velocity.y>=0 && (mario.body.y+mario.body.height)-enemy.body.y<10;
    }*/
  
    /*hurtMario(enemy, mario){
      // send the enemy to mario hurt method (if mario got a star this will not end well for the enemy)
      this.scene.mario.hurtBy(enemy);
    }*/
  
    /*starKilled(){
      // Killed by a star or hit from below with a block, later on also fire
      if(!this.alive){
        return;
      }
      this.body.velocity.x  = 0;
      this.body.velocity.y = -200;
      this.alive = false;
      this.flipY = true;
      this.scene.sound.playAudioSprite('sfx', 'smb_stomp');
      this.scene.updateScore(100);
    }*/
  
    kill(){
      // Forget about this enemy
      this.scene.rocks.remove(this);
      this.destroy();
    }
}
