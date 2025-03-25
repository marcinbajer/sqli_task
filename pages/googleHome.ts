import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class GoogleHome extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  searchBox = this.page.locator("#APjFqb");

  async searchForPhrase(phrase: string) {
    await this.searchBox.fill(phrase);
    await this.page.keyboard.press("Enter");
  }
}
