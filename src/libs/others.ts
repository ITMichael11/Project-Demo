export function randomData() {
    const id = Math.floor(Math.random() * 9 + 1)
    const randomDate = randomId()

    return {
        content: () => `Date: ${randomDate}`,
        id: `${id}-${id}-${id}` as const
    }
}

export function randomId() {
    return Math.floor(Math.random() * Date.now())
}

export function wait(ms: number) {
    return new Promise(res => setTimeout(res, ms))
}
