import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Popup from "reactjs-popup";
import "leaflet/dist/leaflet.css";
import shop from "../../../assets/shop.png";
import L from "leaflet";

const shopIcon: L.Icon = new L.Icon({
  iconUrl: shop,
  // iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
  shadowRetinaUrl: shop,
});

const Map = () => {
  return (
    <div className=" w-full max-h-[500px] h-full  overflow-scroll rounded-md">
      <MapContainer
        className=""
        center={[51.505, -0.09]}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>ABC Shop</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
