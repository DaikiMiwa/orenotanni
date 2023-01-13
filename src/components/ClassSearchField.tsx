import React from "react";
import {Grid} from "@mui/material"
import ClassList from "./ClassList";
import ClassSelector from "./ClassSelector";

const ClassSearchField = ()=> {
    return (
        <Grid container>
            <Grid item xs ={ 4 }>
                <ClassSelector />
            </Grid>
            <Grid item xs = { 8 }>
                <ClassList />
            </Grid>
        </Grid>
    )
}

export default ClassSearchField
