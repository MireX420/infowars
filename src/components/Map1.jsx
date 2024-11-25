import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ZoomableMap = () => {
  const map = useMap();
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mapElement = document.getElementById("map-container");
      const rect = mapElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInView && !zoomed) {
        setZoomed(true);
        map.flyTo([47.51947216110086, -122.29683632700319], 15, { duration: 1.5 }); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [map, zoomed]);

  return null; 
};

const MapComponent = () => {
  const [zoomEnabled, setZoomEnabled] = useState(false);

  const mapRef = useRef(null);

  return (
    <div id="map-container" style={{ height: "400px", width: "100%", margin: "50px auto", maxWidth: "80%" }}>
      <MapContainer
        center={[51.505, -0.09]} 
        zoom={10}
        style={{ height: "100%", width: "100%", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"}}
        zoomControl={zoomEnabled} 
        scrollWheelZoom={zoomEnabled} 
        whenCreated={(map) => {
          mapRef.current = map;
          mapRef.current.scrollWheelZoom.disable(); 
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[47.51947216110086, -122.29683632700319]}>
          <Popup>Map content here!</Popup>
        </Marker>
        <ZoomableMap />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
