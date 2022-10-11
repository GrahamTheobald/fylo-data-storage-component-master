const range = document.querySelector("[data-range]")
const storage = document.querySelector("[data-storage]")
const left = document.querySelector("[data-left]")


range.addEventListener("input", update)

function update(e) {
    const value = e.target.value

    storage.dataset.storage = value
    storage.innerText = storage.dataset.storage

    left.dataset.left = 1000 - value
    left.innerText = left.dataset.left

    range.style.backgroundSize = `${(parseInt(storage.dataset.storage) / 1000) * 100}%`
}