---
id: rest-api-drafts-records-packages
title: Packages
sidebar_position: 2
---

This documentation page will present the API available in the GEO Knowledge Hub to access and manage [Knowledge Packages](/docs/concepts/sharing-units/concepts-sharing-units-packages).

:::tip

Before you use this API, we recommend you be familiar with the [structure of a Knowledge Package document](/reference/metadata#metadata) in the GEO Knowledge Hub.

:::

## Drafts

Used for interacting with unpublished or edited draft packages.

:::info Authentication required

All requests to the draft-related Rest API endpoints require [authentication](https://inveniordm.docs.cern.ch/reference/rest_api_index/#authentication).

:::

### Create a draft

`POST /api/packages`

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `access`   | object | body     | [Access options](/reference/metadata#access) for the record. |
| `files`    | object | body     | Files options (see below) for the record. |
| `metadata` | object | body     | [Metadata](/reference/metadata#metadata) of the record. |

#### Files Options

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `enabled`  | boolean | body     | *Required*. Should (and can) files be attached to this record or not. |
| `default_preview` &nbsp;  | string | body     | Filename of file to be previewed by default. |
| `order`    | array | body     | Array of filename strings in display order. |


**Request**

```json
POST /api/records HTTP/1.1
Content-Type: application/json

{
  "access": { "record": "public", "files": "public" },
  "metadata": {
    "publication_date": "2023-09-21",
    "publisher": "GEO Knowledge Hub",
    "rights": [{ "id": "cc-by-4.0" }],
    "title": "Example Knowledge Package",
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "family_name": "Family",
          "given_name": "Name"
        }
      }
    ],
    "languages": [{ "id": "eng" }]
  },
  "files": { "enabled": false },
  "pids": {},
  "custom_fields": {}
}
```

**Response**

```json
HTTP/1.1 201 CREATED
Content-Type: application/json

{
  "metadata": {
    "publication_date": "2023-09-21",
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T21:34:42.598169+00:00",
  "created": "2023-09-21T21:34:42.547670+00:00",
  "revision_id": 4,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "expires_at": "2023-09-21 21:34:42.547728",
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "draft",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}/draft",
    "self_html": "{scheme+hostname}/uploads/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package-draft:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package-draft:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/draft/files",
    "files_import": "{scheme+hostname}/api/packages/{id}/draft/actions/files-import",
    "record": "{scheme+hostname}/api/packages/{id}",
    "record_html": "{scheme+hostname}/packages/{id}",
    "publish": "{scheme+hostname}/api/packages/{id}/draft/actions/publish",
    "review": "{scheme+hostname}/api/packages/{id}/draft/review",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/{id}/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/draft/resources",
    "resources_import": "{scheme+hostname}/api/packages/{id}/draft/actions/resources-import"
  },
  "versions": {
    "index": 1,
    "is_latest": false,
    "is_latest_draft": true
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": false,
  "id": "{id}",
  "pids": {},
  "is_draft": true,
  "expanded": {}
}
```

### Get a draft

`GET /api/packages/{id}/draft`

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89`                |
| `accept`   | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id}/draft HTTP/1.1 
Accept: application/json
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "metadata": {
    "publication_date": "2023-09-21",
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T21:34:42.598169+00:00",
  "created": "2023-09-21T21:34:42.547670+00:00",
  "revision_id": 4,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "expires_at": "2023-09-21 21:34:42.547728",
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "draft",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}/draft",
    "self_html": "{scheme+hostname}/uploads/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package-draft:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package-draft:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/draft/files",
    "files_import": "{scheme+hostname}/api/packages/{id}/draft/actions/files-import",
    "record": "{scheme+hostname}/api/packages/{id}",
    "record_html": "{scheme+hostname}/packages/{id}",
    "publish": "{scheme+hostname}/api/packages/{id}/draft/actions/publish",
    "review": "{scheme+hostname}/api/packages/{id}/draft/review",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/{parent-id}/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/draft/resources",
    "resources_import": "{scheme+hostname}/api/packages/{id}/draft/actions/resources-import"
  },
  "versions": {
    "index": 1,
    "is_latest": false,
    "is_latest_draft": true
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": false,
  "id": "{id}",
  "pids": {},
  "is_draft": true
}
```

### Update draft

`PUT /api/packages/{id}/draft`

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89`                |
| `access`   | object | body     | [Access options](/reference/metadata#access) for the record. |
| `files`    | object | body     | [Files options](/reference/metadata#files) for the record. |
| `metadata` | object | body     | [Metadata](/reference/metadata#metadata) of the record. |

**Request**

```json
PUT /api/packages/{id}/draft HTTP/1.1
Content-Type: application/json

{
  "access": { "record": "public", "files": "public" },
  "metadata": {
    "publication_date": "2023-09-21",
    "publisher": "GEO Knowledge Hub",
    "rights": [{ "id": "cc-by-4.0" }],
    "title": "Example Knowledge Package (Edited)",
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "family_name": "Family",
          "given_name": "Name"
        }
      }
    ],
    "languages": [{ "id": "eng" }]
  },
  "files": { "enabled": false },
  "pids": {},
  "custom_fields": {}
}
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json


{
  "metadata": {
    "publication_date": "2023-09-21",
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package (Edited)"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T21:42:41.568276+00:00",
  "created": "2023-09-21T21:34:42.547670+00:00",
  "revision_id": 6,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "expires_at": "2023-09-21 21:34:42.547728",
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "draft",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}/draft",
    "self_html": "{scheme+hostname}/uploads/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package-draft:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package-draft:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/draft/files",
    "files_import": "{scheme+hostname}/api/packages/{id}/draft/actions/files-import",
    "record": "{scheme+hostname}/api/packages/{id}",
    "record_html": "{scheme+hostname}/packages/{id}",
    "publish": "{scheme+hostname}/api/packages/{id}/draft/actions/publish",
    "review": "{scheme+hostname}/api/packages/{id}/draft/review",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/{parent-id}/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/draft/resources",
    "resources_import": "{scheme+hostname}/api/packages/{id}/draft/actions/resources-import"
  },
  "versions": {
    "index": 1,
    "is_latest": false,
    "is_latest_draft": true
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": false,
  "id": "{id}",
  "pids": {},
  "is_draft": true
}
```

### List package resources

`GET /api/packages/{id}/draft/resources`

**Parameters**

| Name     | Type    | Location | Description                                                  |
| -------- | ------- | -------- | ------------------------------------------------------------ |
| `q`      | string  | query    | Search query used to filter results based on [ElasticSearch's query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |
| `sort`   | string  | query    | Sort search results.                                         |
| `size`   | integer | query    | Specify number of items in the results page (default: 10).   |
| `page`   | integer | query    | Specify the page of results.                                 |
| `accept` | string  | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id}/draft/resources HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "aggregations": {...},
  "hits": {...},
}
```

### Add draft resources to the draft package

Add a draft of a Knowledge Resource into the Knowledge Package. 

:::info

When a draft of a Knowledge Resource is added to a Knowledge Package, its publication will be managed by the GEO Knowledge Hub. This way, the resource will be published together with the Knowledge Package.

:::

:::warning

During the publication of a Knowledge Package, if any Knowledge Resource has some error, the Package will not be published. So, ensure the resources are ready to be published before publishing the Package.

:::

#### Context association

`POST /api/packages/{id}/context/actions/associate`

In the GEO Knowledge Hub, the packages have a context where all the resources associated with the package, in any version of it, are centralized. This is done to make possible users to manage the resources using the package. For example, when a package is private, all the resources available on it needs to be private. So, the context is used to make sure this kind of consistency is correct.

:::note

It is only possible to associate a draft Knowledge Resource with a Knowledge Package context.

:::

:::note

Even the [Knowledge Package is immutable](/docs/concepts/sharing-units/concepts-sharing-units-packages), you can associate resources to its context without having a draft. This is possible as the context is shared with all versions of the Knowledge Package.

:::

To associate a draft Knowledge Resource with a Knowledge Package context, you can use:

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `records`   | object | body     | List of resources to be added in the Package context. |

A ``resource`` object is defined as:

| Field |    Description   |
|:-----:|:----------------|
| ``id`` | The id of the resource. |

**Request**

```json
POST /api/packages/{id}/context/actions/associate HTTP/1.1
Content-Type: application/json

{
  "records":[
    {
      "id":"jyrxf-fd296"
    }
  ]
}
```

**Response**

```
HTTP/1.1 204 No Content
```

#### Add resource to a draft package

`POST /api/packages/{id}/draft/resources`

When a Knowledge Resource draft is added to the Knowledge Package context, it can be associated with any version of the Knowledge Package.

Then, to associate a resource that is in the context of the Knowledge Package to a specific version of it, you can use:

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `resource`   | object | body     | List of resources to be added in the Package version. |

A ``resource`` object is defined as:

| Field |    Description   |
|:-----:|:----------------|
| ``id`` | The id of the resource. |

**Request**

```json
POST /api/packages/{id}/draft/resources HTTP/1.1
Content-Type: application/json

{
  "resources":
    [
      {
        "id":"jyrxf-fd296"
      }
    ]
}
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "errors": []
}
```

### Add existing resources to draft package

`POST /api/packages/{id}/draft/resources`

When a resource is already published in the GEO Knowledge Hub, you can add it to a Knowledge Package draft using:

:::info

As you add an existing resource to the Knowledge Package, the GEO Knowledge Hub doesn't perform any operation or change on it as it is already published.

:::

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `resource`   | object | body     | List of resources to be added in the Package version. |

A ``resource`` object is defined as:

| Field |    Description   |
|:-----:|:----------------|
| ``id`` | The id of the resource. |

**Request**

```json
POST /api/packages/{id}/draft/resources HTTP/1.1
Content-Type: application/json

{
  "resources":
    [
      {
        "id":"fry39-2q759"
      }
    ]
}
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "errors": []
}
```

### List resources in the Package context

`GET /api/packages/context/{parent-id}/resources`

**Parameters**

| Name     | Type    | Location | Description                                                  |
| -------- | ------- | -------- | ------------------------------------------------------------ |
| `q`      | string  | query    | Search query used to filter results based on [ElasticSearch's query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |
| `sort`   | string  | query    | Sort search results.                                         |
| `size`   | integer | query    | Specify number of items in the results page (default: 10).   |
| `page`   | integer | query    | Specify the page of results.                                 |
| `accept` | string  | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/context/{parent-id}/resources HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "aggregations": {...},
  "hits": {...},
}
```

### Publish draft

`POST /api/packages/{id}/draft/actions/publish`

**Parameters**

| Name | Type   | Location | Description                                   |
| ---- | ------ | -------- | --------------------------------------------- |
| `id` | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |

**Request**

```
POST /api/packages/{id}/draft/actions/publish HTTP/1.1
```

**Response**

```json
HTTP/1.1 202 ACCEPTED
Content-Type: application/json

{
	"metadata": {
		"publication_date": "2023-09-21",
		"languages": [
			{
				"title": {
					"en": "English"
				},
				"id": "eng"
			}
		],
		"resource_type": {
			"title": {
				"en": "Knowledge Package"
			},
			"id": "knowledge"
		},
		"publisher": "GEO Knowledge Hub",
		"rights": [
			{
				"description": {
					"en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
				},
				"id": "cc-by-4.0",
				"icon": "cc-by-icon",
				"props": {
					"scheme": "spdx",
					"url": "https://creativecommons.org/licenses/by/4.0/legalcode"
				},
				"title": {
					"en": "Creative Commons Attribution 4.0 International"
				}
			}
		],
		"creators": [
			{
				"person_or_org": {
					"type": "personal",
					"name": "Family, Name",
					"given_name": "Name",
					"family_name": "Family"
				}
			}
		],
		"title": "Example Knowledge Package (Edited)"
	},
	"parent": {
		"id": "{parent-id}",
		"type": "package",
		"communities": {},
		"access": {
			"owned_by": [
				{
					"user": {owner-id}
				}
			],
			"links": []
		}
	},
	"updated": "2023-09-21T21:45:40.468344+00:00",
	"created": "2023-09-21T21:45:40.346681+00:00",
	"revision_id": 3,
	"access": {
		"record": "public",
		"status": "metadata-only",
		"files": "public",
		"embargo": {
			"reason": null,
			"active": false
		}
	},
	"custom_fields": {},
	"relationship": {
		"resources": []
	},
	"status": "published",
	"assistance_requests": [],
	"links": {
		"self": "{scheme+hostname}/api/packages/{id}",
		"self_html": "{scheme+hostname}/packages/{id}",
		"self_iiif_manifest": "{scheme+hostname}/api/iiif/package:{id}/manifest",
		"self_iiif_sequence": "{scheme+hostname}/api/iiif/package:{id}/sequence/default",
		"files": "{scheme+hostname}/api/packages/{id}/files",
		"latest": "{scheme+hostname}/api/packages/{id}/versions/latest",
		"latest_html": "{scheme+hostname}/packages/{id}/latest",
		"draft": "{scheme+hostname}/api/packages/{id}/draft",
		"versions": "{scheme+hostname}/api/packages/{id}/versions",
		"access_links": "{scheme+hostname}/api/packages/{id}/access/links",
		"reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
		"context_html": "{scheme+hostname}/packages/{id}/dashboard",
		"context_resources": "{scheme+hostname}/api/packages/context/{parent-id}/resources",
		"context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
		"context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
		"resources": "{scheme+hostname}/api/packages/{id}/resources",
		"requests": "{scheme+hostname}/api/packages/{id}/requests"
	},
	"versions": {
		"index": 1,
		"is_latest": true,
		"is_latest_draft": true
	},
	"files": {
		"enabled": false,
		"order": []
	},
	"is_published": true,
	"id": "{id}",
	"pids": {
		"oai": {
			"provider": "oai",
			"identifier": "oai:gkhub.earthobservations.org:{id}"
		}
	},
	"is_draft": false
}
```

### Edit published package (Create a draft from a published package)

`POST /api/packages/{id}/draft`

**Parameters**

| Name | Type   | Location | Description                                   |
| ---- | ------ | -------- | --------------------------------------------- |
| `id` | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |

**Request**

```
POST /api/packages/{id}/draft HTTP/1.1
```

**Response**

```json
HTTP/1.1 201 CREATED
Content-Type: application/json


{
	"metadata": {
		"publication_date": "2023-09-21",
		"languages": [
			{
				"title": {
					"en": "English"
				},
				"id": "eng"
			}
		],
		"resource_type": {
			"title": {
				"en": "Knowledge Package"
			},
			"id": "knowledge"
		},
		"publisher": "GEO Knowledge Hub",
		"rights": [
			{
				"description": {
					"en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
				},
				"id": "cc-by-4.0",
				"icon": "cc-by-icon",
				"props": {
					"scheme": "spdx",
					"url": "https://creativecommons.org/licenses/by/4.0/legalcode"
				},
				"title": {
					"en": "Creative Commons Attribution 4.0 International"
				}
			}
		],
		"creators": [
			{
				"person_or_org": {
					"type": "personal",
					"name": "Family, Name",
					"given_name": "Name",
					"family_name": "Family"
				}
			}
		],
		"title": "Example Knowledge Package (Edited)"
	},
	"parent": {
		"id": "{parent-id}",
		"type": "package",
		"communities": {},
		"access": {
			"owned_by": [
				{
					"user": {owner-id}
				}
			],
			"links": []
		}
	},
	"updated": "2023-09-21T21:49:41.015740+00:00",
	"created": "2023-09-21T21:34:42.547670+00:00",
	"revision_id": 12,
	"access": {
		"record": "public",
		"status": "metadata-only",
		"files": "public",
		"embargo": {
			"reason": null,
			"active": false
		}
	},
	"expires_at": "2023-09-21 21:34:42.547728",
	"custom_fields": {},
	"relationship": {
		"resources": []
	},
	"status": "published",
	"assistance_requests": [],
	"links": {
		"self": "{scheme+hostname}/api/packages/{id}/draft",
		"self_html": "{scheme+hostname}/uploads/packages/{id}",
		"self_iiif_manifest": "{scheme+hostname}/api/iiif/package-draft:{id}/manifest",
		"self_iiif_sequence": "{scheme+hostname}/api/iiif/package-draft:{id}/sequence/default",
		"files": "{scheme+hostname}/api/packages/{id}/draft/files",
		"files_import": "{scheme+hostname}/api/packages/{id}/draft/actions/files-import",
		"record": "{scheme+hostname}/api/packages/{id}",
		"record_html": "{scheme+hostname}/packages/{id}",
		"publish": "{scheme+hostname}/api/packages/{id}/draft/actions/publish",
		"review": "{scheme+hostname}/api/packages/{id}/draft/review",
		"versions": "{scheme+hostname}/api/packages/{id}/versions",
		"access_links": "{scheme+hostname}/api/packages/{id}/access/links",
		"reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
		"context_html": "{scheme+hostname}/packages/{id}/dashboard",
		"context_resources": "{scheme+hostname}/api/packages/context/x4npp-1b941/resources",
		"context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
		"context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
		"resources": "{scheme+hostname}/api/packages/{id}/draft/resources",
		"resources_import": "{scheme+hostname}/api/packages/{id}/draft/actions/resources-import"
	},
	"versions": {
		"index": 1,
		"is_latest": true,
		"is_latest_draft": true
	},
	"files": {
		"enabled": false,
		"order": []
	},
	"is_published": true,
	"id": "{id}",
	"pids": {
		"oai": {
			"provider": "oai",
			"identifier": "oai:gkhub.earthobservations.org:{id}"
		}
	},
	"is_draft": true
}
```

### Delete/discard draft

`DELETE /api/packages/{id}/draft`

Deleting a draft for an unpublished package will remove the draft and associated files from the system.

Deleting a draft for a published package will remove the draft but not the published package.

**Parameters**

| Name       | Type   | Location | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89`                |

**Request**

```
DELETE /api/packages/{id}/draft HTTP/1.1
```

**Response**

```
HTTP/1.1 204 No Content
```

## Draft files

Used to manage draft files.

:::info Authentication required

All requests to the draft-related Rest API endpoints require [authentication](https://inveniordm.docs.cern.ch/reference/rest_api_index/#authentication).

:::

### List draft files

`GET /api/packages/{id}/draft/files`

**Parameters**

| Name | Type   | Location | Description                                   |
| ---- | ------ | -------- | --------------------------------------------- |
| `id` | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |

**Request**

```
GET /api/packages/{id}/draft/files HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "default_preview": null,
  "enabled": true,
  "entries": [],
  "links": {
    "self": "/api/packages/{id}/draft/files"
  },
  "order": []
}
```

### Start draft file upload(s)

`POST /api/packages/{id}/draft/files`

**Parameters**

| Name          | Type   | Location | Description                                                  |
| ------------- | ------ | -------- | ------------------------------------------------------------ |
| `id`          | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89`                |
| `<top-level>` | array  | body     | Array of objects describing the file uploads to be initialized. |
| `[].key`      | string | body     | Name of the file to be uploaded.                             |

**Request**

```json
POST /api/packages/{id}/draft/files HTTP/1.1
Content-Type: application/json

[
  {"key": "figure.png"},
  {"key": "article.pdf"},
  {"key": "data.zip"}
]
```

**Response**

```json
HTTP/1.1 201 CREATED
Content-Type: application/json

{
  "enabled": true,
  "default_preview": null,
  "order": [],
  "entries": [
    {
      "key": "figure.png",
      "updated": "2020-11-27 11:17:11.002624",
      "created": "2020-11-27 11:17:10.998919",
      "metadata": null,
      "status": "pending",
      "links": {
        "content": "{scheme+hostname}/api/packages/{id}/draft/files/figure.png/content",
        "self": "{scheme+hostname}/api/packages/{id}/draft/files/figure.png",
        "commit": "{scheme+hostname}/api/packages/{id}/draft/files/figure.png/commit"
      },
    },
        {
      "key": "article.pdf",
      "updated": "2020-11-27 11:17:11.002624",
      "created": "2020-11-27 11:17:10.998919",
      "metadata": null,
      "status": "pending",
      "links": {
        "content": "{scheme+hostname}/api/packages/{id}/draft/files/article.pdf/content",
        "self": "{scheme+hostname}/api/packages/{id}/draft/files/article.pdf",
        "commit": "{scheme+hostname}/api/packages/{id}/draft/files/article.pdf/commit"
      },
    },
    {
      "key": "data.zip",
      "updated": "2020-11-27 11:17:11.002624",
      "created": "2020-11-27 11:17:10.998919",
      "metadata": null,
      "status": "pending",
      "links": {
        "content": "/api/packages/{id}/draft/files/data.zip/content",
        "self": "/api/packages/{id}/draft/files/data.zip",
        "commit": "/api/packages/{id}/draft/files/data.zip/commit"
      },
    }
  ],
  "links": {
    "self": "/api/packages/{id}/draft/files"
  },
}
```

### Upload draft file content

`PUT /api/packages/{id}/draft/files/{filename}/content`

**Parameters**

| Name             | Type    | Location | Description                                       |
| ---------------- | ------- | -------- | ------------------------------------------------- |
| `id`             | string  | path     | Identifier of the record, e.g.  `4d0ns-ntd89`     |
| `filename`       | string  | path     | Name of the file.                                 |
| `content-type`   | string  | header   | Should always be `application/octet-stream`.      |
| `content-length` | integer | header   | Size of the content in bytes (optional).          |
| `<content>`      | bytes   | body     | The raw bytes of the file content to be uploaded. |

**Request**

```
PUT /api/packages/{id}/draft/files/{filename}/content HTTP/1.1
Content-Type: application/octet-stream

<...file binary data...>
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "key": "{filename}",
  "updated": "2020-11-27 11:17:11.002624",
  "created": "2020-11-27 11:17:10.998919",
  "metadata": null,
	"status": "pending",
	"links": {
    "content": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/content",
    "self": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}",
    "commit": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/commit"
  },
}
```

**Code sample**

```shell
curl \
  --request PUT \
  --header "Content-Type: application/octet-stream" \
  {scheme+hostname}/api/packages/{id}/draft/files/{filename}/content \
  --upload-file /path/to/file
