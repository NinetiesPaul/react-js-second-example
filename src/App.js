import './App.css';
import { Container, Typography } from '@mui/material';
import { Component } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import "fontsource-roboto";

class App extends Component {
	render(){
		return (
			<Container component="article" maxWidth="sm">
				<Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
				<RegisterForm onSubmit={onSubmitForm} documentValidation={documentValidation}/>
			</Container>
		);
	}
}

function onSubmitForm(args) {
	console.log(args);
}

function documentValidation(cpf) {
	if (cpf.length !== 11) {
		return { valid: false, msg: "CPF deve ter 11 dígitos" }
	}

	return { valid: true, msg: "" }
}

export default App;
