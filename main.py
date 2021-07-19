def on_button_pressed_a():
    global state
    basic.pause(2000)
    state = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

pushup = 0
state = 0
music.set_built_in_speaker_enabled(True)
state = 2

def on_forever():
    global pushup, state
    if state == 0:
        if input.acceleration(Dimension.Z) > -1024:
            soundExpression.giggle.play()
            pushup += 1
            state = 1
    elif state == 1:
        if input.acceleration(Dimension.Z) < -100:
            state = 0
    basic.show_number(pushup)
    serial.write_value("x", input.acceleration(Dimension.X))
basic.forever(on_forever)
