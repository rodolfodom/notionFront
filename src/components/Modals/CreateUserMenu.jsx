import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem} from "@mui/material"

export default function CreateUserMenu() {
    return (
        <Box>
            <Typography variant="h4">Crear usuario</Typography>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <TextField label="Nombre" fullWidth />
                <TextField label="Apellido" fullWidth />
                <TextField label="Correo electrónico" fullWidth />
                <TextField label="Contraseña" fullWidth />
                <FormControl fullWidth>
                    <InputLabel id="select-group-label">Grupo</InputLabel>
                    <Select
                        labelId="select-group-label"
                        id="select-group-label"
                        label="Grupo"
                    >
                        <MenuItem value="colaborator">Colaborador</MenuItem>
                        <MenuItem value="Administrador">Administrador</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" >Crear usuario</Button>
            </Box>
        </Box>
    )
}
