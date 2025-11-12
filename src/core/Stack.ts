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

export default Stack