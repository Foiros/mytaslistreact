import React, {Component} from "react";

class TaskText extends Component{
    render(){
        return(<div>
            <h1>{this.props.task.id + ". " + this.props.text}</h1>
        </div>)
    }
}

export default TaskText