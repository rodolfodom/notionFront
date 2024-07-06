import { Box, Typography, TextField, Button } from "@mui/material"

export default function CreateGroupMenu() {
    return (
        <Box>
            <Typography variant="h4">Crear grupo</Typography>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <TextField label="Nombre del grupo" fullWidth />
                <Button variant="contained" color="primary" >Crear grupo</Button>
            </Box>
        </Box>
    )
}