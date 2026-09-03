# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.js >> Login page test
- Location: tests\loginPage.spec.js:5:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev.automationpractice.com/index.php
Call log:
  - navigating to "https://dev.automationpractice.com/index.php", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in dev.automationpractice.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | //const { expect } = require("@playwright/test");
  2  | const testData = require("../testdata/testData.json");
  3  | 
  4  | export default class loginPage{
  5  |     constructor(page){
  6  |         this.page = page;
  7  |         this.userEmail = page.locator("//input[@id='userEmail']");
  8  |         this.userPassword = page.locator("//input[@id='userPassword']");
  9  |         this.loginButton = page.locator("//input[@id='login']");
  10 |     }   
  11 | 
  12 |     async openLoginPage(){
> 13 |         await this.page.goto(process.env.DEV_URL);
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev.automationpractice.com/index.php
  14 |     }
  15 |     async loginPageTest(){
  16 |         await this.userEmail.fill(testData.userName);
  17 |         await this.userPassword.fill(testData.password);
  18 |         await this.loginButton.click();
  19 |     }
  20 | }
  21 | 
  22 | 
```