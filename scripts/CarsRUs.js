import {PaintColors} from "./PaintColors.js"
import {Interiors} from "./Interiors.js"
import {Technologies} from "./Technologies.js"
import {Wheels} from "./Wheels.js"
import {Orders} from "./Orders.js"
import {addCustomOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target;
        if(itemClicked.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
        </article>
        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
        </article>

        <article class="button">
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
