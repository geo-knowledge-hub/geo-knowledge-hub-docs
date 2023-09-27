---
id: metadata
title: Metadata
sidebar_position: 2
---

import Admonition from '@theme/Admonition';

<Admonition type="caution" icon="🚧" title="Page under revision">
    <p>This section is under revision.</p>
</Admonition>

# Metadata reference

**Summary**

The following document is a reference guide for the internal metadata schema of bibliographic records in the GEO Knowledge Hub.

**Intended audience**

This guide is intended for advanced users, administrators and developers.

**Definitions**

In GEO Knowledge Hub, content can be published using [Knowledge Packages](/docs/concepts/sharing-units/concepts-sharing-units-packages) and [Knowledge Resources](/docs/concepts/sharing-units/concepts-sharing-units-resources). Both entities are specializations of an InvenioRDM Record. Therefore, both entities will be generically named `record` on this documentation page. A note will be explicitly presented for specific cases where the description applies to only one of the entities.

Also, in this documentation, the fields are defined together with a cardinality to present what information will be available or what is required.

**References**

The GEO Knowledge Hub is proudly built on top of the [InvenioRDM project](https://inveniosoftware.org/products/rdm/), developed by its community and led by [CERN](https://home.cern/).

As we customized the InvenioRDM metadata model to fit the GEO Knowledge Hub needs, this page presents an extension of the [InvenioRDM metadata model documentation](https://inveniordm.docs.cern.ch/reference/metadata/) with the specific customizations we made.

We thank the InvenioRDM community for all collaboration and the provision of InvenioRDM for all. For more information, please see the [InvenioRDM website](https://inveniosoftware.org/products/rdm/).

## Overview

GEO Knowledge Hub's bibliographic records are stored as JSON documents in a structure that is aligned with [DataCite's Metadata Schema v4.x](https://schema.datacite.org/) with minor additions and modifications.

:::info Datacite references

This document refers to Datacite schema properties for the reader's convenience (e.g., "`2. Creator` in DataCite"). The corresponding Datacite document can be found under <https://schema.datacite.org/>. The currently supported version is [v4.3](https://schema.datacite.org/meta/kernel-4.3).

:::

**Schema version**

All records contain a schema definition in the top-level key ``$schema``. The value is a link to the internal JSONSchema which is being used to validate the structure of the record. This field is fully system-managed.

```json
{
    "$schema": "local://records/record-v2.0.0.json",
    ...
}
```

**Top-level fields**

Following is an overview of the top-level fields in a record:

| Field |   Description   |
|:-----:|:----------------|
|  ``id``/``pid``  | The internal persistent identifier for a specific version.  |
|  ``parent``  | The internal persistent identifier for all versions.  |
|  ``pids`` | System-managed external persistent identifiers (DOIs, Handles, OAI-PMH identifiers).  |
|  ``access`` | Access control information.  |
|  ``metadata`` | Descriptive metadata for the resource.  |
|  ``files`` | Associated files information.  |
|  ``relationship`` | Entity relations with other GEO Knowledge Hub records.  |
|  ``assistance_requests`` | Assistance requests linked to the record.  |

Each of these keys will be explained below. Following is an example of how the top-level fields in a record look like:

```json
{
    "$schema": "local://records/record-v1.0.0.json",
    "id": "q5jr8-hny72",
    "pid": { ... },
    "pids" : { ... },
    "parent": { ... },
    "access" : { ... },
    "metadata" : { ... },
    "files" : { ... },
    "relationship" : { ... },
    "assistance_requests" : { ... },
}
```

**Database-level fields**

In addition to the JSON document, the following fields are also stored for each record in the database table:

- Creation timestamp (UTC).
- Modification timestamp (UTC).

When querying for a record, they are shown as `created` and `updated` in the top level of the record JSON.

## System-managed persistent identifiers

A key part of GEO Knowledge Hub is the management of persistent identifiers for records. A record always has an internal PID.

### Internal PIDs

A record stores information about two internal PIDs:

Specific version PID:

| Field |   Description   |
|:-----:|:----------------|
|``id`` | The value of the internal record identifier. |
| ``pid`` | Object level information about the identifier needed for operational reasons. |

Concept version PID:

| Field |   Description   |
|:-----:|:----------------|
| ``parent.id`` | The value of the concept record identifier. |

Example:

```json
{
  "id": "abcde-12345",
  "pid": {
    "pk": 1,
    "status": "R"
  },
  "parent": {
    "id": "hg5de-2dw08"
  },
}
```

See [Parent](#parent) for details on the `parent` field.

### External PIDs

External PIDs are persistent identifiers managed via [Invenio-PIDStore](https://invenio-pidstore.readthedocs.io) that may require integration with external registration services (e.g., datacite).

> As persistent identifiers are globally unique in the system, you cannot have two records with the same system-managed persistent identifier.

Only one identifier can be registered per system-defined scheme. Each identifier has the following subfields:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``identifier`` | (1) | The identifier value. |
| ``provider`` | (1) | The provider identifier used internally by the system. |
| ``client`` | (0-1) | The client identifier used for connecting with an external registration service. |

```json
{
  "pids": {
    "doi": {
      "identifier": "10.1234/rdm.5678",
      "provider": "datacite",
      "client": "datacite"
    },
    "concept-doi": {
      "identifier": "10.1234/rdm.5678",
      "provider": "datacite",
      "client": "datacite"
    }
  }
}
```

:::note Note

It is essential to mention that other system-managed identifiers you can't define (e.g., OAI ID) will be saved in the `pids` field.

:::

## Parent

Information related to the record as a concept is recorded under the top-level ``parent`` key. Every record has a ``parent`` and that parent connects all versions of a record together. The goal here is to connect these records and store shared information.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1) | The identifier of the parent record. |
| ``access`` | (1) | Access details for the record as a whole. |
| ``relationship`` | (1) | Record relations details (Exclusive for Knowledge Resources). |

The ``access`` is described with the following subfields:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``owned_by`` | (1-n) | An array of Owners. |

``Owners`` are defined as:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``user`` | (1) | The id of the user owning the record as a whole. |

**Example**

```json
{
  "parent": {
    "id": "fghij-12345",
    "access": {
      "owned_by": [
        {
          "user": 2
        }
      ],
    }
  },
}
```

#### Knowledge Resource parent

If you are managing a ``Knowledge Resource``, an extra field will also be available in the ``parent`` key, the ``relationship`` which is described with the following subfields:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``managed_by`` | (0-1) | Parent ID of the Knowledge Package that manages the Knowledge Resource. |

**Example**

```json
{
  "parent": {
    "id": "fghij-12345",
    "access": {
      "owned_by": [
        {
          "user": 2
        }
      ],
    },
    "relationship": {
      "managed_by": {
        "id": "ktcnr-m3f30"
      }
    },
  },
}
```

## Access

The `access` field denotes record-specific read (visibility) options. This field has the following properties:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| `record` | (1) | `"public"` or `"restricted"`. Read access to the record. |
| `files` | (1) |  `"public"` or `"restricted"`. Read access to the record's files. |
| `embargo` | (0-1) | Embargo options for the record. |

Remember that, `"public"` means anyone can see the record/files, and `"restricted"` means only the owner(s) or specific users can see the record/files. 

Also, note that only in the cases of `"record": "restricted"` or `"files": "restricted"` can an embargo be provided as input. However, once an embargo is lifted, the `embargo` section is kept for transparency.

### Embargo

The `embargo` field denotes when an embargo must be lifted, at which point the record is made publicly accessible. The `embargo` field has the following structure:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| `active` | (1) | boolean. Is the record under embargo or not. |
| `until` | (0-1) | Required if `active` true. ISO date string. When to lift the embargo. e.g., `"2100-10-01"` |
| `reason` | (0-1) | string. Explanation for the embargo. |

**Example**

```json
{
  "access": {
    "record": "public",
    "files": "public",
    "embargo": {
      "active": false
    }
  },
}
```

The `access` field will default to `"public"` for both `record` and `files` fields if not provided to the Rest API.

## Relationship

Relationship is a field used by GEO Knowledge Hub to control the relationship between [Knowledge Packages](/docs/concepts/sharing-units/concepts-sharing-units-packages) and [Knowledge Resources](/docs/concepts/sharing-units/concepts-sharing-units-resources).

The subsections below will present the ``relationship`` definition for each type of record.

### Knowledge Package relationship

This is the ``relationship`` definition for Knowledge Packages.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``resources`` | (0-n) | Knowledge Resource IDs associated to a Knowledge Package |

The ``resources`` is a list of objects. Each object must contain the ``id`` property, which needs to reference the linked object.

**Example**

```json
"relationship": {
  "resources": [
    {
      "id": "vsacr-wp766"
    }
  ]
}
```

### Knowledge Resource relationship

This is the ``relationship`` definition for Knowledge Resources.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``packages`` | (0-n) | Knowledge Resource IDs associated to a Knowledge Package |

The ``packages`` is a list of objects. Each object must contain the ``id`` property, which needs to reference the linked object.

**Example**

```json
"relationship": {
  "packages": [
    {
      "id": "81zz0-7wm83"
    }
  ]
}
```

## Assistance requests

In the GEO Knowledge Hub, users can request GEO Knowledge Hub team members. Currently, these requests refer to the activities:

- Create a publication in the GEO Knowledge Hub Feed (``requests-assistance-feed-creation``): A [Knowledge Provider](/docs/concepts/concepts-user-roles#knowledge-provider) can request a publication about a Knowledge Package in the GEO Knowledge Hub Feed.

- Create training session on a Knowledge Package (``requests-assistance-training-creation``): An [authenticated user](/docs/concepts/concepts-user-roles#user) can request that the GEO Knowledge Hub team and the Knowledge provider create a training session on the content of a Knowledge Package.

:::note

Currently, both request types presented are only available for Knowledge Packages.

:::

**Subfields**

When a request is created, the GEO Knowledge Hub saves a request in the ``assistance_requests`` field with the following properties:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1) | Request ID. |
| ``type`` | (1) | Request Type (``requests-assistance-feed-creation`` or ``requests-assistance-training-creation``). |
| ``status`` | (1) | Request Status (See all possible status in the [InvenioRDM documentation](https://inveniordm.docs.cern.ch/develop/architecture/requests/#statuses)) |

**Example**

```json
"assistance_requests": [
  {
    "id": "a83fb057-b1ce-4cc0-85f7-cbc810ab5ba8",
    "type": "requests-assistance-feed-creation",
    "status": "submitted"
  },
  {
    "id": "ad19d4a6-f069-4949-ac30-f0f08d42b018",
    "type": "requests-assistance-feed-creation",
    "status": "created"
  }
],
```

## Metadata

This section describes the fields available in the ``metadata`` key.

> The abbreviation `CV` stands for *Controlled Vocabulary*.

### Resource type (1)

The type of the resource described by the record. This field is valid only for `Knowledge Resources`.

When interfacing with Datacite, this field is converted to a format compatible with `10. Resource Type`  (i.e. ``type`` and ``subtype``). DataCite allows free text for the subtype, however GEO Knowledge Hub requires this to come from the [Resources Type vocabulary](https://inveniordm.docs.cern.ch/reference/rest_api_vocabularies/)

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | The resource type id from the controlled vocabulary. |

**Example**

```json
{
  "resource_type": {
    "id": "image-photo"
  },
}
```

:::note Important note

Note that only the subtype (which is more specific) is displayed if it exists.

:::

### Creators (1-n)

The creators field registers those persons or organisations that should be credited for the resource described by the record. The list of persons or organisations in the creators field is used for generating citations, while the persons or organisations listed in the contributors field are not included in the generated citations.

The field is compatible with `2. Creator` in DataCite. In addition we are adding the possiblity of associating a role (like for contributors). This is specifically for cases where e.g. an editor needs to be credited for the work, while authors of individual articles will be listed under contributors. Also, as an addition to the DataCite field, it is possible to define an `e-mail` to the creator in the GEO Knowledge Hub.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``person_or_org`` | (1) | The person or organization. |
| ``role`` | (0-1, CV) | The role of the person or organisation selected from a customizable controlled vocabulary. |
| ``affiliations`` | (0-n) | Affilations if ``person_or_org.type`` is ``personal``. |

A `person_or_org` is described with the following subfields:

| Field            | Cardinality |   Description   |
|:---------------------:|:-----------:|:----------------|
| ``type`` | (1) | The type of name. Either ``personal`` or ``organizational``. |
| ``given_name`` | (1 if `type` is `personal` / 0 if `type` is `organizational`) | Given name(s). |
| ``family_name`` | (1 if `type` is `personal` / 0 if `type` is `organizational`) | Family name. |
| ``name``              | (0 if `type` is `personal` / 1 if `type` is `organizational`) | The full name of the organisation. For a person, this field is generated from `given_name` and `family_name` |
| ``identifiers``  | (0-n) | Person or organisation identifiers. |
| ``email``  | (0-1) | Person or organisation e-mail. |

Identifiers are described with the following subfields (note, we only support one identifier per scheme):

| Term | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``scheme`` | (1, CV) | The identifier scheme. |
| ``identifier`` | (1) | Actual value of the identifier. |

Supported creator identifier schemes:

- [ORCID][]
- [GND][]
- [ISNI][]
- [ROR][]

Supported affiliation identifier schemes:

- [ISNI][]
- [ROR][]


[ORCID]: https://orcid.org/
[GND]: https://www.dnb.de/EN/gnd
[ISNI]: https://isni.org/
[ROR]: https://ror.org/

The ``affiliations`` field consists of objects with the following subfields:

> One of ``id`` or ``name`` must be given. It's recommended to use ``name`` if there is no matching ``id`` in the controlled vocabulary.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (0-1, CV) | The organizational or institutional id from the controlled vocabulary. |
| ``name`` | (0-1) | The name of the organisation or institution. |

The `role` field is as follows:

| Field  | Cardinality |   Description                |
|:------:|:-----------:|:-----------------------------|
| ``id`` | (1, CV) | The role's controlled vocabulary identifier. |

**Example**

```json
{
  "creators": [{
    "person_or_org": {
      "name": "Nielsen, Lars Holm",
      "type": "personal",
      "given_name": "Lars Holm",
      "family_name": "Nielsen",
      "identifiers": [{
        "scheme": "orcid",
        "identifier": "0000-0001-8135-3489"
      }],
      "email": "email@mail.org"
    },
    "affiliations": [{
      "id": "01ggx4157",
      "name": "CERN",
    }]
  }],
}
```

:::note Note

Note that the identifiers' schemes are defined lowercased e.g. ORCID is ``orcid``.

:::

### Title (1)

A primary name or primary title by which a resource is known. May be the title of a dataset or the name of a piece of software. The primary title is used for display purposes throughout the GEO Knowledge Hub.

The fields is compatible with `3. Title` in DataCite. Compared to DataCite, the field does not support specifying the language of the title.

**Example**

```json
{
  "title": "InvenioRDM",
}
```

### Publication date (1)

The date when the resource was or will be made publicly available. The field is compatible `5. PublicationYear` in DataCite. In case of time intervals, the earliest date is used for DataCite.

**Format**

The string must be be formatted according to [Extended Date Time Format (EDTF)](http://loc.gov/standards/datetime/) Level 0. Only *"Date"* and *"Date Interval"* are supported. *"Date and Time"* is not supported. The following are examples of valid values:

- Date:
    - ``2020-11-10`` - a complete ISO8601 date.
    - ``2020-11`` - a date with month precision
    - ``2020`` - a date with year precision
- Date Interval:
    - ``1939/1945`` a date interval with year precision, beginning sometime in 1939 and ending sometime in 1945.
    - ``1939-09-01/1945-09`` a date interval with day and month precision, beginning September 1st, 1939 and ending sometime in September 1945.

The localization (L10N) of EDTF dates is based on the [skeletons](http://cldr.unicode.org/translation/date-time-1/date-time-patterns) defined by the [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org).

**Example**

```json
{
  "publication_date": "2018/2020-09",
}
```

### Additional titles (0-n)

Additional names or titles by which a resource is known.

The field is compatible with ``3. Title`` in DataCite. Compared to DataCite, GEO Knowledge Hub splits `3. Title` into two separate fields ``title`` and ``additional_titles``. This is to ensure consistent usage of a record's title throughout the entire software stack for display purposes.

**Subfields**

| Field     | Cardinality |   Description              |
|:---------:|:-----------:|:---------------------------|
| ``title`` | (1)         | The additional title.      |
| ``type``  | (1)         | The type of the title.     |
| ``lang``  | (0-1, CV)   | The language of the title. |

The ``type`` field is as follows:

> Note that multiple localized titles are supported e.g. ``{"en": "Alternative title", "fr": "Titre alternatif"}``. Use ISO 639-1 codes (2 letter locales) as keys. Only ``id`` needs to be passed on the Rest API.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | Title type id from the controlled vocabulary. By default one of: ``alternative-title``, ``subtitle`` ``translated-title`` or ``other``. |
| ``title`` | (1) | The corresponding localized human readable label. e.g. ``{"en": "Alternative title"}`` |

The `lang` field is as follows:

| Field  | Cardinality |   Description                |
|:------:|:-----------:|:-----------------------------|
| ``id`` | (1, CV)     | The ISO-639-3 language code. |

**Example**

```json
{
  "additional_titles": [{
    "title": "A research data management platform",
    "type": {
      "id": "alternative-title",
      "title": {
        "en": "Alternative Title"
      }
    },
    "lang": {"id": "eng"}
  }]
}
```

### Description (0-1)

The description of a record. The fields is compatible with `17. Description` in DataCite. Compared to DataCite the field does not support specifying the language of the description.

:::note Description styling

The description can be created using HTML tags and attributes to style the text.

:::

**Example**

```json
{
  "description": "<strong>Test</strong>"
}
```

### Additional descriptions (0-n)

Additional descriptions in addition to the primary description (e.g. abstracts in other
languages), methods or further notes. The field is compatible with `17. Description` in DataCite.

**Subfields**

| Field            | Cardinality |   Description                    |
|:----------------:|:-----------:|:---------------------------------|
| ``description``  | (1)         | Free text.                       |
| ``type``         | (1)         | The type of the description.     |
| ``lang``         | (0-1)       | The language of the description. |

The ``type`` field is as follows:

> Note that multiple localized titles are supported e.g. ``{"en": "Table of contents", "fr": "Table des matières"}``. Use ISO 639-1 codes (2 letter locales) as keys. Only ``id`` needs to be passed on the Rest API.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | Description type id from the controlled vocabulary. By default one of: ``abstract``, ``methods``, ``series-information``, ``table-of-contents``, ``technical-info``, ``other``. |
| ``title`` | (1) | The corresponding localized human readable label. e.g. ``{"en": "Abstract"}`` |

The `lang` field is as follows:

| Field  | Cardinality |   Description                |
|:------:|:-----------:|:-----------------------------|
| ``id`` | (1, CV)     | The ISO-639-3 language code. |

**Example**

```json
{
  "additional_descriptions": [{
    "description": "The description of a research data management platform.",
    "type": {
      "id": "methods",
      "title": {
        "en": "Methods"
      }
    },
    "lang": {"id": "eng"}
  }]
}
```

### Rights (Licenses) (0-n)

Rights management statement for the resource. When interfacing with Datacite, this field is converted to be compatible with `16. Rights`.

:::note Important note

The ``rights`` statements does not have any impact on access control to the resource.

:::

The rights field is intended to primarily be linked to a customizable vocabulary
of licenses (defaults [SPDX](https://spdx.org/licenses/)). It should however also be possible to provide custom rights statements.

**Subfields**

> Either ``id`` or ``title`` must be passed, but not both.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (0-1) | Identifier value |
| ``title`` | (0-1) | Localized human readable title e.g., ``{"en": "The ACME Corporation License."}``. |
| ``description`` | (0-1) | Localized license description text e.g., ``{"en": "This license..."}``. |
| ``link`` | (0-1) | Link to full license. |

**Example**

```json
{
  "rights": [{
    "id": "cc-by-4.0",
    "title": {"en": "Creative Commons Attribution 4.0 International"},
    "description": {"en": "The Creative Commons Attribution license allows re-distribution and re-use of a licensed work on the condition that the creator is appropriately credited."},
    "link": "https://creativecommons.org/licenses/by/4.0/"
  }],
}
```

### Contributors (0-n)

The organisations or persons responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource. This field is compatible with `7. Contributor` in DataCite.

The structure is identical to the Creators field. The "creators" field records those persons or organisations that should be credited for the resource described by the record (e.g. for citation purposes). The "contributors" field records all other persons or organisations that have contributed, but which should not be credited for citation purposes.

**Subfields**

The same subfields are the same as defined in the [Creators field](#creators-1-n), but for ``Contributors``, the ``role`` field is required.

**Example**

```json
{
  "contributors": [{
    "person_or_org": {
      "name": "Nielsen, Lars Holm",
      "type": "personal",
      "given_name": "Lars Holm",
      "family_name": "Nielsen",
      "identifiers": [{
        "scheme": "orcid",
        "identifier": "0000-0001-8135-3489"
      }],
      "email": "mail@mail.org"
    },
    "role": {"id": "editor"},
    "affiliations": [{
      "id": "01ggx4157",
      "name": "CERN",
    }]
  }],
}
```

### Subjects (0-n)

Subject, keyword, classification code, or key phrase describing the resource. This field is compatible with `6. Subject` in DataCite.

**Subfields**

> Either ``id`` or ``subject`` must be defined.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (0-1, CV) | The identifier of the subject from the controlled vocabulary. |
| ``subject`` | (0-1) | A custom keyword. |

**Example**

```json
{
  "subjects": [{
    "id": "https://id.nlm.nih.gov/mesh/D000001",
  }],
}
```

### Languages (0-n)

The languages of the resource. This field is compatible with `9. Language` in DataCite. DataCite however only supports one primary language, while this field supports multiple languages.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | The ISO-639-3 language code. |

**Example**

```json
{
  "languages": [{"id": "dan"}, {"id": "eng"}]
}
```

### Dates (0-n)

Different dates relevant to the resource. The field is compatible with `8. Date` in DataCite.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``date`` | (1) | A date or time interval according to Extended Date Time Format Level 0. |
| ``type`` | (1) | The type of date. |
| ``description`` | (0-1) | free text, specific information about the date. |

The ``type`` field is as follows:

> Note that multiple localized titles are supported e.g. ``{"en": "Available", "fr": "Disponible"}``. Use ISO 639-1 codes (2 letter locales) as keys. Only ``id`` needs to be defined on the Rest API.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | Date type id from the controlled vocabulary. By default one of: ``accepted``, ``available``, ``collected``, ``copyrighted``, ``created``, ``issued``, ``other``, ``submitted``, ``updated``, ``valid``, ``withdrawn``. |
| ``title`` | (1) | The corresponding localized human readable label. e.g. ``{"en": "Accepted"}`` |

**Example**

```json
{
  "dates": [{
    "date": "1939/1945",
    "type": {
      "id": "other",
      "title": {
        "en": "Other"
      }
    },
    "description": "A date"
  }],
}
```

### Version (0-1)

The version number of the resource. This field is compatible with `15. Version` in DataCite.

:::info Recommendation

We suggest you to use the [semantic versioning](https://semver.org) pattern in this field. 

:::

:::note Note

If the version number is defined, the GEO Knowledge Hub only uses it for display purposes on search results and landing pages.

:::

**Example**

```json
{
  "version": "v1.0.0",
}
```

### Publisher (0-1)

The name of the entity that holds, archives, publishes, prints, distributes, releases, issues, or produces the resource. This property will be used to formulate the citation, so consider the prominence of the role. For software, use Publisher for the code repository. If there is an entity other than a code repository, that "holds, archives, publishes, prints, distributes, releases, issues, or produces" the code, use the property Contributor field for the code repository.

:::info Default value

If the ``Publisher`` is not defined, the name "GEO Knowledge Hub" will be used as a default value.

:::

**Example**

```json
{
  "publisher": "GEO Knowledge Hub"
}
```

### Alternate identifiers (0-n)

Persistent identifiers for the resource other than the ones registered as system-managed internal or external persistent identifiers. This field is compatible with `11. Alternate Identifiers` in DataCite.

The main difference between the system-managed identifiers and this field, is that system-managed identifiers are fully controlled and managed by InvenioRDM, while identifiers listed here are used solely for display purposes. For instance, a DOI registered in the system-managed identifiers will prevent another record with the same DOI from being created. A DOI included in this field, will not prevent another record from including the same DOI in this field.

**Subfields**

| Field          | Cardinality | Description                   |
|:--------------:|:-----------:|:------------------------------|
| ``identifier`` | (1)         | identifier value              |
| ``scheme``     | (1, CV)     | The scheme of the identifier  |

Supported identifier schemes:

- ARK 
- arXiv
- Bibcode
- DOI
- EAN13
- EISSN
- Handle
- IGSN
- ISBN
- ISSN
- ISTC
- LISSN
- LSID
- PubMed ID
- PURL
- UPC
- URL
- URN
- W3ID.

**Example**

```json
{
  "identifiers": [{
    "identifier": "1924MNRAS..84..308E",
    "scheme": "bibcode"
  }],
}
```

:::note Note

Note that those are passed lowercased e.g., arXiv is ``arxiv``.

:::

### Related identifiers/works (0-n)

Identifiers of related resources. This field is compatible with `12. Related Identifiers` in DataCite. The field however does not support the subfields `12.c relatedMetadataScheme`, `12.d schemeURI` and `12.e schemeType` used for linking to additional metadata.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``identifier`` | (1, CV) | A global unique persistent identifier for a related resource. |
| ``scheme`` | (1, CV) | The scheme of the identifier. |
| ``relation_type``  | (1) | The relation of the record to this related resource. |
| ``resource_type``  | (0-1) | The resource type of the related resource. Can be different from the [Resource type](#resource-type-1) field. |

Supported identifier schemes:

- ARK
- arXiv
- Bibcode
- DOI
- EAN13
- EISSN
- Handle
- IGSN
- ISBN
- ISSN
- ISTC
- LISSN
- LSID
- PubMed ID
- PURL
- UPC
- URL
- URN
- W3ID

> Note that those are passed lowercased e.g., arXiv is ``arxiv``.

The field ``relation_type`` is of this shape:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | Relation type id from the controlled vocabulary. The default list is [here](https://github.com/inveniosoftware/invenio-rdm-records/blob/master/invenio_rdm_records/fixtures/data/vocabularies/relation_types.yaml). |
| ``title`` | (1) | The corresponding localized human readable label. e.g. ``{"en": "Is cited by"}`` |

The field ``resource_type`` is of this shape:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | Date type id from the controlled vocabulary. The default list is [here](https://github.com/inveniosoftware/invenio-rdm-records/blob/master/invenio_rdm_records/fixtures/data/vocabularies/resource_types.yaml). |
| ``title`` | (1) | The corresponding localized human readable label. e.g. ``{"en": "Annotation collection"}`` |

For both ``relation_type.title`` and ``resource_type.title`` multiple localized titles are supported e.g. ``{"en": "Cites", "fr": "Cite"}``. Use ISO 639-1 codes (2 letter locales) as keys. In both cases, only ``id`` needs to be defined in the Rest API documents.

**Example**

```json
{
  "related_identifiers": [{
    "identifier": "10.1234/foo.bar",
    "scheme": "doi",
    "relation_type": {
      "id": "cites",
      "title": {
        "en": "Cites"
      }
    },
    "resource_type": {
      "id": "dataset",
      "title": {
        "en": "Dataset"
      }
    }
  }],
}
```

### Sizes (0-n)

:::warning Not available in the deposit page yet

Although available via the Rest API, this field may see changes when added to the deposit page.

:::

Size (e.g. bytes, pages, inches, etc.) or duration (extent), e.g. hours, minutes, days, etc., of a resource. This field is compatible with `13. Size` in DataCite.

**Example**

```json
{
  "sizes": [
    "11 pages"
  ],
}
```

### Formats (0-n)

:::warning Not available in the deposit page yet

Although available via the Rest API, this field may see changes when added to the deposit page.

:::

Technical format of the resource. This field is compatible with `14. Format` in Datacite.

**Example**

```json
{
  "formats": [
    "application/pdf"
  ],
}
```

### Locations (0-n)

Spatial region or named place where the data was gathered or about which the data is focused. The field is compatible with `18. GeoLocation` in DataCite Metadata Schema. The field however has important differences:

- The field allows associating geographical identifiers with a location.
- The field allows associating a free text description to the location.
- The field uses the GeoJSON specification for describing geospatial coordinates instead of the individual fields used by DataCite.

The location fields is modelled over GeoJSON [FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) and [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) objects using foreign members (for ``identifiers``, ``place`` and ``description``). We do not store the GeoJSON type information (e.g. ``"type": "FeatureCollection"`` and ``"type": "Feature"``) because this information is implicit. The JSON served on the Rest API (external JSON), will include
the type information as well as ``"properties": null`` in order to make it a valid GeoJSON.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``features`` | (1) | A list of GeoJSON feature objects. The reason for this keyword is to align with GeoJSON and allow for later expansion with other subfields such as bounding box (``bbox``) from the GeoJSON spec. |

Subfields of items in ``features``:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``geometry`` | (0-1) | A GeoJSON [Geometry Object](https://tools.ietf.org/html/rfc7946#section-3.1) according to RFC 7946. Note, GeoJSON's coordinate reference system is [WGS84](https://tools.ietf.org/html/rfc7946#section-4). |
| ``identifiers`` | (0-1) | A list of geographic location identifiers. This could for instance be from [GeoNames](https://www.geonames.org) or [Getty Thesaurus of Geographic Names](http://www.getty.edu/research/tools/vocabularies/tgn/) (TGN) which would allow linking to historic places. |
| ``place`` | (0-1) | Free text, used to describe a geographical location. |
| ``description`` | (0-1) | Free text, used for any extra information related to the location. |

Identifier object in ``identifiers``:

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``identifier`` | (1, CV) | A globally unique identifier for the location. |
| ``scheme`` | (1, CV) | The scheme of the identifier. |

**Example**

```json
{
  "locations": {
    "features": [{
      "geometry": {
        "type": "Point",
        "coordinates": [46.23333, 6.05]
      },
      "identifiers": [{
        "scheme": "geonames",
        "identifier": "2661235"
      }],
      "place": "CERN",
      "description": "Invenio birth place."
    }],
  },
}
```

:::info Geometry indexing

The ``geometry`` field is indexed as a [``geo_shape``](https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-shape.html) field type in Elasticsearch which allows advanced geospatial querying.

In addition, for each geometry object, we calculate the centroid using the [Shapely](https://pypi.org/project/Shapely/) library and index it as a [``geo_point``](https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-point.html) field type in Elasticsearch which supports more specialised queries for points.

:::

:::info GeoJSON positions

GeoJSON lists [``positions (coordinates)``](https://www.rfc-editor.org/rfc/rfc7946#section-3.1.1) in the order of (longitude, latitude), which is opposite from what is used in many other coordinate systems. It's easy to mess this up!

:::

### Funding references (0-n)

Information about financial support (funding) for the resource being registered. This field is compatible with `19. Funding Reference` in DataCite.

The funder subfield is intended to be linked to a customizable vocabulary from Open Funder Registry or ROR. The award subfield is intended to be either linked to a customizable vocabulary sourced from the OpenAIRE grant database, or specified explicitly to allow linking to grants not provided by the grant database.

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``funder`` | (1) | The organisation of the funding provider. |
| ``award`` | (0-1) | The award (grant) sponsored by the funder. |

The ``funder`` subfields:

> One of ``id`` OR ``name`` must be given. It's recommended to use ``name`` if there is no matching ``id`` in the controlled vocabulary.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (0-1, CV) | The funder id from the controlled vocabulary. |
| ``name`` | (0-1) | The name of the funder. |

The ``award`` subfields:

> One of ``id`` OR (``title`` and ``number``) must be given. It's recommended to use ``title`` and ``number`` if there is no matching ``id`` in the controlled vocabulary.

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (0-1, CV) | The award id from the controlled vocabulary. |
| ``title`` | (0-1) | The localized title of the award (e.g., `{"en": "Nobel Prize in Physics"}`) |
| ``number`` | (0-1) | The code assigned by the funder to a sponsored award (grant). |
| ``identifiers`` | (0-N) | Identifiers for the award. |

**Example**

```json
{
  "funding": [{
      "funder": {
        "id": "00k4n6c32"
      },
      "award": {
        "id": "00k4n6c32::246686"
      }
    }, {
      "funder": {
        "id": "00k4n6c32"
      },
      "award": {
        "title": {
          "en": "Research on Experimental Physics"
        },
        "number": "EP-123456",
        "identifiers": [{
          "scheme": "url",
          "identifier": "https://experimental-physics.eu"
        }]
      }
    }
  ]
}
```

### GEO Work Programme Activity (0-1)

[GEO Work Programme Activities](https://www.earthobservations.org/geo_wp_23_25.php) associated with the record. This is a custom field created to fit the needs of the GEO Community. Therefore, this field is not related to the DataCite Metadata Schema.

:::note

You must select a Work Programme Activity based on the values available in the [GEO Work Programme Activities vocabulary](/reference/rest-api/rest-api-vocabularies#geo-work-programme-activities).

:::

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | The activity id from the [GEO Work Programme Activities vocabulary](/reference/rest-api/rest-api-vocabularies#geo-work-programme-activities). |

**Example**

```json
{
  "geo_work_programme_activity": {
    "id": "geo-activities-dwg"
  },
}
```

### GEO Engagement Priorities (0-n)

GEO Engagement Priorities associated with the record. This is a custom field created to fit the needs of the GEO Community. Therefore, this field is not related to the DataCite Metadata Schema.

:::note

You must select Engagement Priorities based on the values available in the [GEO Engagement Priorities vocabulary](/reference/rest-api/rest-api-vocabularies#geo-engagement-priorities).

:::

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | The engagement priority id from the [GEO Engagement Priorities vocabulary](/reference/rest-api/rest-api-vocabularies#geo-engagement-priorities). |

**Example**

```json
{
  "engagement_priorities": [
    {
      "id": "sdg-goal-2"
    }
  ]
}
```

### GEO Target audiences (0-n)

GEO Target audiences associated with the record. This is a custom field created to fit the needs of the GEO Community. Therefore, this field is not related to the DataCite Metadata Schema.

:::note

You must select Target audiences based on the values available in the [GEO Target Audience vocabulary](/reference/rest-api/rest-api-vocabularies#geo-target-audiences).

:::

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``id`` | (1, CV) | The target audience id from the [GEO Target Audience vocabulary](/reference/rest-api/rest-api-vocabularies#geo-target-audiences). |

**Example**

```json
{
  "target_audiences": [
    {
      "id": "tu-admin-officer-spatial-planning"
    }
  ]
}
```

## Files

Records may have associated digital files. A record is not meant to be associated
with a high number of files, as the files are stored inside the record and thus
increase the overall size of the JSON document.

:::note

All of the fields below are under the ``"files"`` key.

:::

### Enabled (1)

The ``enabled`` field determines if the record is a `metadata-only` record or if files are associated.

**Example**

```json
{
  "enabled": false
}
```

:::note Note

If ``enabled`` is ``false``, the record cannot have associated files. It is a ``metadata-only`` record.

:::

### Entries (0-n)

The entries field lists the associated digital files for the resource described
by the record.

Each file inside the ``entries`` uses as key its file path. In each key, the following subfields are defined:

**Subfields**

| Field | Cardinality |   Description   |
|:-----:|:-----------:|:----------------|
| ``bucket_id`` | (1) | The bucket identifier. |
| ``checksum`` | (1) | The checksum of the file in the form ``<algorithm>:<value>``. |
| ``created`` | (1) | Date of creation (init) of the file record. |
| ``file_id`` | (1) |  The digital file instance identifier (references a file on storage). |
| ``key`` | (1) | The filepath of the file. |
| ``link`` | (1) | Links to the file (_self_, _content_, _iiif\_canvas_, _iiif\_base_, _iiif\_info_, _iiif\_api_, etc.)
| ``metadata`` | (1) | Dictionary of free key-value pairs with meta information about the file (e.g. description). |
| ``mimetype`` | (1) | The mimetype of the file. |
| ``size`` | (1) | The size in bytes of the file. |
| ``status`` | (1) | The current status of the file ingestion (_completed_ or _pending_). |
| ``storage_class`` | (1) | The backend for the file (e.g. local or external storage). |
| ``updated`` | (1) | Date of latest update of the file record metadata or file. |
| ``version_id`` | (1) | The logical object identifier. |

**Example**

```json
{
  "entries": {
    "paper.pdf": {
      "bucket_id": "<bucket-id>",
      "checksum": "md5:abcdef...",
      "created": "2022-10-12T11:08:56.953781+00:00",
      "file_id": "<file-id>",
      "key": "paper.pdf",
      "links": {
        "self": "{scheme+hostname}/api/records/12345-abcde/files/your_file.png",
        "content": "{scheme+hostname}/api/records/12345-abcde/files/your_file.png/content",
        "iiif_canvas": "{scheme+hostname}/api/iiif/record:8a4dq-z5237/canvas/your_file.png",
        "iiif_base": "{scheme+hostname}/api/iiif/record:8a4dq-z5237:your_file.png",
        "iiif_info": "{scheme+hostname}/api/iiif/record:8a4dq-z5237:your_file.png/info.json",
        "iiif_api": "{scheme+hostname}/api/iiif/record:8a4dq-z5237:your_file.png/full/full/0/default.png"
      },
      "metadata": {
        "width": 2302,
        "height": 948
      },
      "mimetype": "application/pdf",
      "size": 12345,
      "status": "completed",
      "storage_class": "A",
      "updated": "2022-10-12T11:08:56.970805+00:00",
      "version_id": "<object-version-id>",
    },
  }
}
```

:::info IIIF links only on image formats

IIIF links are only returned for files who are compatible with IIIF:

- gif
- jp2
- jpeg
- jpg
- png
- tif
- tiff

:::

### Default preview (0-1)

The default preview field names the filename of the file which should by default
be shown on the record landing page.

**Example**

```json
{
  "default_preview": "paper.pdf"
}
```
