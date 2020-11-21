import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

const Storage = () => {
  const [title, setTitle] = useState("");
  const [storages, setStorages] = useState([]);
  
  const submit = useCallback(async () => {
    const response = await api.post('categories', {
      title
    });
    if (response.data) {
      console.log(response.data);
      setTitle("");
    }
  },[title]); 

  useEffect(() => {
    api.get('categories').then(response => {
      setStorages(response.data);
    });
  },[storages]);


  return (
    <>
      <form>
        <input 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
        />
        <Link onClick={submit} to="/storage" type="button">add</Link>
      </form>

      <div>
        {storages.map(storage => (
        <div key={storage.id}>
           <h1>{storage.title}</h1>
           <h1>{storage.id}</h1>
        </div>
          
        ))}
      </div>
    </>

  )
}

export default Storage;