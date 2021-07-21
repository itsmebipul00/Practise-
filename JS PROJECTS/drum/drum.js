window.addEventListener('keydown', playsound)

function playsound(e) {
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return

    const key= document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
    audio.currentTime= 0
    audio.play()
}

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removerTransition))

function removerTransition(e){
    if(e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

