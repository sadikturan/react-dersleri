import React from 'react'

const Note = ({note,removeNote}) => {

    return (
        <tr key={note.title}>
            <td style={{width: '40%'}}>{note.title}</td>
            <td>{note.body}</td>
            <td style={{width: '3%'}}>
                <button onClick={()=> removeNote(note.title)} className="btn btn-sm btn-danger">
                    <i className="far fa-times"></i>
                </button>
            </td>
        </tr>   
    )
}

export default Note