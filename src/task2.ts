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
  }

  return r.size() === 0
}


form.addEventListener("submit", (ev) => {
  ev.preventDefault()
  
})