import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            tasks: [{id:1,txt:'First task'},{id:2,txt:'Second task'}],
 
        }
    }
 
    onSubmit=(task)=>{
        console.log('abcd');
    //     this.state.tasks.push({id:this.state.tasks.length+1, txt:this.state.currTask});
    //   this.state.currTask='';

    let nta = [...this.state.tasks,{id:this.state.tasks.length+1, txt:task}]
    this.setState( {
        tasks:nta,
      
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
           <React.Fragment>
               <InputComponent submit={this.onSubmit}/>
               <TaskList onDelete={this.onDelete} />
           </React.Fragment>
        )
    }
}

 class InputComponent extends Component  {
     constructor(props)
     {
         super(props);
         this.state={
             cstate:''
         }
         changefn=(e)=>{
             this.setState({cstate:e.target.value})
         }
     }
    render() {
        return (
            <div className="input-container">
            <input type="text" value={this.state.cstate} onChange={(e)=>this.changefn(e)}/>
            <button onClick={()=>{
                this.props.submit(taskString)
                this.setState({cstate:''})
            }}>submit</button>
        </div>
        )
    }
}

class TaskList extends Component {
    constructor(props)
    {
        super(props);
    }
   render() {
       return (
        <div className='class-list'>
        <ul>
        {
           
            this.state.tasks.map((task,index)=>(
                
                <li key={index}>
                <h1>{task.txt}</h1>
                <button onClick={()=>this.props.onDelete(task.id)}>Delete</button>
                </li>
            ))
        }
        </ul>
        </div>
       )
   }
}


