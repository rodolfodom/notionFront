import { Box, Typography, Button } from "@mui/material"


export default function AdminMenu(){
    return(
        <Box>
            <Typography variant="h4">Bienvenido, tu nombre</Typography>
            <Box display="flex" justifyContent="space-between" mt={4}>
                <Button variant="contained" color="primary" >Crear usuario</Button>
                <Button variant="contained" color="primary">Crear proyecto</Button>
                <Button variant="contained" color="primary">Crear tarea</Button>
            </Box>
        </Box>
    )
}