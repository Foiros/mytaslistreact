import './App.css';
import React, {Component} from "react";
import Tasks from './Tasks'

// What else do I want to add to this program?
// 1. Way to calculate the percentage of completed tasks
// 1.1. In order to do this, we need way to count completed tasks
// 2. Probably should comment the code, despite it being my personal project
// 3. Way to save the tasks or rather the whole list and get it on the screen

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [],
            date: new Date().toLocaleString()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this)
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

    render(){
        return (
            <div
                className="Task List by Arttu Paldán">
                <main className='Container'>
                    <h1>
                        Tasks on {this.state.date}
                    </h1>
                    <Tasks
                        tasks = {this.state.tasks}
                        onDelete = {this.handleDeleteTask}
                    />
                    <form
                        onSubmit={this.handleSubmit}>
                        <label>
                            Task:
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </label>
                        <input
                            type="submit"
                            value="Submit" />
                    </form>
                </main>
            </div>
        );
    }
}

export default App;
