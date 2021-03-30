# @practera/template-transform

Facilitates the communication with the Practera preferences API.

## Health

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=alert_status)](https://sonarcloud.io/dashboard?id=intersective_template-transform)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=coverage)](https://sonarcloud.io/dashboard?id=intersective_template-transform)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=security_rating)](https://sonarcloud.io/dashboard?id=intersective_template-transform)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=intersective_template-transform)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=bugs)](https://sonarcloud.io/dashboard?id=intersective_template-transform)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=intersective_template-transform&metric=code_smells)](https://sonarcloud.io/dashboard?id=intersective_template-transform)


## Install

```
$ npm install @practera/template-transform
```

## Usage

### setting up the client
JavaScript:
```js
const transform = require("@practera/template-transform");
```

TypeScript:
```js
import { transform } from "@practera/template-transform";
```

### Transforming a template

```js
const result = transform(
  VersionFrom, // string, the version the template is in
  VersionTo, // string, the desired version
  data // {} the json data
);
```

