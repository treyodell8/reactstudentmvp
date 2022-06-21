import React from "react";



class TodoItem extends React.Component {
    render() {
        return (
            <div className="individual-item" id={this.props.elem.id}>
        
                {this.props.elem.task}
                
                
            </div>
        )
    }
}

export default TodoItem;