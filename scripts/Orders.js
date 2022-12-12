import { getOrders, getInteriors, getWheels, getPaintColors, getTechnologies } from "./database.js"

const technologies = getTechnologies()
const interiors = getInteriors()
const wheels = getWheels()
const paintColors = getPaintColors()

const buildOrderListItem = (order) => {
    let totalCost = 0;
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price
    
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    totalCost += foundTechnology.price
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += foundWheel.price

    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    totalCost += foundPaintColor.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li id="orders">
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

