const form = document.querySelector("form")
const input = document.querySelector("input")


form.onsubmit = (event) => {
  event.preventDefault()
  
  console.log(input.value)
}