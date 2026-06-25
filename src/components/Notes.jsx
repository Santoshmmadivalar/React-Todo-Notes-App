import React,{useState} from "react";


function Notes(){


const [note,setNote]=useState("");

const [notes,setNotes]=useState([]);



const addNote=()=>{


if(note.trim()){


setNotes([

...notes,

{

id:Date.now(),

text:note

}

])


setNote("");

}


}



const deleteNote=(id)=>{


setNotes(

notes.filter(item=>item.id!==id)

)

}



return(

<div className="box">


<h2>📒 Notes</h2>



<textarea

placeholder="Write your note"

value={note}

onChange={(e)=>setNote(e.target.value)}

>


</textarea>


<button onClick={addNote}>

Save Note

</button>



{

notes.map(item=>(


<div className="item" key={item.id}>


<p>{item.text}</p>


<button

onClick={()=>deleteNote(item.id)}

>

Delete

</button>


</div>


))

}


</div>

)

}


export default Notes;