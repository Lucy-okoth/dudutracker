"use client";
import { MapContainer, TileLayer } from "react-leaflet";

const TrackerMap = () => {
  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      zoom={13}
      center={[0, 0]}
    >
      <TileLayer
        url="http://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};
export default TrackerMap;
