import { apiConfig } from "../services/api-config.js"

const form = document.querySelector("form")
const input = document.querySelector("input")
const userInfo = document.getElementById("user-info")


form.onsubmit = async (event) => {
  
  event.preventDefault()
  const response = await fetch(`${apiConfig.baseURL}/clients`)
  
  const clients = await response.json()

  const idInput = input.value

  console.log(idInput)
  console.log(clients)

  await clients.forEach(({ id, name, clientSince }) => {
    if (idInput === id) {
      const h1 = document.createElement("h1")
      const p = document.createElement("p")
      //div.setAttribute("id", "user-info")

      console.log(id)
      console.log(name)
      console.log(clientSince)
      h1.textContent = name
      p.textContent = clientSince

      userInfo.innerHTML = ""
      userInfo.append(h1)
      userInfo.append(p)
    }else{
      console.log("erro!!")
    }
  });
}