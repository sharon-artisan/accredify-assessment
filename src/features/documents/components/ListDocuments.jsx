import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ListDocuments.scss";
import documentsJson from "../../../data/documents.json";
import { formatDate } from "../../../utils/formatDate.js";
import { Divider } from "primereact/divider";
import documentFilledIcon from "../../../assets/icons/icon_documents_filled.svg";
import kebabIcon from "../../../assets/icons/icon_kebab.svg";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from 'primereact/button';



export default function ProgressGoal({ showLink }) {
  const openMoreItems = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const actions = [
    { icon: "pi pi-download", text: "Download", action: "download" },
    { icon: "pi pi-pencil", text: "Edit", action: "edit" },
    { icon: "pi pi-trash", text: "Delete", action: "delete" },
  ];

  const handlePanelToggle = (e) => {
    setIsPanelOpen(!isPanelOpen);
    openMoreItems.current.toggle(e);
  };

  const handleAction = (action) => {
    switch (action) {
      case "download":
        // Implement download logic
        break;
      case "edit":
        // Implement edit logic
        break;
      case "delete":
        // Implement delete logic
        break;
      default:
        break;
    }
  };

  // Sort documents by received_on in descending order, handling null values
  const sortedDocuments = documentsJson.data.slice().sort((a, b) => {
    if (a.received_on === null && b.received_on === null) return 0;
    if (a.received_on === null) return 1; // Place null values at the end
    if (b.received_on === null) return -1; // Place null values at the end
    return new Date(b.received_on) - new Date(a.received_on); // Sort by date descending
  });

  return (
    <>
      <div className="home-career-document-gap">
        <div className="list-documents-title-container">
          <h1 className="text-h4">Recent Documents</h1>
          {showLink && (
            <Link to={`/documents`} id="secondary-cta">
              View All Documents
            </Link>
          )}
        </div>
        <div className="list-documents-container">
          <div className="list-documents-header">
            <span className="list-first-column text-h6 text-grey-300">
              Document Name
            </span>
            <span className="list-second-column text-h6 text-grey-300">
              Received On
            </span>
            <span className="list-third-column text-h6 text-grey-300"></span>
          </div>
          <Divider className="divider" />

          {sortedDocuments.map((item) => (
            <React.Fragment key={item.id}>
              <div className="grid grid-cols-12 gap-4 document-item">
                <div className="list-first-column flex items-center gap-4">
                  <img
                    src={documentFilledIcon}
                    className="w-6 h-6"
                    alt="Document Icon"
                  />
                  <span className="text-h6">
                    {item.document_name}
                  </span>
                </div>
                <span className="list-second-column text-meta">
                  {formatDate(item.received_on)}
                </span>
                <div className="list-third-column flex justify-center cursor-pointer" onClick={handlePanelToggle}>
                  <img
                    src={kebabIcon}
                    className="w-6 h-6 ml-auto"
                    alt="Actions Icon"
                  />
                  <OverlayPanel ref={openMoreItems}>
                    <div className="overlay-panel">
                      {actions.map(
                        ({ icon, text, action }) => (
                          <Button
                            key={action}
                            onClick={() => handleAction(action)}
                            className={`flex items-center gap-2 p-2 rounded-lg w-full ${
                              action === 'delete' ? 'text-red-600 hover:bg-red-200' : 'hover:bg-grey-80'
                            }`}
                          >
                            <i className={icon}></i>
                            <span>{text}</span>
                          </Button>
                        )
                      )}
                    </div>
                  </OverlayPanel>
                </div>
              </div>
              <Divider className="divider" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}