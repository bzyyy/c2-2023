import React from 'react';

//Este componente guarda la informacion a traves de un boton desplegado en el componente Buscar.js
const SaveDataButton = ({ onSave, result }) => {
  const saveData = () => {
    const dataToSave = {
      ip: result.ip,
      city: result.city,
      region: result.region,
      country: result.country
    };
//Utiliza fetch para hacer el POST de la informacion obtenida
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(dataToSave),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error('Error en la petición');
        }
      })
      .then(data => {
        console.log('Data saved:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <button onClick={saveData}>Guardar</button>
  );
};

export default SaveDataButton;
