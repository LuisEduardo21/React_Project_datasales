import React, { useState, useContext } from 'react';
import UIButton from '../UI/Button/Button';
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({user, password}) {

  if (user === 'admin' && password === 'admin') {
    return { token: '1234' }


  }
  return { error: 'Usuario ou senho invalida' }

}

const UserLogin = () => {

  const [values, setvalues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setvalues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(event) {

    event.preventDefault();

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push('/users')
    }
    setvalues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="user"
            onChange={onChange} value={values.user} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password"
            onChange={onChange} value={values.password} />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
