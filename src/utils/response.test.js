import { sum } from "./response";

test("Testing sum function", () => {
  expect(sum(4, 5)).toBe(9);
});
