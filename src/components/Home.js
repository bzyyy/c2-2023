import React from 'react';
import { Link } from 'react-router-dom';
//Pagina de inicio donde podemos acceder al buscador
const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column'  }}>
        <h1 style={{ marginBottom: '20px' }}>Buscador IPv4</h1>
        <img src="https://www.dir-tech.com/wp-content/uploads/2023/01/Generateur-adresses-IPv4.jpg" alt="La Mejor" width="60%" />
        <br/>
        <Link to="/buscar" className="button-link-search">
            Buscar una direccion
        </Link>
    </div>
  );
};

export default Home;