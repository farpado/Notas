import React, { useState } from 'react';
import { Button } from 'rbx';
import UserService from '../../../services/users';
import { Redirect } from 'react-router-dom';

function UsersDelete(){
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser= async ()=>{
        if (window.confirm('Tem certeza que deseja deletar esta conta? ')){
            UserService.delete()
            setRedirectToHome(true)
        }
    }

    if(redirectToHome == true)
    return <Redirect to={{pathname: '/'}}/>

    return(
        <Button color="danger" onClick={()=> deleteUser()}> Excluir Conta </Button>
    )
}

export default UsersDelete;