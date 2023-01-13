import React from "react";
import {Week} from "../TestClass";
import { TimeSlotType } from "../TestClass"

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
