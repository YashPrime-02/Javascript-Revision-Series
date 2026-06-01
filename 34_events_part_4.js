// ==========================================
// 📘 Background Color Changer
// ==========================================


// Generate random hex color

const randomColor = () => {

    const hex = '0123456789ABCDEF'

    let color = '#'

    for (let i = 0; i < 6; i++) {

        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}


let intervalId


// ==========================================
// 📘 Start Changing Color
// ==========================================

document.getElementById('start')
.addEventListener('click', () => {

    // Prevent multiple intervals

    if (!intervalId) {

        intervalId = setInterval(changeBgColor, 1000)
    }
})


// Function to change background

const changeBgColor = () => {

    document.body.style.backgroundColor = randomColor()
}


// ==========================================
// 📘 Stop Changing Color
// ==========================================

document.getElementById('stop')
.addEventListener('click', () => {

    clearInterval(intervalId)

    intervalId = null
})