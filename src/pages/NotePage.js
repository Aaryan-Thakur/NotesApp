import React , {useState} from 'react'
// import notes from '../assets/data'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const NotePage = () => {
 let noteId = useParams();
 console.log(noteId.id);
//  let note = notes.find(note => note.id === Number(noteId.id))
let [note,setNotes] = useState([]);
 
return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to = "/">Back</Link>
        </h3>
      </div>

     <textarea value={note?.body}>

     </textarea>
    </div>
  )
}

export default NotePage