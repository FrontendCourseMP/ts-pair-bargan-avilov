const form = document.querySelector('.formTask2') as HTMLFormElement

class Stack <T> {
  private readonly elements: T[]

  constructor() {
    this.elements = []
  }
  add(el: T) {
    this.elements.push(el)
  }
  remove() {
    return this.elements.pop()
  }
  size() {
    return this.elements.length
  }
}


form.addEventListener("submit", (ev) => {
  ev.preventDefault()
  
})