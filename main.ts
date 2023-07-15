function Left () {
    radio.sendNumber(3)
}
function back () {
    radio.sendNumber(2)
}
function D () {
    radio.sendNumber(5)
}
function E () {
    radio.sendNumber(1)
}
function F () {
    radio.sendNumber(3)
}
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
function go_ahead () {
    radio.sendNumber(1)
}
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
function Right () {
    radio.sendNumber(4)
}
function C () {
    radio.sendNumber(2)
}
function Stop () {
    radio.sendNumber(5)
}
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
    if (Y != 2) {
        if (Y == 0) {
            go_ahead()
        } else if (Y == 4) {
            back()
        } else if (X == 2 && Y == 2) {
            Stop()
        } else {
        	
        }
    } else {
        if (X == 0) {
            Right()
        } else if (X == 4) {
            Left()
        } else if (X == 2 && Y == 2) {
            Stop()
        } else {
        	
        }
    }
    basic.clearScreen()
    led.plot(X, Y)
    if (KEYC == 0) {
        basic.clearScreen()
        basic.showString("C")
        pins.digitalWritePin(DigitalPin.P16, 0)
        C()
    }
    if (KEYD == 0) {
        basic.showString("D")
        D()
    }
    if (KEYE == 0) {
        basic.clearScreen()
        basic.showString("E")
        E()
    }
    if (KEYF == 0) {
        basic.clearScreen()
        basic.showString("F")
        F()
    }
    if (R_KEY == 0) {
        basic.clearScreen()
        basic.showString("R")
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
