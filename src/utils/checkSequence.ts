import Stack from '../core/Stack.js'

function checkSequence(seq: string) {
    const r = new Stack<string>()

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (const c of seq) {
        if (Object.keys(brackets).includes(c)) {
            r.add(c)
        } else if (r.size() === 0) {
            return false
        } else {
            const el = r.remove()

            if (c !== brackets[el]) {
                return false
            }
        }
    }
    return r.size() === 0
}

export default checkSequence
