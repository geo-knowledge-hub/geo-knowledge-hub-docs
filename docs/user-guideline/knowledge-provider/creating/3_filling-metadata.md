---
id: filling-metadata
title: 3. Filling the Knowledge Package metadata
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ImageContent from '@site/src/components/ImageContent';
import TabItemContent from '@site/src/components/TabItemContent';

import KnowledgeDepositSectionFilesFigure from './assets/04-knowledge-package-metadata-section-files.png';
import KnowledgeDepositSectionBasicFigure from './assets/05-knowledge-package-metadata-section-basic-information.png';
import KnowledgeDepositSectionDescriptionFigure from './assets/06-knowledge-package-metadata-section-description.png';
import KnowledgeDepositSectionPeopleFigure from './assets/07-knowledge-package-metadata-section-people.png';
import KnowledgeDepositSectionInitiativeFigure from './assets/08-knowledge-package-metadata-section-initiative.png';
import KnowledgeDepositSectionDates from './assets/26-knowledge-package-metadata-section-dates.png';
import KnowledgeDepositSectionLocationsFigure from './assets/09-knowledge-package-metadata-section-geometry.png';
import KnowledgeDepositSectionLicenseFigure from './assets/10-knowledge-package-metadata-section-publisher.png';
import KnowledgeDepositSectionRelatedWorksFigure from './assets/11-knowledge-package-metadata-section-related-works.png';

After accessing and understanding the `Deposit interface`, the first step required to create a Knowledge Package is to fill in the metadata fields. These fields are part of the `Knowledge Package metadata` section presented earlier.

To help you fill in this metadata, below is a table where each field is described. Along with this, examples and tips on how to fill in these fields are also presented.

