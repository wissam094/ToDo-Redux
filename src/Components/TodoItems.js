import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/action'
import {useState} from 'react'
function TodoItems({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name)
let dispatch = useDispatch()
    return (
        <div>
        <div className='row mx-2 align-items-center'>
            <div>#{todo.id.length >1 ? todo.id[2] : todo.id}</div> 
            <div className='col'>
                {editable?  <input type='text' className='form-control' Value={name}
                onChange={(e)=>setName(e.target.value)}
                /> :  <h4>{todo.name}</h4> }
              
                </div>  
            <button onClick={()=>{
                dispatch(updateTodo(
                    {
                        ...todo,
                        name: name,
                    }
                ))
                if (editable){
                    setName(todo.name);
                }
setEditable(!editable)

            }} 
             className='btn btn-primary m-2' >{editable? "Update": "Edit"}</button> 
            <button className=' btn btn-danger m-2' onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItems
