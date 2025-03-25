import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class WikipediaResultPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  firstAutomatedProcessParagraph = this.page.locator(
    `p:has-text("first completely automated industrial process")`
  );

  async getParagraphLocator(phrase: string) {
    return this.page.locator(`p:has-text("${phrase}")`);
  }

  async findParagraphWithText(phrase: string) {
    (await this.getParagraphLocator(phrase)).scrollIntoViewIfNeeded();
  }

  async getFirstAutomatedProcessText(phrase: string) {
    return (await this.getParagraphLocator(phrase)).innerText();
  }
}
