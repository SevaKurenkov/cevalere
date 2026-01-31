document.addEventListener('DOMContentLoaded', () => {
    let cursor = document.querySelector('#cursor')
    document.addEventListener('mousemove', (e) => {
        let verticalPosition = document.documentElement.scrollTop
        cursor.style.left = `${e.clientX - 42.5}px`
        cursor.style.top = `${e.clientY - 25 + verticalPosition}px`
        cursor.style.rotate = `${(e.clientX + e.clientY)}deg`
    })
    let triggerSound = new Audio("assets/audio_2026-01-31_09-35-13.ogg")
    function playTriggerSound() {
        triggerSound.play()
    }
    function toggleSound() {
        playTriggerSound()
        setTimeout(()=>{}, 1500)
    }
    let valera = document.querySelector('#Valera')
    document.addEventListener('pointerdown', (e) => {
        console.log(e)
        if (e.target = valera){
            toggleSound()
        }
        
    })

    let drag = true
    let bulka = document.querySelector('.bulka')
    bulka.addEventListener('pointerdown', (e) => {
        drag = true
        bulka.addEventListener('pointermove', (e) => {
            console.log(e)
            if ((drag == true) && ((0 <= (e.clientY + bulka.getBoundingClientRect().height / 2)) && (0 <= (e.clientY + bulka.getBoundingClientRect().height / 2)) && (e.clientY + bulka.getBoundingClientRect().height / 2) <= (window.innerHeight)) && (0 <= (e.clientX + bulka.getBoundingClientRect().width / 2) <= (window.innerWidth))){
                bulka.style.left = `${e.clientX - bulka.getBoundingClientRect().width / 2}px`
                bulka.style.top = `${e.clientY - bulka.getBoundingClientRect().height / 2}px`
            }
        })
    })
    document.addEventListener('pointerup', (e) => {
        drag = false
    })
})