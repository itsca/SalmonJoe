export default class TreesBackground extends Phaser.GameObjects.TileSprite {
  /**
   * My custom sprite.
   *
   * @constructor
   * @class TreesBackground
   * @extends Phaser.GameObjects.TileSprite
   * @param {Phaser.Scene} scene - The scene that owns this sprite.
   * @param {number} x - The horizontal coordinate relative to the scene viewport.
   * @param {number} y - The vertical coordinate relative to the scene viewport.
   * @param {number} width - This tile sprite width.
   * @param {number} height - This tile sprite height.
   */
  constructor(scene, x, y, width, height) {
    super(scene, x, y, width, height, 'treesBack');
    this.setOrigin(0, 0);
    //  Add this game object to the owner scene.
    scene.children.add(this);
  }
  scroll() {
    this.tilePositionY -= 0.6;
  }
}
