import fetch from 'isomorphic-fetch';

export function deleteNoteAction(id){
    return  fetch('http://localhost:3333/api/notes/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => res.json())
    //.catch(err => err);
    .catch(err => {
        alert('Error: ' + err);
    });
}