import { Locator, Page } from "@playwright/test";

export class HelperBase {
  readonly page: Page;
  acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = this.page.locator("#L2AGLb");
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }
}
