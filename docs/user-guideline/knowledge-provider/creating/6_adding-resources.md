---
id: adding-knowledge-resource
title: 6. Adding Knowledge Resources to the Knowledge Package
sidebar_position: 6
---

import ImageContent from '@site/src/components/content/ImageContent';

import KnowledgeDepositSectionResourceAddingFigure from './assets/14-knowledge-resource-creating-resource.png';
import KnowledgeDepositSectionResourceCreationFigure from './assets/15-knowledge-resource-creating-resource.png';
import KnowledgeDepositSectionResourceCreationSectionsFigure from './assets/16-knowledge-resource-creating-resource-sections.png';
import KnowledgeDepositSectionResourceSectionOneFigure from './assets/17-knowledge-resource-creating-resource-result.png';
import KnowledgeDepositSectionResourceLinkingSectionsFigure from './assets/18-knowledge-resource-creating-resource-associating.png';
import KnowledgeDepositSectionResourceSectionTwoFigure from './assets/19-knowledge-resource-creating-resource-associating.png';

import Admonition from '@theme/Admonition';

<Admonition type="caution" icon="🚧" title="Page under revision">
    <p>This page is under revision. The content can be changed.</p>
</Admonition>

Now, you can add *Knowledge Resources* to the *Package* using the interface. To do this, you can use the `Resources menu`. This menu is divided by types of *Resources*:

- `Dataset`: Allows resources of type Dataset to be added to the Package. In these resources, you can include the input data used in an application, output data, and other auxiliary data;

- `Publication`: Publications associated with the Knowledge Package;

- `Software`: Software associated with the Knowledge Package. Can be the processing scripts created during the development of the application or even the description and documentation of tools that have been used;

- `Others`: Other types of Resources such as `Training materials`, `videos`, `figures`, and so on.

So, for example, if you want to add the data used in the application associated with your *Knowledge Package*, you can use the `Dataset` section. Use the `plus` (`+`) button next to the section name to do this.

When you do this, as illustrated in the figure below, a menu with two options will be displayed:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceAddingFigure}
    imageAlt={"Adding Knowledge Resources option"}
/>

Each option represents a way of adding *Knowledge Resources* to the *Knowledge Package*. These will be detailed in the topics below:

**Create a new resource**

The first option allows you to create and add a new *Knowledge Resource* to the *Knowledge Package*. For this, after selecting this option, a creation window is presented:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceCreationFigure}
    imageAlt={"Knowledge Resources creation window"}
/>

In this window, the same metadata and options presented in the [Knowledge Package interface](../creating/3_filling-metadata.md) are available for you to fill in. Thus, you can define the `metadata`, `files`, and `permissions`. Each of these elements are organized in three sections of the same name in the interface:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceCreationSectionsFigure}
    imageAlt={"Knowledge Resources creation window sections"}
/>

Then, after filling in the `metadata` and making the appropriate `file` and `permission` settings, you can add the new *Knowledge Resource* to the *Knowledge Package*. To do this, use the `Add resource` button at the bottom right of the Resource editing window.

When you do this, the list of Package *Resources* will be updated, and the newly added element should be listed as presented below:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceSectionOneFigure}
    imageAlt={"Knowledge Package resources list"}
/>

You can repeat this process and add various resources to the *Package*. This way, all the elements used in the application described by the *Package* can be represented.

**Attach an existing resource**

In this second option, you can link an existing *Knowledge Resource* to the *Package* you are creating. With this option, the reuse of *Resources* is made more accessible.

After selecting the `attach` option, will be presented a search menu for you. In this menu, you can search for all resources that are available in `GEO Knowledge Hub`:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceLinkingSectionsFigure}
    imageAlt={"Knowledge Resources attaching window section"}
/>

When you select an element and then link it to the Package you are creating, the *Resources* list will update, showing the *Resource* that has been linked:

<ImageContent
    imagePath={KnowledgeDepositSectionResourceSectionTwoFigure}
    imageAlt={"Knowledge Package resources list"}
/>

:::tip

Knowledge Resources added through `attaching` are not managed by the Package being created. This means that you cannot change this *Resource*.

These changes can only be made by the owner of the linked *Resource*. Also, the modification must come from the *Package* in which the *Resource* was created.

:::
