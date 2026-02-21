"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 修正 Leaflet 在 webpack/Next.js 環境下預設 marker 圖示會消失的問題
const iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png";
const iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png";
const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

// 藍色大圖示（active marker）
const DefaultIcon = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

// 灰色小圓點（inactive marker）
const GreySmallIcon = L.divIcon({
    className: "",
    html: `<div style="width:10px;height:10px;background:#94a3b8;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
    popupAnchor: [0, -8],
});

L.Marker.prototype.options.icon = DefaultIcon;

export interface MapMarker {
    id: string;
    position: [number, number];
    title: string;
    description?: string;
    color?: string;
}

export interface MapProps {
    center: [number, number];
    zoom: number;
    markers?: MapMarker[];
    activeMarkerIds?: string[];
    className?: string;
}

// 使用 flyTo 實現平滑 pan/zoom 過渡動畫
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, zoom, { duration: 1.2 });
    }, [center, zoom, map]);
    return null;
}

export default function Map({ center, zoom, markers = [], activeMarkerIds, className = "h-[400px] w-full rounded-lg" }: MapProps) {
    return (
        <div className={className}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                className="relative z-0 h-full w-full rounded-[inherit] shadow-inner"
            >
                <MapUpdater center={center} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {markers.map((marker) => {
                    // activeMarkerIds 未提供 → 全部為 active（向下相容）
                    // activeMarkerIds 為空陣列 → 全部為 inactive（overview 模式）
                    const isActive = !activeMarkerIds || activeMarkerIds.includes(marker.id);
                    return (
                        <Marker
                            key={marker.id}
                            position={marker.position}
                            icon={isActive ? DefaultIcon : GreySmallIcon}
                            zIndexOffset={isActive ? 1000 : 0}
                        >
                            <Popup>
                                <div className="font-sans">
                                    <h3 className="font-bold text-slate-900">{marker.title}</h3>
                                    {marker.description && (
                                        <p className="mt-1 text-sm text-slate-600">{marker.description}</p>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
