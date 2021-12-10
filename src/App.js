import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const appStyle = {
      width: '50%',
      display: "inline-block"
    }
    const app2Style = {
      paddingLeft: '40%',
      display: "inline-block"
    }
    return (
      <div className="container">
        <div className="panel panel-default" style={appStyle}>
          <div className="panel-heading">
            <h3 className="panel-title">
              REQUEST LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Add Request</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Request Name</th>
                  <th>Details</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>
                    <Link to={{ 
                      pathname: `/show/${board.key}`
                     }}>
                       {board.title}
                    </Link>
                    </td>
                    <td>{board.description}</td>
                      <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div style={app2Style}>
          Right content
        </div>
      </div>
    );
  }
}

export default App;
