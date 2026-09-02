# ffc-pay-schemes

Module for defining and providing details for the payment schemes supported by the Payment Hub.

## Usage

### Installation

```
npm install --save ffc-pay-schemes
```

## Available functions

```js
const {
  createInvoiceNumber,
  createSplitInvoiceNumber,
  getAccountCodeMap,
  getSchemeBatchProperties,
  getSchemeIdFromPillar,
  getSchemeIdFromSourceSystem,
  getSchemeIds,
  getSchemeNameFromSchemeId,
  getSchemeNames,
  getSchemeProperties,
  getSchemes,
  getSourceSystemFromSchemeId,
  getSourceSystems,
  isValidSchemeId,
  schemeDoesNotRequirePPAs,
  schemeProvidesAccountingValues
} = require('ffc-pay-schemes')
```

- `createInvoiceNumber(paymentRequest)` creates an invoice number for a given `paymentRequest`.
- `createSplitInvoiceNumber(paymentRequest)` creates a split invoice number for a given `paymentRequest`.
- `getAccountCodeMap(schemeId)` returns the account code mapping used for a given `schemeId`.
- `getSchemeBatchProperties(schemeId)` returns the batch processing properties for a given `schemeId`.
- `getSchemeIdFromPillar(pillar)` returns the scheme ID for a given `pillar`.
- `getSchemeIdFromSourceSystem(sourceSystem)` returns the scheme ID for a given `sourceSystem`.
- `getSchemeIds()` returns all supported scheme IDs.
- `getSchemeNameFromSchemeId(schemeId)` returns the scheme name for a given `schemeId`.
- `getSchemeNames()` returns all supported scheme names.
- `getSchemeProperties(schemeId, sourceSystem, pillar)` returns the default payment properties for a scheme. A scheme can be identified by its ID or source system. The optional `pillar` can be used for manual payments.
- `getSchemes()` returns all supported schemes as an array of objects containing `schemeId`, `schemeName` and `sourceSystem`.
- `getSourceSystemFromSchemeId(schemeId)` returns the source system name for a given `schemeId`.
- `getSourceSystems()` returns all supported source systems.
- `isValidSchemeId(schemeId)` returns `true` if the scheme ID is recognised, or `false` if not, including converting the scheme ID to a numeric value first if required.
- `schemeDoesNotRequirePPAs(schemeId)` returns `true` if Payment Hub does not support Post Payment Adjustments (PPAs) for a given `schemeId`; otherwise, it returns `false`.
- `schemeProvidesAccountingValues(schemeId)` returns `true` if a given `schemeId` provides accounting values within its payment requests; otherwise, it returns `false`.

### Examples

```js
const {
  getSchemes,
  getSchemeProperties,
  schemeDoesNotRequirePPAs,
  schemeProvidesAccountingValues,
  schemeIds
} = require('ffc-pay-schemes')

const schemes = getSchemes()

const scheme = getSchemeProperties(schemeIds.BPS)

const doesNotRequirePPAs = schemeDoesNotRequirePPAs(schemeIds.BPS)
const providesAccountingValues = schemeProvidesAccountingValues(schemeIds.BPS)
```

## Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT
LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and
applications when using this information.

> Contains public sector information licensed under the Open Government license
> v3

### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her
Majesty's Stationery Office (HMSO) to enable information providers in the
public sector to license the use and re-use of their information under a common
open licence.

It is designed to encourage use and re-use of information freely and flexibly,
with only a few conditions.