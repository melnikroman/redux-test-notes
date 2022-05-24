import './Search.css'
import { useDispatch, useSelector } from "react-redux";
import { addNote, getNotes } from "../../redux/notes/notes.actions";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";

const Search = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.fetchedNotes)
    const searchValue = useSelector(state => state.notes.search)
    const search = (event) => {
        dispatch(getNotes(event.target.value))
    }
    const selectNote = (event) => {
        if (!event.target.textContent.trim()) {
            return;
        }
        dispatch(addNote(event.target.textContent))
    }

    return (
        <div className="row">
            <Autocomplete
                onInput={search}
                options={notes}
                onChange={selectNote}
                noOptionsText={'No found'}
                value={searchValue}
                renderInput={(params) =>
                    <TextField {...params} label="Subbreddit"/>
                }>
            </Autocomplete>
            <button className="btn btn-info">
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default Search
