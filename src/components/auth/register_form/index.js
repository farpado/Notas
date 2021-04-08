import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from 'rbx';
import { Redirect } from 'react-router-dom'
import UserService from '../../../services/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

let eye = <FontAwesomeIcon icon={faEye} />
let eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />

function RegisterForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);

  };


  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password == confirmPassword) {
      try {
        const user = await UserService.register({ name: name, password: password, email: email });
        setRedirectToLogin(true)
      } catch (error) {
        setError(true)
      }
    } else {
      setError(true)
    }
  }

  if (redirectToLogin == true)
    return <Redirect to={{ pathname: "/login" }} />



  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Nome:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Control>
            </Field>
            <Field >
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Senha:</Label>
              <Control>
                <Input
                  //type="password"
                  type={passwordShown ? "text" : "password"}
                  required
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            {/* teste */}
            <Field>
              <Label size="small">Confirmar Senha:</Label>
              <Control>
                <Input
                  id="senha"
                  //type="password" 
                  type={passwordShown ? "text" : "password"}
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={e => setConfirmPassoword(e.target.value)}
                />
                  <i className="password-icon" onClick={togglePasswordVisiblity}> {passwordShown ? eye : eyeSlash }</i>
              </Control>
            </Field>
            {/* teste */}
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Entrar</a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>Registro</Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email ou senha incorretas</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )
}

export default RegisterForm;