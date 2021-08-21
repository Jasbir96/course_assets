import React,{useState} from 'react'

function Todof() {
    const[tasks,setTasks]=useState([{id:1,txt:'First task'},{id:2,txt:'Second task'}]);
    const [ctask,setcTask] =useState('');
    const onChange =(e)=>{
        setcTask(e.target.value);
    }
    const onSubmit = ()=>{
        let obj = tasks;
        obj.push({id:tasks.length+1,txt:ctask});
        setTasks(obj);
        setcTask('')
    }
    return (
        <div>
                  <div className="input-container">
                <input type="text" value={ctask} onChange={onChange}/>
                <button onClick={onSubmit}>submit</button>
            </div>
            <div className='class-list'>
                <ul>
                {
                   
                    tasks.map(task=>(
                        <li key={task.id}>
                        <h1>{task.txt}</h1>
                        <button>Delete</button>
                        </li>
                    ))
                }
                </ul>
                </div>
            </div>
    )
}

export default Todof
