# Playwright - Web API Crypto use case

Remember to run `npm install` before running tests.

## Run tests locally

```bash
npm run test
# or
npm run test:ui
```

#### ✅ Works perfectly

## Run tests in Docker

```bash
npm run test:docker:up
```

then

```bash
npm run test:docker:test
# or
npm run test:docker:ui
```

#### ❌ Fails with `TypeError: crypto.randomUUID is not a function`
