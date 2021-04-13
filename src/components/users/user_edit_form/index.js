import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Title, Help, Label, File, Image } from "rbx";
import UserService from '../../../services/users';
import UploadImg from '../upload_img/ReactUploadImage';
import ReactUploadImage from '../upload_img/ReactUploadImage';
import Teste from '../upload_img/teste';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  }

  useEffect(() =>{
    initializeUser()    
  }, [])

  
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.update({ email: email, name: name });
      setStatus("success")
    } catch (err) {
      setStatus("error")
    }
  }

 

  return (
    <Fragment>
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <Field>
          <Control>
            <Label className="has-text-grey">Nome</Label>
            <Input
              type="name"
              value={name || ""}
              onChange={e => setName(e.target.value)}
              required
              name="name"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="has-text-grey">Email</Label>
            <Input
              type="email"
              value={email || ""}
              onChange={e => setEmail(e.target.value)}
              required
              name="email"
            />
          </Control>
        </Field>
       {/*  <ReactUploadImage/> */}
        <Teste/>

  {/* <UploadImg/> */}
  {/* <ReactUploadImage/> */}
    {/*     <Field>
          <Control>
            <Label className="has-text-grey">Image</Label>
            <Input
              type="file"
              name="file"
              
              onChange={e => setFile(e.target.value)}             
            />
          </Control>
        </Field> */}
        
        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color="custom-purple" outlined>Atualizar</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status == "error" &&
          <Help color="danger">Falha ao Atualizar</Help>
        }
        {status == "success" &&
          <Help color="primary">Atualizado com sucesso</Help>
        }
      

      </form>
    </Fragment>
  )

}

export default UsersEditForm;