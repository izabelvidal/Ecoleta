const buttonSearch = document.querySelector("#page-home main a" )
const modal = document.querySelector("#modal")
const fecha = document.querySelector("modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

fecha.addEventListener("click", () => {
    modal.classList.add("hide")
})