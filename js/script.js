// ================================= DARK THEME ============================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// ================================ PREVIOUS TOPIC =========================
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/Deactive the theme button manually
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    document.body.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING !!")
