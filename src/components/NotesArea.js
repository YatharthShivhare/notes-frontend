import React from "react";
import { Grid } from '@mui/material';
import Note from "./Note";
import "./css/NotesArea.css"
import noteList from "../mockNoteList";

function NotesArea() {
    return (
        <div className="NotesArea">
            <Grid container spacing={2}>
                {noteList.map(
                    note => <Note key={note.id} id={note.id} title={note.title} content={note.content} />
                )}
            </Grid>
        </div>
    );
}

export default NotesArea;