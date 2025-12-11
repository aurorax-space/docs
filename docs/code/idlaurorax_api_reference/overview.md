---
hide:
  - toc
---

# IDL-AuroraX API Reference

IDL-AuroraX is an IDL library for interacting with the AuroraX platform. It can be used to retrieve data such as ephemeris and data product records, and perform conjunction searches.

The below pages provide the documentation for each function. Examples can be found in the over-arching "Basic Usage" and "Advanced Usage" sections.

## Data Access

- [`aurorax_list_datasets`](data/aurorax_list_datasets.md)
- [`aurorax_list_observatories`](data/aurorax_list_observatories.md)
- [`aurorax_ucalgary_get_urls`](data/aurorax_ucalgary_get_urls.md)
- [`aurorax_ucalgary_download`](data/aurorax_ucalgary_download.md)
- [`aurorax_ucalgary_download_best_skymap`](data/aurorax_ucalgary_download_best_skymap.md)
- [`aurorax_ucalgary_read`](data/aurorax_ucalgary_read.md)
- [`aurorax_ucalgary_is_read_supported`](data/aurorax_ucalgary_is_read_supported.md)

## Analysis Support Software

- [`aurorax_bounding_box_extract_metric`](tools/aurorax_bounding_box_extract_metric.md)
- [`aurorax_calibrate_rego`](tools/aurorax_calibrate_rego.md)
- [`aurorax_calibrate_trex_nir`](tools/aurorax_calibrate_trex_nir.md)
- [`aurorax_keogram_add_axis`](tools/aurorax_keogram_add_axis.md)
- [`aurorax_keogram_create_custom`](tools/aurorax_keogram_create_custom.md)
- [`aurorax_keogram_create`](tools/aurorax_keogram_create.md)
- [`aurorax_keogram_plot`](tools/aurorax_keogram_plot.md)
- [`aurorax_montage_create`](tools/aurorax_montage_create.md)
- [`aurorax_mosaic_plot`](tools/aurorax_mosaic_plot.md)
- [`aurorax_mosaic_oplot`](tools/aurorax_mosaic_oplot.md)
- [`aurorax_mosaic_prep_images`](tools/aurorax_mosaic_prep_images.md)
- [`aurorax_mosaic_prep_skymap`](tools/aurorax_mosaic_prep_skymap.md)
- [`aurorax_get_decomposed_color`](tools/aurorax_get_decomposed_color.md)
- [`aurorax_movie`](tools/aurorax_movie.md)

## TREx Auroral Transport Model (ATM)

- [`aurorax_atm_forward`](models/atm/aurorax_atm_forward.md)
- [`aurorax_atm_forward_get_output_flags`](models/atm/aurorax_atm_forward_get_output_flags.md)
- [`aurorax_atm_inverse`](models/atm/aurorax_atm_inverse.md)
- [`aurorax_atm_inverse_get_output_flags`](models/atm/aurorax_atm_inverse_get_output_flags.md)

## AuroraX Search Engine
- [`aurorax_conjunction_search`](search/conjunctions/search.md)
- [`aurorax_open_conjunctions_in_aurorax`](search/conjunctions/open_in_aurorax.md)
- [`aurorax_open_conjunctions_in_swarmaurora`](search/conjunctions/open_in_swarmaurora.md)
- [`aurorax_save_swarmaurora_custom_import_file`](search/conjunctions/save_swarmaurora_import_file.md)
- [`aurorax_create_advanced_distances_hash`](search/conjunctions/create_advanced_distances.md)
- [`aurorax_create_criteria_block`](search/conjunctions/create_criteria_block.md)
- [`aurorax_create_metadata_filter`](search/metadata_filters/create_metadata_filter.md)
- [`aurorax_create_metadata_filter_expression`](search/metadata_filters/create_expression.md)
- [`aurorax_data_products_availability`](search/availability/data_products.md)
- [`aurorax_data_product_search`](search/data_products/search.md)
- [`aurorax_ephemeris_availability`](search/availability/ephemeris.md)
- [`aurorax_ephemeris_search`](search/ephemeris/search.md)
- [`aurorax_list_sources`](search/sources/list.md)
