import App from "./App.vue";
import { test, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/vue";

afterEach(cleanup);

test("alt:ロゴのイメージが表示される", () => {
  render(App);
  // const { container, debug } = render(App);
  // debug();
  const img = screen.getByAltText("logo");
  console.log(img);
  expect(img).toBeTruthy();
});

test("headerが存在する", () => {
  render(App);
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toBeTruthy();
});
