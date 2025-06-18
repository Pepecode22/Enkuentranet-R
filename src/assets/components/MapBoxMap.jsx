import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZDFlZ28tYXJ0IiwiYSI6ImNtYnU0ZDJtdzAwZHEybG45OWo1cTIyZzEifQ.8Y_DuVk8DEoD-iNp17_klQ';
const mapStyle = "mapbox://styles/d1ego-art/cmbzabkwd01hs01s20pqp566c";

const MapboxMap = (selectedTab) => {
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const initialMarkers = [
      { longitude: -70.651, latitude: -33.438, category: 'arriendo' },
      { longitude: -70.652, latitude: -33.439, category: 'educacion' },
      { longitude: -70.653, latitude: -33.440, category: 'estetica' },
      { longitude: -70.654, latitude: -33.441, category: 'familia' },
      { longitude: -70.655, latitude: -33.442, category: 'gastronomia' },
      { longitude: -70.656, latitude: -33.443, category: 'oficios' },
      { longitude: -70.657, latitude: -33.444, category: 'servicioshogar' },
      { longitude: -70.658, latitude: -33.445, category: 'tecnologia' },
      { longitude: -70.659, latitude: -33.446, category: 'transporte' }
    ];
    setMarkers(initialMarkers);
  }
  , []);

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
      latitude: lngLat.lat,
      category: selectedTab.selectedTab || 'default', 
    };
    setMarkers(prev => [...prev, newMarker]);
    console.log('Marker added:', newMarker);
    console.log(selectedTab.selectedTab == newMarker.category);
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
        //onClick={MarkerClick}
      >
        <GeolocateControl
          position='top-right'
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
        />
        {markers.map((marker, index) => (
          selectedTab.selectedTab === marker.category ? (
            <Marker
              key={index}
              longitude={marker.longitude}
              latitude={marker.latitude}
              color="red"
            />
          ) : null
        ))}
      </Map>
    </div>
  );
};

export default MapboxMap;


