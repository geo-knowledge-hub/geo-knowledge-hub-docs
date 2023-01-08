---
id: concepts-sharing-units-packages
title: Knowledge Package
sidebar_position: 1
---

import ImageContent from '@site/src/components/ImageContent';

import KnowledgePackageLifecycle from './assets/knowledge-package-lifecycle.png';

Sharing the materials of an application must be done in a consistent way. For this to be possible, it is necessary for the specialist who produced it to share all the materials underlying the final results so that others can explore those materials and reach the same initial conclusions made by the initial author. 

Once others can get the same conclusions, they can begin to use the results in other contexts or even explore different dimensions of these materials. Consistent sharing makes it easier for others to take up the shared materials. In GEO Knowledge Hub, this problem is solved with the *Knowledge Package*.

A *Knowledge Package* is a reusable application-sharing unit in which the specialists can add the [Knowledge Resources](knowledge-resources.md) used to produce an application. A *Knowledge Package* has the following properties:

1. **Atomic**: A *Package* contains elements that describe a single application;

2. **Immutable**: Once a *Package* is published, the materials associated with the package, such as files and `Knowledge Resources`, cannot be modified;

3. **Versioned**: *Packages* can have multiple versions. Each version is a consistent, immutable representation of the *Package*. When changes need to be made to an already published package, a new version of the package is created;

4. **Collaborative**: A *Package* can be built collaboratively. Thus, one or several specialists can work on the composition of a *Package*;

5. **Curated**: To be published, a *Package* **may** be curated by an expert. This curation is **only** available for *Packages* published to a community.

#### Lifecycle

The creation, management, and use of a *Knowledge Package* are done through a life cycle. In this, all possible operations to a *Package* are defined, which includes the `create`, `edit`, `version`, and `publish` operations. The relationship of each of these operations and the transformations they make to a *Package* are presented in the figure below:

<div>
    <ImageContent
        imagePath={KnowledgePackageLifecycle}
        imageAlt={"Workflow to create and manage packages"}
    />
</div>

As you can see, the life cycle has four main operations, these are:

1. `Create`: The user can create a new element;
2. `Edit`: The user can edit an existing element;
3. `Publish`: After editing, the user can publish the element;
4. `New version`: Published element can only be modified by creating a new version of it.

In addition to these operations, you can also see in the figure that each of them is associated with a state. This is because, in the life cycle, a `Knowledge Resource` can be in two different states:

1. `Draft`: Being in *draft* mode, the *Knowledge Package* can be edited. This editing includes the `metadata`, `Knowledge Resource`, and the `data files`;

2. `Published`: When published, elements go into the `Published` state. In this state, the *Knowledge Package* can no longer be modified. In this state, only `metadata` can be changed.
