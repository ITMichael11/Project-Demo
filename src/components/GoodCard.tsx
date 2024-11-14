import { Card, CardComponent } from "./Card";
import { randomData } from "../libs/others";

function GoodCard() {
    const { content, id } = randomData()

    return ( 
        <>
           <CardComponent card={new Card(content, id)}  /> 
           <CardComponent card={new Card(content, id)}  /> 
        </>
     );
}

export default GoodCard;