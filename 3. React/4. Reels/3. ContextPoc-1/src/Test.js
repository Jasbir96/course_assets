import React,{useState} from 'react'

function Test() {
    console.log('render')
    const [name,setName] = useState('');
    const onchange = (e)=>{
        setName(e.target.value);
    }
    return (
        <div>
            <input type='text' onChange={(e)=>onchange(e)}/>
        </div>
    )
}

export default Test
