import VerifyFeature from "../features/verify/index.jsx";
import React, { useEffect } from 'react';

function Verify() {
  useEffect(() => {
    document.title = "Verify | Accredify";
  }, []);
  

    return (
      <>
        <VerifyFeature />
      </>
    );
  }
  
  export default Verify;