/* 
Faça um programa que permite buscar na API TVMaze em https://www.tvmaze.com/api

Utilizar a biblioteca Axios.

Apresentar:
* título
* as capas (imagems)
* score
das séries encontradas.
*/














document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('#inpTV');
    let form = document.querySelector('#searchForm');
    let results = document.querySelector('#results');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let tv = input.value.trim();

        try {
            let resultado = await axios.get(`https://api.tvmaze.com/search/shows?q=${tv}`);

            if (resultado.data.length == 0) {
                alert('Nenhuma obra encontrada. Por favor, verifique o nome e tente novamente.');
                return;
            }

            results.innerHTML = '';

            resultado.data.forEach(show => {
                let showInfo = show.show;
                let card = document.createElement('div');
                card.className = 'card';

                let title = document.createElement('h2');
                title.innerText = showInfo.name || 'Título não informado';

                let image = document.createElement('img');
                image.src = showInfo.image ? showInfo.image.medium : 'https://via.placeholder.com/210x295.png?text=No+Image';
                image.alt = showInfo.name;

                let score = document.createElement('p');
                score.innerText = `Score: ${show.score}`;

                card.appendChild(title);
                card.appendChild(image);
                card.appendChild(score);

                results.appendChild(card);
            });

        } catch (error) {
            console.error('Erro ao consultar o nome:', error);
            alert('Ocorreu um erro ao consultar o nome. Por favor, tente novamente mais tarde.');
        }
    });
});