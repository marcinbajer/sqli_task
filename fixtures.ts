import { test as base } from "@playwright/test";
import { BasePage } from "./pages/basePage";

export type Fixtures = {
  basePage: BasePage;
  setUp: string;
};

export const test = base.extend<Fixtures>({
  setUp: async ({ page }, use) => {
    await page.goto("/");
    await use("");
  },
  basePage: async ({ page, setUp }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});
