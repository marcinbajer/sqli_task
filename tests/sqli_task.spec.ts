import { expect } from "@playwright/test";
import { test } from "../fixtures";

const paragraphToSearch = 'first completely automated industrial process'
const phraseToSearch = 'automation'
const resultsWebsite = 'wikipedia'
const expectedScreenshot = 'wikipediaResultPage.png'
const expectedYear = '1785'

test.describe("Test verifies", () => {
    test.beforeEach(async ({ basePage }) => {
        await basePage.onGoogleHomePage().acceptCookies()
    })

    test(`result of searching for ${phraseToSearch} in google`, async ({basePage, page}) => {
        await basePage.onGoogleHomePage().searchForPhrase(phraseToSearch)
        await basePage.onGoogleResultsPage().openResultOnDesiredWebsite(resultsWebsite)
        await basePage.onWikipediaResultPage().findParagraphWithText(paragraphToSearch)
        expect(await basePage.onWikipediaResultPage().getFirstAutomatedProcessText(paragraphToSearch)).toContain(expectedYear)
        await expect(page).toHaveScreenshot(expectedScreenshot)
    })
})