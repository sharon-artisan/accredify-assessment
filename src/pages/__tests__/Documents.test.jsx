import React from "react";
import { render, screen } from "@testing-library/react";
import Documents from "../Documents.jsx";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../features/documents/components/ListDocuments.jsx", () => () => <div>DocumentsFeature Component</div>);

describe("Documents", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Documents />
      </Router>
    );
    
    expect(screen.getByText(/📄 Documents/i)).toBeInTheDocument();
  });

  test("sets document title correctly", () => {
    // Render the component
    render(
      <Router>
        <Documents />
      </Router>
    );

    expect(document.title).toBe("Documents | Accredify");
  });

  test("renders DocumentsFeature component", () => {
    render(
      <Router>
        <Documents />
      </Router>
    );

    expect(screen.getByText(/DocumentsFeature Component/i)).toBeInTheDocument();
  });
});