---
hide:
  - toc
---

# IDL-AuroraX API Reference

IDL-AuroraX is an IDL library for interacting with the AuroraX platform. It can be used to retrieve data such as ephemeris and data product records, and perform conjunction searches.

The below pages provide the documentation for each function. Examples can be found in the over-arching "Basic Usage" and "Advanced Usage" sections.

## Data Access

- [`aurorax_list_datasets`](/code/idlaurorax_api_reference/data/aurorax_list_datasets/)
- [`aurorax_list_observatories`](/code/idlaurorax_api_reference/data/aurorax_list_observatories/)
- [`aurorax_ucalgary_get_urls`](/code/idlaurorax_api_reference/data/aurorax_ucalgary_get_urls/)
- [`aurorax_ucalgary_download`](/code/idlaurorax_api_reference/data/aurorax_ucalgary_download/)
- [`aurorax_ucalgary_download_best_skymap`](/code/idlaurorax_api_reference/data/aurorax_ucalgary_download_best_skymap/)
- [`aurorax_ucalgary_read`](/code/idlaurorax_api_reference/data/aurorax_ucalgary_read/)
- [`aurorax_ucalgary_is_read_supported`](/code/idlaurorax_api_reference/data/aurorax_ucalgary_is_read_supported/)

## Analysis Support Software

- [`aurorax_bounding_box_extract_metric`](/code/idlaurorax_api_reference/tools/aurorax_bounding_box_extract_metric/)
- [`aurorax_calibrate_rego`](/code/idlaurorax_api_reference/tools/aurorax_calibrate_rego/)
- [`aurorax_calibrate_trex_nir`](/code/idlaurorax_api_reference/tools/aurorax_calibrate_trex_nir/)
- [`aurorax_keogram_add_axis`](/code/idlaurorax_api_reference/tools/aurorax_keogram_add_axis/)
- [`aurorax_keogram_create_custom`](/code/idlaurorax_api_reference/tools/aurorax_keogram_create_custom/)
- [`aurorax_keogram_create`](/code/idlaurorax_api_reference/tools/aurorax_keogram_create/)
- [`aurorax_keogram_plot`](/code/idlaurorax_api_reference/tools/aurorax_keogram_plot/)
- [`aurorax_montage_create`](/code/idlaurorax_api_reference/tools/aurorax_montage_create/)
- [`aurorax_mosaic_plot`](/code/idlaurorax_api_reference/tools/aurorax_mosaic_plot/)
- [`aurorax_mosaic_oplot`](/code/idlaurorax_api_reference/tools/aurorax_mosaic_oplot/)
- [`aurorax_mosaic_prep_images`](/code/idlaurorax_api_reference/tools/aurorax_mosaic_prep_images/)
- [`aurorax_mosaic_prep_skymap`](/code/idlaurorax_api_reference/tools/aurorax_mosaic_prep_skymap/)
- [`aurorax_get_decomposed_color`](/code/idlaurorax_api_reference/tools/aurorax_get_decomposed_color/)
- [`aurorax_movie`](/code/idlaurorax_api_reference/tools/aurorax_movie/)

## TREx Auroral Transport Model (ATM)

- [`aurorax_atm_forward`](/code/idlaurorax_api_reference/models/atm/aurorax_atm_forward/)
- [`aurorax_atm_forward_get_output_flags`](/code/idlaurorax_api_reference/models/atm/aurorax_atm_forward_get_output_flags/)
- [`aurorax_atm_inverse`](/code/idlaurorax_api_reference/models/atm/aurorax_atm_inverse/)
- [`aurorax_atm_inverse_get_output_flags`](/code/idlaurorax_api_reference/models/atm/aurorax_atm_inverse_get_output_flags/)

## AuroraX Search Engine
- [`aurorax_conjunction_search`](/code/idlaurorax_api_reference/search/conjunctions/search/)
- [`aurorax_open_conjunctions_in_aurorax`](/code/idlaurorax_api_reference/search/conjunctions/open_in_aurorax/)
- [`aurorax_open_conjunctions_in_swarmaurora`](/code/idlaurorax_api_reference/search/conjunctions/open_in_swarmaurora/)
- [`aurorax_save_swarmaurora_custom_import_file`](/code/idlaurorax_api_reference/search/conjunctions/save_swarmaurora_import_file/)
- [`aurorax_create_advanced_distances_hash`](/code/idlaurorax_api_reference/search/conjunctions/create_advanced_distances/)
- [`aurorax_create_criteria_block`](/code/idlaurorax_api_reference/search/conjunctions/create_criteria_block/)
- [`aurorax_create_metadata_filter`](/code/idlaurorax_api_reference/search/metadata_filters/create_metadata_filter/)
- [`aurorax_create_metadata_filter_expression`](/code/idlaurorax_api_reference/search/metadata_filters/create_expression/)
- [`aurorax_data_products_availability`](/code/idlaurorax_api_reference/search/availability/data_products/)
- [`aurorax_data_product_search`](/code/idlaurorax_api_reference/search/data_products/search/)
- [`aurorax_ephemeris_availability`](/code/idlaurorax_api_reference/search/availability/ephemeris/)
- [`aurorax_ephemeris_search`](/code/idlaurorax_api_reference/search/ephemeris/search/)
- [`aurorax_list_sources`](/code/idlaurorax_api_reference/search/sources/list/)
