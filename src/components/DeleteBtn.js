import React from "react";

class DeleteBtn extends React.Component {
    render() {

        const handleDelete = (e) => {
            this.props.deleteTodo(e)
        }

        return (
            <button className="deleteBtn" onClick={handleDelete}>Remove</button>
        )
    }
}

export default DeleteBtn