import { getPaintColors, setPaintColor } from "./database.js"

const paintColors = getPaintColors();

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint_choices") {
            const chosenOption = changeEvent.target.value
            setPaintColor(parseInt(chosenOption))
        }
    }
)

export const PaintColors = () => {
    let html = `<select id="paint_choices">`

    const listItems = paintColors.map(paintColor => {
        return `<option value="${paintColor.id}">${paintColor.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}