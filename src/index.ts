const timeNormal = document.querySelector('.data-dest')
const timeDelta = document.querySelector('.data-delta')
const output = document.querySelector('output')

let time0 = 0
let time1 = 0

timeNormal.addEventListener("input", (event: Event) => {
  time0 = event.target.value
  const value = time0 + time1 % 24
  console.log(time0)
  // output.textContent = value.toString()
})

// timeDelta.addEventListener("input", (event: Event) => {
//   time1 = event.target.value
//   console.log(time1)
//   const value = time0 + time1 % 24
//   console.log(value)
//   // output.textContent = value.toString()
//   console.log(output.textContent)
// })