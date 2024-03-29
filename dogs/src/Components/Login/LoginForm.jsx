import React from 'react';
import { Link } from "react-router-dom"
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() { 

  const username = useForm();
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify()
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json);
      })
    }

  }

  return (
    <section>
      
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
         <Input type="text" label="Usuário" name="username" {...username}  />
         <Input type="password" label="Senha" name="password" {...password} />
         <Button>Entrar</Button>
      </form> 
 
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm