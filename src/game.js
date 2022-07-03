const lixos = document.querySelectorAll("div.lixo");
const objetos = document.querySelector(".objects");
var times = document.querySelector("#time");
var timer = 0;
lixos.forEach((lixo) => { //gera os lixos iniciais com tipos aleatoriamente escolhidos
    let num = Math.floor(Math.random() * 5);
    switch (num) {
        case 0:
            lixo.classList.add('objMetal')
            break;
        case 1:
            lixo.classList.add('objPlastico')
            break;
        case 2:
            lixo.classList.add('objPapel')
            break;
        case 3:
            lixo.classList.add('objOrganico')
            break;
        case 4:
            lixo.classList.add('objVidro')
        break;
    }
});

const myInterval = setInterval(() => {
    if(timer < 1){
        console.log(time);
        timer ++;
        times.innerHTML = timer;
    }
    else{       
        console.log("fazer algo para parar o jogo");  
        stopGame();
    }
}, 1000);

function stopGame (){
    //criar função que verifica se usuário perdeu
    //criar função que verifica se usuário venceu
    let corpoHtml = document.body;
    let gameOver = document.createElement('div');
    let butao = '';
    gameOver.classList.add('gameover');
    gameOver.innerHTML = "GAME OVER </br>SCORE: {}<button onclick='location.href='/menu';'>GO</button>";
    corpoHtml.appendChild(gameOver);
    clearInterval(myInterval);
    document.addEventListener('oninput', ()=>{
        console.log('clicou na tela');
        
    });
}

export function chooseTrash(){
    let num = Math.floor(Math.random() * 5);
    switch (num) {
        case 0:
            return 'lixo objMetal';
        case 1:
            return 'lixo objPlastico';
        case 2:
            return 'lixo objPapel';
        case 3:
            return 'lixo objOrganico';
        case 4:
            return 'lixo objVidro';
    }
}

export function createTrash(){
    setInterval(() => {
        if(document.querySelectorAll("div.lixo").length < 5){ //verifica se tem menos de 5 lixos na tela
          let trash = document.createElement("div");
          trash.classList = chooseTrash();
          objetos.appendChild(trash);
        }
      }, 3000)
}