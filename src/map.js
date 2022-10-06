
import React from 'react'
import {GoogleMap ,useLoadScript , Marker} from "@react-google-maps/api" ;


function Map () {

    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.gooogle_maps_api_key }) ;

    if(!isLoaded) return <div>loading...</div>

    const center ={lat : 30.044853056034345 , lng :31.238481330043676} ;

  return (
   <GoogleMap zoom={10} center={center} mapContainerClassName={{width : "50%" , height : "50%"}}>
    <Marker position={center}></Marker>
   </GoogleMap>
  )
}


export default Map;