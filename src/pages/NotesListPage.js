import React, {useEffect, useState} from 'react'
// import notes from '../assets/data'
import Listitem from '../components/Listitem'

const NotesListPage = () => {

  let [notes,setNotes] = useState([]);

  useEffect(()=>{


  },[]);

  let getNotes = async() => {

    let respone  = await fetch('https://localhost:3001/notes/')
    let data = await respone.json()


  }

  return (
    <div className='notes'>
        <div className="notes-header">
          <h2 className='notes-title'>&#9782; Notes</h2>
          <p className='notes-count'>{notes.length}</p>
        </div>

      <div className='notes-list'>
        {
          notes.map((note,index) =>(
            <Listitem key={index} note={note} />
          ) )
        }
      </div>

    </div>
  )
}

export default NotesListPage