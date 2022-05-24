import { ADD_NOTE, DELETE_NOTE, GET_NOTES, GET_NOTES_SUCCESS, LIKE_NOTE } from "./notes.actions";

const initial = {
    fetchedNotes: [],
    addedNotes: [],
    search: '',
    loading: false
}

export const notesReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                loading: true
            };
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                fetchedNotes: action.payload.notes,
                search: action.payload.search,
                loading: false
            };
        case ADD_NOTE: {
            return {
                ...state,
                addedNotes: [
                    ...state.addedNotes,
                    {
                        id: state.addedNotes.length,
                        title: action.payload,
                        favourite: false
                    }
                ],
                fetchedNotes: [],
                search: ''
            };
        }
        case DELETE_NOTE: {
            return {
                ...state,
                addedNotes: state.addedNotes
                    .filter(note => note.id !== action.payload)
            }
        }
        case LIKE_NOTE: {
            return {
                ...state,
                addedNotes: state.addedNotes
                    .map(note => ({
                        ...note,
                        favourite: note.id === action.payload
                            ? !note.favourite
                            : note.favourite
                    }))
            }
        }
        default:
            return state;
    }
}
