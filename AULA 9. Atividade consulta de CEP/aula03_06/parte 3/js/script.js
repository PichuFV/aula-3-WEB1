/*
    Faça um programa que consulta um cep obtido em um input e apresenta na página:
        * Bairro
        * Estado
        * UF
        * Localidade
        * Logradouro
*/
document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('#inpCEP');
    let btnEnviar = document.querySelector('#btnEnviar');

    btnEnviar.addEventListener('click', async (e) => {
        e.preventDefault();
        let cep = input.value.trim();

        if (cep.length !== 8 || !/^\d{8}$/.test(cep)) {
            alert('CEP inválido. Por favor, digite um CEP com 8 dígitos.');
            return;
        }

        try {
            let resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (resultado.data.erro) {
                alert('CEP não encontrado. Por favor, verifique o CEP e tente novamente.');
                return;
            }

            document.querySelector('#bairro').innerText = resultado.data.bairro || 'Não informado';
            document.querySelector('#estado').innerText = resultado.data.localidade || 'Não informado';
            document.querySelector('#uf').innerText = resultado.data.uf || 'Não informado';
            document.querySelector('#localidade').innerText = resultado.data.localidade || 'Não informado';
            document.querySelector('#logradouro').innerText = resultado.data.logradouro || 'Não informado';

        } catch (error) {
            console.error('Erro ao consultar o CEP:', error);
            alert('Ocorreu um erro ao consultar o CEP. Por favor, tente novamente mais tarde.');
        }
    });
});