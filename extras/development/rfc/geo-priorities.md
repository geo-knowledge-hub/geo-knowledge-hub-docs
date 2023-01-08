---
id: geo_priorities_draft_docs
title: GEO Priorities
sidebar_position: 2
---


# GEO Priorities

## Summary

The current RFC lays out the high-level requirements for the GEO Priorities.

## Motivation

The Engagement Priorities are the primary topics that guide the Group on Earth Observations (GEO) activities. In the GEO Knowledge Hub, applications provided by users can be associated with these topics. Identifying these associations helps users identify applications of interest and is also beneficial to those who made the application available, as it makes them more visible.

Thus, we identified the need to add mechanisms to the GEO Knowledge Hub that facilitate the association and identification of `Engagement Priorities` to the applications. These functionalities should be present in the following pages: `Front Page`, `Record Landing page` and `Deposit page`.

This is done by creating the GEO Priorities, an InvenioRDM module that provides these required features. To define the functionalities of this module, we initially used the ideas developed during the GEO Knowledge Hub weekly meetings.

Overall, the component must provide the following features for the Deposit, Front, and landing page:

- **Front page**: Should provide a simple, user-friendly way to predefined searches for each of the `Engagement priorities` available;
- **Deposit page**: Should provide features that allow easy association of the record to zero or more `Engagement priorities`;
- **Record Landing page**: Should provide a simple way to identify which of the `Engagement priorities` are associated with the resource being accessed by the user.

Considering the requirements defined above, we have tried to define a first conceptual version of the GEO Priorities.

## Design

The `GEO Priorities` module will provide UI components only and not change any backend mechanisms or functionality. Therefore, the following subsections will present each component provided in the module. The division of the subsections is done by the pages where each component can be used.

### Deposit page

