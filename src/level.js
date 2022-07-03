var dificuldade;

var facil = document.querySelector("#easy").addEventListener("click", () => {
    dificuldade = 'easy';
});
var medio = document.querySelector("#medium").addEventListener("click", () => {
    dificuldade = 'medium';
});
var dificil = document.querySelector("#hard").addEventListener("click", () => {
    dificuldade = 'hard';
});

export {dificuldade};