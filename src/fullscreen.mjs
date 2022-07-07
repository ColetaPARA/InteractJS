function getFullscreenElement(){
    return document.fullscreenElement;
}

function toggleFullscreen() {
    if(getFullscreenElement()){
        document.exitFullscreen();
    }
    else{
        document.documentElement.requestFullscreen().catch(console.log);
    }
}

window.goFS = function(){
    toggleFullscreen();
}

/*
CLICK NA TELA INTEIRA PARA IR PARA O FULLSCREEN
document.addEventListener("click", () => {
    toggleFullscreen();
})*/
/*
EVENTO APENAS PARA MOSTRAR QUE TEVE ALTERNANCIA ENTRE O FULLSCREEN
document.addEventListener("fullscreenchange", () => {
    console.log('Full Screen Changed');
});*/