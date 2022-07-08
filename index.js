/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const arr = [ 
    {unit: "Length (Meter/Feet)", metric: "Meter", imperial: "Feet", multiplier: 3.281},
    {unit: "Volume (Liters/Gallons)", metric: "Liters", imperial: "Gallons", multiplier: 0.264 },
    {unit: "Mass (Kilograms/Pounds)", metric: "Kilograms", imperial: "Pounds", multiplier: 2.204 }
]
const input = document.getElementById("input")
const bodyContainer = document.getElementById("body-container")
const btnConvert = document.getElementById("btn")
let convertedToImp = []
let convertedToMet = []

btnConvert.addEventListener("click", function(){
    const saveInput = input.value
    converted = []
    for(let i=0; i< arr.length; i++){
        convertedToImp[i] = (saveInput * arr[i].multiplier).toFixed(3),
        convertedToMet[i] = (saveInput / arr[i].multiplier).toFixed(3)
    }
    renderBody()
})

function renderBody(){
   let body =""
    for(let i=0; i< arr.length; i++){
        body +=
            `<div class = "unitContainer">
                <h4>${arr[i].unit}</h4>
                <p>${input.value} ${arr[i].metric} = ${convertedToImp[i] ? convertedToImp[i] : 0 } ${arr[i].imperial} | 
                    ${input.value} ${arr[i].imperial} = ${convertedToMet[i] ? convertedToMet[i] : 0 } ${arr[i].metric} </p>
            </div>`
    }
    bodyContainer.innerHTML = body
}

renderBody()