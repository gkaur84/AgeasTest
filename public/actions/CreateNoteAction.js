import fetch from 'isomorphic-fetch';

export function createNoteAction(data) {
    return fetch('http://localhost:3333/api/notes', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    //.catch(err => err);
    .catch(err => {
        alert('Error: ' + err);
    });
    
  }