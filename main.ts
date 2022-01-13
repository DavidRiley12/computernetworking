input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("Thats a gimmie grade!")
        basic.clearScreen()
        images.iconImage(IconNames.Happy).scrollImage(1, 1000)
        basic.clearScreen()
        images.iconImage(IconNames.SmallHeart).scrollImage(1, 1000)
        basic.clearScreen()
        images.iconImage(IconNames.Meh).scrollImage(1, 1000)
        images.iconImage(IconNames.House).scrollImage(1, 1000)
        led.stopAnimation()
        basic.clearScreen()
    }
})
