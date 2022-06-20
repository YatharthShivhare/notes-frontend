import React from "react";
import { Grid } from '@mui/material';
import Note from "./Note";
import "./css/NotesArea.css"
import axios from "axios";

function NotesArea() {
    const [ noteList, setNoteList ] = React.useState([]);
    

    React.useEffect(() => {
        const api = axios.create({
            baseURL: "http://localhost:3001"
        });
        api.get("/notes")
            .then((res) => {
                console.log("Notes retrieved successfully");
                console.log("Status" + res.status);
                setNoteList(res.data);
            })
            .catch((err) => {
                console.log("An error occurred while retrieving the notes to the server");
                console.log(err);
            });
    },[]);


    return (
        <div className="NotesArea">
            <Grid container spacing={2}>
                {noteList?.map(
                    note => <Note key={note._id} _id={note._id} title={note.title} content={note.content} />
                )}
            </Grid>
        </div>
    );
}

export default NotesArea;