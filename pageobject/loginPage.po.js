const { expect } = require("@playwright/test");
const testData = require("../testdata/testData.json");

export default class loginPage{
    constructor(page){
        this.page = page;
        this.userEmail = page.locator("//input[@id='userEmail']");
        this.userPassword = page.locator("//input[@id='userPassword']");
        this.loginButton = page.locator("//input[@id='login']");
    }   

    async openLoginPage(){
        await this.page.goto(process.env.DEV_URL);
    }
    async loginPageTest(){
        await this.userEmail.fill(testData.userName);
        await this.userPassword.fill(testData.password);
        await this.loginButton.click();
    }
}

