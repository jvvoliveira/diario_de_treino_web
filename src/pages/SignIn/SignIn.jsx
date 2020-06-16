import React, { useState } from 'react';

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

function SignIn() {
  const [typeForm, setTypeForm] = useState(LOGIN);

  const isLogin = typeForm === LOGIN;
  const isRegister = typeForm === REGISTER;

  return (
    <>
      <div className='titleArea'>
        <h1>Diário de Treino</h1>
        <h4>Crie, edite e gerencie seus treinos</h4>
      </div>
      <div className='formArea'>
        {/* <img alt='logo' /> */}

        {isLogin &&
          <form>
            <input type='email' placeholder='Seu e-mail' />
            <input type='password' placeholder='Sua senha' />

            <button className='primary' type='submit'>Entrar</button>
            <button className='secundary' type='button' onClick={() => setTypeForm(REGISTER)}>
              Não tenho conta
          </button>
          </form>
        }

        {isRegister &&
          <form>
            <input placeholder='Seu nome' />
            <input type='email' placeholder='Seu e-mail' />

            <input type='password' placeholder='Sua senha' />
            <input type='password' placeholder='Confirme sua senha' />

            <button className='primary' type='submit'>Criar conta</button>
            <button className='secundary' type='button' onClick={() => setTypeForm(LOGIN)}>
              Já possuo uma conta
          </button>
          </form>
        }
      </div>
    </>
  )
}

export default SignIn;