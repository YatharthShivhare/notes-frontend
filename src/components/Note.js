import React from "react";
import { Card } from "@mui/material";
import { Grid } from '@mui/material';
import "./css/Note.css";

function Note() {
    return (
        <Grid item xs={4}>
            <div className="Note">
                <Card variant="outlined">
                    <h4>Title</h4>
                    <p>content</p>
                </Card>
            </div>
        </Grid>
    );
}

export default Note;