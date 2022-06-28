const lixos = document.querySelectorAll("div.lixo");
const objetos = document.querySelector(".objects");

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
    };
});

export function chooseTrash(){
    var num = Math.floor(Math.random() * 5);
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
    }; 
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