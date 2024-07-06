import { Box, Typography } from "@mui/material"
import TasksTable from "./Modals/TasksTable"
export default function ColaboratorMenu(){
    return(
        <Box>
            <Typography variant="h4">Bienvenido, tu nombre</Typography>
            <TasksTable/>
        </Box>
    )
}