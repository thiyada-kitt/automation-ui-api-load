# Unified QA Automation Framework (UI, API & Load)
<p align="left">
  <img src="https://img.shields.io/badge/-Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/-Cypress-17202C?style=flat-square&logo=cypress&logoColor=white" alt="Cypress" />
  <img src="https://img.shields.io/badge/-Robot%20Framework-000000?style=flat-square&logo=robotframework&logoColor=white" alt="Robot Framework" />
  <img src="https://img.shields.io/badge/-Selenium-43B02A?style=flat-square&logo=selenium&logoColor=white" alt="Selenium" />
  <img src="https://img.shields.io/badge/-k6-7D64FF?style=flat-square&logo=k6&logoColor=white" alt="k6" />
  <img src="https://img.shields.io/badge/-Apache%20JMeter-D22128?style=flat-square&logo=apachejmeter&logoColor=white" alt="JMeter" />
  <img src="https://img.shields.io/badge/-Grafana-F46800?style=flat-square&logo=grafana&logoColor=white" alt="Grafana" />
  <img src="https://img.shields.io/badge/-InfluxDB-22ADF6?style=flat-square&logo=influxdb&logoColor=white" alt="InfluxDB" />
  <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
</p>
A comprehensive QA suite demonstrating modern UI/API testing (Playwright, Cypress), traditional UI frameworks (Robot Framework, Selenium), performance testing (k6, JMeter) with real-time Grafana monitoring, and CI/CD pipelines via GitHub Actions.

## Architecture Overview

This repository serves as a proof-of-concept for an enterprise-level test automation architecture. It is divided into distinct phases and toolsets:

- **Modern E2E (UI & API):** Playwright and Cypress
- **Performance & Monitoring:** k6, JMeter, InfluxDB, and Grafana
- **Classic UI Automation:** Robot Framework and Selenium WebDriver
- **Continuous Integration (CI/CD):** GitHub Actions

## 📂 Repository Structure

The project is structured as a monorepo targeting the **RealWorld App (Conduit)** as the single System Under Test (SUT). Testing types are separated into specific directories to showcase different tools and methodologies:

```text
automation/
│
├── .github/workflows/         # CI/CD pipelines (GitHub Actions YAML)
│
├── infrastructure/            # 🛠️ [Docker] Local Environment Setup
│   ├── docker-compose.yml     # Infrastructure setup (Database, InfluxDB, Grafana)
│   └── README.md              # Instructions for starting the RealWorld App
│
├── playwright-e2e/            # 🟢 [TypeScript] Modern Full-Loop Testing
│   ├── tests/                 # E2E specs crossing UI, API, and DB validation
│   └── pages/                 # Strongly-typed Page Object Model (POM)
│
├── cypress-e2e/               # 🟢 [TypeScript] Frontend Automation & Mocking
│   ├── cypress/e2e/           # UI testing scenarios
│   └── cypress/support/       # API Interception & Custom Commands
│
├── performance-testing/       # 🟡 [JavaScript / XML] Load Testing
│   ├── k6-scripts/            # JS load testing scripts (100+ VUs)
│   └── jmeter-scripts/        # JMeter GUI scenarios (.jmx)
│
└── robot-selenium/            # 🔵 [Python] Classic UI Automation
    ├── tests/                 # Robot Framework keyword-driven specs (.robot)
    └── pages/                 # Selenium WebDriver POM logic (Python)
```
## System Under Test (SUT) Strategy

All test suites in this repository target the **RealWorld Application (Conduit)**, an open-source clone of Medium.com. To ensure stable and reproducible test environments, we run the SUT locally.

**🎯 Target Application Sources:**
- **Frontend UI:** [React/Redux RealWorld App](https://github.com/gothinkster/react-redux-realworld-example-app) (Runs on `http://localhost:4100`)
- **Backend API:** [Node.js/Express RealWorld API](https://github.com/gothinkster/node-express-realworld-example-app) (Runs on `http://localhost:3000/api`)

To showcase a versatile skill set suitable for both startups and large-scale enterprises, the testing approach is divided by access levels:

- **Full-Loop / Gray-Box Testing (Playwright & Cypress):** 
  Demonstrates deep integration testing. Scripts simulate UI events, intercept API calls, and directly validate data creation in the underlying database.
- **Black-Box Testing (Robot Framework & Selenium):** 
  Simulates a strict corporate environment where QA only has access to the frontend. Tests focus entirely on UI behavior and user flows without backend access.
- **API Performance Testing (k6 & JMeter):** 
  Focuses on backend resilience by load-testing Conduit's API endpoints, with real-time metrics streamed to InfluxDB and visualized in Grafana.

## Tech Stack & Language Strategy

To demonstrate versatility across different enterprise environments, this framework utilizes multiple programming languages matched with industry standards:

- **TypeScript (Playwright, Cypress):** Ensures type safety, robust Page Object Models (POM), and aligns with modern frontend development.
- **JavaScript (k6):** Utilized for its native compatibility with the k6 engine for high-performance load testing.
- **Python (Robot Framework, Selenium):** Demonstrates cross-language proficiency and back-to-basics keyword-driven test design.
- **Docker:** Manages the infrastructure for monitoring tools (InfluxDB + Grafana).

## Getting Started & Local Setup
- wait

## Test Execution Demos

For a quick overview of the automated tests in action without running them locally, check out these short demonstration clips:

**Modern E2E & Mocking**
- **Playwright:** [Watch Video / View GIF] - Showcasing UI interactions, API calls, and direct Database validation.
- **Cypress:** [Watch Video / View GIF] - Demonstrating frontend test execution with API network interception and mocking.

**Performance & Monitoring**
- **k6 + Grafana:** [Watch Video / View GIF] - Live Grafana dashboard streaming real-time metrics during a 100 VUs load test.
- **JMeter:** [Watch Video / View GIF] - Execution of JMeter scenarios and HTML performance report generation.

**Classic UI Automation**
- **Robot Framework:** [Watch Video / View GIF] - Keyword-driven test execution and generated detailed HTML test logs.
- **Selenium WebDriver:** [Watch Video / View GIF] - Classic Page Object Model (POM) navigation and test assertions.