```

### Complete draft file upload

`POST /api/packages/{id}/draft/files/{filename}/commit`

**Parameters**

| Name       | Type   | Location | Description                                   |
| ---------- | ------ | -------- | --------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |
| `filename` | string | path     | Name of the file.                             |

**Request**

```
POST /api/packages/{id}/draft/files/{filename}/commit HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "key": "{filename}",
  "updated": "2020-11-27 11:26:04.607831",
  "created": "2020-11-27 11:17:10.998919",
  "checksum": "md5:6ef4267f0e710357c895627e931f16cd",
  "mimetype": "image/png",
  "size": 89364.0,
  "status": "completed",
  "metadata": null,
  "file_id": "2151fa94-6dc3-4965-8df9-ec73ceb9175c",
  "version_id": "57ad8c66-b934-49c9-a46f-38bf5aa0374f",
  "bucket_id": "90b5b318-114a-4b87-bc9d-0d018b9363d3",
  "storage_class": "S",
  "links": {
    "content": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/content",
    "self": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}",
    "commit": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/commit"
  },
}
```

### Get draft file metadata

`GET /api/packages/{id}/draft/files/{filename}`

**Parameters**

| Name       | Type   | Location | Description                                   |
| ---------- | ------ | -------- | --------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |
| `filename` | string | path     | Name of the file.                             |

**Request**

```
GET /api/packages/{id}/draft/files/{filename} HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "key": "{filename}",
  "updated": "2020-11-27 11:26:04.607831",
  "created": "2020-11-27 11:17:10.998919",
  "checksum": "md5:6ef4267f0e710357c895627e931f16cd",
  "mimetype": "image/png",
  "size": 89364.0,
  "status": "completed",
  "metadata": {
    "width": 960,
    "height": 640
  },
  "file_id": "2151fa94-6dc3-4965-8df9-ec73ceb9175c",
  "version_id": "57ad8c66-b934-49c9-a46f-38bf5aa0374f",
  "bucket_id": "90b5b318-114a-4b87-bc9d-0d018b9363d3",
  "storage_class": "S",
  "links": {
    "content": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/content",
    "self": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}",
    "commit": "{scheme+hostname}/api/packages/{id}/draft/files/{filename}/commit"
  },
}
```

### Download draft file

`GET /api/packages/{id}/draft/files/{filename}/content`

**Parameters**

| Name       | Type   | Location | Description                                  |
| ---------- | ------ | -------- | -------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g. `cbc2k-q9x58` |
| `filename` | string | path     | Name of a file                               |

**Request**

```
GET /api/packages/{id}/draft/files/{filename}/content HTTP/1.1
```

**Response**

```
HTTP/1.1 200 OK
Content-Disposition: inline
Content-Length: 76122
Content-MD5: 71449104d017a6056ac1a5fb58754975
Content-Type: image/pdf
Date: Thu, 26 Nov 2020 18:35:33 GMT
ETag: "md5:71449104d017a6056ac1a5fb58754975"
Last-Modified: Thu, 26 Nov 2020 14:30:06 GMT

