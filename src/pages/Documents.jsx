import DocumentsFeature from "../features/documents/index.jsx";
import React, { useEffect } from 'react';

function Documents() {
  useEffect(() => {
    document.title = "Documents | Accredify";
  }, []);
  
    return (
      <>
        <DocumentsFeature />
      </>
    );
  }
  
  export default Documents;