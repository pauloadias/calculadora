input.onButtonPressed(Button.A, function () {
    if (fase == 1) {
        num1 += -1
    } else if (fase == 2) {
        operacao += -1
    } else {
        num2 += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (operacao == 0) {
        resultado = num1 + num2
        basic.showString("" + num1 + "+" + num2 + "=" + resultado)
    } else if (operacao == 1) {
        resultado = num1 - num2
        basic.showString("" + num1 + "-" + num2 + "=" + resultado)
    } else if (operacao == 2) {
        resultado = num1 * num2
        basic.showString("" + num1 + "X" + num2 + "=" + resultado)
    } else {
        resultado = num1 / num2
        basic.showString("" + num1 + "/" + num2 + "=" + resultado)
    }
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    if (fase == 1) {
        fase += 1
        basic.showIcon(IconNames.Yes)
    } else if (fase == 2) {
        fase += 1
        basic.showIcon(IconNames.Yes)
    } else {
        fase += 1
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    if (fase == 1) {
        num1 += 1
    } else if (fase == 2) {
        operacao += 1
    } else {
        num2 += 1
    }
})
let resultado = 0
let operacao = 0
let fase = 0
let num2 = 0
let num1 = 0
num1 = 5
num2 = 5
fase = 1
operacao = 0
resultado = 0
basic.forever(function () {
    if (fase == 1) {
        basic.showNumber(num1)
    } else if (fase == 2) {
        if (operacao == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (operacao == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if (operacao == 2) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
    } else {
        basic.showNumber(num2)
    }
})
