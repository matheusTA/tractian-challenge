import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/dom";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
