# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.js >> Login page test
- Location: tests\loginPage.spec.js:5:1

# Error details

```
TypeError: _loginPagePo.loginPage is not a constructor
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | import { loginPage } from '../pageobject/loginPage.po.js';
  3  | 
  4  | 
  5  | test('Login page test', async ({page}) => {
> 6  |      const login = new loginPage(page);
     |                    ^ TypeError: _loginPagePo.loginPage is not a constructor
  7  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login")    
  8  |     await login.openLoginPage();
  9  |     await login.loginPageTest();
  10 | 
  11 | })
```