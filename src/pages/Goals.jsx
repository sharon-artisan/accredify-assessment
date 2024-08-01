import GoalsFeature from "../features/goals/index.jsx";
import React, { useEffect } from 'react';

function Goals() {
  useEffect(() => {
    document.title = "Home | Accredify";
  }, []);

    return (
      <>
        <GoalsFeature />
      </>
    );
  }
  
  export default Goals;