import React from 'react'
import { addTodo } from '../redux/action'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
function TodoInputs() {
    let [name, setName]=useState();
    let dispatch = useDispatch();
    return (
        <div className='row m-2'>

           <input 
           onChange={(e)=>setName(e.target.value)}
           value={name}
           type='text' className='col form-control' />
           <button  onClick={()=>
         {  dispatch (addTodo(
              { id: uuid(),
               name :name
            }
           ));
        setName('');}}

        className=' btn btn-primary mx-2'>ADD</button>
        </div>
    )
}

export default TodoInputs
