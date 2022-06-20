
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
        
        

        const handleAddTodo = (e) => {
            e.preventDefault()
            console.log(this.state.text)
            this.props.newTodo(this.state.text)
        }

        const handleChange = (e) => {
            
            this.setState({text: e.target.value})
            
            
        }

         return (
            <div className="input-field">
                
                <form onSubmit={handleAddTodo}>
                    <input value={this.state.text}
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