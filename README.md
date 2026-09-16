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
  getBatchSequenceFromFileName,
  getJournalSourceFromPillar,
  getPillarFromSchemeId,
  getPillars,
  getReportingDataFilter,
  getSchemeBatchProperties,
  getSchemeFromBatchFileName,
  getSchemeIdFromPillar,
  getSchemeIdFromSourceSystem,
  getSchemeIds,
  getSchemeNameFromSchemeId,
  getSchemeNames,
  getSchemeProperties,
  getSchemes,
  getSourceSystemFromSchemeId,
  getSourceSystems,
  isFRPS,
  isSitiAgri,
  isValidSchemeId,
  schemeDoesNotRequirePPAs,
  schemeProvidesAccountingValues
} = require('ffc-pay-schemes')
```

- `createInvoiceNumber(paymentRequest)` creates an invoice number for a given `paymentRequest`.
- `createSplitInvoiceNumber(paymentRequest)` creates a split invoice number for a given `paymentRequest`.
- `getAccountCodeMap(schemeId)` returns the account code mapping used for a given `schemeId`.
- `getBatchSequenceFromFileName(schemeId, fileName)` returns the sequence as identified in the supplied `fileName`, checking the correct position using the `schemeId`.
- `getJournalSourceFromPillar(schemeId, source, pillar)` returns the appropriate manual source used in Payment journals for manual schemes, based on the supplied `pillar`. If `schemeId` is not the MANUAL scheme, or a match is not found, the supplied `source` will be returned.
- `getPillarFromSchemeId(schemeId)` returns the pillar name for a given `schemeId`.
- `getPillars()` returns all supported pillars.
- `getReportingDataFilter(schemeId)` returns the fields which should be added to any data filters applied in reporting checks, for a given `schemeId`.
- `getSchemeBatchProperties(schemeId)` returns the batch processing properties for a given `schemeId`.
- `getSchemeFromBatchFileName(fileName)` returns the supported scheme details based on the expected file mask matching the supplied `fileName`.
- `getSchemeIdFromPillar(pillar)` returns the scheme ID for a given `pillar`.
- `getSchemeIdFromSourceSystem(sourceSystem)` returns the scheme ID for a given `sourceSystem`.
- `getSchemeIds()` returns all supported scheme IDs.
- `getSchemeNameFromSchemeId(schemeId)` returns the scheme name for a given `schemeId`.
- `getSchemeNames()` returns all supported scheme names.
- `getSchemeProperties(schemeId, sourceSystem, pillar)` returns the default payment properties for a scheme. A scheme can be identified by its ID or source system. The optional `pillar` can be used for manual payments.
- `getSchemes()` returns all supported schemes as an array of objects containing `schemeId`, `schemeName`, `sourceSystem` and `pillar`.
- `getSourceSystemFromSchemeId(schemeId)` returns the source system name for a given `schemeId`.
- `getSourceSystems()` returns all supported source systems.
- `isFRPS(schemeId)` returns `true` if the scheme ID comes from FRPS, or `false` if not.
- `isSitiAgri(schemeId)` returns `true` if the scheme ID comes from Siti Agri, or `false` if not.
- `isValidSchemeId(schemeId)` returns `true` if the scheme ID is recognised, or `false` if not, including converting the scheme ID to a numeric value first if required.
- `schemeDoesNotRequirePPAs(schemeId)` returns `true` if Payment Hub does not support Post Payment Adjustments (PPAs) for a given `schemeId`; otherwise, it returns `false`.
- `schemeProvidesAccountingValues(schemeId)` returns `true` if a given `schemeId` provides accounting values within its payment requests; otherwise, it returns `false`.

### Examples

```js
const {
  getSchemes,
  getSchemeIds,
  getSchemeProperties,
  schemeDoesNotRequirePPAs,
  schemeProvidesAccountingValues
} = require('ffc-pay-schemes')

const schemes = getSchemes()

const { BPS } = getSchemeIds()

const scheme = getSchemeProperties(BPS)

