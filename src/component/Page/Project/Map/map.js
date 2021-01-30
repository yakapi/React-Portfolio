import React, { Component } from 'react'
import MapStyle from './map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
class Map extends Component {
  render() {
    let position = [51.505, -0.09]
    return (
      <div className={MapStyle.map_container}>
      <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false}>
<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[51.505, -0.09]}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
</MapContainer>
      </div>
    )
  }
}

export default Map
