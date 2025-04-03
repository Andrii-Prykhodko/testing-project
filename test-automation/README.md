# Testing Project - Playwright Test Automation

## Overview

This repository contains automated tests for web applications using **Playwright** and **TypeScript**. The tests are organized into two main categories:

1. **Test Automation**: Automated tests for core features and functionality of the application.
2. **Exploratory Testing**: Manual exploratory testing report and notes.

## Project Structure

The project is organized into the following directories:

. ├── exploratory-testing/ # Manual exploratory testing reports and documentation 
  │    └── README.md
  └── test-automation/ # Automated test scripts and configurations 
    ├── pages
    │  ├── LoginPage.ts 
    │  ├── ShopPage.ts
    │  └── SignUpPage.ts
    ├── tests/ # Test scripts 
    │  ├── Login_and_reward.spec.ts 
    │  └── SignUp.spec.ts
    ├── playwright.config.ts # Playwright configuration file 
    ├── tsconfig.json # TypeScript configuration file
    └── README.md


## Getting Started

To run the tests locally, follow these steps:

#### 1. Clone the Repository

Clone the repository to your local machine using the following command:

git clone https://github.com/Andrii-Prykhodko/testing-project.git

#### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:

cd testing-project/test-automation
npm install


#### 3. Run Tests
To run the Playwright tests, use the following command:

npx playwright test --ui
This will execute the automated tests in the test-automation/tests/ directory.

Exploratory Testing
In the exploratory-testing/ folder, you can find README with detailed report for the manual exploratory testing performed on different parts of the website. These report contains issues, UX concerns, and suggested fixes.
