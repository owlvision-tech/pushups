input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.pause(2000)
    state = 0
})
let pushup = 0
let state = 0
music.setBuiltInSpeakerEnabled(true)
state = 2
basic.forever(function on_forever() {
    
    if (state == 0) {
        if (input.acceleration(Dimension.Z) > -1024) {
            soundExpression.giggle.play()
            pushup += 1
            state = 1
        }
        
    } else if (state == 1) {
        if (input.acceleration(Dimension.Z) < -100) {
            state = 0
        }
        
    }
    
    basic.showNumber(pushup)
    serial.writeValue("x", input.acceleration(Dimension.X))
})
