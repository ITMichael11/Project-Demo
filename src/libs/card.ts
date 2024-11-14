import { wait } from "./others"

type CardLogic = { uuid: string, checkState: (val: boolean) => void, remove: () => void }
let previous: CardLogic | null = null

//TODO: Use clean code! rename func!!
export async function check(card: CardLogic) {
    if(previous === null) {
        previous = card
        return
    }

    await wait(1000)
    
    if(previous.uuid === card.uuid) {
        alert("valid")

        previous.remove()
        card.remove()
    }

    else {
        alert("invalid")

        previous.checkState(false)
        card.checkState(false)
    }

    previous = null
}

