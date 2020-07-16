let y = 0
let x = randint(0, 4)
y += 0
let y1 = y - 1
let y2 = y - 2
basic.forever(function () {
    led.plotBrightness(x, y, 255)
    basic.pause(1000)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    led.plotBrightness(x, y1, 255)
    led.unplot(x, y1)
    y1 += 1
    led.plot(x, y1)
    led.plotBrightness(x, y2, 135)
    led.unplot(x, y2)
    y2 += 1
    led.plot(x, y2)
})
