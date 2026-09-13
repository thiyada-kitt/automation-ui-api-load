# QA Automation Suite (Web, API, Mobile & Performance)

<p align="left">
  <img src="https://img.shields.io/badge/-Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/-Maestro-FF4A5A?style=flat-square&logo=maestro&logoColor=white" alt="Maestro" />
  <img src="https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" alt="Postman" />
  <img src="https://img.shields.io/badge/-k6-7D64FF?style=flat-square&logo=k6&logoColor=white" alt="k6" />
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
</p>

## Core Testing Capabilities

- **Web & API E2E:** [Playwright] using TypeScript and the Page Object Model (POM) design pattern.
- **API Automation:** [Postman/Newman] for rapid endpoint validation and regression.
- **Mobile Automation:** [Maestro] for declarative, cross-platform UI testing (Android/iOS).
- **Performance & Load:** [k6] for analyzing system behavior under stress, utilizing Parameterization and dynamic Ramp-up stages.
- **CI/CD Integration:** [GitHub Actions] for automated test execution on code commits.

---

## Repository Structure

The project is structured as a monorepo to cleanly separate testing scopes while maintaining a unified CI/CD workflow:

```text
qa-automation/
│
├── .github/workflows/         # CI/CD pipeline (Triggers Playwright & Newman on push)
│   └── test-pipeline.yml
│
├── docs/                      
│   ├── performance-findings.md # Analytical report on Load vs. Stress bottlenecks
│   └── api-test-data.csv      # Data-driven testing file for Parameterization
│
├── web-api-playwright/        # Web E2E & API integration tests (TypeScript)
│
├── api-postman-newman/        # Postman collections & Newman execution scripts
│
├── mobile-maestro/            # Mobile automation scripts (.yaml)
│
└── performance-k6/            
    ├── api-load-test.js       # Simulates standard peak traffic (Ramp-up)
    ├── api-stress-test.js     # Pushes system to breaking point to find limits
    └── load-test-report.png   # Generated k6 HTML summary dashboard
```

## Testing Strategies & Implementation
**1. Web & API Automation (Playwright & Newman)**
Focuses on ensuring system reliability through End-to-End user journeys.
Playwright: Simulates realistic user interactions (e.g., Login, Checkout) utilizing POM for maintainability.
Newman: Executes API integration tests directly from the CLI, ensuring backend endpoints return expected status codes and JSON payloads.

**2. Mobile UI Testing (Maestro)**
Demonstrates mobile test automation utilizing Maestro's intuitive YAML-based flows.
Validates cross-platform application states without the overhead of complex driver configurations.
Focuses on core user journeys (e.g., search, navigation).

**3. Performance Benchmarking (k6)**
Goes beyond basic script execution by applying real-world load testing concepts:
Parameterization: Uses data from docs/api-test-data.csv to simulate unique user sessions.
Load vs. Stress Testing: Separate scripts are used to distinguish between expected high traffic (Load) and breaking-point limits (Stress).
Key Metrics Analyzed: Virtual Users (VUs), Throughput (RPS), Latency (p95), and Error Rates.

## Test Execution Demos
- Web & API (Playwright): [Insert Link to GIF/Screenshot]
- API CI/CD (Newman): [Insert Link to GitHub Actions Action Tab Screenshot]
- Mobile (Maestro): [Insert Link to Demo GIF]
- Performance Report (k6): [Insert Link to load-test-report.png]
