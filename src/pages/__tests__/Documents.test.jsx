import React from "react";
import { render, screen } from "@testing-library/react";
import Documents from "../Documents.jsx";
import { BrowserRouter as Router } from "react-router-dom";

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
});