import React, {Component} from 'react'

class TaskText extends Component{
    render(){
        const {task, text, completed, onDelete, onComplete} = this.props

        function changeState() {
            if(completed === false)
                return true
            else
                return false
        }

        return(<div>
            <h1>{task.id + ". " + text}</h1>
            <button
                onClick={() => onDelete(task.id)}
                className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            <input type="checkbox" id={task.id} onClick={() => onComplete(changeState())}>
            </input>
        </div>)
    }
}

export default TaskText