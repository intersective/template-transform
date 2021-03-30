# @practera/template-transform

Facilitates the communication with the Practera preferences API.

## Health

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=alert_status&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=coverage&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=security_rating&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=sqale_rating&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=bugs&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=intersective_settings-sdk&metric=code_smells&token=19814e72d32dd8ab193bb168320116a41f84beb3)](https://sonarcloud.io/dashboard?id=intersective_settings-sdk)


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

