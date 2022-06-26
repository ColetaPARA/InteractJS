const lixos = document.querySelectorAll("div.lixo");

lixos.forEach((lixo) => { //gera os lixos iniciais com tipos aleatoriamente escolhidos
    var num = Math.floor(Math.random() * 5);
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

/*export function add_trash(){
    setTimeout(() => {
        if(lixos.length < 5){
            console.log("falta lixo");
        }
    }, 1000)
}*/