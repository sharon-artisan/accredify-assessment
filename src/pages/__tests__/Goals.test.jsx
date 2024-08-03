import React from "react";
import { render, screen } from "@testing-library/react";
import Goals from "../Goals.jsx";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../features/goals/components/ProgressGoal.jsx", () => () => <div>Goals Component</div>);

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

  test("renders GoalsFeature component", () => {
    render(
      <Router>
        <Goals />
      </Router>
    );

    expect(screen.getByText(/Goals Component/i)).toBeInTheDocument();
  });
});