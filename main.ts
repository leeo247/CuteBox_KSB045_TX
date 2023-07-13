input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
let Y = 0
let X = 0
let Y1 = 0
let X1 = 0
let R_KEY = 0
let KEYF = 0
let KEYE = 0
let KEYD = 0
let KEYC = 0
radio.setGroup(1)
basic.forever(function () {
    KEYC = pins.digitalReadPin(DigitalPin.P15)
    KEYD = pins.digitalReadPin(DigitalPin.P14)
    KEYE = pins.digitalReadPin(DigitalPin.P13)
    KEYF = pins.digitalReadPin(DigitalPin.P12)
    R_KEY = pins.digitalReadPin(DigitalPin.P8)
    X1 = pins.analogReadPin(AnalogPin.P2)
    Y1 = pins.analogReadPin(AnalogPin.P1)
    if (X1 < 30) {
        X = 4
    } else {
        if (X1 < 256) {
            X = 3
        } else {
            if (X1 < 535) {
                X = 2
            } else {
                if (X1 < 768) {
                    X = 1
                } else {
                    if (X1 < 1023) {
                        X = 0
                    }
                }
            }
        }
    }
    if (Y1 < 30) {
        Y = 0
    } else {
        if (Y1 < 256) {
            Y = 1
        } else {
            if (Y1 < 525) {
                Y = 2
            } else {
                if (Y1 < 768) {
                    Y = 3
                } else {
                    if (Y1 < 1023) {
                        Y = 4
                    }
                }
            }
        }
    }
    basic.clearScreen()
    led.plot(X, Y)
    if (KEYC == 0) {
        basic.clearScreen()
        basic.showString("C")
        pins.digitalWritePin(DigitalPin.P16, 0)
        radio.sendNumber(4)
    }
    if (KEYD == 0) {
        basic.clearScreen()
        basic.showString("D")
        radio.sendNumber(2)
    }
    if (KEYE == 0) {
        basic.clearScreen()
        basic.showString("E")
        radio.sendNumber(3)
    }
    if (KEYF == 0) {
        basic.clearScreen()
        basic.showString("F")
        radio.sendNumber(1)
    }
    if (R_KEY == 0) {
        basic.clearScreen()
        basic.showString("R")
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
