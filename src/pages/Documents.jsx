import DocumentsFeature from "../features/documents/index.jsx";
import React, { useEffect } from 'react';

function Documents() {
  useEffect(() => {
    document.title = "Documents | Accredify";
  }, []);
  
    return (
      <div className="home-container">
				<div className="home-user-container">
					<span className="home-title">📄 Documents</span>
				</div>

				<div>
					<DocumentsFeature />
				</div>
			</div>
    );
  }
  
  export default Documents;