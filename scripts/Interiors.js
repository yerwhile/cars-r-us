import {getInteriors, setInterior } from "./database.js"

const interiors = getInteriors();

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior_choices") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(chosenOption))
        }
    }
)

export const Interiors = () => {
    let html = `<select id="interior_choices">`

    for(const interior of interiors) {
        html += `<option value="${interior.id}">${interior.name}</option>`
    }

    html += `</select>`
    return html;
}