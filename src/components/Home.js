import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
const Home = () => {
  console.log(window.globalCount++);
  return <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>;
};
export default Home;