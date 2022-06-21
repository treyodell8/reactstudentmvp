import React from "react";

class UpdateBtn extends React.Component {
    
    render() {


        const updateTodo = (id, alert) => {
            // const updatedTask = {
            //     task: alert
            // }
            // console.log(updatedTask)
            fetch('api/todos/' + id, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({  task: alert })
            })
            // .then(res => res.json())
            // .catch(error => console.error(error.message))
          }

        const handleUpdate = (e) => {
            const alert = window.prompt("Update Task:")
            if (alert.length === 0) {
                return undefined;
            }
            
            updateTodo(e.target.id, alert)
            window.location.reload()
        }

        return (
            <button 
            className="updateBtn"
            id={this.props.id}
            value={this.props.value}
            onClick={handleUpdate}>Update</button>
        )
    }
}

export default UpdateBtn;