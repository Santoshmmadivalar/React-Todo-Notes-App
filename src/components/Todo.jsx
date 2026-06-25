import React, {useState} from "react";


function Todo(){

const [task,setTask] = useState("");

const [tasks,setTasks] = useState([]);



const addTask = ()=>{

 if(task.trim()){

 setTasks([
  ...tasks,
  {
   id:Date.now(),
   text:task,
   completed:false
  }
 ]);

 setTask("");

 }

}



const completeTask=(id)=>{

setTasks(
 tasks.map(item=>

 item.id===id

 ? {...item, completed:!item.completed}

 : item

 )

)

}



const deleteTask=(id)=>{

setTasks(
 tasks.filter(item=>item.id!==id)
)

}



return(

<div className="box">

<h2>✅ To-Do List</h2>


<input

type="text"

placeholder="Enter Task"

value={task}

onChange={(e)=>setTask(e.target.value)}

/>


<button onClick={addTask}>
Add Task
</button>



{
tasks.map(item=>(

<div className="item" key={item.id}>


<span

onClick={()=>completeTask(item.id)}

className={item.completed?"done":""}

>

{item.text}

</span>


<button

onClick={()=>deleteTask(item.id)}

>

Delete

</button>


</div>


))

}


</div>

)


}


export default Todo;