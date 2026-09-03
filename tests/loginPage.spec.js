const {test,expect} = require('@playwright/test');
import loginPage from '../pageobject/loginPage.po.js';
import dashboardPage from '../pageobject/dashboardPage.po.js';


test('Login page test', async ({page}) => {
     const login = new loginPage(page);
     const dashboard = new dashboardPage(page);
    await login.openLoginPage();
    await login.loginPageTest();
    await dashboard.verifyLogoText();
})