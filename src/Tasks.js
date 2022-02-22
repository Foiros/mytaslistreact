import React, {Component} from "react"
import TaskText from "./TaskText";

class Tasks extends Component{
    render() {
        const {tasks} = this.props
        return(
            <div>
                {tasks.map(task => (
                    <TaskText
                            key={task.id}
                            text={task.text}
                            task={task}
                        />
                    ))}
            </div>
        )
    }
}

export default Tasks