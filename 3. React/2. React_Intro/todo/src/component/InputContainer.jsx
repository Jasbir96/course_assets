import React, { Component } from 'react'

export default class InputContainer extends Component {
    state = {
        currentTask: ""
    }

    render() {
        return (
            <div className="input-container">
                <input type="text" value={this.state.currentTask} onChange={(e) => {
                    this.setState({
                        currentTask: e.target.value
                    });
                }} />
                {/* slower way  */}
                {/* <input type="text"/> */}
                <button type="submit" className="add" onClick={() => {
                    this.props.addTask(this.state.currentTask)
                    this.setState({ currentTask: "" })
                }}>Add</button>
            </div>
        )
    }
}
