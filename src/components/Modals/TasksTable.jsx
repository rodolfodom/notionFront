import { TableContainer, TableHead, TableBody, TableRow, TableCell, Table, Paper, FormControl, Select, MenuItem, InputLabel } from "@mui/material"
import { useState } from "react"

export default function TasksTable() {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "name": "Tarea 1",
            "description": "Esta es la descripción de la tarea 1.",
            "status": "Pendiente"
        },
        {
            "id": 2,
            "name": "Tarea 2",
            "description": "Esta es la descripción de la tarea 2.",
            "status": "En progreso"
        },
        {
            "id": 3,
            "name": "Tarea 3",
            "description": "Esta es la descripción de la tarea 3.",
            "status": "Completada"
        }
    ])

    
    const handleChange = (event, currentTask) => {
        const tasksUpdated = [...tasks].map(task => {
            if (task.id === currentTask.id) {
                task.status = event.target.value
            }
            return task
        })
        setTasks(tasksUpdated)
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="tasks-table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Nombre</TableCell>
                        <TableCell align="left">Descripción</TableCell>
                        <TableCell align="left">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow
                            key={task.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {task.id}
                            </TableCell>
                            <TableCell align="left">{task.name}</TableCell>
                            <TableCell align="left">{task.description}</TableCell>
                            <TableCell align="left">
                                <FormControl fullWidth>
                                    <InputLabel id="select-status-label">Estado</InputLabel>
                                    <Select
                                        labelId="elect-status-label"
                                        id="demo-simple-select"
                                        value={task.status}
                                        label="Estado"
                                        onChange={(e)=>{
                                            handleChange(e, task)
                                        }}
                                    >
                                        <MenuItem value="Pendiente">Pendiente</MenuItem>
                                        <MenuItem value="En progreso">En progreso</MenuItem>
                                        <MenuItem value="Completada">Completado</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}