On the Deposit page, so that the `Engagement priorities` can be associated with the resource being added by users, the `GEO Priorities` component will provide a UI component. This component will be a form field that allows the search and association of the resource to the `Engagement priorities` and related values. The figure below shows this field:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/deposit-1.png").default}
        alt={"GEO Priorities - Deposit 1"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

In this form field, the user can perform two operations:

1. Topic search (`text option`);
2. Topic selection (`dropdown option`).

For the `Topic Search` operation, the user can search by text with auto-complete or use the `dropdown` option to list all available topics. As shown in the figure below, the user can type in related words in the auto-complete search. In this way, the component will search for available topics that intersect with the value set by the user.

> In the example shown in the figure, the user searches for the value `SDG`. The auto-complete system automatically presents the values that can be used to complete the user's selection.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/deposit-3.png").default}
        alt={"GEO Priorities - Deposit 2"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

In a complementary way, if the user does not want to type a specific value, the `dropdown` icon presented on the left side of the figure above can list all the available values. The figure below shows this usage option. As you can see, the user does not need to perform any action other than clicking on the `dropdown`:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/deposit-2.png").default}
        alt={"GEO Priorities - Deposit 3"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

Once the user has found the desired option, he then selects it. The value will be saved in the same field where the user can enter the values with the selection. An example of this operation is shown in the figure below:

> The choice to use the same field is made to follow the design patterns set by the other InvenioRDM components available in the deposit form. This eases the user's learning curve in using the system, making it comfortable.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/deposit-4.png").default}
        alt={"GEO Priorities - Deposit 4"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

With this UI component, the user can associate zero or multiple `Engagement priorities` with the created resource.

#### About the association of resources and Engagement priorities

The  [Subjects](https://inveniordm.docs.cern.ch/reference/metadata/#subjects-0-n) field, available in the InvenioRDM metadata model, will be used to associate the user's resource and the `Engagement priorities`. This field allows the addition of `subjects`, `keywords`, `classification code`, or `key phrases`. These values can be defined as `free text` or associated with a `controlled vocabulary`.

The usage of this field in GEO Knowledge Hub for storing the `Engagement priorities` will be based on the definition of a standard vocabulary scheme. With a vocabulary, the user's values will be controlled and known by the system. This decision is made as it makes it easier to validate and identify when and which `Engagement priorities` are being used in user resources.

:::note DataCite metadata

The `Subjects` field in the InvenioRDM metadata are compatible with `Subject`, described in chapter 6 (`Subject`) in the DataCite metadata model. 

:::

The form and content of the vocabulary defined for use in the Subject field are presented in the [Vocabularies section](#vocabularies).

### Landing page

Users will need to identify which `Engagement priorities` the resource is associated with on the Landing page. To highlight this association, in the `GEO Priorities`, a carousel UI component will be provided for the `side bar` of the Record Landing page. In this component, the logo of the `Engagement priorities` groups will be displayed. If more than one logo is available, the carousel automatically changes periodically. An example of this component is shown in the picture below.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/landing_page-1.png").default}
        alt={"GEO Priorities - Landing Page 1"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>


As mentioned, the component provided is a carousel. With this, the user can change and view which `Engagement priorities` the resource is associated with. In the figure below, this action is represented:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/landing_page-2.png").default}
        alt={"GEO Priorities - Landing Page 2"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

:::note The granularity of Engagement priorities

An `Engagement priority` can be associated with several topics. This initial version of `GEO Priorities` assumes that the granularity is defined at the level of the priority itself. Thus, in the SDGs, for example, instead of displaying each of the goals, only the `Engagement priority` itself is displayed (SDG logo).

:::

It should be noted that the logos of the `Engagement priorities` can be clicked on by users. When this happens, the user is redirected to the page to get more information about the selected `Engagement priority`.

### Front page

The possibility of linking GEO resources and `Engagement priorities` has given GEO Knowledge Hub the opportunity for specialized filters on these topics. The GEO Priorities module will provide a carousel component for Front Page to take full advantage of this attribute. This component will display the logo of all the `Engagement priorities` available in the system. The figure below shows an example of using this component.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/front_page-1.png").default}
        alt={"GEO Priorities - Front Page 1"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

Users can click on each of the logos displayed on the carousel. When clicked, if items are associated with the selected element, a submenu will be presented at the bottom of the carousel. There will be selectable items related to the desired `Engagement priority`. Each item is associated with a query on the GEO Knowledge Hub `Search page`. Then, the user can use it to quickly find resources related to the topic the item is about.

So with this carousel component, the user can quickly get to the resources associated with the `Engagement priorities` and their related topics.

The figure below is an example of how this works. The selection of `Sustainable Development Goals` is illustrated in the content shown. When this is done, the submenu is displayed with the selected `Engagement priority` items. In this case, the items are the `goals`. The user can select any `goal` icon presented. He is redirected to the search page where the related `goal` resources are presented when he does so.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/front_page-2.png").default}
        alt={"GEO Priorities - Front Page 2"} 
        style={{width: "800px"}} 
    />
    <br/>
</div>

This is the main component that will be provided for the front page. Its purpose is to identify the `Engagement priorities` effectively. Since the use of this component influences the organization of the `Front page` and its definition, it is necessary to show how it will be arranged on the page. To this end, the following subsection presents the suggested change to the `Front page` created in this RFC.

#### Suggested Front page changes

For the `Front page` to accommodate your existing content while allowing the insertion of a new component, it is necessary to update and reorganize it. In the current version of GEO Knowledge Hub (`v0.8.0`), the `Front page` has the interface shown in the figure below:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/front_page-3.png").default}
        alt={"GEO Priorities - Front Page 3"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

As you can notice in the figure above, basically, you have three parts in the page:

1. Search/presentation area;
2. Description/presentation icons;
3. Latest additions.

To allow the addition of the new component, provided by `GEO Priorities`, in this RFC, we suggest reorganizing the page into 4 different parts:

1. Search/presentation area;
2. Description/presentation icons (Title: `The Hub`)
3. Engagement priorities (Title: `Our Engagement priorities`);
4. Latest additions (Title: `Latest additions`).

Additionally, we suggest adding titles to each part after the search area. These will be essential elements in dividing the page by providing an explicit parameter of which page parts. The figure below shows the suggested form of page organization:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/front_page-4.png").default}
        alt={"GEO Priorities - Front Page 4"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

### Search page

As mentioned in the [Deposit page](#deposit-page) section, the `Engagement priorities` will be modeled as `Subjects` and specialized vocabularies. As a consequence of this choice, on the `Search page`, using the InvenioRDM [Faceted search](https://inveniordm.docs.cern.ch/features/#search) features, users will perform specialized filters for each of the topics associated with the Engagement priorities. This will make it easier to identify resources and which `Engagement priorities` they are associated with. This is the main reason for using this field to store the `Engagement priority` relationship no recurso do usuário.

To present an example of the format in which these results are given for the use of the `Faceted search`, the figure below is a representation of a result from a GEO Knowledge Hub search operation:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-priorities/search_page-2.png").default}
        alt={"GEO Priorities - Search Page 1"} 
        style={{width: "900px"}} 
    />
    <br/>
</div>

Notice that there is the `Subjects` section at the bottom left. This lists all the `subjects` available in the returned search results. These can filter the search result based on topics related to the `Engagement priorities`.

## Vocabularies

A new vocabulary scheme will need to be defined to provide the planned resources for the `GEO Priorities` component presented in the previous topics. This scheme will contain all the values related to `Engagement priorities` that can be associated with the resources that are being added by users.

> In InvenioRDM, a vocabulary is a set of default values that have semantics defined by the application itself or an external entity. In the case of `GEO Priorities`, the semantics are imported from the topics and goals present in the `Engagement priorities` being addressed.

Thus, for the development of this module, a new vocabulary scheme will be added to the [GEO Vocabularies](https://github.com/geo-knowledge-hub/geo-vocabularies) module. This module is responsible for registering the vocabulary schemes used in GEO Knowledge Hub. At first, three schemes will be added:

- `Sustainable Development Goals (SDGs)`: Vocabulary scheme with all 17 sustainable development goals;
- `Paris Agreement`: Vocabulary scheme with topics that are relevant to the Paris Agreement;
- `Sendai Framework`: Vocabulary scheme with topics relevant to the Sandai Framework.
