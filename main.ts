let projectile: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . 3 3 b 3 3 d d 3 3 . .
        . . . . 3 1 1 d 3 d 1 1 1 1 3 .
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3
        . 3 1 1 d 1 1 1 1 d d 1 1 b . .
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 .
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
        . 4 4 d 1 1 1 1 1 1 d d d b b .
        . 4 d b d 1 1 1 1 1 1 1 1 3 . .
        4 d d 5 b d 1 1 1 1 1 1 1 3 . .
        4 5 d 5 5 b b d 1 1 1 1 d 3 . .
        4 5 5 d 5 5 d b b b d d 3 . . .
        4 5 5 5 d d d d 4 4 b 3 . . . .
        . 4 5 5 5 4 4 4 . . . . . . . .
        . . 4 4 4 . . . . . . . . . . .
    `, 50, 100)
})
info.setScore(0)