<...file binary data...>
```

### Delete draft file

`DELETE /api/packages/{id}/draft/files/{filename}`

**Parameters**

| Name       | Type   | Location | Description                                   |
| ---------- | ------ | -------- | --------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |
| `filename` | string | path     | Name of the file.                             |

**Request**

```
DELETE /api/packages/{id}/draft/files/{filename} HTTP/1.1
```

**Response**

```
HTTP/1.1 204 No Content
```

## Published packages

Used for interacting with published Knowledge Packages.

### Get package

`GET /api/packages/{id}`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id} HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "metadata": {
    "publication_date": "2023-09-21",
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package (Edited)"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T21:45:40.468344+00:00",
  "created": "2023-09-21T21:45:40.346681+00:00",
  "revision_id": 3,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "published",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}",
    "self_html": "{scheme+hostname}/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/files",
    "latest": "{scheme+hostname}/api/packages/{id}/versions/latest",
    "latest_html": "{scheme+hostname}/packages/{id}/latest",
    "draft": "{scheme+hostname}/api/packages/{id}/draft",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/x4npp-1b941/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/resources",
    "requests": "{scheme+hostname}/api/packages/{id}/requests"
  },
  "versions": {
    "index": 1,
    "is_latest": true,
    "is_latest_draft": true
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": true,
  "id": "{id}",
  "pids": {
    "oai": {
      "provider": "oai",
      "identifier": "oai:gkhub.earthobservations.org:{id}"
    }
  },
  "is_draft": false
}
```

