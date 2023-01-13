import React from "react";
import { Grid } from "@mui/material"

const ClassSelector = ()=> {
    return (
        <Grid container>
            <Grid item xs ={12}>
                <div>
                    検索リスト
                </div>
            </Grid>
            <Grid item xs = {12}>
                <div>
                    項目
                </div>
            </Grid>
        </Grid>
    )
}

export default ClassSelector
