import { useDispatch, useSelector } from "react-redux";
import './Notes.css'
import { addText, deleteNote, likeNote } from "../../redux/notes/notes.actions";

const Notes = () => {
    const notes = useSelector(state => state.notes.addedNotes)
    const dispatch = useDispatch()
    const changeNote = (event, id) =>
        dispatch(addText({
            id,
            text: event.target.value
        }))

    return (
        <div className="pt-3">
            <div className="row header">
                <div className="col">
                    Link
                </div>
                <div className="col">
                    Note
                </div>
            </div>
            {
                notes.length > 0
                    ? notes.map((note) => (
                            <div className="note">
                                <div className="title">{note.title}</div>
                                <i className={`bi bi-star${note.favourite ? '-fill' : ''}`}
                                   onClick={() => dispatch(likeNote(note.id))}></i>

                                <textarea
                                    onChange={(event) => changeNote(event, note.key)}
                                    value={note.text}>
                            </textarea>

                                <i className="bi bi-trash"
                                   onClick={() => dispatch(deleteNote(note.id))}>
                                </i>
                            </div>
                        )
                    )
                    : (<div className="no-data-cnt">
                        <i className="bi bi-briefcase"></i>
                        <div>no data</div>
                    </div>)

            }
        </div>
    )
}
export default Notes;
