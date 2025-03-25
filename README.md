# sqli_task
Recruitment task for SQLI
# Playwright Test Automation Setup

## Prerequisites
Before setting up the Playwright test automation project, ensure that you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/)
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

## Project Initialization
To set up a new Playwright test project, follow these steps:

### 1. Initialize a New Node.js Project
Run the following command to create a new `package.json` file:
```sh
npm init -y
```

### 2. Install Playwright
Install Playwright and its dependencies by running:
```sh
npm install --save-dev @playwright/test
```

### 3. Install Browsers
Playwright requires browser binaries to run tests. Install them using:
```sh
npx playwright install
```

### 4. Run Tests
Execute the test suite using:
```sh
npx playwright test
```

### 5. View Test Results
After running tests, view the report:
```sh
npx playwright show-report
```

## Additional Commands
- Run tests in headed mode:
  ```sh
  npx playwright test --headed
  ```
- Run tests for a specific browser:
  ```sh
  npx playwright test --browser=chromium
  ```
- Debug a test:
  ```sh
  npx playwright test --debug
  ```
