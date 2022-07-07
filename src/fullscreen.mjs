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