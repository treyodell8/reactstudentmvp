
import React from "react";


class Input extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.newTodo = this.newTodo.bind(this);
    }
    
    render() {
        
        const newTodo = (text) => {
            const newText = {
              task: text
            }
            
            fetch('api/todos', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newText)
            })
            .then(res => res.json())
            .catch(error => console.error(error.message))
          }

        const handleAddTodo = (e) => {
            e.preventDefault()
            console.log(this.state.text)
            newTodo(this.state.text)
            window.location.reload()
        }

        const handleChange = (e) => {
            
            this.setState({text: e.target.value})
            
            
        }

         return (
            <div className="input-field">
                
                <form onSubmit={handleAddTodo}>
                    <input className="inputField"
                    value={this.state.text}
                    placeholder="type a new todo"
                    type="text"
                    onChange={handleChange}></input>
                    <input id="post-button" type="submit"></input>
                </form>
                
            </div>
            
        )
    }
}

export default Input;