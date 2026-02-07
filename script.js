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
    let valera = document.getElementById('Valera')
    valera.addEventListener('click', (e) => {
        console.log(e)
        toggleSound()
    })

    let bulka = document.getElementById('bulka');
    let bacpak = document.getElementById('bacpak');
    let sound = new Audio("assets/sound1.mp3")

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    bulka.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - bulka.offsetLeft;
        offsetY = e.clientY - bulka.offsetTop;
        bulka.style.cursor = 'grabbing';
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            bulka.style.left = e.clientX - offsetX + 'px';
            bulka.style.top = e.clientY - offsetY + 'px';
        }
        let r1 = bulka.getBoundingClientRect(); 
        let r2 = bacpak.getBoundingClientRect(); 
        if (!(r1.right < r2.left || r1.left > r2.right ||
            r1.bottom < r2.top ||r1.top > r2.bottom)) {
            bulka.remove();
            isDragging = false;
            sound.play()
        }

    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        bulka.style.cursor = 'grab';
    }); 
})