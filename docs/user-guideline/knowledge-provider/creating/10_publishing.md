---
id: publishing-knowledge-package
title: 10. Publishing the Knowledge Package
sidebar_position: 10
---

import Admonition from '@theme/Admonition';
import ImageContent from '@site/src/components/ImageContent';

import KnowledgeDepositSectionPublishFigure from './assets/25-knowledge-package-publish.png';

<Admonition type="caution" icon="🚧" title="Page under revision">
    <p>This page is under revision. The content can be changed.</p>
</Admonition>

:::caution

Please note that once published, you cannot modify the `files` and `resources` associated with it. To modify these items, you must create a [new package version](../new-version/new-version.md). 

Also, if you need to associate your Knowledge package with a [community](../../../concepts/communities.md), you must do this before publishing it. For more information, please, check the [Submitting a package to a community](../linking/linking.md) page.

:::

With all elements added, you can publish your *Package*. To do this, using the `Management menu`, click the `Publish` button:

<ImageContent
    imagePath={KnowledgeDepositSectionPublishFigure}
    imageAlt={"Publish button"}
/>

When you do this, you will publish your *Knowledge Package*. The page created with the publishing will have the same form as shown in the [preview page](9_previewing.md):

<ImageContent
    imagePath={KnowledgeDepositSectionPublishFigure}
    imageAlt={"Published package view"}
/>

Finally, if your *Package* is `Public`, all users can view and use the published content. Otherwise, only invited users can view the content if it is `Restricted`.

:::caution

To learn how to share a `Restricted` *Knowledge Package*, please see the [Packages sharing](../sharing/sharing.md) page.

:::
