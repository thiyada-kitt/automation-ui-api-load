# automation-ui-api-load

Comprehensive QA suite covering:

- **UI/API testing:** Playwright, Cypress
- **UI automation:** Robot Framework, Selenium
- **Load testing:** k6, JMeter
- **Observability:** Grafana + InfluxDB
- **CI/CD:** GitHub Actions workflow for smoke QA execution

## Repository layout

- `/tests/ui/playwright` - Playwright UI smoke tests
- `/tests/api/playwright` - Playwright API smoke tests
- `/cypress/e2e` - Cypress UI smoke tests
- `/tests/ui/robot` - Robot Framework UI automation tests
- `/tests/ui/selenium` - Selenium UI automation tests
- `/tests/load/k6` - k6 load scripts
- `/tests/load/jmeter` - JMeter test plans
- `/grafana/provisioning` - Grafana datasource provisioning
- `/.github/workflows/qa-suite.yml` - CI/CD workflow

## Local setup

### 1) Node-based tools (Playwright, Cypress, Selenium)

```bash
npm install
npx playwright install --with-deps chromium
```

Run:

```bash
npm run test:playwright
npm run test:cypress
npm run test:selenium
```

### 2) Robot Framework

```bash
pip install -r requirements.txt
python -m robot tests/ui/robot
```

### 3) Load tests

k6:

```bash
k6 run tests/load/k6/http-smoke.js
```

JMeter plan XML validation:

```bash
python scripts/validate_jmeter_plan.py
```

## Grafana for load metrics

Start stack:

```bash
docker compose up -d
```

- Grafana: `http://localhost:3000` (`admin`/`admin`)
- InfluxDB: `http://localhost:8086`

You can send k6 metrics to InfluxDB with:

```bash
k6 run --out influxdb=http://localhost:8086/k6 tests/load/k6/http-smoke.js
```

## CI/CD

GitHub Actions workflow `qa-suite.yml` runs:

- Playwright UI/API smoke tests
- Cypress smoke test
- Robot + Selenium smoke tests
- k6 smoke test and JMeter plan validation
