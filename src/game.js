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


setInterval(() => {
    if(timer < 5){
        console.log(time);
        timer ++;
        times.innerHTML = timer;
    }
    else{
        stopGame();
        console.log("fazer algo para parar o jogo");    
    }  
}, 1000);

function stopGame (){
    
}
/*
// Timer with 1000ms (1 second) base interval resolution.
const timer = new TaskTimer(1000);

// Add task(s) based on tick intervals.
timer.add({
    id: 'job1',         // unique id of the task
    tickInterval: 5,    // run every 5 ticks (5 x interval = 5000 ms)
    totalRuns: 10,      // run 10 times only. (omit for unlimited times)
    callback(task) {
        // code to be executed on each run
        console.log(task.name + ' task has run ' + task.currentRuns + ' times.');
        // stop the timer anytime you like
        if (someCondition()) timer.stop();
        // or simply remove this task if you have others
        if (someCondition()) timer.remove(task.id);
    }
});

// Start the timer
timer.start();
*/
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