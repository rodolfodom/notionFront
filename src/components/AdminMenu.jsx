import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function AdminMenu(){
    const navigate = useNavigate()
    return(
        <Box>
            <Typography variant="h4">Bienvenido, tu nombre</Typography>
            <Box display="flex" justifyContent="end" mt={4} gap={2}>
            <Button variant="contained" color="primary" onClick={()=>{
                    navigate("/admin/createGroup")
                }}>Crear Grupo</Button>
                <Button variant="contained" color="primary" onClick={()=>{
                    navigate("/admin/createUser")
                }}>Crear usuario</Button>
                <Button variant="contained" color="primary" onClick={()=>{
                    navigate("/admin/createTask")
                }}>Crear tarea</Button>
            </Box>
        </Box>
    )
}