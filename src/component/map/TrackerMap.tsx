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

{
  /* <MapContainer
      center={[0, 0]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {/* Render polygons and other layers based on the model data */
}
// </MapContainer> */}