### Search packages

**Parameters**

| Name           | Type    | Location | Description                                                  |
| -------------- | ------- | -------- | ------------------------------------------------------------ |
| `q`            | string  | query    | Search query used to filter results based on [ElasticSearch's query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |
| `bbox`         | string  | query    | Bounding box search query (You need to define two points, `Top Left` and `Bottom Right`, with the format 'longitude,latitude,longitude,latitude').|
| `sort`         | string  | query    | Sort search results.                                         |
| `size`         | integer | query    | Specify number of items in the results page (default: 10).   |
| `page`         | integer | query    | Specify the page of results.                                 |
| `allversions` &nbsp; | boolean | query    | Specify if all versions should be included.                  |
| `accept`       | string  | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "aggregations": {...},
  "hits": {...},
  "links": {...},
  "sortBy": ...,
}
```

Each hit looks like a package above.

## Package files

Used for interacting with files of published packages.

### List package files

`GET /api/packages/{id}/files`

**Parameters**

| Name     | Type   | Location | Description                                  |
| -------- | ------ | -------- | -------------------------------------------- |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58` |
| `accept` | string | header   | - `application/json` (default)               |

**Request**

```
GET /api/packages/{id}/files HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "enabled": true,
  "default_preview": "article.pdf",
  "order": [],
  "entries": [
  	{
      "key": "article.pdf",
      "created": "2020-11-26 14:30:53.911912",
			"updated": "2020-11-26 14:30:53.920544",
      "checksum": "md5:71449104d017a6056ac1a5fb58754975",
      "mimetype": "application/pdf",
      "size": 76122,
      "status": "completed",
      "metadata": {...},
      "file_id": "...",
      "version_id": "...",
      "bucket_id": "...",
      "storage_class": "S",
      "links": {
        "content": "/api/packages/{id}/files/article.pdf/content",
        "self": "/api/packages/{id}/files/article.pdf"
      }
    }
  ]
  "links": {...},
}
```

