import React from "react";
import { Grid } from '@mui/material';
import Note from "./Note";
import "./css/NotesArea.css"

function NotesArea() {
    return (
        <div className="NotesArea">
            <Grid container spacing={2}>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </Grid>
        </div>
    );
}

export default NotesArea;