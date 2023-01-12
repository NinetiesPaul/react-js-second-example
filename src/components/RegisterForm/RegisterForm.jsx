import { React, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm() {
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");

    return(
        <form onSubmit={
            (event) => {
                event.preventDefault();
                console.log(name, secondName)
            }
        }>
            <TextField id="nome" label="Nome" margin="dense" value={name} fullWidth
            onChange={
                (event) => {
                    let tempName = event.target.value;
                    if (tempName.length >= 3) {
                        tempName = tempName.substr(0,3);
                    }
                    setName(tempName)
                }
            }/>
            <TextField id="sobrenome" label="Sobrenome" margin="dense"  fullWidth
            onChange={
                (event) => {
                    setSecondName(event.target.value)
                }
            }/>
            <TextField id="cpf" label="CPF" margin="dense" inputProps={{maxLength: 11}} fullWidth />
            <FormControlLabel label="Novidades" control={<Switch name="news" />} />
            <FormControlLabel label="Promoções" control={<Switch name="promo" />} />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    );
}

export default RegisterForm;