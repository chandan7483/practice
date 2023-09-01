import { Box, Paper, Toolbar } from "@mui/material"
import { MyTabs } from "../../components/tabs/MyTabs.com"
import React from "react"

export const Lessons:React.FC<{}>=()=>{
    return <>
    <Box>
        <Paper elevation={3}>
            <Toolbar><h1>all my react lessons</h1></Toolbar>
        <MyTabs/>
        </Paper>
        
       </Box>
       </>
}