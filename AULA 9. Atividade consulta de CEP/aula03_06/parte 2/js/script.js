/*
    Mova o único botão da página com as setas do teclado.
    const button = document.getElementById('myButton');
*/

let button = document.querySelector('#btnMove');

document.addEventListener('keydown', function(event) {
    let top = parseInt(button.style.top) || 0;
    let left = parseInt(button.style.left) || 0;
    button.style.position = 'absolute';

    if (event.key == 'ArrowUp') {
        button.style.top = (top - 10) + 'px';
    } else if (event.key == 'ArrowDown') {
        button.style.top = (top + 10) + 'px';
    } else if (event.key == 'ArrowLeft') {
        button.style.left = (left - 10) + 'px';
    } else if (event.key == 'ArrowRight') {
        button.style.left = (left + 10) + 'px';
    }
});