import React, { Component } from 'react'
import InputContainer from './InputContainer'
import TaskList from './TaskList'
export default class todo extends Component {
    state = {
        tasks: [
            { id: "1", desc: "Hello" }, {
                id: "2", desc: "All"
            }, {
                id: "3", desc: "Hello"
            }],

    }
    addTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, desc: task }]
        })
    }
    handleDelete = (id) => {
        let filArr = this.state.tasks.filter((task) => {
            return task.id != id;
        });
        this.setState({
            tasks: filArr
        })
    }
    render() {
        return (
            <div>
                <InputContainer addTask={this.addTask}></InputContainer>
                <TaskList tasks={this.state.tasks}
                    handleDelete={this.handleDelete}
                ></TaskList>
            </div>
        )
    }
}