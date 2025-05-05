import { apiConfig } from "../services/api-config.js"

const form = document.querySelector("form")
const input = document.querySelector("input")
const user = document.getElementById("user-info")
const avatar = document.getElementById("avatar")

form.onsubmit = async (event) => {
  
  event.preventDefault()
  const response = await fetch(`${apiConfig.baseURL}/clients`)
  const clients = await response.json()
  const idInput = input.value

  // console.log(idInput)
  // console.log(clients)

  const client = clients.filter(client => (client.id === idInput))
  console.log(client)
  
  if (client.length === 0) {
    alert("Insira um ID válido!")
  } else {
    const clientId = client[0].name
    console.log(clientId)
    
    updateUser(client)
    return(clientId)
  }
}

async function updateUser (client) {
  user.innerHTML = ""
  avatar.innerHTML = ""

  console.log(client[0].appointmentHistory.length)

  const avatarUser = document.createElement("div")
  avatarUser.setAttribute("id", "avatar")

  const avatarImg = document.createElement("img")

  // const path = `./src/assets/${client[0].id}.png`
  // console.log(path)

  avatarImg.setAttribute("src", `./src/assets/${client[0].id}.png`)
  console.log(avatarImg)

  avatarImg.setAttribute("alt", "avatar")
  avatar.append(avatarImg)

  const userInfo = document.createElement("div")
  userInfo.setAttribute("id", "user-info")
  
  const userInfoH1 = document.createElement("h1")
  userInfoH1.textContent = client[0].name
  console.log(userInfoH1)

  const userInfoP = document.createElement("p")
  userInfoP.textContent = "Cliente desde " + client[0].clientSince
  console.log(userInfoP)
  
  user.append(userInfoH1, userInfoP)
}
