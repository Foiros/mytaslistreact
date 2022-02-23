import React, {Component} from "react"
import TaskText from "./TaskText";

class Tasks extends Component{
    render() {
        const {tasks, onDelete, onComplete} = this.props
        return(
            <div>
                {tasks.map(task => (
                    <TaskText
                            key={task.id}
                            text={task.text}
                            completed={task.completed}
                            onDelete={onDelete}
                            onComplete={onComplete}
                            task={task}
                        />
                    ))}
            </div>
        )
    }
}

export default Tasks