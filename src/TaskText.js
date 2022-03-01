import React, {Component} from 'react'

class TaskText extends Component{
    constructor(props) {
        super(props)
        this.state = {
            completed: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const completed = target.checked
        this.setState({completed})
    }

    render(){
        const {task, text, onDelete} = this.props

        return(<div>
            <h1>{task.id + ". " + text}</h1>
            <button
                onClick={() => onDelete(task.id)}
                className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            <label>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.handleChange}
                />
                Completed
            </label>
        </div>)
    }
}

export default TaskText