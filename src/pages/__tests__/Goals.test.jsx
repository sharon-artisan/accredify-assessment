import React from "react";
import { render, screen } from "@testing-library/react";
import Goals from "../Goals.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Goals", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Goals />
      </Router>
    );
    
    expect(screen.getByText(/💡 Goals/i)).toBeInTheDocument();
  });

  test("sets goals title correctly", () => {
    // Render the component
    render(
      <Router>
        <Goals />
      </Router>
    );

    expect(document.title).toBe("Goals | Accredify");
  });
});