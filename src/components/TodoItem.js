import React from "react";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";


class TodoItem extends React.Component {
    render() {
        return (
            <div className="individual-item" id={this.props.elem.id}>
        
                {this.props.elem.task}
                <DeleteBtn id={this.props.elem.id} deleteTodo={this.props.deleteTodo}/>
                <UpdateBtn updateTodo={this.props.updateTodo}/>
            </div>
        )
    }
}

export default TodoItem;