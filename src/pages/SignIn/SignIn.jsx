import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { validationLogin, validationRegister } from "./validationSchema";
import { signInRequest } from "../../store/modules/auth/actions";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

function SignIn() {
  const dispatch = useDispatch();
  const [typeForm, setTypeForm] = useState(LOGIN);

  const isLogin = typeForm === LOGIN;
  const isRegister = typeForm === REGISTER;

  const handleLogin = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  }

  const handleRegister = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className='titleArea'>
        <h1>Diário de Treino</h1>
        <h4>Crie, edite e gerencie seus treinos</h4>
      </div>
      <div className='formArea'>
        {/* <img alt='logo' /> */}

        {isLogin &&
          <Form schema={validationLogin} onSubmit={handleLogin}>
            <Input name='email' type='email' placeholder='Seu e-mail' />
            <Input name='password' type='password' placeholder='Sua senha' />

            <button className='primary' type='submit'>Entrar</button>
            <button className='secundary' type='button' onClick={() => setTypeForm(REGISTER)}>
              Não tenho conta
          </button>
          </Form>
        }

        {isRegister &&
          <Form schema={validationRegister} onSubmit={handleRegister}>
            <Input name='name' placeholder='Seu nome' />
            <Input name='email' type='email' placeholder='Seu e-mail' />

            <Input name='password' type='password' placeholder='Sua senha' />
            <Input name='confirmPassword' type='password' placeholder='Confirme sua senha' />

            <button className='primary' type='submit'>Criar conta</button>
            <button className='secundary' type='button' onClick={() => setTypeForm(LOGIN)}>
              Já possuo uma conta
          </button>
          </Form>
        }
      </div>
    </>
  )
}

export default SignIn;