### Get package file metadata

`GET /api/packages/{id}/files/{filename}`

**Parameters**

| Name       | Type   | Location | Description                                  |
| ---------- | ------ | -------- | -------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g. `cbc2k-q9x58` |
| `filename` | string | path     | Name of a file                               |
| `accept`   | string | header   | - `application/json` (default)               |

**Request**

```
GET /api/packages/{id}/files/{filename} HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "key": "{filename}",
  "created": "2020-11-26 14:30:53.911912",
  "updated": "2020-11-26 14:30:53.920544",
  "checksum": "md5:71449104d017a6056ac1a5fb58754975",
  "mimetype": "application/pdf",
  "size": 76122,
  "status": "completed",
  "metadata": {...},
  "file_id": "...",
  "version_id": "...",
  "bucket_id": "...",
  "storage_class": "S",
  "links": {
    "content": "/api/packages/{id}/files/{filename}/content",
    "self": "/api/packages/{id}/files/{filename}"
  }
}
```

### Download package file

`GET /api/packages/{id}/files/{filename}/content`

**Parameters**

| Name       | Type   | Location | Description                                  |
| ---------- | ------ | -------- | -------------------------------------------- |
| `id`       | string | path     | Identifier of the record, e.g. `cbc2k-q9x58` |
| `filename` | string | path     | Name of a file                               |

