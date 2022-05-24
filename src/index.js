import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { rootReducer } from "./redux/root.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { watchGetNotesSaga } from "./redux/notes/notes.saga";

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        sagaMiddleware
    ]
})

sagaMiddleware.run(watchGetNotesSaga)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

