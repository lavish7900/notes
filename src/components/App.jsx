import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App(){

const [text,setText]=useState({
    title:"",
    content:""
})
const [notes,setNotes]=useState([]);

function handlechange(event){
const {value,name}=event.target;

setText((prevValue)=>{
    return {
        ...prevValue,
        [name]:value
    }
})

}

function handleclick(){

    setNotes((prevValue)=>{
        return [...prevValue,text]
    });
    setText({
        title:"",
        content:""
    })
}

    return (<div>
    <header>
    <Header /> 
     </header>
       
       <div>     
  <input onChange={handlechange} type="text" placeholder="Notes-Title" name="title" value={text.title} />
  <input onChange={handlechange} type="text" placeholder="content" name="content"   value={text.content} /> 
<button  onClick={handleclick} className="button button2">save</button>
       </div>

       {notes.map((note)=>{
           return  <div className="note"> 
                        <h1 >{note.title}</h1>
                        <p>{note.content}</p>
                  </div> 
       })}
      
     <footer> 
     <Footer />
     </footer>

    </div>
    ) 
    }

export default App;