**Request**

```
GET /api/packages/{id}/files/{filename}/content HTTP/1.1
```

**Response**

```
HTTP/1.1 200 OK
Content-Disposition: inline
Content-Length: 76122
Content-MD5: 71449104d017a6056ac1a5fb58754975
Content-Type: image/pdf
Date: Thu, 26 Nov 2020 18:35:33 GMT
ETag: "md5:71449104d017a6056ac1a5fb58754975"
Last-Modified: Thu, 26 Nov 2020 14:30:06 GMT

<...file binary data...>
```

## Versions

Used for interacting with package versions.

### Create a new version

`POST /api/packages/{id}/versions`

**Parameters**

| Name | Type   | Location | Description                                   |
| ---- | ------ | -------- | --------------------------------------------- |
| `id` | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |

**Request**

```
POST /api/packages/{id}/versions HTTP/1.1
```

**Response**

```json
HTTP/1.1 201 OK
Content-Type: application/json


{
  "metadata": {
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package (Edited)"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T22:02:11.881261+00:00",
  "created": "2023-09-21T22:02:11.828503+00:00",
  "revision_id": 4,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "expires_at": "2023-09-21 22:02:11.828560",
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "new_version_draft",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}/draft",
    "self_html": "{scheme+hostname}/uploads/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package-draft:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package-draft:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/draft/files",
    "files_import": "{scheme+hostname}/api/packages/{id}/draft/actions/files-import",
    "record": "{scheme+hostname}/api/packages/{id}",
    "record_html": "{scheme+hostname}/packages/{id}",
    "publish": "{scheme+hostname}/api/packages/{id}/draft/actions/publish",
    "review": "{scheme+hostname}/api/packages/{id}/draft/review",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/x4npp-1b941/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/draft/resources",
    "resources_import": "{scheme+hostname}/api/packages/{id}/draft/actions/resources-import"
  },
  "versions": {
    "index": 2,
    "is_latest": false,
    "is_latest_draft": true
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": false,
  "id": "{id}",
  "pids": {},
  "is_draft": true
}
```

:::info

