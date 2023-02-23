import { TotalSchedule,YearSchedule,WeekSchedule,DaySchedule,ClassInfo,Quarter,Week,ClassStyle,TimeSlot,Grade } from "./ClassTypes"
import {GradeType,QuarterType,WeekType,TimeSlotType,Class} from "./ClassTypes"

const testClassInfo : ClassInfo = {
    name_jp : "テスト",
    name_eng : "テスト",
    field : "テスト",
    quater : Quarter.First,
    dayoftheweek : Week.Mon,
    way : ClassStyle.FaceToFace,
    credits : 1,
    time : TimeSlot.Fifth
}

export const ClassList : Class[] = [
    {
        info: testClassInfo,

        isSurikamoku: false,
        isObtained: false
    },
    {
        info: testClassInfo,
        isSurikamoku: false,
        isObtained: false
    },
    {
        info: testClassInfo,
        isSurikamoku: false,
        isObtained: false
    }
]


//const daySchedule = TimeSlotType.reduce((a,v)=> ({...a, [v]:ClassList[0]}), {}) as DaySchedule
//const weekSchedule = WeekType.reduce((a,v)=> ({...a, [v]:{...daySchedule}}),{}) as WeekSchedule
//const yearSchedule = QuarterType.reduce((a,v)=> ({...a, [v]:{...weekSchedule}}),{}) as YearSchedule
//export const initialTotalSchedule = QuarterType.reduce((a,v)=> ({...a, [v]:{...yearSchedule}}),{}) as TotalSchedule

export const initialTotalSchedule = GradeType.reduce((a,g)=> (
    {...a, [g]:
        QuarterType.reduce((a,q)=> (
            {...a, [q]:
                WeekType.reduce((a,w)=>(
                    {...a, [w]:
                        TimeSlotType.reduce((a,t)=> (
                            {...a, [t]:
                                {...ClassList[0],info:{...testClassInfo,name_jp:g+"年"+q+"くお"+w+t,quarter:Quarter.First}} as Class
                            }), {}) as DaySchedule
                    }),{}) as WeekSchedule
            }),{}) as YearSchedule
}),{}) as TotalSchedule

