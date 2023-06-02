import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveDataButton from './SaveDataButton';

function Buscar() {
    //Utilizaremos diferentes estados para manejar el ingreso de la ip, el estado, etc.
  const [ipAddress, setIpAddress] = useState('');
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState(null);

  const validateIPv4 = (ip) => {
    const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return regex.test(ip);
  };
  //Esta version de search es utilizando fetch, por la constante aparicion del error 429 implemente esos catch
  //Por lo visto por problemas de cors no dejaba trabajar bien con la api, probe usando fetch y axios y ninguno funciono
  /*const search = () => {
    setErrorMessage('');
    setResult(null);

    fetch(`https://ipinfo.io/${ipAddress}/geo`)
      .then(response => {
        if (response.status === 429) {
          toast.error('Too Many Requests');
          throw new Error('Too Many Requests');
        } else if (response.ok) {
          toast.success('Dirección correcta');
          return response.json();
        } else {
          toast.error('Error en la petición');
          throw new Error('Error en la petición');
        }
      })
      .then(data => {
        setResult(data);
      })
      .catch(error => {
        if (error.message === 'Too Many Requests') {
          setErrorMessage('Demasiadas solicitudes. Por favor, espere un momento antes de realizar otra búsqueda.');
        } else {
          setErrorMessage('Error en la dirección IPv4');
        }
      });
  };
*/
//Funcion search que ocupa un resultado simulado para poder trabajar el resto de casos
const search = () => {
    setErrorMessage('');
    setResult(null);

    const simulatedResult = {
      ip: "161.185.160.93",
      city: "New York City",
      region: "New York",
      country: "US",
      loc: "40.7143,-74.0060",
      org: "AS22252 The City of New York",
      postal: "10004",
      timezone: "America/New_York",
      readme: "https://ipinfo.io/missingauth"
    };

    if (validateIPv4(ipAddress)) {
      setResult(simulatedResult);
      toast.success('Dirección correcta');
    } else {
      setErrorMessage('Dirección IP no válida');
    }
  };
//Cuando se genere un cambio ira a setiar la Ip y validarla, arrojando los mensajes correspondientes
  const handleInputChange = (event) => {
    const { value } = event.target;
    setIpAddress(value);
    setSearchEnabled(validateIPv4(value));
  };
//Trabajaremos con ipAddress tanto para corroborar que cumple el formato, desplegar el boton de guardado en caso de funcionar
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <h1>Busqueda de Dirección</h1>
      <label htmlFor="ipAddress">Ingresa tu Dirección IP:</label>
      <br/>
      <input type="text" id="ipAddress" value={ipAddress} onChange={handleInputChange} />
      <br />
      <button onClick={search} disabled={!searchEnabled}>Buscar</button>
      {!searchEnabled && <p style={{ color: 'red' }}>Formato no valido, intentelo denuevo</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      {result && (
        <div>
          <h2>Resultado:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
          <SaveDataButton result={result} />
        </div>
      )}
      <Link to="/posicion" className="button-link-search">
        Buscar la ubicación
      </Link>
    </div>
  );
}

export default Buscar;
