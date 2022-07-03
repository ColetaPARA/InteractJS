import { Score } from "./Score.mjs";
import { Timer } from "./timer.mjs";

class Game {
    constructor() {
        this.lixos = document.querySelectorAll("div.lixo");
        this.objetos = document.querySelector(".objects");
        this.pontuacao = new Score('score');
        this.tempo = new Timer('hard');

        this.start();   
    }

    start() {
        this.lixos.forEach((lixo) => { //gera os lixos iniciais com tipos aleatoriamente escolhidos
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
        this.createTrash();
        this.tempo.startTimer();
        this.verificaTime();
        
    }

    verificaTime(){       
        var myInterval = setInterval(() => {
            if(this.tempo.time == -1){   
                this.stop();
                clearInterval(myInterval);
            }
        }, 1000);
    }

    stop() {
        //criar if que verifica se usuário perdeu
        //criar if que verifica se usuário venceu
        let corpoHtml = document.body;
        let gameOver = document.createElement('div');   //cria div para o texto GAMEOVER
        let botao = document.createElement('div');      //cria div para o botao
        let inputBotao = document.createElement('input');//cria input para adicionar o texto MENU do tipo botao
        gameOver.classList.add('gameover');
        botao.classList.add('botaoGameOver');         
        inputBotao.type = 'button';
        inputBotao.value = "VOLTAR";
        gameOver.innerHTML = `GAME OVER </br>SCORE: ${this.pontuacao.current}`;
        corpoHtml.appendChild(gameOver);
        gameOver.appendChild(botao);
        botao.appendChild(inputBotao);
        inputBotao.onclick = function () {
            console.log("clicou");
            window.location.href = "/menu";
        }
    }

    chooseTrash(){
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

    createTrash(){
        setInterval(() => {
            if(document.querySelectorAll("div.lixo").length < 5){ //verifica se tem menos de 5 lixos na tela
              let trash = document.createElement("div");
              trash.classList = this.chooseTrash();
              this.objetos.appendChild(trash);
            }
          }, 3000)
    }

    ganhaPonto() {
        this.pontuacao.earnScore(1000, 1);
    }
    
}

export { Game };