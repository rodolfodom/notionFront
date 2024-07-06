import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
export default function CreateTaskMenu() {
    return (
        <Box>
            <Typography variant="h4">Crear tarea</Typography>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <TextField label="Nombre de la tarea" fullWidth />
                <TextField label="Descripción de la tarea" fullWidth  multiline rows={5}/>
                <FormControl fullWidth>
                    <InputLabel id="select-user-label">Usuario</InputLabel>
                    <Select
                        labelId="select-user-label"
                        id="select-user-label"
                        label="Usuario"
                    >
                        <MenuItem value="1">Usuario 1</MenuItem>
                        <MenuItem value="2">Usuario 2</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" >Crear tarea</Button>
            </Box>
        </Box>
    )
}