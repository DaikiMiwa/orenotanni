export type Class = {
    info : ClassInfo,
    isSurikamoku : boolean,
    isObtained : boolean,
}

export type ClassInfo = {
        name_jp: string,
        name_eng: string,
        field: string,
        quater: Quarter,
        dayoftheweek: Week,
        way: ClassStyle,
        credits: number,
        time: TimeSlot
}

export const ClassStyle = {
    FaceToFace:"対面",
    Ondemand:"オンデマンド",
    Interactive:"双方向"
} as const;

export type ClassStyle = typeof ClassStyle[keyof typeof ClassStyle];
export const ClassStyleType = Object.values(ClassStyle);

const Grade = {
    First: 1,
    Second: 2
}

export type Grade = typeof Grade[keyof typeof Grade];
export const GradeType = Object.values(Grade);

const Week = {
    Mon:"月",
    Tue:"火",
    Wed:"水",
    Thi:"木",
    Fri:"金",
} as const

export type Week = typeof Week[keyof typeof Week];
export const WeekType = Object.values(Week);

const Quarter = {
    First:1,
    Second:2,
    Third:3,
    Fourth:4,
} as const
export type Quarter = typeof Quarter[keyof typeof Quarter];
export const QuarterType = Object.values(Quarter);

export const TimeSlot = {
    First:"1,2",
    Second:"3,4",
    Third:"5,6",
    Fourth:"7,8",
    Fifth:"9,10",
} as const
export type TimeSlot = typeof TimeSlot[keyof typeof TimeSlot];
export const TimeSlotType = Object.values(TimeSlot);


export type Schedule = {
    grade : Grade
    classes : Class[]
}

export type TotalSchedule = {
    [key in Grade] : YearSchedule
}

export type YearSchedule = {
    [key in Quarter] : WeekSchedule
}

export type WeekSchedule = {
    [key in Week] : DaySchedule
}

export type DaySchedule = {
    [key in TimeSlot] : Class
}

WeekType.map((week)=> {console.log(week)})
