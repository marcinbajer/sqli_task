import { Page } from "@playwright/test";
import { GoogleHome } from "./googleHome";
import { GoogleResults } from "./googleResults";
import { WikipediaResultPage } from "./wikipediaResult";

export class BasePage {
  private readonly googleHome: GoogleHome;
  private readonly googleResults: GoogleResults;
  private readonly wikipediaResultPage: WikipediaResultPage;

  constructor(protected page: Page) {
    this.page = page;
    this.googleHome = new GoogleHome(this.page);
    this.googleResults = new GoogleResults(this.page);
    this.wikipediaResultPage = new WikipediaResultPage(this.page);
  }

  onGoogleHomePage() {
    return this.googleHome;
  }

  onGoogleResultsPage() {
    return this.googleResults;
  }

  onWikipediaResultPage() {
    return this.wikipediaResultPage;
  }
}
