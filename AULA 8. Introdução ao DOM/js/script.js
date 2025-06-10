// document.body.style.backgroundColor = "red";

// let h1 = document.getElementById("titulo1");

// h1.style.backgroundColor = "red";

function changeColor(){
    let parArray = document.querySelectorAll('.button'); // obtem o primeiro elemento HTML que combina com o seletor do parametro
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < parArray.length; i++){
        parArray[i].style.backgroundColor = '#' + randomColor;
    };
    console.log(parArray);

};

function removeColor(){
    let parArray = document.querySelectorAll('.button');
    for (let i = 0; i < parArray.length; i++){
        parArray[i].style.backgroundColor = 'white';
    };
}

let bt1 = document.querySelector('button');
bt1.addEventListener('mouseover',()=>{
    changeColor();
bt1.addEventListener('click',()=>{
    removeColor();
})
});

// Faça um programa com 40 botãos que alteram o background e border color para uma cor
//aleaória usando mouseover. Caso seja um click, retira a clock