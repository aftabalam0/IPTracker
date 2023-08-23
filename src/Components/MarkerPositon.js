import React from 'react';
import {Marker, Popup,useMap} from "react-leaflet"
import icon from "./icon"

export default function MarkerPosition({position}){
    const map = useMap();
    React.useEffect(()=>{
        map.flyTo(position,13, {
            animate: true,
        })
    },[map,position])
    return(
        <>
        <Marker position={position} icon={icon}>                
            <Popup>
                Location Name
            </Popup>
        </Marker>
        </>
    )
}