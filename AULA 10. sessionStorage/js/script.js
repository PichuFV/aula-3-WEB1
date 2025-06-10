/*
    Crie uma aplicação de gerenciamento de eventos de uma agenda.
    A aplciação deve permitir cadastrar, listar, editar e excluir eventos com atributos:
    * data e hora
    * local
    * título

    Exemplo:

let cliente = {
    nome: "Fulano",
    idade: 18}

localStorage['cliente'] = JSON.stringify(cliente);
console.log(localStorage['cliente']);

let obj = JSON.parse(localStorage['cliente']);
obj['nome'] = ['ciclano'];
localStorage['cliente'] = JSON.stringify(obj);
console.log(localStorage['cliente']);
*/

let events = [];

window.onload = function() {
    const storedEvents = sessionStorage.getItem('events');
    if (storedEvents) {
        events = JSON.parse(storedEvents);
    }
    displayEvents();
};

function addEvent(event) {
    events.push(event);
    sessionStorage.setItem('events', JSON.stringify(events));
    displayEvents();
}

function displayEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${event.title}</strong><br>
            Data e Hora: ${event.datetime}<br>
            Local: ${event.location}
        `;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editEvent(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteEvent(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        eventList.appendChild(li);
    });
}

function editEvent(index) {
    const event = events[index];
    const newTitle = prompt('Editar Título:', event.title);
    const newDatetime = prompt('Editar Data e Hora:', event.datetime);
    const newLocation = prompt('Editar Local:', event.location);

    if (newTitle && newDatetime && newLocation) {
        event.title = newTitle;
        event.datetime = newDatetime;
        event.location = newLocation;
        sessionStorage.setItem('events', JSON.stringify(events));
        displayEvents();
    }
}

function deleteEvent(index) {
    events.splice(index, 1);
    sessionStorage.setItem('events', JSON.stringify(events));
    displayEvents();
}

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const datetime = document.getElementById('datetime').value.trim();
    const location = document.getElementById('location').value.trim();

    if (title && datetime && location) {
        const newEvent = { title, datetime, location };
        addEvent(newEvent);
        this.reset();
    }
});