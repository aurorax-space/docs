---
hide:
  - toc
---

# IDL-AuroraX API Reference

IDL-AuroraX is an IDL library for interacting with the AuroraX platform. It can be used to retrieve data such as ephemeris and data product records, and perform conjunction searches.

The below sections provide the documentation for each function. Examples can be found in the over-arching "Basic Usage" and "Advanced Usage" sections.

Some additional links include:

- [Source code on Github](https://github.com/aurorax-space/idl-aurorax){:target="_blank"}
- [Installation in Github README](https://github.com/aurorax-space/idl-aurorax){:target="_blank"}

## Function Lookup

The IDL-AuroraX library contains the following functions:

- Availability
    - [`aurorax_ephemeris_availability`](/code/idlaurorax_api_reference/availability/ephemeris/)
    - [`aurorax_data_products_availability`](/code/idlaurorax_api_reference/availability/data_products/)
- Data Sources
    - [`aurorax_sources_list`](/code/idlaurorax_api_reference/sources/list/)
- Conjunctions
    - [`aurorax_create_advanced_distances_hash`](/code/idlaurorax_api_reference/conjunctions/create_advanced_distances/)
    - [`aurorax_create_criteria_block`](/code/idlaurorax_api_reference/conjunctions/create_criteria_block/)
    - [`aurorax_conjunction_search`](/code/idlaurorax_api_reference/conjunctions/search/)
- Ephemeris
    - [`aurorax_ephemeris_search`](/code/idlaurorax_api_reference/ephemeris/search/)
- Data Products
    - [`aurorax_data_product_search`](/code/idlaurorax_api_reference/data_products/search/)
- Metadata Filters
    - [`aurorax_create_metadata_filter`](/code/idlaurorax_api_reference/metadata_filters/create_metadata_filter/)
    - [`aurorax_create_metadata_filter_expression`](/code/idlaurorax_api_reference/metadata_filters/create_expression/)