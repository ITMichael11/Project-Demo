import { Card, CardComponent } from "./Card";
import { randomData } from "../libs/others";

function WrongCard() {
    const randomData1 = randomData()
    const randomData2 = randomData()

    return ( 
        <>
           <CardComponent card={new Card(randomData1.content, randomData1.id)}  /> 
           <CardComponent card={new Card(randomData2.content, randomData2.id)}  /> 
        </>
     );
}

export default WrongCard;