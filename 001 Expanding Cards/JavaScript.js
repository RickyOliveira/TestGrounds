const panels = document.querySelectorAll(".panel") /*  creating an array with all the classes that contain "panel"  */

panels.forEach ( (panel) => {
    panel.addEventListener ("click", () => {
        removeActiveClasses ()
        panel.classList.add ("active")
    })
})

function removeActiveClasses () {
    panels.forEach ((panel) =>{
        panel.classList.remove ("active")
    })}