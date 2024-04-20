import React from "react";
import GoogleMapReact from "google-map-react";

import { Paper, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOffOutlined";

import Rating from "@material-ui/lab";
import useStyles from "./style";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const cordinates = {
    lat: 0,
    lng: 0,
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB65PM2iGok0bSRwOEV1W0_Yy47NlIrIr8" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={" "}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
