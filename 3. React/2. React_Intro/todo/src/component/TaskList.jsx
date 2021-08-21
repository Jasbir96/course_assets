import React, { Component } from 'react'
export default class TaskList extends Component {

    render() {
        return (
            <div>
                <div className="list-container">
                    <ul>
                        {/* <li className="item">Hello Task</li>
                            <li className="item">Hello Task</li>
                            <li className="item">Hello Task</li> */}
                        {this.props.tasks.map((itemObj) => {
                            return (
                                <React.Fragment key={itemObj.id}>
                                    <li className="item">{itemObj.desc}</li>
                                    <button onClick={() => { this.props.handleDelete(itemObj.id) }}>X</button>
                                </React.Fragment>

                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
