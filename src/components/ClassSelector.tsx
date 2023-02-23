import React, { useState } from "react";
import { Grid, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, TextField } from "@mui/material"
import { ClassStyle, ClassStyleType, Grade, Quarter, QuarterType, TimeSlot, Week, WeekType, TimeSlotType } from "../ClassTypes";

const ClassSelector = () => {

    type SearchCondition = {
        name: string,
        quarter: Quarter,
        dayoftheweek: Week,
        way: ClassStyle,
        time: TimeSlot,
        isSuurikamoku: boolean,
    };

    const initialSearchCondition: SearchCondition = {
        name: "",
        quarter: Quarter.First,
        dayoftheweek: Week.Mon,
        way: ClassStyle.Ondemand,
        time: TimeSlot.First,
        isSuurikamoku: false,
    };

    const [searchCondition, setSearchCondition] = useState(initialSearchCondition)

    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="キーワード"
                    variant="outlined"
                    value={searchCondition.name}
                    onChange={(e) => {
                        setSearchCondition({ ...searchCondition, name: e.target.value })
                    }}
                />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Q</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={Quarter.First}
                        name="quarter-buttons-group"
                        onChange={(e) => {
                            setSearchCondition({ ...searchCondition, quarter: Number(e.target.value) as Quarter })
                        }}
                    >
                        {QuarterType.map((quarter) => {
                            return (
                                <FormControlLabel value={quarter} control={<Radio />} label={quarter} />
                            )
                        })}
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">曜日</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={Week.Mon}
                        name="quarter-buttons-group"
                        onChange={(e) => {
                            setSearchCondition({ ...searchCondition, dayoftheweek: e.target.value as Week })
                        }}
                    >
                        {
                            WeekType.map((week) => {
                                return (
                                    <FormControlLabel value={week} control={<Radio />} label={week} />
                                )
                            })

                        }
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">実施方法</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={ClassStyle.Ondemand}
                        name="quarter-buttons-group"
                        onChange={(e) => {
                            setSearchCondition({ ...searchCondition, way: e.target.value as ClassStyle })
                        }}
                    >
                        {
                            ClassStyleType.map((style) => {
                                return (
                                    <FormControlLabel value={style} control={<Radio />} label={style} />
                                )
                            })

                        }
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">時間</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={TimeSlot.First}
                        name="quarter-buttons-group"
                        onChange={(e) => {
                            setSearchCondition({ ...searchCondition, time: e.target.value as TimeSlot })
                        }}
                    >
                        {
                            TimeSlotType.map((time) => {
                                return (
                                    <FormControlLabel value={time} control={<Radio />} label={time} />
                                )
                            })

                        }
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default ClassSelector
