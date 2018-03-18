import fetch from 'isomorphic-fetch';

export function editNoteAction(note) {
    return fetch('http://localhost:3333/api/notes', {
        method: 'PATCH',
        mode: 'CORS',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    //.catch(err => err);
    .catch(err => {
        alert('Error: ' + err);
    });
    
  }

 