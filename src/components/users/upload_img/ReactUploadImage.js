import { useRef } from 'react';
import React,{useState, useEffect} from 'react'
const URL_API = 'http://localhost:3001';

function ReactUploadImage() {
  
  const filesElement = useRef(null);
  const [imageSrc, setImage] = useState('');

 

  const sendFile = async (e) => {
          //e.preventDefault();
         //window.location.reload();
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    //dataForm.append('nomeUsuario', 'João');

    const res = await fetch(`${URL_API}/posts`, {
      method: 'POST',
      body: dataForm,
    });

   
    const data = await res.json();

    setImage(URL_API + data.caminho)
    //console.log(imageSrc);
    
  };



  return (
    
    <div >
      <input type="file" multiple ref={filesElement}/>
      <button onClick={sendFile}>Send file</button>
    
    {/*   <img src={imageSrc}/> */}
      <strong>{imageSrc}</strong>
    
    </div>
    
    
  );
}

export default ReactUploadImage;



