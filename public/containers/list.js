import React, { Component } from 'react';
import { getNotesAction } from '../actions/GetNotesAction';
import Table from '../components/Table'
import { deleteNoteAction } from '../actions/DeleteNoteAction';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
    };

    componentDidMount() {
        getNotesAction()
            .then((data) => {
                this.setState(state => {
                    state.notes = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    onDelete(id) {
        deleteNoteAction(id)
            .then((data) => {
                let notes = this.state.notes.filter((note) => {
                    return note.id !== id;
                });

                this.setState(state => {
                    state.notes = notes;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    render() {
        return (
            <Table notes={this.state.notes} onDelete={this.onDelete.bind(this)} />
        );
    }
}