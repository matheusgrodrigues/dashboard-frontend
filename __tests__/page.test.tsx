import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
   it("renders a heading", () => {
      render(
         <>
            <p>teste</p>
         </>
      );

      const getTest = screen.getByRole("paragraph");

      expect(getTest).toBeInTheDocument();
   });
});
