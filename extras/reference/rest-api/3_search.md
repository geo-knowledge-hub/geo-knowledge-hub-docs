---
id: rest-api-search
title: Search
sidebar_position: 4
---

To publish Earth Observations Applications in the GEO Knowledge Hub, [Knowledge Providers](/docs/concepts/concepts-user-roles#knowledge-provider) use [Knowledge Packages](/docs/concepts/sharing-units/concepts-sharing-units-packages) and [Knowledge Resources](/docs/concepts/sharing-units/concepts-sharing-units-resources). Each of these entities has specialized APIs. This prevents the realization of searches that have both entities in the results. 

To solve this problem, the Search API is available in the GEO Knowledge Hub. Using this API, it is possible to query Packages and Resources simultaneously. This is useful for pages like the Search page and the Knowledge Provider dashboard.

This documentation page shows how Search API can be used.

### Search Packages and resources

`GET /api/search`

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
GET /api/search HTTP/1.1
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
