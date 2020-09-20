let ばんごう = 0
let とくてん = 0
input.onPinPressed(TouchPin.P0, function () {
    if (ばんごう == 0) {
        とくてん += 1
        led.unplot(ばんごう, 0)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (ばんごう == 2) {
        とくてん += 1
        led.unplot(ばんごう, 0)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (ばんごう == 1) {
        とくてん += 1
        led.unplot(ばんごう, 0)
    }
})
basic.forever(function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    とくてん = 0
    for (let index = 0; index < 5; index++) {
        ばんごう = randint(0, 2)
        led.plot(ばんごう, 0)
        basic.pause(2000)
        led.unplot(ばんごう, 0)
    }
    basic.showIcon(IconNames.Happy)
    basic.showNumber(とくてん)
    basic.pause(5000)
})
