import React from "react";

class UpdateBtn extends React.Component {
    render() {

        const handleUpdate = (e) => {
            this.props.updateTodo(e)
        }

        return (
            <button 
            id="updateBtn"
            onClick={handleUpdate}>Update</button>
        )
    }
}

export default UpdateBtn;