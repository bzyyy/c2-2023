import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';

function Posicion() {
  const [dummyData] = useState({
    ip: "161.185.160.93",
    city: "New York City",
    region: "New York",
    country: "US",
    loc: "40.7143,-74.0060",
    org: "AS22252 The City of New York",
    postal: "10004",
    timezone: "America/New_York",
    readme: "https://ipinfo.io/missingauth"
  });

  const coordinates = dummyData.loc.split(',').map(parseFloat);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Ubicacion de la direccion IPv4</h1>
      <br />
      <Link to="/" className="button-link-search">
        Volver
      </Link>
      <div style={{
        width: '800px',
        height: '100vh',
        overflow: 'auto',
        margin: '20px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <MapContainer center={coordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coordinates} />
        </MapContainer>
      </div>
    </div>
  );
}

export default Posicion;
