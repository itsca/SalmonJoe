/*
 * `assets` module
 * ===============
 *
 * Static assets to be loaded. Files are declared using 'Scene Asset Payload'
 * format. Assets are assumed to live in the `app/static/assets/` folder.
 */

//  -- Splash screen assets.
export const splashScreenAssets = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}];

//  -- General assets used throughout the game.
export const gameAssets = [
  {
    key: 'phaser',
    type: 'image'
  },
  {
    key: 'back',
    type: 'image',
    url: 'back.png'
  },
  {
    key: 'treesBack',
    type: 'image',
    url: 'treesBack.png'
  },
  {
    key: 'waterBack',
    type: 'image',
    url: 'waterBack2.png'
  },
  {
    key: 'fishSpriteTest',
    type: 'spritesheet',
    url: 'fishSpriteTest.png',
    config:{ frameWidth: 50, frameHeight: 50 }
  },
  {
    key: 'rockSpriteTest',
    type: 'spritesheet',
    url: 'rockSpriteTest.png',
    config:{ frameWidth: 50, frameHeight: 50 }
  }
];
