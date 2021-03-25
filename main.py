accx = 0
EggY = 0
basketX = 2
eggX = 2
fallingpause = 100

def on_forever():
    global EggY, accx, basketX, eggX, fallingpause
    led.unplot(basketX, 4)
    led.unplot(eggX, EggY)
    EggY += 1
    led.plot(eggX, EggY)
    basic.pause(300)
    accx = input.acceleration(Dimension.X)
    basketX = 2 + min(2, max(-2, Math.idiv(accx, 200)))
    led.plot(basketX, 4)
    if EggY > 4:
        EggY = -1
        eggX = randint(0, 4)
    if EggY == 4:
        if basketX == eggX:
            game.add_score(1)
            if game.score() % 5 == 0:
                fallingpause = fallingpause - 25
        else:
            game.remove_life(1)
    basic.pause(fallingpause)
basic.forever(on_forever)
