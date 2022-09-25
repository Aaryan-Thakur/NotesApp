import React from 'react'
import {Link} from 'react-router-dom'


const Listitem = ({note}) => {

  let getTitle = (note)=>{
    let title = note.body.split("\n")[0];
    
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
    return content.slice(0,45);
  }
  

  return (
    

    <Link to={`/note/${note.id}`}>

      <div className='notes-list-item'> 
        <h3>{getTitle(note)}</h3>
        <div>{getDate(note)} 
             {getContent(note)}</div>
      </div>
      
    </Link>


   
  )
}

export default Listitem