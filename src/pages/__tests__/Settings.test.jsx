import React from "react";
import { render, screen } from "@testing-library/react";
import Settings from "../Settings.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Settings", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Settings />
      </Router>
    );
    
    expect(screen.getByText(/⚙️ Settings/i)).toBeInTheDocument();
  });

  test("sets settings title correctly", () => {
    // Render the component
    render(
      <Router>
        <Settings />
      </Router>
    );

    expect(document.title).toBe("Settings | Accredify");
  });

});