import React, { useState, useMemo, useCallback, useRef } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
// import Places form "./places";
// import Disatnce from "./distance";
const PageContainer = styled.div`
  ${tw`
    flex
`}
`;

const MapContainer = styled.div`
  ${tw`
    flex
    width[80vw]
    height[85vh]
    ml-auto
    mr-auto
`}
`;

const Controls = styled.div`
  ${tw`
    width[20vw]
    height[85vh]
    padding[1rem]
    bg-gray-800
    text-white
`}
`;

const Map = () => {
  const onChange = () => {};
  const center = useMemo(() => ({ lat: 42.36, lng: -71.06 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  return (
    <PageContainer>
      <Controls> Restraunts near you </Controls>
      <MapContainer>
        <GoogleMap
          bootstrapURLKeys={{ key: "" }}
          center={center}
          zoom={14}
          margin={[50, 50, 50, 50]}
          options={options}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          // onChange={onChange}
          // onChildClick={'nothing'}
        ></GoogleMap>
      </MapContainer>
    </PageContainer>
  );
};

export default Map;