After creating the new draft, you can [publish it](#publish-draft).

:::

:::note

Notice that a new draft is returned with `publication_date` and `version` removed (as those are typically replaced in a new version).

The `versions.index` is also incremented. The `{parent-id}` connects the different versions together.

:::


### Get all versions

`GET /api/packages/{id}/versions`

**Parameters**

| Name | Type   | Location | Description                                   |
| ---- | ------ | -------- | --------------------------------------------- |
| `id` | string | path     | Identifier of the record, e.g.  `4d0ns-ntd89` |

**Request**

```
GET /api/packages/{id}/versions HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "hits": {...},
  "sortBy": "version",
  "links": {...}
}
```

### Get latest version

Given a package, it returns its latest version.

`GET /api/packages/{id}/versions/latest`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of a record, e.g. `cbc2k-q9x58`                 |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id}/versions/latest HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "metadata": {
    "publication_date": "2023-09-21",
    "languages": [
      {
        "title": {
          "en": "English"
        },
        "id": "eng"
      }
    ],
    "resource_type": {
      "title": {
        "en": "Knowledge Package"
      },
      "id": "knowledge"
    },
    "publisher": "GEO Knowledge Hub",
    "rights": [
      {
        "description": {
          "en": "Retains copyright in the data and provides a license that permitsthe user to use, copy, modify, and redistribute the data for any purpose, provided that the user provides credit to the original data provider."
        },
        "id": "cc-by-4.0",
        "icon": "cc-by-icon",
        "props": {
          "scheme": "spdx",
          "url": "https://creativecommons.org/licenses/by/4.0/legalcode"
        },
        "title": {
          "en": "Creative Commons Attribution 4.0 International"
        }
      }
    ],
    "creators": [
      {
        "person_or_org": {
          "type": "personal",
          "name": "Family, Name",
          "given_name": "Name",
          "family_name": "Family"
        }
      }
    ],
    "title": "Example Knowledge Package (Edited)"
  },
  "parent": {
    "id": "{parent-id}",
    "type": "package",
    "communities": {},
    "access": {
      "owned_by": [
        {
          "user": {owner-id}
        }
      ],
      "links": []
    }
  },
  "updated": "2023-09-21T21:45:40.468344+00:00",
  "created": "2023-09-21T21:45:40.346681+00:00",
  "revision_id": 3,
  "access": {
    "record": "public",
    "status": "metadata-only",
    "files": "public",
    "embargo": {
      "reason": null,
      "active": false
    }
  },
  "custom_fields": {},
  "relationship": {
    "resources": []
  },
  "status": "published",
  "assistance_requests": [],
  "links": {
    "self": "{scheme+hostname}/api/packages/{id}",
    "self_html": "{scheme+hostname}/packages/{id}",
    "self_iiif_manifest": "{scheme+hostname}/api/iiif/package:{id}/manifest",
    "self_iiif_sequence": "{scheme+hostname}/api/iiif/package:{id}/sequence/default",
    "files": "{scheme+hostname}/api/packages/{id}/files",
    "latest": "{scheme+hostname}/api/packages/{id}/versions/latest",
    "latest_html": "{scheme+hostname}/packages/{id}/latest",
    "draft": "{scheme+hostname}/api/packages/{id}/draft",
    "versions": "{scheme+hostname}/api/packages/{id}/versions",
    "access_links": "{scheme+hostname}/api/packages/{id}/access/links",
    "reserve_doi": "{scheme+hostname}/api/packages/{id}/draft/pids/doi",
    "context_html": "{scheme+hostname}/packages/{id}/dashboard",
    "context_resources": "{scheme+hostname}/api/packages/context/x4npp-1b941/resources",
    "context_associate": "{scheme+hostname}/api/packages/{id}/context/actions/associate",
    "context_dissociate": "{scheme+hostname}/api/packages/{id}/context/actions/dissociate",
    "resources": "{scheme+hostname}/api/packages/{id}/resources",
    "requests": "{scheme+hostname}/api/packages/{id}/requests"
  },
  "versions": {
    "index": 1,
    "is_latest": true,
    "is_latest_draft": false
  },
  "files": {
    "enabled": false,
    "order": []
  },
  "is_published": true,
  "id": "{id}",
  "pids": {
    "oai": {
      "provider": "oai",
      "identifier": "oai:gkhub.earthobservations.org:{id}"
    }
  },
  "is_draft": false
}
```

## Access links

Access links are URLs that can be shared with others to give them access and permissions to a package/draft.

### Create an access link

`POST /api/packages/{id}/access/links`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |
| `expires_at`     | string | body     | Date time string. When the link expires.                 |
| `permission`     | string | body     | Required. Action that can be undertaken with the link (``view``, ``preview`` or ``edit``). |


**Request**

```json
POST /api/packages/{id}/access/links HTTP/1.1
Content-Type: application/json

{
  "permission": "view"
}
```

**Response**

```json
HTTP/1.1 201 CREATED
Content-Type: application/json

