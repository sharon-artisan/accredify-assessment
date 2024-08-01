import HomeFeature from "../features/home/index.jsx";
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "Home | Accredify";
  }, []);

    return (
     <HomeFeature />
    );
  }
  
  export default Home;