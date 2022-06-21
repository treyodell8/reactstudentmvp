import React from 'react';
import Loading from './components/Loading';
import './App.css';
import Todos from './components/Todos';
import Input from './components/Input';
import Footer from './components/Footer';




// const apiURL = window.location.origin;

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: null,
      newTask: null,
      loading: true,
      loadingMessage: "Your app is loading, please wait..."
    }
  }

  
  componentDidMount() {
    fetch('http://localhost:8000/api/todos/')
    .then((response) => response.json())
    .then((data) => this.setState({todos: data, loading: false}))
  }

  render() {

    if (this.state.loading) {
      return (
      <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }

  return (
    <div className="App">
      <header className="App-header">
        <div className="holder-div">
        <h1 id='title'>To Do List</h1>
        <p id='description'>Input New Todo...</p>
        <Input />
        
        <Todos todos={this.state.todos} />
        <Footer />
        </div>
      </header>
    </div>
  );
    
  }

  }




 

export default App;
