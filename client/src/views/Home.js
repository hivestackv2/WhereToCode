import React from "react";
import { withAuthorization } from "../components/Session";
import NetworkSpeed from "../components/NetworkSpeed/NetworkSpeed";

import Map from "../components/Map/Map.jsx";


const Home = ({ place }) => {
  return (

    <div>

      <p>Home Page accessed by authorized user</p>
      <NetworkSpeed />
      <Map place={place} />




    </div>

  );
};

const condition = authUser => !!authUser;


export default withAuthorization(condition)(Home);
