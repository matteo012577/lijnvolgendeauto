function Turn_left () {
    wuKong.setAllMotor(0, -80)
}
function Turn_right () {
    wuKong.setAllMotor(-80, 0)
}
function Go_forward () {
    wuKong.setAllMotor(-100, -100)
}
basic.showIcon(IconNames.House)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Go_forward()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        Turn_right()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Turn_left()
    }
})
