let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let box = document.querySelector('.box')
let color = document.querySelector('.color')
let settingsRange = document.querySelectorAll('.settings-block input')
let boxShadowCode = document.querySelector('.box-shadow-code')
settingsRange.forEach(input => {
    input.addEventListener('input', () => {
     generateShadow()
 })
})

function generateShadow() {
    const property =  `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property}`
}
generateShadow()

// blur.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// // })
// spread.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
// horizontal.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
// vertical.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
//
// color.addEventListener('input', () => {
//     box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
// })
