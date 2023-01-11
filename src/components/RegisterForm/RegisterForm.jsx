import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm() {
    return(
        <form>
            <TextField id="nome" label="Nome" margin="dense" fullWidth />
            <TextField id="sobrenome" label="Sobrenome" margin="dense" fullWidth />
            <TextField id="cpf" label="CPF" margin="dense" fullWidth />
            <FormControlLabel label="Novidades" control={<Switch name="news" />} />
            <FormControlLabel label="Promoções" control={<Switch name="promo" />} />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    );
}

export default RegisterForm;