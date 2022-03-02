import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit= (e)=>{
        e.preventDefault();
        if( !title || !desc)
        {
            alert("title or desc cant be blank");
        }
        else{
        props.addTodo(title,desc);
        setDesc("");
        setTitle("");
        }
    }
    
    return (
        <div className='container'>
            <h4 className='my-2 text-dark'> Add a new Todo</h4>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Add Todo Title</label>
                    <input type="text" class="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                        
                </div>
                <div class="mb-3">
                    <label for="todo description" class="form-label">Todo Description</label>
                    <input type="text" class="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
