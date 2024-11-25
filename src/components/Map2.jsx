import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons for Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map zoom-in effect
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
        map.flyTo([41.7256, -49.9469], 3, { duration: 1.5 }); // Smooth zoom animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [map, zoomed]);

  return null; // This component only manages the map's zoom behavior
};

const MapComponent = () => {
  const [zoomEnabled, setZoomEnabled] = useState(false);

  const mapRef = useRef(null);

  return (
    <div id="map-container" style={{ height: "28rem", width: "50rem", margin: "50px auto", maxWidth: "80%" }}>
      <MapContainer
        center={[51.505, -0.09]} // Coordinates for London
        zoom={10} // Initial zoom level
        style={{ height: "100%", width: "100%", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"}}
        // zoomControl={zoomEnabled} // Enable or disable zoom controls dynamically
        scrollWheelZoom={zoomEnabled} // Enable or disable scroll zoom
        whenCreated={(map) => {
          mapRef.current = map;
          mapRef.current.scrollWheelZoom.disable(); // Disable zoom initially
        }}
      >
        {/* Add Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add Marker */}
        <Marker position={[41.7256, -49.9469]}>
          <Popup>Map content here!</Popup>
        </Marker>

        {/* Handle zoom-in behavior */}
        <ZoomableMap />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
