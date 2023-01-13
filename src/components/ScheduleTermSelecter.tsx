import React from 'react'
import { Grid } from '@mui/material'
import { Quarter, Grade} from '../ClassTypes'

const ScheduleTermSelecter = () => {
    console.log("選んでね")
    return (
        <Grid container>
            <Grid item xs={6}>
                <div>1年</div>
            </Grid>
            <Grid item xs={6}>
                <div>2年</div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    First Quarter
                </div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    Second Quarter
                </div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    Third Quarter
                </div>
            </Grid>
                <div>
                    Fourth Quarter
                </div>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default ScheduleTermSelecter
