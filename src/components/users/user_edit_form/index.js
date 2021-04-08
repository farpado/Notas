import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Title, Help, Label, File, Image } from "rbx";
import UserService from '../../../services/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
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
      await UserService.update({ email: email, name: name , photo:photo});
      setStatus("success")
    } catch (err) {
      setStatus("error")
    }
  }


  return (
    <Fragment>
      <form method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
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


        <Field>
          <Control>
            <Label className="has-text-grey">Image</Label>
            <Input
              type="file"
              name="photo"
              //onChange={e => setPhoto(e.target.value)}
              
            />
          </Control>
        </Field>
        
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
        
{/*                <File id="form" enctype="multipart/form-data">
                <File.Label>
                    <File.Input type="file" name="photo" />
                    <File.CTA>
                        <File.Icon>
                            <FontAwesomeIcon icon={faUpload} />
                        </File.Icon>
                        <File.Label as="span">Choose a File</File.Label>
                    </File.CTA>
                </File.Label>
                <Button type="submit" name="upload">Upload</Button>
                <Image id="avatar" />
            </File> */}

      </form>
    </Fragment>
  )

}

export default UsersEditForm;