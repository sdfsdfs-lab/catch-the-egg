let accx = 0
let EggY = 0
let basketX = 2
let eggX = 2
let fallingpause = 100
basic.forever(function on_forever() {
    
    led.unplot(basketX, 4)
    led.unplot(eggX, EggY)
    EggY += 1
    led.plot(eggX, EggY)
    basic.pause(300)
    accx = input.acceleration(Dimension.X)
    basketX = 2 + Math.min(2, Math.max(-2, Math.idiv(accx, 200)))
    led.plot(basketX, 4)
    if (EggY > 4) {
        EggY = -1
        eggX = randint(0, 4)
    }
    
    if (EggY == 4) {
        if (basketX == eggX) {
            game.addScore(1)
            if (game.score() % 5 == 0) {
                fallingpause = fallingpause - 25
            }
            
        } else {
            game.removeLife(1)
        }
        
    }
    
    basic.pause(fallingpause)
})
