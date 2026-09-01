"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ItalyLeafletMapProps } from "./types";
import { nameMapping, getRegionColor } from "./mapHelpers";

export default function ItalyLeafletMap({
  activeMetric,
  onRegionHover,
  onRegionClick
}: ItalyLeafletMapProps) {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const geoJsonRef = useRef<any>(null);

  useEffect(() => {
    fetch("/italy-regions.geojson")
      .then((res) => res.json())
      .then((data) => setGeoJsonData(data))
      .catch((err) => console.error("Error loading geojson map data:", err));
  }, []);

  const getFeatureStyle = (feature: any) => ({
    fillColor: getRegionColor(feature.properties.reg_name, activeMetric),
    weight: 1.2,
    opacity: 1,
    color: "#FFFFFF",
    dashArray: "",
    fillOpacity: 0.85
  });

  const onEachFeature = (feature: any, layer: any) => {
    const englishName = nameMapping[feature.properties.reg_name] || feature.properties.reg_name;
    layer.bindTooltip(`<strong>${englishName}</strong>`, {
      sticky: true,
      className: "font-manrope text-xs font-semibold px-2 py-1 bg-white text-[#29343D] border-slate-100 rounded-md shadow-sm"
    });

    layer.on({
      mouseover: (e: any) => {
        e.target.setStyle({ weight: 2, color: "#0A2540", fillOpacity: 0.95 });
        onRegionHover(englishName);
      },
      mouseout: (e: any) => {
        if (geoJsonRef.current) geoJsonRef.current.resetStyle(e.target);
        onRegionHover(null);
      },
      click: () => onRegionClick(englishName)
    });
  };

  return (
    <div className="w-full h-full min-h-[440px] relative rounded-xl overflow-hidden shadow-inner border border-[#EFF4FA]">
      <MapContainer
        center={[41.8719, 12.5674]}
        zoom={5.4}
        minZoom={4.8}
        maxZoom={8}
        scrollWheelZoom={false}
        className="w-full h-full min-h-[440px] z-10"
        style={{ background: "#F8FAFC" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />
        {geoJsonData && (
          <GeoJSON
            key={activeMetric}
            ref={geoJsonRef}
            data={geoJsonData}
            style={getFeatureStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </div>
  );
}
