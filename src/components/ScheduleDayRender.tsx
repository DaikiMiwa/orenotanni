import React from "react";
import {Week} from "../ClassTypes";
import { TimeSlotType } from "../ClassTypes"

type Props = { week : Week}

const ScheduleDayRender = ({week}: Props ) => {

    const ClassLists = TimeSlotType.map((timeslot)=>{
            return (
                <div>微分幾何特論①</div>
            )
        }
    )

    return (
        <div>
            { week }
            { ClassLists }
        </div>
    )
}

export default ScheduleDayRender
