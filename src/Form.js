import React, { useState } from "react";
import "./Form.css"

const Form = (props) => {

    const [work, setWork] = useState("")

    const setWorkHandler = (event) => {
        setWork(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(work.trim().length === 0){
            return;
        }

        props.workSet(work);
        setWork("");
    }

    return (
        <div>
            <h1>To-do-List</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input className="input_section" 
                    type="text" 
                    onChange={setWorkHandler} 
                    value={work}>
                    </input>
                </div>
                <button className="form_button" type="submit">Add this Work</button>
            </form>
        </div>
    )
}

export default Form;