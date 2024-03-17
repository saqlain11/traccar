import { useEffect, useState } from 'react';
import { MapContainer,TileLayer, Marker, Popup, useMapEvents,useMap } from 'react-leaflet'
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      console.log("latlng",e.latlng)
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
function App() {
  return ( 
  <MapContainer
    style={{width:"100vw",height:"90vh"}}
    center={{ lat: 51.505, lng: -0.09 }}

    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
  );
}

export default App;
