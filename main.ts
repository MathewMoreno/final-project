enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const game = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
9 9 f e e e e e e e e e e f 9 9 
9 9 f f f f f f f f f f f f 9 9 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
4 f 4 f 4 f 4 f 4 f 4 f 4 f 4 f 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 f f f f f f f f f f f f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e f f e f 9 9 
9 9 f e e e e e e e f f e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
9 9 f e e e e e e e e e e f 9 9 
`
}
function level1Walls () {
    scene.setTile(9, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, true)
    scene.setTile(4, img`
4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 f 4 4 4 4 4 4 4 4 4 f f 4 4 
4 f f 4 4 4 4 4 4 4 4 4 f 4 4 4 
f 4 4 4 4 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 f 4 4 f f 4 4 4 f 
4 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
4 4 4 4 4 4 4 f 4 4 4 4 4 f 4 4 
4 4 4 4 4 4 f 4 4 4 4 4 f 4 4 4 
4 4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 f 4 4 4 4 4 
4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 4 
4 4 4 f 4 4 4 4 4 4 f 4 4 4 f f 
4 4 4 f 4 4 4 4 4 4 f 4 4 4 f 4 
4 4 f 4 4 4 4 4 4 4 4 4 4 f 4 4 
`, false)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    Jenga = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e . . . . . . . . 
`, SpriteKind.game)
    Jenga.setPosition(150, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.game, function (sprite, otherSprite) {
    Kanye.say("It's Jenga my favorite game I call this Kanye tower", 2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
function toycar () {
	
}
let Jenga: Sprite = null
let toyCar = 0
let Kanye: Sprite = null
scene.setTileMap(img`
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
let Age = 0
if (info.score() == 0) {
    Kanye = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d f f f 
. . . 1 1 d d d d d d d d d f f 
. . 1 1 1 d d d d d d d d d d f 
. . 1 1 1 d d d d d d d d d d f 
. . . d . . . . . . d . d f d f 
. d d d . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    info.changeScoreBy(1)
    scene.cameraFollowSprite(Kanye)
    level1Walls()
    toyCar = 0
    animation.runImageAnimation(
    Kanye,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d f f f 
. . . 1 1 d d d d d d d d d f f 
. . 1 1 1 d d d d d d d d d d f 
. . 1 1 1 d d d d d d d d d d f 
. . . d . . . . . . d . d f d f 
. d d d . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d f f f 
. . . . 1 d d d d d d d d d f f 
. . 1 1 1 d d d d d d d d d d f 
. . 1 1 1 d d d d d d d d d d f 
. . . 1 d . . . . d . . d f d f 
. . d d d . . . . d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    500,
    true
    )
} else if (info.score() == 8) {
	
} else {
	
}
Kanye.setPosition(40, 100)
controller.moveSprite(Kanye, 75, 100)
game.onUpdate(function () {
	
})
