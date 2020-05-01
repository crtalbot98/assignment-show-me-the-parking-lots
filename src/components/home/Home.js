import React from "react";
import SideBar from "./SideBar";
import Recenter from "../google-maps/Recenter";
import GoogleMaps from "../google-maps/GoogleMaps";
import Location from "../google-maps/Location";

function Home () {

    return(
        <div className={'body-cont'}>
            <SideBar/>
            <Recenter/>
            <Location/>
            <GoogleMaps/>
        </div>
    );
}

export default Home;