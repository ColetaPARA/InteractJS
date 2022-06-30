const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (_event)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
});