import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';

const Storage = () => {
  const [title, setTitle] = useState("");
  const [storages, setStorages] = useState([]);
  
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
        />
        <button type="submit">add</button>
      </form>

      <div style={{color: "white", flexDirection: "row", display: "flex"}}>
        {storages.map(storage => (
        <div style={{ margin: "10px 10px" }}  key={storage.id}>
           <h1  >{storage.id}</h1>
           <h1>{storage.title}</h1>
        </div>
        ))}
      </div>
    </>
  );
}

export default Storage;