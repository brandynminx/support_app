import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link, Navigate } from 'react-router-dom';

var hideCode = false;

class Create extends Component {

  constructor() {
    hideCode = false;
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    if(this.state.author === '' || this.state.description === '' || this.state.title === ''){
        alert("Please fill out all fields.")
    } else{
    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    hideCode = true;
    } //End if
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/" className="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Request:</label>
                <select className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title">
                    <option value="laptop">Laptop</option>
                    <option value="headphone">Headphones</option>
                    <option selected value="printer">Printers</option>
                    <option value="wiring">Wiring</option>
                </select>
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description"/>
              </div>
              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
              <div>
                {hideCode
                    ? <Navigate to={`/`} />
                    : "\n Please enter data."
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;