{
  "permission": "view",
  "created_at": "2021-03-25T21:06:29.563235",
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjNkMzMyMGVhLTA3NTUtNGQ5My1hNzZlLWUyZjJmYzY1NWQyYSIsImRhdGEiOnt9LCJyYW5kb20iOiI2NzZhYTk3OTczMzgwMjkyNTJiM2MwZDBjNjliMTVkYSJ9.dBqk7YzIZ7kwG4oijNgH1VU-cjQmBiQlMQKMoB2y-YjVWmgnZetFAESsqRP6VpGTtaKdftrtob1PVZJF4YGpfg",
  "id": "3d3320ea-0755-4d93-a76e-e2f2fc655d2a",
  "expires_at": null
}
```

### Get an access link

`GET /api/packages/{id}/access/links/{link-id}`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `link-id`     | string | path     | Identifier of the link, e.g. `3d3320ea-0755-4d93-a76e-e2f2fc655d2a` |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id}/access/links/{link-id} HTTP/1.1
Content-Type: application/json
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "permission": "view",
  "created_at": "2021-03-25T21:06:29.563235",
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjNkMzMyMGVhLTA3NTUtNGQ5My1hNzZlLWUyZjJmYzY1NWQyYSIsImRhdGEiOnt9LCJyYW5kb20iOiI2NzZhYTk3OTczMzgwMjkyNTJiM2MwZDBjNjliMTVkYSJ9.dBqk7YzIZ7kwG4oijNgH1VU-cjQmBiQlMQKMoB2y-YjVWmgnZetFAESsqRP6VpGTtaKdftrtob1PVZJF4YGpfg",
  "id": "3d3320ea-0755-4d93-a76e-e2f2fc655d2a",
  "expires_at": null
}
```

### Update an access link

`PATCH /api/packages/{id}/access/links/{link-id}`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `link-id`     | string | path     | Identifier of the link, e.g. `3d3320ea-0755-4d93-a76e-e2f2fc655d2a` |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |
| `expires_at`     | string | body     | Date time string. When the link expires.                 |
| `permission`     | string | body     | Required. Action that can be undertaken with the link.             |

**Request**

```json
PATCH /api/packages/{id}/access/links/{link-id} HTTP/1.1
Content-Type: application/json

{
  "permission": "edit",
  "expires_at": "2121-03-25T21:06:29.563235"
}
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "permission": "edit",
  "created_at": "2021-03-25T21:06:29.563235",
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjNkMzMyMGVhLTA3NTUtNGQ5My1hNzZlLWUyZjJmYzY1NWQyYSIsImRhdGEiOnt9LCJyYW5kb20iOiI2NzZhYTk3OTczMzgwMjkyNTJiM2MwZDBjNjliMTVkYSJ9.dBqk7YzIZ7kwG4oijNgH1VU-cjQmBiQlMQKMoB2y-YjVWmgnZetFAESsqRP6VpGTtaKdftrtob1PVZJF4YGpfg",
  "id": "3d3320ea-0755-4d93-a76e-e2f2fc655d2a",
  "expires_at": "2121-03-25T21:06:29.563235"
}
```

### Delete an access link

`DELETE /api/packages/{id}/access/links/{link-id}`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `link-id`     | string | path     | Identifier of the link, e.g. `3d3320ea-0755-4d93-a76e-e2f2fc655d2a` |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
DELETE /api/packages/{id}/access/links/{link-id} HTTP/1.1
Content-Type: application/json
```

**Response**

```
HTTP/1.1 204 No Content
```

### List access links

`GET /api/packages/{id}/access/links`

**Parameters**

| Name     | Type   | Location | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `id`     | string | path     | Identifier of the record, e.g. `cbc2k-q9x58`                 |
| `accept` | string | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/packages/{id}/access/links HTTP/1.1
Content-Type: application/json
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "hits": {
    "hits": [
      {
        "permission": "view",
        "id": "140f69c9-a8a5-41d4-8ae2-3dfbfe0e2796",
        "created_at": "2021-03-25T21:48:03.289198",
        "expires_at": null,
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjE0MGY2OWM5LWE4YTUtNDFkNC04YWUyLTNkZmJmZTBlMjc5NiIsImRhdGEiOnt9LCJyYW5kb20iOiI2NzE3MmY4MTNkYzhkNGJjZDAwOWFlOTlhOWM3NjU1MSJ9.1O9MwTmt_nfvsCm4qvlkUH0Rpe5bK3hT422A879DJSblOCONsNxPe_feNHrgTV3s6ZA6t6vLziXjhAwgKjHhIQ"
      }
    ],
    "total": 1
  }
}
```

## User Packages

Used for interacting with the packages and drafts associated with your user.

:::info Authentication required

All requests to the user-related Rest API endpoints require [authentication](https://inveniordm.docs.cern.ch/reference/rest_api_index/#authentication).

:::

### List your draft and packages

`GET /api/user/packages`

**Parameters**

| Name     | Type    | Location | Description                                                  |
| -------- | ------- | -------- | ------------------------------------------------------------ |
| `q`      | string  | query    | Search query used to filter results based on [ElasticSearch's query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). |
| `bbox`         | string  | query    | Bounding box search query (You need to define two points, `Top Left` and `Bottom Right`, with the format 'longitude,latitude,longitude,latitude').|
| `sort`   | string  | query    | Sort search results.                                         |
| `size`   | integer | query    | Specify number of items in the results page (default: 10).   |
| `page`   | integer | query    | Specify the page of results.                                 |
| `allversions` &nbsp; | boolean | query    | Specify if all versions should be included.      |
| `accept` | string  | header   | - `application/json` (default)<br />- `application/vnd.inveniordm.v1+json` |

**Request**

```
GET /api/user/packages HTTP/1.1
```

**Response**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "aggregations": {...},
  "hits": {...},
  "links": {...},
  "sortBy": ...,
}
```
