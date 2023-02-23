import React from "react";
import { DaySchedule, Week } from "../ClassTypes";
import { TimeSlotType } from "../ClassTypes"

type ScheduleDayProps = {
    schedule: DaySchedule
    week: Week
}

const ScheduleDayRender = ({ schedule,week }: ScheduleDayProps) => {

    const ClassLists = TimeSlotType.map((timeslot) => {
        return (
            <div>{schedule[timeslot].info.name_jp}</div>
        )
    }
    )

    return (
        <div>
            {week}
            {ClassLists}
        </div>
    )
}

export default ScheduleDayRender

