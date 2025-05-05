import { apiConfig } from "../services/api-config.js"

const form = document.querySelector("form")
const input = document.querySelector("input")
const user = document.getElementById("user-info")
const avatar = document.getElementById("avatar")
const historyP = document.getElementById("history-p")

form.onsubmit = async (event) => {
  
  event.preventDefault()
  const response = await fetch(`${apiConfig.baseURL}/clients`)
  const clients = await response.json()
  const idInput = input.value

  const client = clients.filter(client => (client.id === idInput))
  
  if (client.length === 0) {
    alert("Insira um ID válido!")
  } else {
    updateUser(client)
    updateHistory(client)
  }
}

function updateUser (client) {
  user.innerHTML = ""
  avatar.innerHTML = ""
  
  const avatarUser = document.createElement("div")
  avatarUser.setAttribute("id", "avatar")

  const avatarImg = document.createElement("img")
  avatarImg.setAttribute("src", `./src/assets/${client[0].id}.png`)
  avatarImg.setAttribute("alt", "avatar")
  avatar.append(avatarImg)

  const userInfo = document.createElement("div")
  userInfo.setAttribute("id", "user-info")
  
  const userInfoH1 = document.createElement("h1")
  userInfoH1.textContent = client[0].name

  const userInfoP = document.createElement("p")
  userInfoP.textContent = "Cliente desde " + client[0].clientSince
  
  user.append(userInfoH1, userInfoP)
}

function updateHistory(client) {
  historyP.innerHTML = ""

  const userhistoryP= document.createElement("p")
  userhistoryP.setAttribute("id", "history-p")
  userhistoryP.textContent = client[0].appointmentHistory.length+" cortes"

  historyP.append(userhistoryP)

  console.log(client[0].appointmentHistory.length)
}
