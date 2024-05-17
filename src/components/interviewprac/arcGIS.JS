import React, { useRef, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const MapComponent = () => {
    const mapRef = useRef();

    useEffect(() => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'], { css: true })
            .then(([ArcGISMap, MapView, FeatureLayer]) => {
                const map = new ArcGISMap({
                    basemap: 'streets-navigation-vector'
                });

                const view = new MapView({
                    container: mapRef.current,
                    map,
                    center: [-98, 38], // Longitude, Latitude
                    zoom: 4
                });

                const citySymbol = {
                    type: 'simple-marker',
                    color: 'blue',
                    size: 6
                };

                const citiesLayer = new FeatureLayer({
                    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Cities/FeatureServer/0',
                    renderer: {
                        type: 'simple',
                        symbol: citySymbol
                    }
                });

                map.add(citiesLayer);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return <div ref={mapRef} style={{ height: '600px', width: '100%' }}></div>;
};

export default MapComponent;
