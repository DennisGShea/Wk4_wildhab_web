
function getEvents()  {

fetch('http://wildhab-api-d.web.app/events')

    .then(response => response.json())
    .then(data => document.getElementById('events').innerHTML = JSON.stringify(data))

.catch(error => console.log('error', error))  
}