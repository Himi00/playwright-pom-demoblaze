# Playwright POM Automation – Demoblaze

End-to-end test automation framework for the [Demoblaze](https://www.demoblaze.com/) e-commerce demo site, built with **Playwright** and the **Page Object Model (POM)** design pattern.

## Tech Stack
- Playwright Test (JavaScript)
- Page Object Model
- dotenv (secure credential handling)
- GitHub Actions (CI)

## Project Structure
Pages/        → Page classes (locators + actions)
tests/        → Test files (steps + assertions)
.env          → Credentials (not committed)

## Test Scenarios
- User can log in and add a product to the cart

## Key Practices
- No hard waits: uses Playwright auto-waiting and web-first assertions
- Credentials stored in environment variables, not in code
- Browser dialogs handled with `waitForEvent`
- Assertions kept in tests, locators kept in page objects

## How to Run
1. Clone the repo and install dependencies:
   npm install
   npx playwright install
2. Create a `.env` file in the project root:
   DEMO_USERNAME=your_username
   DEMO_PASSWORD=your_password
3. Run the tests:
   npx playwright test
4. View the report:
   npx playwright show-report