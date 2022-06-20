import React from "react";
import { Card } from "@mui/material";
import { Grid } from '@mui/material';
import "./css/Note.css";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Note(props) {
    const api = axios.create({
        baseURL: "http://localhost:3001"
    });

    function handleDeleteClick() {
        api.delete("/notes/" + props._id)
            .then((res) => {
                console.log("Note (" + props._id + ") deleted successfully.");
                console.log("Status" + res.status);
            })
            .catch((err) => {
                console.log("An error occurred while deleting the note from the server");
                console.log(err);
            });
    }

    function handleEditClick() {
        api.patch("/notes/" + props._id)
            .then((res) => {
                console.log("Note (" + props._id + ") edited successfully.");
                console.log("Status" + res.status);
            })
            .catch((err) => {
                console.log("An error occurred while editing the note from the server");
                console.log(err);
            });
    }



    return (
        <Grid item xs={4}>
            <div className="Note">
                <Card variant="outlined" sx={{ padding: "2%" }}>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <IconButton variant="contained" onClick={handleDeleteClick} className="delete-button" size="small" sx={{ color: "#1B2430", padding: 0.1, margin: 1, marginLeft: 0 }}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton variant="contained" onClick={handleEditClick} className="edit-button" size="small" sx={{ color: "#1B2430", padding: 0.1, margin: 1, marginLeft: 0 }}>
                        <EditIcon />
                    </IconButton>
                </Card>
            </div>
        </Grid>
    );
}

export default Note;