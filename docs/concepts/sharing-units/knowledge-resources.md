---
id: concepts-sharing-units-resources
title: Knowledge Resource
sidebar_position: 2
---

import ImageContent from '@site/src/components/ImageContent';
import KnowledgeResourceLifecycle from './assets/knowledge-resource-lifecycle.png';

As mentioned earlier, experts and researchers use and create different materials for an Earth Observation application to be developed. Some examples of these materials are presented below:

**Earth Observation datasets**: To get answers about a specific phenomenon or even to monitor a particular behavior from the planet, some applications require Earth Observation data as the basis for all further actions;

**Source code and tools**: Specialists, when developing an application, can create processing scripts (e.g., [R](https://www.r-project.org/), [Python](https://www.python.org/), and [Julia](https://julialang.org/)) or even use another kind of tools (e.g., [GDAL](https://gdal.org/) and [QGIS](https://qgis.org/en/site/)) to extract information from Earth Observation Datasets.

**Computational environment**: To apply processing scripts or other tools, specialists configure their environment (Computer and operational system). The configurations and software installed in this environment can be shared;

In the `GEO Knowledge Hub`, to enable users to organize and manage these parts from an application, is defined the concept of the *Knowledge Resource* (or *Resource*). Using this concepts, users can upload each part of an application to the digital library, defining metadata and files for them. While defining a *Resource*, users can create and associate to it a DOI.

In addition to these properties, to allow the user to use the `GEO Knowledge Hub` while he/she is building his application, a *Knowledge Resource* can be versioned. Thus, several versions can be defined for the same *Resource*, which can vary the contents independently so that modifications in one version do not affect other versions.

#### Life cycle

The creation, management, and use of a *Knowledge Resource* are done through a life cycle. In this, all possible operations to a *Package* are defined, which includes the `create`, `edit`, `version`, and `publish` operations. The relationship of each of these operations and the transformations they make to a *Resource* are presented in the figure below:

<ImageContent
    imagePath={KnowledgeResourceLifecycle}
    imageAlt={"Workflow to create and manage resources"}
/>

As you can see, the life cycle has four main operations, these are:

1. `Create`: The user can create a new *Resource*;
2. `Edit`: The user can edit an existing *Resource*;
3. `Publish`: After editing, the user can publish the *Resource*;
4. `New version`: The user can create a new version of a published *Resource*;
5. `Associate`: The user can associate the *Resource* with a [Knowledge Package](knowledge-packages.md). When associated, a *Resource* can only be published via *Package*.

In addition to these operations, you can also see in the figure that each of them is associated with a state. This is because, in the life cycle, a `Knowledge Resource` can be in two different states:

1. `Draft`: Being in *draft* mode, the *Knowledge Resource* can be edited. This editing includes the `metadata`, and the `data files`;

2. `Published`: When published, elements go into the `Published` state. In this state, the *Knowledge Resource* can no longer be modified. In this state, only metadata can be changed.