<Tabs>
    <TabItemContent
        value="files"
        label="Files"
        default   
    >
        <h2>Files</h2>
        <div>
            <div>
                The <code>files</code> section allows you to upload the files associated with the <i>Knowledge Package</i>. For this case, consider that the file in a <i>Knowledge Package</i> does not represent a <i>Knowledge Resource</i>. Instead, it is recommended that files defined directly in the <i>Package</i> have contents that describe the <i>Package</i> itself.
            </div>
            <br />
            <div>
                You should note that if no files are to be added to the <i>Knowledge Package</i>, you must set the <code>Metadata-only record</code> option.
            </div>
            <br />
            <div>
                The figure below shows how this section can be filled out. In this case, a file in <code>PDF</code> format was uploaded.
            </div>
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionFilesFigure}
            imageAlt={"File section"}
        />
    </TabItemContent>
    <TabItemContent
        value="basic-information"
        label="Basic information"
    >
        <h2>Basic information</h2>
        The <code>Basic information</code> section allows you to define information such as <code>title</code> and <code>publication date</code>. You can also specify a DOI - <b>D</b>igital <b>O</b>bject <b>I</b>dentifier in this section. For this, two options are available:
        <br />
        <br />
        <ol>
            <li>
                <b>Using an existing DOI</b>: In this case, you use a previously defined DOI. For example, if you add an already published file, you can use the already defined DOI. This avoids DOI duplication for the same object;
                <br />
                <br />
            </li>
            <li>
                <b>Creating a new DOI</b>: If you do not have one, you can generate and assign a DOI for the Knowledge Package. <code>GEO Knowledge Hub</code> will manage this new DOI.
            </li>
        </ol>
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionBasicFigure}
            imageAlt={"Basic information section"}
        />
    </TabItemContent>
    <TabItemContent
        value="description-languages"
        label="Description and languages"
    >
        <h2>Description and languages</h2>
        The <code>Description and languages</code> section allows you to add a description and set the language of the package materials. Also, additional descriptions can be attached (e.g., <code>Table of contents</code>, <code>technical information</code>, and so on).
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionDescriptionFigure}
            imageAlt={"Description and languages section"}
        />
    </TabItemContent>
        <TabItemContent
        value="people"
        label="People"
    >
        <h2>People</h2>
        The <code>People</code> section is where you can define the creators and contributors of the <i>Knowledge Package</i>. For both information, people and organizations can be associated. For each of these, you can define, besides the name, information such as <a href="https://orcid.org/" target="_blank">ORCID</a> and role in the <i>Package</i> (e.g., <code>Author</code>, <code>Hosting institution</code>, and so on).
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionPeopleFigure}
            imageAlt={"People section"}
        />
    </TabItemContent>
    <TabItemContent
        value="initiatives-audiences"
        label="Initiatives, audiences and subjects"
    >
        <h2>Initiatives, audiences and subjects</h2>
        The <code>subjects</code> are the first metadata you can add in the <code>Initiatives, audiences, and subjects</code> section. For this, it is possible to search for a default list of values or add a new subject. The default values are from the <a href="https://www.oecd.org/science/inno/38235147.pdf" target="_blank">OECD Field of Science (FOS)</a>.
        <br />
        <br />
        In this section, you can also define the <code>GEO Work Programme Activity</code>associated with the <i>Knowledge Package</i> being created (e.g., <a href="https://www.earthobservations.org/geoglam.php">GEOGLAM</a>, <a href="https://www.geoglows.org/">GEOGLOWS</a>, and others). Along with this, you can define the <code>Engagement Priorities</code> related to the package (e.g., SDGs, Paris agreement, and others).
        <br />
        <br />
        Finally, you can also add <code>Target Audiences</code> indicating to which type of user the application and their knowledge might be useful.
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionInitiativeFigure}
            imageAlt={"Initiatives, audiences and subjects"}
        />
    </TabItemContent>
    <TabItemContent
        value="dates-versions"
        label="Dates and versions"
    >
        <h2>Dates and versions</h2>
        In <code>Dates and versions</code>, you can add the <i>Package</i> version, along with relevant dates about it (e.g., <code>creation date</code>, <code>update date</code>, and so on).
        <br />
        <br />
        You should note that the definition of <code>versions</code> does not have any rules. Also, it is essential to note that these versions, because they can be defined arbitrarily, are not used in the versioning mechanisms of <code>GEO Knowledge Hub</code>.
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionDates}
            imageAlt={"Dates and versions section"}
        />
    </TabItemContent>
    <TabItemContent
        value="geographic-locations"
        label="Geographic locations"
    >
        <h2>Geographic locations</h2>
        The <code>Geographic locations</code> is the section where you can define spatial information about the <i>Knowledge Package</i> and its contents. For this, in addition to an interactive map, you are provided with the possibility to upload <a href="https://www.rfc-editor.org/rfc/rfc7946">GeoJSON</a> files. You can also define locations using <a href="https://www.geonames.org/">GeoNames</a> identifiers.
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionLocationsFigure}
            imageAlt={"Geographic location section"}
        />
    </TabItemContent>
    <TabItemContent
        value="publiser-licenses"
        label="Publisher and licenses"
    >
        <h2>Publisher and licenses</h2>
        In the <code>Publisher and licenses</code> section, it is possible to define who was the first <code>Publisher</code> of the work. This is useful when the material is submitted to the <code>GEO Knowledge Hub</code> even though it has already been published. You can also define a <code>License</code> for the content of the <i>Knowledge Package</i>. This does not include <i>Knowledge Resources</i>, which may have their own licenses.
        <br />
        <br />
        The main licenses recommended in <code>GEO Knowledge Hub</code> were defined based on the <a href="https://gkhub.earthobservations.org/packages/pxdag-hq931" target="_blank">GEO Data Sharing principles</a>.
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionLicenseFigure}
            imageAlt={"Publisher and licenses section"}
        />
    </TabItemContent>
    <TabItemContent
        value="related-works"
        label="Related works"
    >
        <h2>Related works</h2>
        The <code>Related works</code> section is where you can define all the works related to the <i>Knowledge Package</i> you are creating. This includes all kinds of material, from presentations to other <i>Knowledge Packages</i>.
        <br />
        <br />
        <div>
            The figure below shows how this section can be filled out.
        </div>
        <ImageContent
            imagePath={KnowledgeDepositSectionRelatedWorksFigure}
            imageAlt={"Related works section"}
        />
    </TabItemContent>
</Tabs>

:::info

When you have finished editing the Knowledge Package metadata, it is recommended that you save the changes you have made. To do this, click the `Save draft` button in the [Management menu](2_deposit-interface.md). This will ensure you retain the information you have added.

Also, a good practice related to the persistence of your changes is to **always** save after adding new information.

:::
