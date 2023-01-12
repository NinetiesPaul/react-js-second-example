import { React, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm({onSubmit, documentValidation}) {
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promo, setProm] = useState(true);
    const [news, setNewsletter] = useState(true);

    const [errors, setErrors] = useState({
        cpf: {
            valid: true, msg: ""
        }
    });

    return(
        <form onSubmit={
            (event) => {
                event.preventDefault();
                onSubmit({ name, secondName, cpf, promo, news})
            }
        }>
            <TextField id="nome" label="Nome" margin="dense" value={name} fullWidth
            onChange={
                (event) => {
                    setName(event.target.value)
                }
            }/>
            <TextField id="sobrenome" label="Sobrenome" margin="dense"  fullWidth
            onChange={
                (event) => {
                    setSecondName(event.target.value)
                }
            }/>
            <TextField
            id="cpf"
            onBlur={
                (event) => {
                    const validationCheck = documentValidation(event.target.value);
                    setErrors({
                        cpf: validationCheck
                    })
                }
            }
            error={!errors.cpf.valid}
            helperText={errors.cpf.msg}
            label="CPF"
            margin="dense"
            //inputProps={{maxLength: 11}}
            fullWidth
            onChange={
                (event) => {
                    let tempName = event.target.value;
                    if (tempName.length >= 11) {
                        tempName = tempName.substr(0,11);
                    }
                    setCpf(event.target.value)
                }
            }/>
            <FormControlLabel label="Novidades" control={<Switch name="news" checked={promo} />}
            onChange={
                (event) => {
                    setProm(event.target.checked)
                }
            }/>
            <FormControlLabel label="Promoções" control={<Switch name="promo" checked={news} />}
            onChange={
                (event) => {
                    setNewsletter(event.target.checked)
                }
            }/>
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    );
}

export default RegisterForm;