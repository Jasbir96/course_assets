import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            tasks: [{id:1,txt:'First task'},{id:2,txt:'Second task'}],
            currTask:''
        }
    }
    onChange = (e)=>{
        this.setState({currTask:e.target.value})
    }
    onSubmit=()=>{
        console.log('abcd');
    //     this.state.tasks.push({id:this.state.tasks.length+1, txt:this.state.currTask});
    //   this.state.currTask='';

    let nta = [...this.state.tasks,{id:this.state.tasks.length+1, txt:this.state.currTask}]
    this.setState( {
        tasks:nta,
        currTask:''
    });
    }

    onDelete=(id)=>{
        console.log(this);
        let nta = this.state.tasks.filter(tobj=>{
            return tobj.id!==id
        })
        this.setState({tasks:nta});
    }

    render() {
        console.log('HI');
        return (
            <div>
                  <div className="input-container">
                <input type="text" value={this.state.currTask} onChange={this.onChange}/>
                <button onClick={this.onSubmit}>submit</button>
            </div>
            <div className='class-list'>
                <ul>
                {
                   
                    this.state.tasks.map(task=>(
                        <li key={task.id}>
                        <h1>{task.txt}</h1>
                        <button onClick={function(){this.onDelete(task.id)}.bind(this)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
                </div>
            </div>
        )
    }
}

