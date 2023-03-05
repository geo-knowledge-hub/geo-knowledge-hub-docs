---
id: geo_metadata_previewer_draft
title: GEO Metadata Previewer
sidebar_position: 3
---

:::tip

This functionality has already been implemented and is available in the GEO Knowledge Hub interface. [Click here](http://gkhub.earthobservations.org/) to check it out.

:::

# Geospatial metadata previewer

## Summary

The current RFC lays out the high-level requirements for the geospatial metadata previewer.

## Motivation

Visualizing geospatial data can improve the user experience and understanding of the data. In the InvenioRDM, it is possible to define the location from where the data was gathered or where the data is focused.

To allow users to use this InvenioRDM feature, we realize the requirement of a component that users can use in the Deposit page and Landing page to visualize the geospatial fields from the Record metadata.

The requirements of this component initially have been defined by collecting ideas/experience from systems with geospatial features such as `GeoNetwork`, `GeoServer`, `QGIS`, and `Pangaea data publisher (for Earth and environmental science)`.

Overall, the component must provide the following features for the Deposit and landing pages:

- **Deposit page**: Must provide simple and easy-to-use form components to allow users to navigate in an *interactive map*, add your location, and also define geospatial identifiers (such as `Geonames` or `Getty Thesaurus of Geographic Names`);

- **Landing page**: Must provide a minimal map base component to show the record geospatial metadata.

Considering the requirements defined above, we have tried to define a first conceptual version of the geospatial metadata viewer.

## Design

By now, the InvenioRDM don't have any component to enable the geospatial metadata visualization. The figures below, divided by page (Deposit page and Landing page), displays our initial idea of what the geospatial metadata previewer should provide to the InvenioRDM users.

### Deposit page

Overall, the geospatial previewer will add a new accordion section in the Deposit Page. This section will have a list of the record locations. Each item has a `Geometry Icon`, `Identifier badges`, and `Place title`.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-1.png").default}
        alt={"Geospatial metadata previewer - Overview"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

The figure below signalize each of the defined element in the previous figure:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-15.png").default}
        alt={"Geospatial metadata previewer - Overview"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

The `Description` that can be associated with a `Location` will be presented as a `tooltip`. This tooltip is presented when a user holds the mouse over an item from the `Location` list:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-16.png").default}
        alt={"Geospatial metadata previewer - Overview"} 
        style={{width: "500px"}} 
    />
    <br/>
</div>

In the InvenioRDM Record Metadata, the `Place` are optional fields. In this case, if users don't fill them in the location definition, the component will list the item using the text `Location definition`:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-17.png").default}
        alt={"Geospatial metadata previewer - List without place name"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

#### Deposit page: Adding a new Location

When the user clicks in the `Add location`, a modal will be presented as displayed in the figure below:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-2.png").default}
        alt={"Geospatial metadata previewer - Adding a new location"} 
        style={{width: "450px"}} 
    />
    <br/>
</div>

In the model form, users can:

- Define a free text with a place name (`place` property in the metadata);

- Define a free text with a description (`description` property in the metadata);

- Define multiple identifiers (`identifiers` property in the metadata);

- Define a geospatial geometry, such as `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, or `MultiPolygon` (`geometry` property in the metadata).

##### Deposit page: Defining a geospatial identifier

To add a new Identifier, users need to select a `Scheme` and the `Identifier` itself. The `Location` can have `zero` or `more` of these identifiers. To simplify this process, the component will provide `Schemes` from which users can select, via a dropdown menu, and the define the `Identifier` value. The figure below shows an example of the dropdown menu and its options:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-3.png").default}
        alt={"Geospatial metadata previewer - Defining a geospatial identifier"} 
        style={{width: "550px"}} 
    />
    <br/>
</div>

> Following the `Invenio RDM Records` JSON Schema, the users can define any values for `Scheme` and `Identifier`. Should the component provide a `Custom Scheme` support ?

##### Deposit page: Defining a geospatial geometry

To add a `Geospatial Geometry`, users need to define a GeoJSON geometry (as defined in the metadata). To avoid the definition of geometry by hand, the component will provide an *interactive map*. In this map, the users can draw the geometry (using `Points`, `Lines`, and `Polygons`) or define it using the `GeoJSON geometry format` itself and the Open Geospatial Consortium Well-Known Text (`OGC-WKT representation`). After defining a geometry, the users can edit it using the mentioned options if needed. Options like `geocoding` and `go to location` options to quickly find a place and zoom level control will also be available. These options will be available in an icon menu over the *interactive map*, as presented in the figure below:

:::note

The `OGC-WKT representation for Geometry` is part of [Simple Feature Access - Part 1: Common architecture specification](https://www.ogc.org/standards/sfa#overview).

:::

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-5.png").default}
        alt={"Geospatial metadata previewer - Defining a geospatial geometry options"} 
        style={{width: "500px"}} 
    />
    <br/>
</div>

The figure below signalize each of the defined element in the previous figure:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-18.png").default}
        alt={"Geospatial metadata previewer - Defining a geospatial geometry options"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

In the topics below, each defined option will be presented in detail.

**Search place options**

The first feature to be covered will be the `Search place options`, which able users to search a place by its name or geospatial location. To find a place using these options, the user first clicks the `search icon`. When the user click in the icon, two options will be presented to the user:

1. Search by the name;
2. Go to location.

This operation selection is presented in the figure below:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-19.png").default}
        alt={"Geospatial metadata previewer - Searching options to find a place"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

When the user selects the `Search by the name`, an input text will be presented to insert the searched place name. The figure below displays this input option:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-6.png").default}
        alt={"Geospatial metadata previewer - Search place by name option"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

In the input text field, after defining the place name and doing the search, the component will present a list with the founded places, as displayed in the figure below:

:::note 

This geocoding search can be developed using the [Nominatim](https://github.com/osm-search/Nominatim) services. The Nominatim is an Open Source software for geocoding. Its use should avoid problems with other APIs that may have some pricing policies like [Mapbox](https://www.mapbox.com/) and [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview). An application example made with `Nominatim` can be found [here](https://nominatim.openstreetmap.org/ui/search.html).

:::


<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-7.png").default}
        alt={"Geospatial metadata previewer - Geocoding search result"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

The user can select one item from the search result. Doing this, the map visible area will be moved to the region of the selected item.

:::note

If this feature was implemented using [Nominatim](https://github.com/osm-search/Nominatim) the component will not do an autocomplete search. This is because the Nominatim does not support this feature, and its [usage policies](https://operations.osmfoundation.org/policies/nominatim/) prohibit the implementation in any way on the client-side.

:::

Going back to the `Search place options` available, the users can also use the `Go to location` option, which allows the definition of a geospatial location using `latitude/longitude` values. An input text field will be presented when the user selects this option. In this input field, the user can define the `latitude/longitude` (`EPSG 4326 - WGS84`) values of the location he wants to go. The figure below presents the `latitude/longitude` input text field:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-20.png").default}
        alt={"Geospatial metadata previewer - Go to place"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

Then the user specifies the `latitude/longitude` separated by a comma and press `Enter`. The map will be moved to the defined location.

**Using the Geometry selectors and editors**

Users can use the `Geometry selectors options` to add a geospatial geometry using the *interactive map*. With these options, users can draw a `Point(s)`, `Line(s)`, `Polygon(s)`, in a place on the map. Also, a `Text Selector` is available, allowing users to define a `Point` using a `Latitude/Longitude` (`EPSG 4326 - WGS84`) text representation. A comma separates the `Latitude/Longitude` values in this text representation. These selectors and their overall operation are presented in the figure below:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-8.png").default}
        alt={"Geospatial metadata previewer - Geometry selectors"} 
        style={{width: "1000px"}} 
    />
    <br/>
</div>

In the RDM Record Metadata, only homogeneous geometry collections can be defined. To avoid inconsistency errors, since the user defines a geometry of a specific type, any other type can't be selected. This is done by disabling the other geometry selectors. The figure below presents an example of this behavior:

:::note

The user can enable the other geometry types by removing the defined geometries.

:::

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-21.png").default}
        alt={"Geospatial metadata previewer - Disabled geometry selectors"} 
        style={{width: "500px"}} 
    />
    <br/>
</div>

Another available functionality is the `Geometry position`. This field is available in the *interactive map* interface that shows the current `Latitude/Longitude` relative to the mouse position. This field is presented in the interface when a `Geometry Selector` that requires selection in the *interactive map* is used.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-22.png").default}
        alt={"Geospatial metadata previewer - Geometry position"} 
        style={{width: "600px"}} 
    />
    <br/>
</div>

When needed, users can use the `Geometry editor` option to modify an already defined geometry. With this option, the user can move or change the geometry shape (in the case of `LineString` and `Polygons`). This option is presented in the figure below:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-9.png").default}
        alt={"Geospatial metadata previewer - Geometry editor"} 
        style={{width: "450px"}} 
    />
    <br/>
</div>

Last but not least, using the option `Geometry remover`, users can remove a selected geometry. 

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-10.png").default}
        alt={"Geospatial metadata previewer - Geometry remover"} 
        style={{width: "450px"}} 
    />
    <br/>
</div>

**GeoJSON and OGC-WKT Input**

In some cases, the users already have the Geometry. Because of that, the component provides two options that allow users two insert predefined geometries using [GeoJSON Geometry object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1) and [OGC WKT representation for Geometry](https://www.ogc.org/standards/sfa#overview). When the user selects one of these options in the map, an input text field will be presented for the user to put her geometry. The usage of these options is presented in the figure below.

:::note

Both `GeoJSON` and `OGC WKT` can be used to represent the same geometries.

:::

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-11.png").default}
        alt={"Geospatial metadata previewer - Geometry WKT and GeoJSON input fields"} 
        style={{width: "850px"}} 
    />
    <br/>
</div>

##### Deposit page: Finishing the location definition

After filling the form fields and defining the geometries in the *interactive map*, the user can add the location to the record. To do this, at the end of the Location modal form is a `Save` button. If the user wants to add another Locations without closing the modal, he can use the `Save and add another` button. If needed, the user can use the `Cancel` button to cancel the Location addition. These options are highlighted in the figure below:

<div style={{textAlign: 'center'}}>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-12.png").default}
        alt={"Geospatial metadata previewer - Save location option"} 
        style={{width: "450px"}} 
    />
</div>

##### Deposit page: Editing an already Location

To edit an already defined `Location`, in the Deposit Page, the user can select the `Location` that he wants and click in the `Edit` button. When the user clicks on this button, the Location form modal will be opened, and the user will be able to edit it.

<div style={{textAlign: 'center'}}>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-13.png").default}
        alt={"Geospatial metadata previewer - Update location"} 
        style={{width: "750px"}} 
    />
</div>

### Landing page

On the Record Landing Page, the `Geospatial metadata previewer` provides two main features that users can use to explore the geospatial metadata of records:

1. Base map in the `Side bar` for viewing geometries;
2. List of the `Locations` available in the metadata.

When considering the topics listed above, the Landing Page will have two distinct components. These components are presented generically in the figure below. Specific details are presented in the following topics.

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-14.png").default}
        alt={"Geospatial metadata previewer - Landing page"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

#### Base map in the side bar

To facilitate the overall presentation of `Locations`, based on the previous figure, on the `side bar` of the Landing page, a `base map` will be provided, a feature that will display all geometric objects associated with the record metadata. The supported geometric types include all those listed in the InvenioRDM Record Metadata specification, along with the `GeometryCollection` format for representing different geometric types simultaneously.

Starting from the `base map`, users can explore the spatial arrangement of the available data. To facilitate this activity, as shown in the figure below, when the user is viewing the geometries in the `base map`, by clicking on them, the associated properties will be presented in a table in a popup:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-24.png").default}
        alt={"Geospatial metadata previewer - Geometry explorer with the base map"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

#### List of the Locations available in the metadata

In addition to the map presentation, there will be an accordion on the Landing page in which each `Location` will be presented in a list format. Each item in this list has `Geometry Icon`, `Identifier badges`, and `Place title`, just as in the Deposit Locations list. Also, following the Deposit pattern, the `Location` description will be presented as a tooltip for the items in the list.

Complementing the available fields, a `See details` button will also be available, which users can use to get more information about the desired `Location`. When the user selects a `Location`, a modal opens. In this modal, as shown in the figure below, its available all informations about the `Location` selected in a user-friendly way:

<div style={{textAlign: 'center'}}>
    <br/>
    <img 
        src={require("./assets/geo-metadata-previewer/deposit-23.png").default}
        alt={"Geospatial metadata previewer - Location detailed view"} 
        style={{width: "700px"}} 
    />
    <br/>
</div>

## Future ideas

This document is a specification draft of the component for using and visualizing the geospatial metadata field available in the InvenioRDM metadata model. Thus, we will still explore some ideas:

- Extracting the spatial extent of data during upload;
- Record landing page geospatial features improvements.

Also, this is just one of the components for using the spatial support of InvenioRDM. In future specifications, we will also cover the following topics:

- Interface/components to assist the geospatial search;
- Spatial data visualization (raster, vector data).
