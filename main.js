function alertMessage () {
  const playerName = document.querySelector('.js-playername')
  const score = document.querySelector('.js-score')

  if (playerName.value.trim() ==='' && score.value.trim() ==='') {
    alert(`OOPSS! 😟
Please input player name and score.`)
  } else if (playerName.value.trim() === '') {
    alert(`Almost there! 😃
Please input player name.`)
  }  else if (score.value.trim() === '') {
    alert(`Almost there! 😃
Please input score.`)
  } else {
  alert(`Your player details have successfully been added to the leaderboard!
Happy brawling...⚔️😈`)
  }

}

let playerDetails = []

function addtoList () {
  const playerName = document.querySelector('.js-playername')
  const score = document.querySelector('.js-score')

  const playerInfo = `${playerName.value.trim()}: ${score.value.trim()}`
  playerDetails.push(playerInfo)

  leaderboardList ()
}

function useAdd () {
  const playerName = document.querySelector('.js-playername')
  const score = document.querySelector('.js-score')

  if(playerName.value.trim() !== "" && score.value.trim() !== "") {
    addtoList()
  }
}

function enterPower () {
  if(event.key  === "Enter") {
    alertMessage()
    useAdd()
  }
}

function leaderboardList () {
let leaderboardListHtml = ''
  for (let i = 0; i < playerDetails.length; i++) {
    const leadBoard = playerDetails[i]
    const html = `<div class="player-row">
    <p>${leadBoard}</p>  
    <button class="deleteButton" onclick="deletePlayer(${i})">x</button>
    </div>`
    leaderboardListHtml += html
  }

  document.querySelector('.player-info').innerHTML = leaderboardListHtml 
}

function deletePlayer(index) {
  playerDetails.splice(index, 1)
  leaderboardList()
}



