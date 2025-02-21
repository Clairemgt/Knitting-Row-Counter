let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let countTotal = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countSaved = count
    saveEl.textContent += countSaved + " - "
    countTotal += countSaved
    totalEl.textContent = countTotal
    countEl.textContent = 0
    count = 0
}
