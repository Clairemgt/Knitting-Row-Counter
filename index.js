let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let countTotal = 0;

const incrementBtn = document.getElementById("increment-btn")
incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.textContent = count;
});

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function() {
    let countSaved = count;
    saveEl.textContent += countSaved + " - ";
    countTotal += countSaved;
    totalEl.textContent = countTotal;
    countEl.textContent = 0;
    count = 0;
});
