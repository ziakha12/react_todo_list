"use client"

import { type } from "os";
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const Form = (props:any)=>{

    const [task,settask] = useState("");
    const [desc,setdesc] = useState("");
    const [mainTask, setmainTask]:any = useState([]);
    
    function formHandler(e:any){
        e.preventDefault();
        setmainTask([...mainTask , {task , desc}])
        setTimeout(()=>{
            settask("")
            setdesc('')
        },400)
        console.log(mainTask)
        
    }   
    const forTaskDelet = (index:number) =>{
        {let storeTask = [...mainTask];
        storeTask.splice(index,1)
        setmainTask(storeTask)
        }
    }
    let renderTask;
    if(mainTask.lenght <= 0 ){
        renderTask = <h2 className="text-white">No Task Available</h2>
    }
    else{
        renderTask = mainTask.map((task:any , index:number) =>{
            return <div className="flex justify-between my-2" key={index}>
            <h3>{task.task} {task.desc}</h3>
            <button className=" text-slate-900 text-2xl hover:text-red-500" onClick={()=>{
                forTaskDelet(index)
            }}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
        }
        )        
        console.log(setmainTask.lenght)

    }

    return(
        <>
    <form className="flex flex-wrap m-4 justify-center" onSubmit={formHandler}>
        <input 
        className="px-4 py-1 rounded-md border-zinc-400 border-4 mx-4"
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(element)=>{
        settask(element.target.value)
        }}
        />
        <input
        className="px-4 py-1 rounded-md border-zinc-400 border-4 mx-4"
        type="text"
        placeholder="Enter Your task decription"
        value={desc}
        onChange={(element)=>{
            setdesc(element.target.value)
        }}
        />
        <input type="submit" value="Add task" className="px-5 py-3 bg-green-800 text-white mx-4"/>
    </form>
    <h1 className="text-3xl my-2 text-orange-200 text-center">{props.subtitle}</h1>
    <div className="p-5 bg-slate-500 text-center w-[90%] mx-auto rounded-md">
        <p className=" text-3xl">{renderTask}</p>
    </div>
    </>
    )
}
export default Form;