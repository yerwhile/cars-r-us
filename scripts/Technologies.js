import {getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies();

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology_choices") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption))
        }
    }
)

export const Technologies = () => {
    let html = `<select id="technology_choices">`

    for(const technology of technologies) {
        html += `<option value="${technology.id}">${technology.name}</option>`
    }

    html += `</select>`
    return html;
}