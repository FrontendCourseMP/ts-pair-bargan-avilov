const form = document.querySelector('.formTask2') as HTMLFormElement
const inputForm = form.querySelector('.formTask2-input') as HTMLInputElement
const outputFormn = form.querySelector('.formOutput') as HTMLOutputElement

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

function checkSequence(seq: string) {
  const r = new Stack<string>()

  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  

  for (const c of seq) {
    if (Object.keys(brackets).includes(c)) {
      r.add(c)
    }
    else if (r.size() === 0) {
      return false
    }
    else {
      const el = r.remove()
      if (el !== brackets[el]) {
        return false
      }
    }
  }
  return r.size() === 0
}


form.addEventListener("submit", (ev) => {
  ev.preventDefault()
  
})