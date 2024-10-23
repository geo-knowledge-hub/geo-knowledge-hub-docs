---
id: user-guideline-knowledge-provider-linking
title: Submitting a Knowledge Package to a community
sidebar_position: 4
---

import ImageContent from '@site/src/components/content/ImageContent';

import CommunityAreaFigure from './assets/01-community-area.png';
import SelectCommunityFigure from './assets/02-select-a-community.png';
import SelectedCommunity from './assets/03-selected-community.png';
import SubmitToACommunity from './assets/04-submit-to-a-community.png';
import ReviewingPackage from './assets/05-reviewing-package.png';
import PublishedPackage from './assets/06-published-package.png';

import Admonition from '@theme/Admonition';

<Admonition type="caution" icon="🚧" title="Page under revision">
    <p>This page is under revision. The content can be changed.</p>
</Admonition>

:::caution

To make a *Knowledge Package* submission with a [community](../../../concepts/communities.md) it is necessary that the *Package* has not yet been [published](../../../concepts/sharing-units/knowledge-packages.md#lifecycle). Otherwise, you will need to recreate the *Package*.

:::

You can add your Knowledge Package to a [community](../../../concepts/communities.md). Thus, users can find the Package by exploring the community. Also, for a *Resource* to become part of the community, it goes through a review process, which is done and maintained by the community managers themselves.

To add the package to a community, it is necessary to go through the process of submitting the *Knowledge Package* to the community. This documentation page, it is presented how this submission can be done.

### Step-by-step

To submit your *Knowledge Package*, please follow the step-by-step instructions presented in the following topics.

#### 1. Creating a Knowledge Package

The first step in submitting your Knowledge Package is to [create it](../creating/index.md). Also, you **must not have published this Package before**. Otherwise, you will need to recreate your *Package* before do the submission to a community.

If you do not have your package created, please see the [Knowledge Packages creation](../creating/index.md) page.

#### 2. Searching for a community

On the [Deposit page](../creating//2_deposit-interface.md), there is the [Selecting and linking communities](../creating/2_deposit-interface.md) section. This section, as shown in the figure below, is at the top of the page:

<ImageContent
    imagePath={CommunityAreaFigure}
    imageAlt={"Community selection area"}
/>

Clicking the `Select a community` button will bring up a window where you can search for the community where you want to submit your package:

<ImageContent
    imagePath={SelectCommunityFigure}
    imageAlt={"Select a community window"}
/>

After selecting the desired community, two changes will occur in its interface:

1. The community selection will have the name and logo of the selected community;

2. The [publish](../creating/10_publishing.md) button will be replaced by the `submit` button for the community.

These changes are shown in the figure below:

<ImageContent
    imagePath={SelectedCommunity}
    imageAlt={"Selected community"}
/>

#### 3. Submitting a package to a community

After selecting the desired community, you can submit your *Knowledge Package* for review in the community chosen using the `Submit for review` button. When you do this, a message will be displayed:

<ImageContent
    imagePath={SubmitToACommunity}
    imageAlt={"Submission message"}
/>

Read this message carefully. After reading and accepting the conditions of posting in a community, click the `Submit review` button

#### 4. Reviewing

After submission, the *Knowledge Package* will enter review mode. In this mode, community reviewers can modify the contents of the *Package*. If necessary, you can communicate and exchange information with the community reviewers using the chat that is available on the review page:

<ImageContent
    imagePath={ReviewingPackage}
    imageAlt={"Reviewing package interface"}
/>

You can exit this interface and reaccess it through the [submissions](https://gkhub.earthobservations.org/me/requests) page.

#### 5. Publishing

<!-- Talk about the visibility -->
If your *Package* is accepted in the community, it will automatically be published. If the Package is `Restricted`, only community members can see it. Otherwise, if the Package is `Public`, all users of the `GEO Knowledge Hub` will be able to use it.

Also, when a Package is published to a community, its [record landing page](/reference/application/pages/knowledge-package-page) will display the community logo:

<ImageContent
    imagePath={PublishedPackage}
    imageAlt={"Published package in a community"}
/>
