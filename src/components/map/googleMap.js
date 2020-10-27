import React, { useState, useEffect } from 'react';
import './googleMap.css'

const GoogleMap = ({ mapDetails }) => {
    const [mapIsReady, setMapIsReady] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${mapDetails.api}`
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
            setMapIsReady(true);
        })
        document.body.appendChild(script);
    }, [])

    const mapStyle = [
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [
                {visibility: "on"}
            ]
        },{
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        },{
            featureType: "water",
            elementType: "labels",
            stylers: [
                {visibility: "on"}
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                {visibility: "on"}
            ]
        }
    ]

    useEffect(() => {
        if (mapIsReady) {
            console.log("ready")
            const myCenter = new window.google.maps.LatLng(mapDetails.Latitude, mapDetails.Longitude);
            const mapProp = {
                center:myCenter,
                zoom:17,
            };

            const map = new window.google.maps.Map(document.getElementById("googleMap"),mapProp);
            const marker = new window.google.maps.Marker ({
            position: myCenter,
            animation: window.google.maps.Animation.BOUNCE,
            icon: mapDetails.icon
            });
            marker.setMap(map);
            map.set("styles", mapStyle)
        }
    }, [mapIsReady])

    return (
        <div id="googleMap">Google Map</div>
    )
}

export default GoogleMap;