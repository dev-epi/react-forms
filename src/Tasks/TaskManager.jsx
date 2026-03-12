import React, { useState } from "react";
import Task from "./Task";
import { useForm } from "react-hook-form";

export default function TaskManager() {

    const {register : addTask , handleSubmit , reset} = useForm();


    const [list  , setList] = useState([])
    const add= ( data) =>{
       
       setList([data , ...list])
       reset()
    }

    const removeTask = (index)=>{
      let tasks = list;
      tasks.splice(index , 1)

      setList([...tasks])
    }
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 card m-5 p-5">
        <h2 className="text-center">Task Manager</h2>
        <div className="card p-2">
            <form onSubmit={handleSubmit(add)}>
                <input type="text" className="form-control" placeholder="Enter your task" {...addTask('title')} />
                <input type="date" className="form-control mt-2"  {...addTask('exp_date')} />
                <select className="form-control mt-2"  {...addTask('priority')} >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>Hight</option>
                </select>
                <button className="form-control btn btn-success mt-2" type="submit">Add</button>
            </form>
        </div>
        {
            list.map((task , index)=> <Task key={index} 
            item={task} index={index}
            deleteEvent={removeTask}></Task>)
        }
       
      </div>
    </div>
  );
}
