# Getting Started

There are many different aspects to AuroraX and upon visiting the website for the first time, it can quickly become overwhelming with how deep down the rabbit hole you can go. This set of "Getting Started" topics is here to help you get a better grasp of what AuroraX is all about, and how you can interact with the system.

We'll first discuss what data makes up AuroraX, since all tools available revolve around it. We'll then discuss the primary tool AuroraX has to offer - searching for Conjunctions and exploring them visually. Lastly, we'll outline how to interact with AuroraX programmatically using various methods such as PyAuroraX (the Python library).

## What is AuroraX?

AuroraX aims to be the world's first and foremost data platform for auroral science. The primary objective of AuroraX is to enable mining and exploration of existing and future auroral data, enabling key science and enhancing the benefits of the world's investment in auroral instrumentation. This is being accomplished with the development of key systems/standards for uniform metadata generation and search, image content analysis, interfaces to leading international tools, and a community involvement that includes more than 80% of the world's data providers.

## Brief summary of what AuroraX has to offer

The core components of AuroraX are its **metadata database and API**, with all webpages and supporting programmatic tools built on top of those. The primary tool that AuroraX offers is the [Conjunction Search](https://aurorax.space/conjunctionSearch/standard); allowing users to search through the vast metadata database looking for times when ground-based instrumentation and satellites were in conjunction, based on the inputted search parameters (ie. distance, combinations of data sources). Using metadata filters in your search query can further enhance the Conjunction Search by reducing results down to times when certain characteristics about the data were true. For example, times when THEMIS spacecraft were in the plasma sheet, or when a machine learning algorithm determined that a THEMIS ground-based ASI had Amorphous Pulsating Aurora (APA) in its field of view.

Below are a list of the different components we have available as part of AuroraX:

| Component | Description | Open |
| --------- | ----------- | ---- |
| Conjunction Search | Search for conjunctions between ground-based auroral instrumentation and spacecrafts | [:octicons-link-external-16:](https://aurorax.space/conjunctionSearch/standard) |
| Keogramist | Browse ground-based auroral imager data using keograms and movies | [:octicons-link-external-16:](https://aurorax.space/keogramist) |
| Event Explorer | Explore auroral data and spacecraft locations using an interactive globe | [:octicons-link-external-16:](https://aurorax.space/conjunctionSearch/standard) |
| Swarm-Aurora | Explore auroral and spacecraft summary data using web-based interfaces | [:octicons-link-external-16:](https://swarm-aurora.com) |
| AuroraX RESTful API | Interact with AuroraX programmatically using an HTTPS-based RESTful API | [:octicons-link-external-16:](https://aurorax.space/data/apiLibraries) |
| PyAuroraX | Python library for using the AuroraX API programmatically | [:octicons-link-external-16:](https://github.com/aurorax-space/pyaurorax) |
| AuroraX Data Availability | View what data is presently in the AuroraX database | [:octicons-link-external-16:](https://aurorax.space/data/availability) |

## Next step

Now that you have a brief idea of what AuroraX is, let's have a look at what kind of data is in AuroraX.

[Next step&nbsp;&nbsp;:octicons-arrow-right-16:](aurorax_data.md){.md-button}