const doesNotRequirePPAs = schemeDoesNotRequirePPAs(BPS)
const providesAccountingValues = schemeProvidesAccountingValues(BPS)
```

## Payment Hub usage

The following services are intended to be used with the ffc-pay-schemes package:

- ffc-pay-alerting
- ffc-pay-batch-processor
- ffc-pay-enrichment
- ffc-pay-event-hub
- ffc-pay-gateway
- ffc-pay-injection
- ffc-pay-processing
- ffc-pay-request-editor
- ffc-pay-responses
- ffc-pay-submission
- ffc-pay-tracking
- ffc-pay-web

In the event a new payment scheme is added to the package, all of the above services must be bumped to the latest package version to ensure that Payment Hub can process associated payments.

## Scheme onboarding process

See the linked PR for an example of how to onboard a payment scheme with batch files to the ffc-pay-schemes package:

<https://github.com/DEFRA/ffc-pay-schemes/pull/16>

The below breakdown details all steps required for a general scheme onboarding:

- Add the scheme's pillar name to `app/constants/pillars.js` - this allows the pillar to be recognised for manual payments in `ffc-pay-injection`
- Add the manual source name for the scheme to `app/constants/manual-sources.js` - this defines the `source` name to use in D365 journals for manual payments for the scheme, created by `ffc-pay-submission`
- Add the scheme batch properties to `app/constants/scheme-batch-properties.js` - this defines the naming convention for D365 journals for the scheme, created by `ffc-pay-submission`
- Add the new scheme ID to `app/constants/scheme-ids.js` - this is the glue that holds payment processing together
- Add the scheme name to `app/constants/scheme-names.js` - this is how the scheme will be referred to in all frontend services, and in system logs
- Add the default scheme properties to `app/constants/schemes.js` - this is the primary driver for scheme defaults as read by `ffc-pay-enrichment`
- Add the source system to `app/constants/source-systems.js` - this is how the scheme will be recognised by `ffc-pay-enrichment`, and allow the scheme ID to be determined
- Add the scheme ID to the correct function in `app/create-invoice-number/index.js` - this is how the D365 formatted invoice number will be calculated in `ffc-pay-enrichment`
- Add the scheme ID to the mapping in `app/get-account-code-map/index.js` - this is how account codes will be assigned to invoice lines with different description codes in `ffc-pay-processing` - this is only usually called for PPAs, but for good practice it should be determined for all schemes

For all schemes supporting batch file ingestion:

- Add details of the file mask to `app/constants/file-masks.js` - this should be the file mask as read by `ffc-pay-batch-processor`, and allows the service to recognise the file to be processed.
- Add the file mask to the default scheme properties in `app/constants/schemes.js` - this is referenced by `ffc-pay-batch-processor`
- Add the position of the sequence number within the payment file to `app/constants/sequence-positions.js` - as used by `ffc-pay-batch-processor` to determine the correct sequence number of the file for processing

> Remember that ffc-pay-gateway must still be updated with the inbound file path, server name, and other configuration. See <https://github.com/DEFRA/ffc-pay-gateway/pull/78> for an example.

For all schemes delivered via FRPS:

- Add the scheme ID to `app/constants/frps-schemes.js` - this allows services to understand if it has been delivered by FRPS, helping with numerous helpers for FRPS specific behaviours

For all schemes delivered via Siti Agri:

- Add the scheme ID to `app/constants/siti-agri-schemes.js` - this allows services to understand if it has been delivered by Siti Agri, helping with numerous helpers for Siti Agri specific behaviours

For all schemes which do not support PPAs:

- Add the scheme ID to `app/constants/schemes-not-requiring-ppas.js` - this tells `ffc-pay-processing` not to calculate PPAs

For all schemes which provide accounting values:

- Add the scheme ID to `app/constants/schemes-providing-account-values.js` - this tells `ffc-pay-enrichment` to mark the payment request as providing accounting values, and enables correct value reporting in Payment Hub reports

Completing all of these steps as required should allow Payment Hub to support payments for a new payment scheme, assuming there are no specific behaviours that differ from a general payment scheme.

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
