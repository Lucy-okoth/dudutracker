"use client";
import { MapContainer, TileLayer } from "react-leaflet";

const TrackerMap = () => {
  return (
    <MapContainer zoom={13} center={[0, 0]} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
export default TrackerMap;
