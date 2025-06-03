let btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();

    let inpFahrenheit = document.querySelector('#inpFahrenheit');
    console.log(`Fahrenheit: ${inpFahrenheit.checked}`);

    let inpCelsius = document.querySelector('#inpFahrenheit');
    console.log(`Celsius: ${inpCelsius.checked}`);
    
    let inpTemperatura = document.querySelector('#inpTemperatura');
    
    if(inpCelsius.checked){
        alert(`Resultado: ${Number((inpTemperatura.value -32) * 5/9)} Celsius`);
    }
    
    else{
        alert(`Resultado: ${Number((inpTemperatura.value * 9/5) + 32)} Fahrenheit`)
    };

    console.log(e);
});

// let inpFahrenheit = document.querySelector('#inpFahrenheit');
// let celsius = Number(form.elements.celsius);