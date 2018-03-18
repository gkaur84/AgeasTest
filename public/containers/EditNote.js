import React, { Component } from 'react';
import NotesForm from '../components/NotesForm';
import { editNoteAction } from '../actions/EditNoteAction';
import { getNoteAction } from '../actions/GetNotesAction';

export default class EditNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '' ,
            id: this.props.params.id          
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        
        getNoteAction(this.state.id)
            .then((data) => {
                this.setState(state => {
                    state.title = data.title;
                    state.body = data.body;
                    return state;
                })
                                
            })
            .catch((err) => {
                console.error('err', err);
            });
    }
   
    
    handleSubmit(data) {
        let note = {
            id: this.state.id,
            title: data.title,
            body: data.body
        }
        //alert('Data to be sent for update is: ' + JSON.stringify(note));
        editNoteAction(note);
        this.props.router.push('/');
        //event.preventDefault();
      }

    render(){
        return(
            <div>
                <h4>Edit note</h4>
  <p>Please check the data and update accordingly</p>
            <div>
                <NotesForm title={this.state.title} body={this.state.body} onSubmit={this.handleSubmit} />
            </div>
            </div>            
        );
    }
}