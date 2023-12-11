let ナベアツの素 = 0
let _3の倍数 = 0
input.onButtonPressed(Button.AB, function () {
    ナベアツの素 = randint(1, 9)
    _3の倍数 = 3
    if (ナベアツの素 == _3の倍数) {
        music.play(music.stringPlayable("- C D F G - - - ", 120), music.PlaybackMode.InBackground)
        basic.showNumber(ナベアツの素)
        basic.showIcon(IconNames.Confused)
    } else if (false) {
    	
    } else {
        music.play(music.stringPlayable("- G F D C - - - ", 120), music.PlaybackMode.InBackground)
        basic.showNumber(ナベアツの素)
        basic.showIcon(IconNames.Happy)
    }
})
