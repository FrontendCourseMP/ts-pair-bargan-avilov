const timeNormal = document.querySelector('.data-dest');
const timeDelta = document.querySelector('.data-delta');
const output = document.querySelector('.output') as HTMLTextAreaElement;
let time0 = 0;
let time1 = 0;

timeNormal.addEventListener("input", (event: Event & { target: HTMLInputElement }) => {
    time0 = Number(event.target.value)
    // console.log(time0);
    const value = (time0 + time1) % 24;
    console.log(output);
    output.value = String(value)
});
timeDelta.addEventListener("input", (event: Event & { target: HTMLInputElement }) => {
  time1 = Number(event.target.value)
  const value = (time0 + time1) % 24;
  console.log(output);
  output.value = String(value)
})
