import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Table extends Component {

    constructor(props) {
        super(props);
    };

    deleteHandler(i, e) {
        e.preventDefault();
        this.props.onDelete(this.props.notes[i].id);
    };

    render() {
        return (
            <div>
                <table className="table table-hover table-responsive">
                    <thead>
                    <tr>
                        <th>Note Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.notes && this.props.notes.map((note, i) => {
                        return (
                            <tr key={note.id}>
                                <td>{note.id}</td>
                                <td>{note.title}</td>
                                <td>{note.body}</td>
                                <td>
                                    
                                <Link to={`/notes/edit/${note.id}`} className="btn btn-info btn-sm">Edit</Link>
                                    
                                    <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn>
                                </td>
                            </tr>);
                    })}
                    </tbody>
                </table>

                <Link to="/notes/create" className="btn btn-md btn-success">Create a new Note</Link>
            </div>
        );
    }
}