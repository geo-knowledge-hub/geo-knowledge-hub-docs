---
id: tagup_2022-03-03
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
