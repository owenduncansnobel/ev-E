import React from 'react';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import elec_data from './geotab.json';

const GAS_COLOR = [0, 128, 255];
const ELECTRIC_COLOR = [255, 0, 128];

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const DATA_URL = elec_data

const INITIAL_VIEW_STATE = {
  longitude: -79.347015,
  latitude: 43.6532,
  zoom: 12,
  pitch: 10,
  bearing: 0
};

const ScatterMap = ({data = DATA_URL, radius = 6, gasColor = GAS_COLOR, electricColor = ELECTRIC_COLOR, mapStyle = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',height='100vh',width='100vw'}
) => {
  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: radius,
      radiusMinPixels: 1.2,
      getPosition: d => [d[0], d[1]],
      getFillColor: d => d[2] === 0 ? gasColor : electricColor,
      getRadius: 2,
      cluster: true,
      updateTriggers: {
        getFillColor: [gasColor, electricColor]
      }
    })
  ];

  const deckStyle = {
      position: 'relative'
  };
  
  return (
    <DeckGL width={width} height={height} layers={layers} style={deckStyle} initialViewState={INITIAL_VIEW_STATE} controller={true} >
      <StaticMap width={width} height={height} reuseMaps mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}
export default ScatterMap