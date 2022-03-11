input.onButtonPressed(Button.A, function () {
    Marcador = 0 + 1
    if (Marcador == (Marcador == 9 || Marcador < 0)) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    Marcador = 0
})
input.onButtonPressed(Button.B, function () {
    Marcador = 0 - 1
    if (Marcador == (Marcador == 9 || Marcador < 0)) {
    	
    }
})
let Marcador = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
