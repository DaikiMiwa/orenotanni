import React from "react";
import { Grid } from "@mui/material"
import ScheduleWeekRender from "./ScheduleWeekRender";
import ScheduleTermSelecter from "./ScheduleTermSelecter";

const ScheduleField = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <ScheduleTermSelecter />
                </Grid>
                <Grid item xs={12}>
                    <ScheduleWeekRender />
                </Grid>
            </Grid>
        </div>
    )
}

export default ScheduleField
