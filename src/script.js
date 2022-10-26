const preload = document.querySelector('.preloader');
const loading = document.querySelector('.loading');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const bloc = document.querySelector('.bloc');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const cursor = document.querySelector('.cursor');
const cursorContent = document.querySelector('.cursorContent');

//preloader animation
window.addEventListener('load', () => {
    loading.classList.toggle('finished');
    preload.classList.toggle('done');
    setTimeout(() => {
        preload.classList.toggle('translated');
    }, 1000);
        content.classList.toggle('translate');
    setTimeout(() => {
        content.classList.toggle('expand');
    }, 1000);
    setTimeout(() => {
        bloc.classList.toggle('rotate1');
    }, 1000);
    setTimeout(() => {
        left.classList.toggle('loadLeft');
    }, 1000);
    setTimeout(() => {
        right.classList.toggle('loadRight');
    }, 1000);
    setTimeout(() => {
        cursorContent.classList.toggle('show');
    }, 1000);
    
});
//title animation
const textSplitted = title.textContent.split('');
title.innerHTML = '';
textSplitted.forEach(letter => {
    if (letter === ' ')
        title.innerHTML += '<span>' + '&nbsp;' + '</span>';
    else
        title.innerHTML += '<span>' + letter + '</span>';
});
let char = 0;
let timer = setInterval(onTik, 50);
function onTik(){
    let span = document.querySelectorAll('h1 span')[char];
    span.classList.add('spanFade');
    char++;
    if (char === textSplitted.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}
//cursor animation
window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})