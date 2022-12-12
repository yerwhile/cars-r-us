import {getWheels, setWheel } from "./database.js"

const wheels = getWheels();

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel_choices") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(chosenOption))
        }
    }
)

export const Wheels = () => {
    let html = `<select id="wheel_choices">`

    for(const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.name}</option>`
    }

    html += `</select>`
    return html;
}