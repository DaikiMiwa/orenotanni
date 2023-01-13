import React from "react";
import {Grid} from "@mui/material"
import ScheduleDayRender from "./ScheduleDayRender";
import { WeekType, TimeSlotType } from "../ClassTypes";

const ScheduleWeekRender = () => {

    const timeSlotLists = TimeSlotType.map((timeslot)=>{
            return (
                <div>{timeslot}</div>
            )
        }
    );

    const weekLists = WeekType.map((week) => {
        return (
            <Grid xs={2} item>
                {<ScheduleDayRender week={week}/>}
            </Grid>
        )
        }
    );

    return (
        <div>
            <Grid container>
                <Grid xs={2}> 
                    <div> 時限 </div>
                    { timeSlotLists }
                </Grid>
                { weekLists }
            </Grid>
        </div>
    )
}

export default ScheduleWeekRender
