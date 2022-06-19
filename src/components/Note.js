import React from "react";
import { Card } from "@mui/material";
import { Grid } from '@mui/material';
import "./css/Note.css";

function Note(props) {
    return (
        <Grid item xs={4}>
            <div className="Note">
                <Card variant="outlined" sx={{padding:"2%"}}>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                </Card>
            </div>
        </Grid>
    );
}

export default Note;