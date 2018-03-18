import React, { Component } from 'react';


class NotesForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: this.props.title,
            body: this.props.body,
            showTitleNullWarning: false,
            showTitleTooLongWarning: false,
            showBodyNullWarning: false,
            showBodyTooLongWarning: false
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.title,
            body: nextProps.body,
            showTitleNullWarning: false,
            showTitleTooLongWarning: false,
            showBodyNullWarning: false,
            showBodyTooLongWarning: false
        });
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
        if(event.target.value.length == 0){
            this.setState({
                showTitleNullWarning: true,
                showTitleTooLongWarning: false
            });
        }
        else if((event.target.value.length > 0) && (event.target.value.length < 256)){
            this.setState({
                showTitleNullWarning: false,
                showTitleTooLongWarning: false
            });
        }
        else if(event.target.value.length > 255){
            this.setState({
                showTitleNullWarning: false,
                showTitleTooLongWarning: true
            });
        }
        
      }

    handleBodyChange(event) {
        this.setState({
            body: event.target.value
        });
        if(event.target.value.length == 0){
            this.setState({
                showBodyNullWarning: true,
                showBodyTooLongWarning: false
            });
        }
        else if((event.target.value.length > 0) && (event.target.value.length < 256)){
            this.setState({
                showBodyNullWarning: false,
                showBodyTooLongWarning: false
            });
        }
        else if(event.target.value.length > 255){
            this.setState({
                showBodyNullWarning: false,
                showBodyTooLongWarning: true
            });
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if(!this.state.showTitleNullWarning && !this.state.showTitleTooLongWarning && !this.state.showBodyNullWarning && !this.state.showBodyTooLongWarning)
        {
            if(this.state.title.length > 0 && this.state.body.length > 0){
                this.props.onSubmit(this.state);
            }
            if(this.state.title.length == 0 ){
                this.setState({
                    showTitleNullWarning: true                    
                });
            }
            if(this.state.body.length == 0){
                this.setState({
                    showBodyNullWarning: true
                });
            }

        }
        
    }

    render(){
        return(
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="title">Title:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" placeholder="Enter title" value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    {this.state.showTitleNullWarning &&
                        <p className="text-danger">
                        Please enter title.
                        </p>
                        
                    }
                    {this.state.showTitleTooLongWarning &&
                        <p className="text-danger">
                        Title should be less than 255 characters.
                        </p>
                        
                    }
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="body">Body:</label>
                    <div className="col-sm-10"> 
                        <textarea className="form-control" rows="5" placeholder="Enter body" id="body" value={this.state.body} onChange={this.handleBodyChange} ></textarea>
                    </div>
                    {this.state.showBodyNullWarning &&
                        <p className="text-danger">
                        Please enter body.
                        </p>
                        
                    }
                    {this.state.showBodyTooLongWarning &&
                        <p className="text-danger">
                        Body should be less than 255 characters.
                        </p>
                        
                    }
                </div>
                <div className="form-group">        
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-md btn-success">Submit</button>
                    </div>
                </div>
            </form>    
        );
    }
}

export default NotesForm;