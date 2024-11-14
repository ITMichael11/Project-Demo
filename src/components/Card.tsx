import { randomId } from "../libs/others";
import { check } from "../libs/card"
import { useState } from "react"

//====================Card Type=================
type TUUID = `${string}-${string}-${string}`
export class Card {
    private content: React.ComponentType<unknown>
    private UUID: TUUID
    private ID: number

    constructor(content: React.ComponentType<unknown>, uuid: TUUID) {
        this.content = content
        this.ID = randomId();
        this.UUID = uuid
    }

    get id() {
        return this.ID
    }

    get uuid() {
        return this.UUID
    }

    generateContent() {
        return <this.content />
    }
}
//====================================================

export function CardComponent({card}: { card: Card }) {
    const [click, setClick] = useState(false)
    const handler = async () => {
        if(click) return
        setClick(true)

        await check({
            uuid: card.uuid,
            checkState: setClick,
            remove: () => console.log(card.id)
        })
    }

    return (
        <div onClick={handler} className={`card ${(click && "open") || ""}`.trim()}>
            <div className="content">
                <div className="foreground">Foreground</div>
                <div className="background">
                    {card.generateContent()}
                </div>
            </div>
        </div>
    )
}