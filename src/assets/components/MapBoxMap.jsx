import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZDFlZ28tYXJ0IiwiYSI6ImNtYnU0ZDJtdzAwZHEybG45OWo1cTIyZzEifQ.8Y_DuVk8DEoD-iNp17_klQ';
const mapStyle = "mapbox://styles/d1ego-art/cmbzabkwd01hs01s20pqp566c";

const MapboxMap = () => {
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  const initialCenter = {
    longitude: -70.651,
    latitude: -33.438,
    zoom: 10,
    pitch: 60,
    bearing: 0
  };

  const MarkerClick = (event) => {
    const { lngLat } = event;
    const newMarker = {
      longitude: lngLat.lng,
      latitude: lngLat.lat
    };
    setMarkers(prev => [...prev, newMarker]);
  };

  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }}>
      <Map
        ref={mapRef}
        initialViewState={initialCenter}
        style={{ width: '100%', height: '110%' }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={MarkerClick}
      >
        <GeolocateControl
          position='top-right'
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            color="red"
          />
        ))}
      </Map>
    </div>
  );
};

export default MapboxMap;


