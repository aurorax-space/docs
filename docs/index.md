---
hide:
  - navigation
  - toc
---

![Space weather](/_extras/img/nasa_space_weather.jpg){ align=right width="50%" }

# AuroraX Documentation

This documentation website provides technical details about AuroraX and its key components such as the Conjunction Search, the API, PyAuroraX, and more.

[Get Started&nbsp;&nbsp;:material-school-outline:](/getting_started/intro/){.md-button}
[Developer Zone&nbsp;&nbsp;:material-console:](/code/overview){.md-button}

## What is AuroraX?

AuroraX aims to be the world's first and foremost data platform for auroral science. The primary objective of AuroraX is to enable mining and exploration of existing and future auroral data, enabling key science and enhancing the benefits of the world's investment in auroral instrumentation. This is being accomplished with the development of key systems/standards for uniform metadata generation and search, image content analysis, interfaces to leading international tools, and a community involvement that includes more than 80% of the world's data providers.

AuroraX will significantly lower the barrier of entry to the global network of auroral data, and provide the foundation for efficiency and inter-operability of existing auroral instrument networks and data streams. Use of cutting-edge web frameworks, enhanced metadata, and discovery tools we aim to allow for rapid access and utilization of auroral data by the space physics and citizen science communities. Enabled by key international partnerships and Canada's leading role in auroral instrumentation, AuroraX hopes to fundamentally change the data landscape for auroral science.


## AuroraX Components

The core components of AuroraX are its **metadata database and API**, with all webpages and supporting programmatic tools built on top of those. The primary tool that AuroraX offers is the [Conjunction Search](https://aurorax.space/conjunctionSearch/standard){:target="_blank"}; allowing users to search through the vast metadata database looking for times when ground-based instrumentation and satellites were in conjunction, based on the inputted search parameters (ie. distance, combinations of data sources). Using metadata filters in your search query can further enhance the Conjunction Search by reducing results down to times when certain characteristics about the data were true. For example, times when THEMIS spacecraft were in the plasma sheet, or when a machine learning algorithm determined that a THEMIS ground-based ASI had Amorphous Pulsating Aurora (APA) in its field of view.

Below are a list of the different components we have available as part of AuroraX:

| Component | Description | Open |
| --------- | ----------- | ---- |
| Conjunction Search | Search for conjunctions between ground-based auroral instrumentation and spacecrafts | [:fontawesome-solid-external-link-alt:](https://aurorax.space/conjunctionSearch/standard){:target="_blank"} |
| Keogramist | Browse ground-based auroral imager data using keograms and movies | [:fontawesome-solid-external-link-alt:](https://aurorax.space/keogramist){:target="_blank"} |
| Event Explorer | Explore auroral data and spacecraft locations using an interactive globe | [:fontawesome-solid-external-link-alt:](https://aurorax.space/conjunctionSearch/standard){:target="_blank"} |
| Swarm-Aurora | Explore auroral and spacecraft summary data using web-based interfaces | [:fontawesome-solid-external-link-alt:](https://swarm-aurora.com){:target="_blank"} |
| AuroraX RESTful API | Interact with AuroraX programmatically using an HTTPS-based RESTful API | [:fontawesome-solid-external-link-alt:](https://aurorax.space/data/apiLibraries){:target="_blank"} |
| PyAuroraX | Python library for using the AuroraX API programmatically | [:fontawesome-solid-external-link-alt:](https://github.com/aurorax-space/pyaurorax){:target="_blank"} |
| AuroraX Data Availability | View what data is presently in the AuroraX database | [:fontawesome-solid-external-link-alt:](https://aurorax.space/data/availability){:target="_blank"} |


