def Left():
    radio.send_number(3)
def back():
    radio.send_number(2)
def D():
    radio.send_number(14)
def E():
    radio.send_number(11)
def F():
    radio.send_number(13)

def on_button_pressed_b():
    music.start_melody(music.built_in_melody(Melodies.JUMP_DOWN),
        MelodyOptions.ONCE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def go_ahead():
    radio.send_number(1)

def on_button_pressed_a():
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Right():
    radio.send_number(4)
def C():
    radio.send_number(5)
def Stop():
    radio.send_number(5)
Y = 0
X = 0
Y1 = 0
X1 = 0
R_KEY = 0
KEYF = 0
KEYE = 0
KEYD = 0
KEYC = 0
radio.set_group(1)

def on_forever():
    global KEYC, KEYD, KEYE, KEYF, R_KEY, X1, Y1, X, Y
    KEYC = pins.digital_read_pin(DigitalPin.P15)
    KEYD = pins.digital_read_pin(DigitalPin.P14)
    KEYE = pins.digital_read_pin(DigitalPin.P13)
    KEYF = pins.digital_read_pin(DigitalPin.P12)
    R_KEY = pins.digital_read_pin(DigitalPin.P8)
    X1 = pins.analog_read_pin(AnalogPin.P2)
    Y1 = pins.analog_read_pin(AnalogPin.P1)
    if X1 < 30:
        X = 4
    else:
        if X1 < 256:
            X = 3
        else:
            if X1 < 535:
                X = 2
            else:
                if X1 < 768:
                    X = 1
                else:
                    if X1 < 1023:
                        X = 0
    if Y1 < 30:
        Y = 0
    else:
        if Y1 < 256:
            Y = 1
        else:
            if Y1 < 525:
                Y = 2
            else:
                if Y1 < 768:
                    Y = 3
                else:
                    if Y1 < 1023:
                        Y = 4
    if Y != 2:
        if Y == 0:
            go_ahead()
        elif Y == 4:
            back()
        elif X == 2 and Y == 2:
            Stop()
        else:
            pass
    else:
        if X == 0:
            Right()
        elif X == 4:
            Left()
        elif X == 2 and Y == 2:
            Stop()
        else:
            pass
    basic.clear_screen()
    led.plot(X, Y)
    if KEYC == 0:
        basic.clear_screen()
        basic.show_string("C")
        pins.digital_write_pin(DigitalPin.P16, 0)
        C()
    if KEYD == 0:
        basic.show_string("D")
        D()
    if KEYE == 0:
        basic.clear_screen()
        basic.show_string("E")
        E()
    if KEYF == 0:
        basic.clear_screen()
        basic.show_string("F")
        F()
    if R_KEY == 0:
        basic.clear_screen()
        basic.show_string("R")
        pins.digital_write_pin(DigitalPin.P16, 1)
basic.forever(on_forever)
