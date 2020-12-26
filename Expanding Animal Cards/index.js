const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        clearActiveClassFromPanels()
        panel.classList.add('active')
    })
})

function clearActiveClassFromPanels() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}