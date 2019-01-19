[![pipeline status](https://gitlab.com/quangogster/fs-interview-c1/badges/master/pipeline.svg)](https://gitlab.com/quangogster/fs-interview-c1/commits/master)

# fs-interview-c1

Please complete the following task for your interview evaluation.

# Story:
a simple counter that increment onclick.

# Features:
f1:
- create a firebase function that incremennt the firebase collection upon calling it

f2:
- build frontendd using angular cli


# Prerequisite

## Development Environment

```
Angular version: 6.2.9

For tooling issues:
- Node version: 8.14.0
- NPM version: 6.4.1
```

* Make sure you have installed Node.js v8.latest + NPM: https://nodejs.org/en/download/ (Angular 6 requires at least Node.js v8.9)
* Run `npm install` in the project root

# Configure Environment

All app configurations are defined in `/src/environments` folder and there are 3 files:

 * `environment.base.ts`: Base configurations to share; most configurations should be defined here.
 * `environment.ts`: Development configurations; can override some variables here for the purpose of development
 * `environment.prod.ts`: Production configurations; can override some variables here for the purpose of deployment

Please notice: **always have to make reference to `environment.ts` in order to import configurations**

```ts
import { Config } from '.../environments/environment';
```

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Build and Deploy

 * `npm run start`: Run to launch a dev server, then navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 * `npm run lint`: Run to lint source
 * `npm run test`: Run to do unit testing
 * `npm run e2e`: Run to do end-to-end testing
 * `npm run build:prod`: Run to build for production
