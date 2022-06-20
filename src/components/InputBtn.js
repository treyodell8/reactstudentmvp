import React from "react";

class InputBtn extends React.Component {
    render() {

        const handlePost = (e) => {
            {this.props.newTodo(e)};
            window.location.reload();
        }

        return (
            <div className="post-button">
                <button id="post-button"
                onClick={handlePost}
                
                >
                    Post
                </button>
            </div>
            
        )
    }
}

export default InputBtn;