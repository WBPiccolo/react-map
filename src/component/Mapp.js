import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useState } from 'react'

function Mapp () {
    let {name} = useParams()
    //const [[x,y], setCoodrinate] = useState([71.505, -10.09])
    const [userLongitude, setLongitude] = useState(0)
    const [userLatitude, setLatitude] = useState(0)
    navigator.geolocation.getCurrentPosition(function(position) {
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
        //setCoodrinate([position.coords.latitude, position.coords.longitude])
        //TODO: salvare coordinate
    });
   

    return (
        <>
            <h1>{name};</h1><br/>
            
            <MapContainer center={[userLatitude, userLongitude]} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[userLatitude, userLongitude]}>
    </Marker>
  </MapContainer>
        </>
    );
}
export default Mapp;

//https://esri.github.io/esri-leaflet/examples/
//https://esri.github.io/esri-leaflet/examples/search-map-service.html

//https://github.com/Esri/esri-leaflet-geocoder