import './App.css';
import React, {Component} from "react";
import Tasks from './Tasks'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [{ id: 1, text: "Vitun paskaaa...", completed: false}],
            completedTasks: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const tasks = this.state.tasks
        const task = {id: this.state.tasks.length + 1, text: this.state.value, completed: false}
        tasks.push(task)
        this.setState({tasks})

        // Aikaisemmat ongelmat johtuivat tämän puutteesta. Tämä estää sivustoa refreshautumasta.
        // Ilmeisesti kyseinen asia tapahtuu aina submitin yhteydessä ilman tätä.
        // Eli muista pitää mukana näiden kanssa.
        // Refraushauksen puute tosin aiheuttaa sen, että kirjoitettu teksti ei katoa submit laatikosta.
        // Pidemmällä tähtäimellä meidän siis pitäisi pystyä tallentamaan input data, mutta en kyllä syvenny siihen aivan heti
        event.preventDefault();
    }

    handleDeleteTask = (taskID) => {
        const tasks = this.state.tasks.filter(t => t.id !== taskID)
        this.setState({tasks})
    }

    handleCompleteTask = (completed) => {
        if(completed){
            const completedTasks = this.state.completedTasks + 1
            this.setState({completedTasks})
            console.log(completedTasks)

            const taskCompleted = true
            this.setState({completed: taskCompleted})
        }
        else{
            const completedTasks = this.state.completedTasks - 1
            this.setState({completedTasks})
            console.log(completedTasks)

            const taskCompleted = false
            this.setState({completed: taskCompleted})
        }
    }

    render(){
        return (
            <div className="Task List by Arttu Paldán">
                <main className='Container'>
                    <Tasks
                        tasks = {this.state.tasks}
                        onDelete = {this.handleDeleteTask}
                        onComplete = {this.handleCompleteTask}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Task:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </main>
            </div>
        );
    }
}

export default App;
