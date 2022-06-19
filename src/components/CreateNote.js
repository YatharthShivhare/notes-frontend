import React from "react";
import "./css/CreateNote.css";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

function CreateNote() {
    const [newNote, setNewNote] = React.useState({ title: "", content: "" });
    function handleOnChange(event) {
        const { name, value } = event.target;
        setNewNote({
            ...newNote,
            [name]: value
        });
    }

    const api = axios.create({
        baseURL: "http://localhost:3001"
    });
    function handleClick() {
        console.log("Button clicked.");
        api.post("/notes", {
            title: newNote.title,
            content: newNote.content
        })
            .then((res) => {
                console.log("Note posted successfully");
                console.log("Status" + res.status);
                setNewNote({title:"", content:""})
            })
            .catch((err) => {
                console.log("An error occurred while posting the note to the server");
                console.log(err);
            });
    }

    return (
        <div className="CreateNote">
            <Card variant="outlined" sx={{ width: "50%", alignContent: "center", margin: 0, padding: "1%" }}>
                <div className="fields">
                    <Grid container>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                className="title-field"
                                name="title"
                                aria-label="empty textarea"
                                placeholder="Title"
                                style={{ width: "100%" }}
                                value={newNote.title}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                className="content-field"
                                name="content"
                                minRows={3}
                                aria-label="empty textarea"
                                placeholder="Content"
                                style={{ width: "100%" }}
                                value={newNote.content}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" className="button" onClick={handleClick} sx={{ backgroundColor: "#1B2430", padding: 0.1, margin: 1, marginLeft: 0 }}>
                                <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Card>
        </div>
    );
}

export default CreateNote; 