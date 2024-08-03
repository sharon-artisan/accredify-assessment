import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SettingsFeature from "../index.jsx";

describe("SettingsFeature", () => {
	test("renders without crashing", () => {
		render(<SettingsFeature />);
	});
});
