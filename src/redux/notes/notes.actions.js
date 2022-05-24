export const GET_NOTES = 'NOTES/GET_NOTES'
export const ADD_NOTE = 'NOTES/ADD_NOTE'
export const ADD_TEXT = 'NOTES/ADD_TEXT'
export const LIKE_NOTE = 'NOTES/LIKE_NOTE'
export const DELETE_NOTE = 'NOTES/DELETE_NOTE'
export const GET_NOTES_SUCCESS = 'NOTES/GET_NOTES_SUCCESS'

export const getNotes = (search) => ({
    type: GET_NOTES,
    payload: {search}
})

export const addNote = (payload) => ({
    type: ADD_NOTE,
    payload
})

export const deleteNote = (payload) => ({
    type: DELETE_NOTE,
    payload
})

export const likeNote = (payload) => ({
    type: LIKE_NOTE,
    payload
})

export const addText = (payload) => ({
    type: ADD_TEXT,
    payload
})
