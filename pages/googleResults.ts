import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class GoogleResults extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async openResultOnDesiredWebsite(website: string) {
    const resultLocator = this.page.locator(
      `//a[contains(@href, "${website}")]/h3`
    );
    await resultLocator.scrollIntoViewIfNeeded();
    await resultLocator.click();
  }
}
