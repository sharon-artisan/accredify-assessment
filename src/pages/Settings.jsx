import SettingsFeature from "../features/settings/index.jsx";
import React, { useEffect } from 'react';

function Settings() {
  useEffect(() => {
    document.title = "Settings | Accredify";
  }, []);

    return (
      <>
        <SettingsFeature />
      </>
    );
  }
  
  export default Settings;