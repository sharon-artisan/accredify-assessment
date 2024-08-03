import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VerifyFeature from "../index.jsx";

describe("VerifyFeature", () => {
	test("renders without crashing", () => {
		render(<VerifyFeature />);
	});
});
