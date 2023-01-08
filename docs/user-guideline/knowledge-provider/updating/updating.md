---
id: user-guideline-knowledge-provider-updating
title: Updating an existing Knowledge Package
sidebar_position: 2
---

import ImageContent from '@site/src/components/ImageContent';

import AcessingDashboardFigure from './assets/01-acessing-my-dashboard.png';
import MyDashboardFigure from './assets/02-mydashboard.png';
import EditButtonFigure from './assets/04-editing-button.png';

:::caution

The interfaces and options presented in this documentation page are only available to users with the [Knowledge Providers](../../../concepts/user-roles.md#knowledge-provider) [role](../../../concepts/user-roles.md).

:::

The `GEO Knowledge Hub` allows the construction of *Knowledge Packages* through the concept of [drafts](../../../concepts/sharing-units/knowledge-packages.md#lifecycle). With this concept, you can create the *Packages* in several steps at different moments. This prevents users from making the whole Package at once.

This technique makes it easier to create the Package. It also gives the [Knowledge Providers](../../../concepts/user-roles.md#knowledge-provider) the autonomy to decide when the Package is ready to be published.

To make the use of [drafts](../../../concepts/sharing-units/knowledge-packages.md#lifecycle) convenient, `GEO Knowledge Hub` offers you a workspace where all your *Packages* and *Resources* are centralized. This documentation page will introduce this workspace, along with a step-by-step guide on how a *Package* can be edited using it.

### Step-by-step

To learn more about updating a *Knowledge Package*, follow the step-by-step instructions presented in the following topics.

#### 1. Acessing the User Workspace (Dashboard)

Into the `GEO Knowledge Hub`, to access the workspace associated with your user, click on the `My dashboard` option, which is available at the top of the page:

<ImageContent
    imagePath={AcessingDashboardFigure}
    imageAlt={"Acessing the user dashboard"}
/>

#### 2. Editing a Knowledge Package

On the user workspace, you will see all the content created by your user, including the *Packages* and *Resources* already published and also those that are being created:

<ImageContent
    imagePath={MyDashboardFigure}
    imageAlt={"User dashboard"}
/>

You can start the edition of the elements on the tab where each of the *Packages* and *Resources* are listed. To do this, you can use the `Edit` button available in the right corner of each elements:

<ImageContent
    imagePath={EditButtonFigure}
    imageAlt={"Edit button"}
/>

By clicking the Edit button, you are redirected to the [Deposit page](../creating/2_deposit-interface.md).

:::info

It is possible to edit an already published element (*Knowledge Package* or *Knowledge Resource*). However, in this case, you [can modify only the metadata](../creating/10_publishing.md).

:::
