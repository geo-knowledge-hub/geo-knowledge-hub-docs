---
id: rest-api-vocabularies
title: Vocabularies
sidebar_position: 5
---

import EndpointCard from '@site/src/components/content/EndpointCard';

The [InvenioRDM Vocabularies API](https://inveniordm.docs.cern.ch/reference/rest_api_vocabularies/) provides standard values for various types of information, which include:

- Languages (ISO 639-3 language codes)
- Licenses (SPDX licenses)
- Resource types (custom)

In the GEO Knowledge Hub, to meet the needs of the GEO community, we implemented new vocabularies. So, in addition to the standard vocabularies, are available:

<div className="margin-vert--md">
    <EndpointCard 
        title="GEO Work Programme activities" 
        endpoint="geowptypes" 
        description="Vocabulary of the GEO Work Activities"
        baseUrl="/api/vocabularies"
    />
</div>

<div className="margin-vert--md">
    <EndpointCard 
        title="GEO Target audiences" 
        endpoint="targetaudiencestypes" 
        description="Vocabulary with the priorities of the GEO community"
        baseUrl="/api/vocabularies"
    />
</div>

<div className="margin-vert--md">
    <EndpointCard 
        title="GEO Engagement priorities" 
        endpoint="engagementprioritiestypes" 
        description="Vocabulary with the priorities of the GEO community"
        baseUrl="/api/vocabularies"
    />
</div>

:::info Using the Vocabularies API

To learn how you can use those vocabularies, please check the InvenioRDM documentation in the [Rest API - Vocabularies](https://inveniordm.docs.cern.ch/reference/rest_api_vocabularies/) section

:::
