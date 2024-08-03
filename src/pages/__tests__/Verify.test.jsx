import React from "react";
import { render, screen } from "@testing-library/react";
import Verify from "../Verify.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Verify", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Verify />
      </Router>
    );
    
    expect(screen.getByText(/🔐 Verify/i)).toBeInTheDocument();
  });

  test("sets verify title correctly", () => {
    // Render the component
    render(
      <Router>
        <Verify />
      </Router>
    );

    expect(document.title).toBe("Verify | Accredify");
  });

});