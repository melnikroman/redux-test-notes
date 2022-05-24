import { takeLatest, put, call, delay } from 'redux-saga/effects'
import { GET_NOTES, GET_NOTES_SUCCESS } from "./notes.actions";
import { fetchNotes } from "../../api/notes.api";

export function* watchGetNotesSaga() {
    yield delay(200)
    yield takeLatest(GET_NOTES, getNotesWorkerSaga);
}

function* getNotesWorkerSaga(action) {
    try {
        const notes = yield call(fetchNotes, action.payload.search)
        yield put({
            type: GET_NOTES_SUCCESS,
            payload: {
                notes: [
                    ...new Set(notes.data.children
                        .map(child => child.data.title)
                    )
                ]
                    .slice(0, 10),
                search: action.payload.search
            }
        })
    } catch (error) {
        // console.log(error)
    }
}


