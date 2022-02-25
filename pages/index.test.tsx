import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders a starting page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "VisionX",
    });

    expect(heading).toBeInTheDocument();
  });
});

// import React from 'react';
// import { render } from '@testing-library/react';
// import MyApp from './_app';
// import '@testing-library/jest-dom/extend-expect';

// test('renders App without crashing', () => {
//   const { getByTestId } = render(<App />);

//   const AppComponent = getByTestId('AppComponent');

//   expect(AppComponent).toBeInTheDocument();
//   expect(AppComponent).toBeVisible();
//   expect(AppComponent).toContainElement(getByTestId('NavbarComponent'));
//   expect(AppComponent).toContainElement(getByTestId('MainComponent'));
//   expect(AppComponent).toContainElement(getByTestId('FooterComponent'));
