---
id: concepts-sharing-units
title: Sharing units
sidebar_position: 2
---

As a system of dissemination and preservation of the knowledge created by the GEO community, the GEO Knowledge Hub defines some sharing units that help users organize and share their applications.

In this section, the sharing units defined will be described. In all, two such units have been defined, being:

### Knowledge Resources

When an application is developed, its final results and the knowledge generated about the object of study are materialized in different parts:

**Earth Observation datasets**: To get answers about a specific phenomenon or even to monitor a particular behavior from the planet, some applications require Earth Observation data as the basis for all further actions. The format, meaning, and size of the data can vary depending on the application;

**Source code and tools**: Specialists, when developing an application, can create processing scripts  (e.g., R, Python, and Julia) or even use another kind of tools (e.g., GDAL and QGIS) to extract information from Earth Observation Datasets.

**Data access and processing services**: As part of the tools, web services can be used for data acquisition and processing;

**Computational environment**: To apply processing scripts or other tools, specialists configure their environment (Computer and operational system). The configurations and software installed in this environment can be shared;

These, and several others, are parts that make up an application. In GEO Knowledge Hub, we call these parts `Knowledge Resources`. These are resources that supplement the knowledge about a particular application.

### Knowledge Package

Sharing the materials of an application must be done in a consistent way. For this to be possible, it is necessary for the specialist who produced it to share all the materials underlying the final results so that others can explore those materials and reach the same initial conclusions made by the initial author. Once others can get the same conclusions, they can begin to use the results in other contexts or even explore different dimensions of these materials. Consistent sharing makes it easier for others to take up the shared materials. In GEO Knowledge Hub, this problem is solved with the `Knowledge Package`.

A `Knowledge Package` is a reusable application-sharing unit in which the specialists can add all the [Knowledge Resources](#knowledge-resources) used to produce an application. A `Knowledge Package` has the following set of properties:

1. **Atomic**: A package contains elements that describe a single application;

2. **Immutable**: Once a package is published, the materials associated with the package, such as files and `Knowledge Resources`, cannot be modified;

3. **Versioned**: Packages can have multiple versions. Each version is a consistent, immutable representation of the package. When changes need to be made to an already published package, a new version of the package is created;

4. **Collaborative**: A package can be built collaboratively. Thus, one or several specialists can work on the composition of a package;

5. **Curated**: To be published, a package **may** be curated by an expert. This curation is only available for packages published to a community.

### Lifecycle

`Knowledge Resources` and `Knowledge Packages` use a lifecycle that allows users to create, edit and version the content that is being published. In general, the life cycle is shown in the figure below.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/gkhub-workflow.png").default}
        alt={"Workflow to create and manage packages and resources"} 
    />
    <br/>
</div>

As you can see, the life cycle has four main operations, these are:

1. `Create`: The user can create a new element;
2. `Edit`: The user can edit an existing element;
3. `Publish`: After editing, the user can publish the element;
4. `New version`: Published element can only be modified by creating a new version of it.

In addition to these operations, you can also see that each of them is associated with a state. This is because, in the life cycle, a `Knowledge Package` or `Knowledge Resource` can be in two different states:

1. `Draft`: Being in *draft* mode, the elements can be edited. This editing includes the metadata, and the data files. In the case of `packages` you can also edit the resources it is associated with;

2. `Published`: When published, elements go into the `Published` state. In this state, the resource can no longer be modified. The only changes possible are to the metadata.
