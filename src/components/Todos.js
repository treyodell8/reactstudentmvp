import React from "react";
import TodoItem from "./TodoItem";
import DeleteBtn from "./DeleteBtn"
import UpdateBtn from "./UpdateBtn";

class Todos extends React.Component {
    render() {
        return (
            this.props.todos.map((elem) => {
                return (
                    <div id={elem.id}>
                        <TodoItem elem={elem} key={elem.id} 
                        />
                        <div className="Buttons">
                            <DeleteBtn id={elem.id}/>
                            <UpdateBtn id={elem.id} value={elem.task}/>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Todos;