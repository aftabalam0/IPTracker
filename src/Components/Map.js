import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,} from 'react-leaflet'
import MarkerPositon from './MarkerPositon';
export default function Map(props){
    console.log(props.latitude ,"  ",props.longitude)
    const position = [props.latitude, props.longitude]
    return(
        <div>
            <div className="Map-title">
                <h1>Map</h1>
            </div>   
            <div className='map-content'>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={true}
                style={{
                   width:"100%", height: "75vh"
                }}

                >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               <MarkerPositon position={position}/>
            </MapContainer>
            </div>
        </div>
    )
}