import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Map from "../components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Spinner from "../components/Spinner";

const Brick = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    // libraries: ["places"],
  });

  return isLoaded ? <Map /> : <Spinner />;
};

export default Brick;
