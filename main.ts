enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const game = SpriteKind.create()
    export const nextLevel = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.nextLevel, function (sprite, otherSprite) {
    info.setScore(7)
    info.setLife(2)
})
function Score () {
    if (Kanye.x > 150) {
        info.setScore(2)
    }
    if (Kanye.x > 200) {
        info.setScore(3)
    }
    if (Kanye.x > 250) {
        info.setScore(4)
    }
    if (Kanye.x > 300) {
        info.setScore(5)
    }
    if (Kanye.x > 350) {
        info.setScore(6)
    }
    if (Kanye.x > 455) {
        if (Kanye.x < 460) {
            info.setScore(7)
        }
    }
    if (Kanye.x > 470) {
        info.setScore(8)
    }
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
    scene.setTile(11, img`
4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 f 4 4 4 4 4 4 4 4 4 f f 4 4 
4 f f 4 4 4 4 4 4 4 4 4 f 4 4 4 
f 4 4 4 4 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 f 4 4 f f 4 4 4 f 
4 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
4 e e 4 4 4 4 f 4 4 4 4 4 f 4 4 
4 e e 1 4 4 f 4 4 4 4 4 f 4 4 4 
4 e e 1 9 9 9 9 9 9 9 9 9 4 4 4 
4 e e 8 9 9 9 9 9 9 9 9 9 4 4 4 
4 e e 8 8 8 8 8 8 8 8 8 8 4 4 4 
4 e e 8 8 8 8 8 8 8 8 8 8 4 4 4 
4 e e e e e e e e e e e e 4 4 4 
4 4 4 f 4 4 4 4 4 4 f 4 4 4 f f 
4 4 4 f 4 4 4 4 4 4 f 4 4 4 f 4 
4 4 f 4 4 4 4 4 4 4 4 4 4 f 4 4 
`, false)
    scene.setTile(3, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 e e e e e e e e e e e e e e 9 
9 e f f f f f f f f f f f f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e f f e f e 9 
9 e f e e e e e e e f e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
9 e f e e e e e e e e e e f e 9 
`, false)
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
    NewLevel = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.nextLevel)
    NewLevel.setPosition(455, 75)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.game, function (sprite, otherSprite) {
    controller.moveSprite(Kanye, 0, 0)
    Kanye.say("It's Jenga my favorite game. I'll call this " + Babys_Name + " tower.", 5000)
    pause(5500)
    controller.moveSprite(Kanye, 75, 100)
    Kanye.say("Watch out for the trucks!", 3000)
    Kanye.x += 25
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
function toycar () {
    toyTruck = sprites.create(img`
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . b b b b b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . b d 1 d d d d b . . . . 
. . . . b 1 1 d d d d b . . . . 
. . . a b d d d d d d b a . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    toyTruck.setPosition(225, 85)
    toyTruck.vy = 75
}
let toyTruck: Sprite = null
let NewLevel: Sprite = null
let Jenga: Sprite = null
let Babys_Name = ""
let toyCar = 0
let Kanye: Sprite = null
info.setLife(1)
if (info.score() == 0) {
    scene.setTileMap(img`
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
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
`,img`
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
    200,
    true
    )
    info.changeScoreBy(1)
    Babys_Name = game.askForString("What is your name?")
    Kanye.setPosition(40, 100)
    game.splash("Level 1: " + Babys_Name + "'s room")
    controller.moveSprite(Kanye, 75, 100)
    toycar()
} else if (info.score() == 7) {
	
} else if (false) {
	
} else {
	
}
game.onUpdate(function () {
    if (Kanye.x > 245) {
        if (Kanye.x < 250) {
            toyTruck = sprites.create(img`
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . b b b b b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . b d 1 d d d d b . . . . 
. . . . b 1 1 d d d d b . . . . 
. . . a b d d d d d d b a . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
            toyTruck.setPosition(300, 85)
        }
    }
    if (Kanye.x > 300) {
        if (Kanye.x < 305) {
            toyTruck = sprites.create(img`
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . b b b b b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . b d 1 d d d d b . . . . 
. . . . b 1 1 d d d d b . . . . 
. . . a b d d d d d d b a . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . 5 5 b b b b 5 5 . . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
            toyTruck.setPosition(375, 85)
        }
    }
    if (toyTruck.y < 90) {
        toyTruck.vy = 95
    }
    if (toyTruck.y > 135) {
        toyTruck.vy = -95
    }
    if (Babys_Name == "Kanye") {
        game.over(true)
    }
    Score()
})
game.onUpdateInterval(500, function () {
    if (info.score() == 7) {
        Kanye = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . d 7 7 d . . . . . . 
. . . . . . d 7 7 d . . . . . . 
. . . . . . d 7 7 d . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . d . 8 . . . . . . . 
. . . . . d . . d . . . . . . . 
`, SpriteKind.Player)
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
`,img`
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
        200,
        true
        )
        info.changeScoreBy(1)
        Kanye.setPosition(550, 350)
        game.splash("Level 2: Hallway/Kitchen")
        controller.moveSprite(Kanye, 75, 100)
        toycar()
    }
})
