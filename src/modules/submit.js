import { apiConfig } from "../services/api-config.js"

const form = document.querySelector("form")
const input = document.querySelector("input")
const user = document.getElementById("user-info")
const avatar = document.getElementById("avatar")
const historyP = document.getElementById("history-p")
const cutsList = document.getElementById("haircuts")
const id = document.getElementById("user-id")
const seals = document.getElementById("seals")
const progress = document.getElementById("progress-bar")
// const bar = document.getElementById("bar")
// const teste = document.getElementById("teste")
// const infoCuts = document.getElementById("info-cuts")


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
    updateCard(client)
    barProgress(client)
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
  cutsList.innerHTML = ""

  const userhistoryP= document.createElement("p")
  userhistoryP.setAttribute("id", "history-p")
  userhistoryP.textContent = client[0].appointmentHistory.length+" cortes"

  historyP.append(userhistoryP)

  const appointments = client[0].appointmentHistory
  appointments.forEach(appointment => {

    const cutItem = document.createElement("li")
    cutItem.setAttribute("id", "haircut")

    const cutDate = document.createElement("div")
    cutDate.setAttribute("id", "date")

    const cutDay = document.createElement("span")
    cutDay.setAttribute("id", "day")
    cutDay.textContent = appointment.date

    const cutHour = document.createElement("span")
    cutHour.setAttribute("id", "hour")
    cutHour.textContent = appointment.time

    const pinCheckIcon = document.createElement("img")
    pinCheckIcon.setAttribute("src", "./src/assets/assets/IconN.svg")
    pinCheckIcon.setAttribute("alt", "Marcação de corte")

    cutDate.append(cutDay, cutHour)
    cutItem.append(cutDate, pinCheckIcon)
    cutsList.append(cutItem)
  });
}

function updateCard(client) {
  id.innerHTML = ""
  seals.innerHTML = ""
  

  const userId = document.createElement("span")
  userId.setAttribute("id", "user-id")
  userId.textContent = `ID: ${client[0].id}`

  id.append(userId)

  const sealCount = client[0].appointmentHistory.length
  
  var i = 1
  for(var j = 0; j < 10; j++) {
    if(sealCount >= i ){
      const seal = document.createElement("div")
      seal.setAttribute("class", "seal")
      
      const sealIcon = document.createElement("img")
      sealIcon.setAttribute("src", "./src/assets/PinCheck.png")

      if(i===10){
        sealIcon.setAttribute("src", "./src/assets/PinGiftGray.svg")
      }

      sealIcon.setAttribute("alt", "Selo fidelidade")
      
      seal.append(sealIcon)
      seals.append(seal)
      i += 1
      
    } else {
        const seal = document.createElement("div")
        seal.setAttribute("class", "seal")
        seals.append(seal)
    }    
  }
}

function barProgress(client) {

  const teste = document.createElement("div")
  teste.setAttribute("id", "teste")
  
  const bar = document.createElement("div")
  teste.setAttribute("id", "bar")
  
  const sealCount = client[0].appointmentHistory.length
  progress.setAttribute("style", "width: " + (sealCount * 10)+"%")
  console.log(sealCount)
  
  // bar.append(progress)
  // teste.append(bar)
  console.log(bar)
  console.log(teste)
}

