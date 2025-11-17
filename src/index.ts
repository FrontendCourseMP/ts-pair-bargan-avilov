import checkSequence from './utils/checkSequence.js'

const timeNormal = document.querySelector('.data-dest')
const timeDelta = document.querySelector('.data-delta')
const output = document.querySelector('.output') as HTMLOutputElement
let time0 = 0
let time1 = 0

timeNormal.addEventListener('input', (event: Event & { target: HTMLInputElement }) => {
    time0 = Number(event.target.value)
    const value = (time0 + time1) % 24
    console.log(output)
    output.value = String(value)
})
timeDelta.addEventListener('input', (event: Event & { target: HTMLInputElement }) => {
    time1 = Number(event.target.value)
    const value = (time0 + time1) % 24
    console.log(output)
    output.value = String(value)
})

const form = document.querySelector('.formTask2') as HTMLFormElement
const inputForm = form.querySelector('.formTask2-input') as HTMLInputElement
const outputForm = form.querySelector('.formOutput') as HTMLOutputElement

form.addEventListener('submit', (ev) => {
    console.log('dasda')
    ev.preventDefault()
    for (const element of inputForm.value) {
        if (element !== ')' && element !== '(') {
        }
    }
    if (checkSequence(inputForm.value)) {
        outputForm.value = 'Верная последовательность'
    } else {
        outputForm.value = 'Неверная последовательность'
    }
})
