import fetch from 'isomorphic-fetch';

export function getNotesAction() {
    return fetch('http://localhost:3333/api/notes', {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    //.catch(err => err);
    .catch(err => {
        alert('Error: ' + err);
    });
    
  }

export function getNoteAction(id){
    return  fetch('http://localhost:3333/api/notes/' + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    //.catch(err => err);
    .catch(err => {
        alert('Error: ' + err);
    });
}
