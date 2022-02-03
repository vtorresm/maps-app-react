import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoidnRvcnJlc20iLCJhIjoiY2t2dTZvaDlxMDQydjJudG5zYWkxdWdoMyJ9.9h-YXBSVysaxjbQwARY15A';

if(!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
