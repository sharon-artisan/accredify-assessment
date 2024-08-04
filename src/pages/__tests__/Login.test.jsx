import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("sets login title correctly", () => {
    // Render the component
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(document.title).toBe("Login | Accredify");
  });
});