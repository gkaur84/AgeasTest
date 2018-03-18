import React, { Component } from 'react';
import NotesForm from '../components/NotesForm';
import { createNoteAction } from '../actions/CreateNoteAction';
import { withRouter } from 'react-router';


export default class CreateNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
                
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
   
    
    handleSubmit(data) {
        //alert('Data received is: ' + JSON.stringify(data));
        createNoteAction(data);    
        this.props.router.push('/');
        //this.props.router.push('/').bind(this);   
        //event.preventDefault();
        
      }

    render(){
        return(
            <div>
                <h4>Create new note</h4>
  <p>Please create the note along with an appropriate title</p>
                <div>
                <NotesForm title={this.state.title} body={this.state.body} onSubmit={this.handleSubmit} />
                </div>
            </div>            
        );
    }
}