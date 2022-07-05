import { Score } from "./Score.mjs";
import { Timer } from "./timer.mjs";


class Game {
    constructor() {
        this.lixos = document.querySelectorAll("img.lixo");
        this.objetos = document.querySelector(".objects");
        this.pontuacao = new Score('score', 'easy');
        this.tempo = new Timer('hard');  

        this.start();
    }

    start() {
        this.lixos.forEach((lixo) => { //gera os lixos iniciais com tipos aleatoriamente escolhidos
            let num = Math.floor(Math.random() * 5);
            switch (num) {
                case 0:
                    lixo.classList.add('objMetal')
                    lixo.src = this.chooseSVGTrash('objMetal');
                    break;
                case 1:
                    lixo.classList.add('objPlastico')
                    lixo.src = this.chooseSVGTrash('objPlastico');
                    break;
                case 2:
                    lixo.classList.add('objPapel')
                    lixo.src = this.chooseSVGTrash('objPapel');
                    break;
                case 3:
                    lixo.classList.add('objOrganico')
                    lixo.src = this.chooseSVGTrash('objOrganico');
                    break;
                case 4:
                    lixo.classList.add('objVidro')
                    lixo.src = this.chooseSVGTrash('objVidro');
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
        if (this.pontuacao.checkWin()){
            let corpoHtml = document.body;
            let divGanhou = document.createElement('div');   //cria div para o texto GAMEOVER
            let divBotao = document.createElement('div');      //cria div para o botao
            let inputBotaoSair = document.createElement('input');//cria input para adicionar o texto MENU do tipo botao
            let inputBotaoProxima = document.createElement('input');//cria input para adicionar o texto MENU do tipo botao

            divGanhou.classList.add('win');
            divBotao.classList.add('botaoStop');         
            inputBotaoSair.type = 'button';
            inputBotaoSair.value = "  SAIR  ";
            inputBotaoProxima.type = 'button';
            inputBotaoProxima.value = "  PRÓXIMA FASE  ";
            divGanhou.innerHTML = `PARABÉNS! VOCÊ VENCEU </br>SCORE: ${this.pontuacao.current}`;
            corpoHtml.appendChild(divGanhou);
            divGanhou.appendChild(divBotao);
            divBotao.appendChild(inputBotaoSair);
            divBotao.appendChild(inputBotaoProxima);
            inputBotaoSair.onclick = function () {
                console.log("clicou");
                window.location.href = "/menu";
            }
            inputBotaoProxima.onclick = function () {
                console.log("clicou");
                window.location.href = "/gameplay";
            }            
        }
        else{
            let corpoHtml = document.body;
            let divGameOver = document.createElement('div');   //cria div para o texto GAMEOVER
            let divBotao = document.createElement('div');      //cria div para o botao
            let inputBotaoSair = document.createElement('input');//cria input para adicionar o texto MENU do tipo botao
            let inputBotaoTente = document.createElement('input');//cria input para adicionar o texto MENU do tipo botao

            divGameOver.classList.add('gameover');
            divBotao.classList.add('botaoStop');         
            inputBotaoSair.type = 'button';
            inputBotaoSair.value = "  SAIR  ";
            inputBotaoTente.type = 'button';
            inputBotaoTente.value = "  TENTE NOVAMENTE  ";
            divGameOver.innerHTML = `GAME OVER </br>SCORE: ${this.pontuacao.current}`;
            corpoHtml.appendChild(divGameOver);
            divGameOver.appendChild(divBotao);
            divBotao.appendChild(inputBotaoSair);
            divBotao.appendChild(inputBotaoTente);
            inputBotaoSair.onclick = function () {
                console.log("clicou");
                window.location.href = "/menu";
            }
            inputBotaoTente.onclick = function () {
                console.log("clicou");
                window.location.href = "/gameplay";
            } 
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

    chooseSVGTrash(typeObj){
        let num;
        switch (typeObj) {
            case 'objMetal':
                num = Math.floor(Math.random() * 17);
                return 'assets/svgs/metal/metal'+num+'.svg';
            case 'objPlastico':
                num = Math.floor(Math.random() * 9);
                return 'assets/svgs/plastic/plastic'+num+'.svg';
            case 'objPapel':
                num = Math.floor(Math.random() * 16);
                return 'assets/svgs/paper/paper'+num+'.svg';
            case 'objOrganico':
                num = Math.floor(Math.random() * 15);
                return 'assets/svgs/organic/organic'+num+'.svg';
            case 'objVidro':
                num = Math.floor(Math.random() * 14);
                return 'assets/svgs/glass/glass'+num+'.svg';
        }
        
        
        /*switch (num) {
            case 0:
                return 'assets/svgs/'+typeObj+'/'+typeObj+num+'.svg';
            case 1:
                return 'assets/svgs/'+typeObj+'/'+typeObj+num+'.svg';
            case 2:
                return 'assets/svgs/'+typeObj+'/'+typeObj+num+'.svg';
            case 3:
                return 'assets/svgs/'+typeObj+'/'+typeObj+num+'.svg';
            case 4:
                return 'assets/svgs/'+typeObj+'/'+typeObj+num+'.svg';
        }
        PARA A REFATORAÇÃO
        */
    }
    createTrash(){
        setInterval(() => {
            if(document.querySelectorAll("img.lixo").length < 5){ //verifica se tem menos de 5 lixos na tela
              let trash = document.createElement("img");
              trash.classList = this.chooseTrash();
              trash.src = this.chooseSVGTrash(trash.className.split(' ')[1]); //pega o segundo elemento da classe, pulado a classe lixo
              this.objetos.appendChild(trash);
            }
          }, 5000)
    }

    ganhaPonto() {
        this.pontuacao.earnScore(1000, 1);
    }
    setNewDificulty() {
        //let newDificulty = 
        this.dificuldade.setDificulty();
        this.pontuacao.changeScoreToWin(this.dificuldade.dificulty);
        this.tempo.changeTimer(this.dificuldade.dificulty); 
        console.log(this.dificuldade.dificulty)
    }
}

export { Game };