import React from "react";
import { Grid } from "@mui/material"
import ScheduleDayRender from "./ScheduleDayRender";
import { WeekType, TimeSlotType, Grade, Quarter } from "../ClassTypes";
import { TotalSchedule } from "../ClassTypes";

type ScheduleWeekRenderProps = {
    grade: Grade
    quater: Quarter
    schedule: TotalSchedule
}

const ScheduleWeekRender = ({ grade, quater, schedule }: ScheduleWeekRenderProps) => {

    const timeSlotLists = TimeSlotType.map((timeslot) => {
        return (
            <div>{timeslot}</div>
        )
    }
    );

    const weekLists = WeekType.map((week) => {
        return (
            <Grid xs={2} item>
                {<ScheduleDayRender week={week} schedule={schedule[grade][quater][week]} />}
            </Grid>
        )
    }
    );

    return (
        <div>
            <Grid container>
                <Grid xs={2}>
                    <div> 時限 </div>
                    {timeSlotLists}
                </Grid>
                {weekLists}
            </Grid>
        </div>
    )
}

export default ScheduleWeekRender
