class Start {
  constructor() {
    this.playerName = "Player";
    this.botName = "BOT";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["kertas", "gunting", "batu"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCalculation() {
    if (this.botOption == "kertas" && this.playerOption == "gunting") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "kertas" && this.playerOption == "batu") {
      return (this.winner = this.botName);
    } else if (this.botOption == "gunting" && this.playerOption == "kertas") {
      return (this.winner = this.botName);
    } else if (this.botOption == "gunting" && this.playerOption == "batu") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "batu" && this.playerOption == "kertas") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "batu" && this.playerOption == "gunting") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "DRAW");
    }
  }

  // setCompGreyBox() {
  //   if (this.botOption == 'batu') {document.getElementById('batu-com').style.backgroundColor = '#c4c4c4'; } 
  //   else if (botoption === 'kertas') {document.getElementById('kertas-com').style.backgroundColor = '#c4c4c4'; } 
  //   else document.getElementById('gunting-com').style.backgroundColor = '#c4c4c4';
  // }
  matchResult() {
    if (this.winner != "DRAW") {
      return `${this.winner} MENANG!`;
    } else {
      return this.winner;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.botBrain();
  start.setBotOption = start.botBrain();
  start.winCalculation();

  // const inGame = document.getElementById("inGame");
  let result = document.getElementById("result");
  const versus = document.getElementById("vsmark");

  // inGame.textContent = "..."
  versus.textContent = "";
  result.textContent = "...";

  setTimeout(() => {
    // inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
    result.textContent = start.matchResult();
    // result.style.color = '#4C9654';
    result.style.backgroundColor = '#4C9654';
    result.style.fontSize = '38px';
    result.style.borderRadius = '10px';
    result.style.width = '270px';
    result.style.height = '160px';
    result.style.display = 'flex';
    result.style.justifyContent = 'center';
    result.style.alignItems = 'center';
    result.style.textAlign = 'center';
    result.style.transform = 'rotate(-10deg)';
  }, 1500);
  
}


function refreshBtn() {
  document.getElementById("result").textContent = "";
  result.style.backgroundColor = '';
  result.style.fontSize = '';
  result.style.borderRadius = '';
  result.style.width = '';
  result.style.height = '';
  result.style.display = '';
  result.style.justifyContent = '';
  result.style.alignItems = '';
  result.style.textAlign = '';
  result.style.transform = '';
  document.getElementById("vsmark").textContent = "VS";

}
document.getElementById("refresh").addEventListener("click", refreshBtn);