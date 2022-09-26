import React,{useEffect} from 'react'
import {Link,redirect} from 'react-router-dom'
import DeleteButton from './DeleteButton'
import NotesListPage from '../pages/NotesListPage'







const Listitem = ({note}) => {

  let getTitle = (note)=>{
    let title = note.body.split("\n")[0];
    if(title.length>=10){
    title = title.slice(0,10) + "...";
    }
    
    return title;
  }

  let getDate = (note) =>{
    let date = note.updated;
    date = date.slice(0,10);
    return date;
  }

  let getContent = (note) =>{
    let title = getTitle(note);
    let content = note.body;
    content = content.replaceAll(title,"");
    if(content.length>=10){
      content = content.slice(0,10) + "...";
      }
    return content.slice(0,45);
  }

  let deleteNote = async(id) =>{
    await fetch(`http://127.0.0.1:3001/notes/${id}`,{
      method :'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({...note,'updated': new Date()})
    })

    redirect("/");


  }
  

  return (
    

    <Link to={`/note/${note.id}`}>

      <div className='notes-list-item'>
        <h3>{getTitle(note)}</h3>
        <div onClick={()=>{deleteNote(note.id)} } className="delete-container"><DeleteButton/></div>
        
        <span className='date'>{getDate(note)}</span>
        <span className='content'>{getContent(note)}</span>
      </div>
      
    </Link>


   
  )
}

export default Listitem