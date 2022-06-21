import React from "react";

class DeleteBtn extends React.Component {

    render() {

        const deleteTodo = (e) => {
            fetch('api/todos/' + e, {
              method: 'DELETE',
      
            })
            .then(res => res.json())
            .then(res => console.log(res))
           }


        const handleDelete = (e) => {
            console.log(e.target)
            deleteTodo(e.target.id)
            alert("Task removed")
            window.location.reload();
        }

        return (
            <button id={this.props.id}
            className="deleteBtn" 
            onClick={handleDelete}>Remove</button>
        )
    }
}

export default DeleteBtn;