import React, {useState} from "react";
import { Grid } from "@mui/material"
import ScheduleWeekRender from "./ScheduleWeekRender";
import ScheduleTermSelecter from "./ScheduleTermSelecter";
import { Quarter, Grade } from "../ClassTypes";

import { initialTotalSchedule } from "../ClassInformation";

const ScheduleField = () => {

    const [grade, setGrade] = useState<Grade>(Grade.First)
    const [quater, setQuater] = useState<Quarter>(Quarter.First)
    
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <ScheduleTermSelecter grade={grade} setGrade={setGrade} quarter={quater} setQuarter={setQuater}/>
                </Grid>
                <Grid item xs={12}>
                    <ScheduleWeekRender schedule={initialTotalSchedule} grade={grade} quater={quater}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ScheduleField
