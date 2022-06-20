import React from 'react';
import Loading from './components/Loading';
import './App.css';
import Todos from './components/Todos';
import Input from './components/Input';




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
    fetch('http://localhost:3000/api/todos/')
    .then((response) => response.json())
    .then((data) => this.setState({todos: data, loading: false}))
  }

  render() {

    if (this.state.loading) {
      return (
      <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }



    // const newTodo = (text) => {
    //   const newText = {
    //     task: text
    //   }
      
    //   fetch('api/todos', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newText)
    //   })
    //   .then(res => res.json())
    //   .catch(error => console.error(error.message))
    // }

    const newTodo = (text) => {
      fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: "Please work" })
      })
    }


    const deleteTodo = (e) => {
      fetch('http://localhost:3000/api/todos' + e.target.id, {
        method: 'DELETE',

      })
      .then(res => res.json())
      .then(res => console.log(res))
     }

    const updateTodo = (e) => {
      fetch('http://localhost:3000/api/todos/', {
        method: 'PATCH',
        header: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(e.target.task)
      })
    }

  return (
    <div className="App">
      <header className="App-header">
        <div className="holder-div">
        <h1 id='title'>To Do List</h1>
        <p id='description'>Input New Todo...</p>
        <Input newTodo={newTodo}/>
        
        <Todos todos={this.state.todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
      </header>
    </div>
  );
    
  }

  }




 

export default App;
