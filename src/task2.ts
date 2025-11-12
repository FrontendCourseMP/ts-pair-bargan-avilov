import checkSequence from "./utils/checkSequence.js"

export const handlerTask2 = () => {
  const form = document.querySelector('.formTask2') as HTMLFormElement
  const inputForm = form.querySelector('.formTask2-input') as HTMLInputElement
  const outputForm = form.querySelector('.formOutput') as HTMLOutputElement
  
  form.addEventListener("submit", (ev) => {
    console.log("dasda")
    ev.preventDefault()
    if (checkSequence(inputForm.value)) {
      outputForm.value = "Верная последовательность"
    }
    else {
      outputForm.value = "Неверная последовательность"
    }
  })
}
