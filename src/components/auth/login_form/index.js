import React,{Fragment, useState} from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Redirect } from 'react-router-dom';
import UserService from '../../../services/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

let eye = <FontAwesomeIcon icon={ faEye }/>
let eyeSlash = <FontAwesomeIcon icon={faEyeSlash} /> 


function LoginForm(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);
    const [passowordShown, setPassowordShown] = useState(false);

    if(redirectToRegister == true)
    return <Redirect to={{pathname: "/register"}}/>
    else if(redirectToNotes == true)
    return <Redirect to={{pathname: "/notes"}}/>

    const handleSubmit = async (evt) =>{
        evt.preventDefault();

        try {
            await UserService.login({email:email, password: password})
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }

    const togglePasswordVisiblity = () =>{
        setPassowordShown(passowordShown ? false : true);
    }

    return(
        <Fragment>
        <Column.Group centered>
          <form onSubmit={handleSubmit}>
            <Column size={12}>
              <Field>
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
                <Label size="small">Password:</Label>
                <Control>
                  <Input 
                    type={passowordShown ? "text" : "password" }
                    required
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <i className="password-icon" onClick={togglePasswordVisiblity}>{passowordShown ? eye : eyeSlash}</i>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Column.Group breakpoint="mobile">
                    <Column>
                      <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Registrar-se</a>
                    </Column>
                    <Column>
                      <Button color="custom-purple" outlined>Login</Button>
                    </Column>
                  </Column.Group>
                </Control>
              </Field>
              { error && <Help color="danger">Email ou Senha errado</Help> }
            </Column>
          </form>
        </Column.Group>
    </Fragment>
    )
}

export default LoginForm;