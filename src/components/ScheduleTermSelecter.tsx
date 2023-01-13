import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Quarter, Grade, QuarterType, GradeType} from '../ClassTypes'

type ScheduleTermSelecterProps = {
    grade : Grade,
    setGrade : any,
    quarter : Quarter,
    setQuarter : any
}

const ScheduleTermSelecter = ({grade ,setGrade, quarter, setQuarter} : ScheduleTermSelecterProps) => {
    
    console.log(grade,quarter)

    const quarterButtonList = QuarterType.map((q)=>{
            return( 
                <Button 
                    onClick={()=>{ setQuarter(q) } }
                    variant={quarter===q?"contained":"outlined"}
                    fullWidth
                >
                    第{q}クオーター
                </Button>
            )
        }
    );

    const gradeButtonList = GradeType.map((g)=>{
            return (
                <Button 
                    onClick={()=>{setGrade(g)}}
                    variant={grade===g?"contained":"outlined"}
                    fullWidth
                >
                    {g}年
                </Button>
            )
        }
    );

    return (
        <div>
            <ButtonGroup fullWidth>
                {gradeButtonList}
            </ButtonGroup>
            <ButtonGroup fullWidth>
                {quarterButtonList}
            </ButtonGroup>
        </div>
    )
}

export default ScheduleTermSelecter
