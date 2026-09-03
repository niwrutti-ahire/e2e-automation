
const {expect} = require('@playwright/test');

export default class dashboardPage {
    constructor(page) {
        this.page = page;
        this.logoText = page.locator("//p[normalize-space()='Automation Practice']")
    }   

    async verifyLogoText() {
        await expect(this.logoText).toHaveText("Automation Practice");
    }
}
