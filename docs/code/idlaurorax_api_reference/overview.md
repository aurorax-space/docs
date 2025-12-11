# IDL-AuroraX API Reference

IDL-AuroraX is an IDL library for interacting with the AuroraX platform. It can be used to retrieve data such as ephemeris and data product records, and perform conjunction searches.

The below pages provide the documentation for each function. View the example gallery [here](https://data.phys.ucalgary.ca/working_with_data/index.html#idl) or browse the code files directly [here](https://github.com/aurorax-space/idl-aurorax/tree/main/src/examples).

## Data Access

- [View all](data.md)
- [`aurorax_list_datasets`](data.md#aurorax_list_datasets)
- [`aurorax_get_dataset`](data.md#aurorax_get_dataset)
- [`aurorax_list_observatories`](data.md#aurorax_list_observatories)
- [`aurorax_ucalgary_download_best_calibration`](data.md#aurorax_ucalgary_download_best_calibration)
- [`aurorax_ucalgary_download_best_skymap`](data.md#aurorax_ucalgary_download_best_skymap)
- [`aurorax_ucalgary_download`](data.md#aurorax_ucalgary_download)
- [`aurorax_ucalgary_get_urls`](data.md#aurorax_ucalgary_get_urls)
- [`aurorax_ucalgary_is_read_supported`](data.md#aurorax_ucalgary_is_read_supported)
- [`aurorax_ucalgary_read`](data.md#aurorax_ucalgary_read)

## Data Analysis

- [View all](tools.md)
- [`aurorax_bounding_box_extract_metric`](tools.md#aurorax_bounding_box_extract_metric)
- [`aurorax_calibrate_rego`](tools.md#aurorax_calibrate_rego)
- [`aurorax_calibrate_trex_nir`](tools.md#aurorax_calibrate_trex_nir)
- [`aurorax_ccd_contour`](tools.md#aurorax_ccd_contour)
- [`aurorax_fov_oplot`](tools.md#aurorax_fov_oplot)
- [`aurorax_prep_grid_image`](tools.md#aurorax_prep_grid_image)
- [`aurorax_keogram_add_axis`](tools.md#aurorax_keogram_add_axis)
- [`aurorax_keogram_create_custom`](tools.md#aurorax_keogram_create_custom)
- [`aurorax_keogram_create`](tools.md#aurorax_keogram_create)
- [`aurorax_keogram_inject_nans`](tools.md#aurorax_keogram_inject_nans)
- [`aurorax_keogram_plot`](tools.md#aurorax_keogram_plot)
- [`aurorax_montage_create`](tools.md#aurorax_montage_create)
- [`aurorax_mosaic_oplot`](tools.md#aurorax_mosaic_oplot)
- [`aurorax_mosaic_plot`](tools.md#aurorax_mosaic_plot)
- [`aurorax_prep_images`](tools.md#aurorax_prep_images)
- [`aurorax_prep_skymaps`](tools.md#aurorax_prep_skymaps)
- [`aurorax_spectra_get_intensity`](tools.md#aurorax_spectra_get_intensity)
- [`aurorax_spectra_plot`](tools.md#aurorax_spectra_plot)
- [`aurorax_get_decomposed_color`](tools.md#aurorax_get_decomposed_color)
- [`aurorax_create_movie`](tools.md#aurorax_create_movie)

## TREx ATM

- [View all](models/atm.md)
- [`aurorax_atm_forward`](models/atm.md#aurorax_atm_forward)
- [`aurorax_atm_forward_get_output_flags`](models/atm.md#aurorax_atm_forward_get_output_flags)
- [`aurorax_atm_inverse`](models/atm.md#aurorax_atm_inverse)
- [`aurorax_atm_inverse_get_output_flags`](models/atm.md#aurorax_atm_inverse_get_output_flags)

## Search Engine

- [View all](search.md)
- [`aurorax_ephemeris_availability`](search.md#aurorax_ephemeris_availability)
- [`aurorax_data_products_availability`](search.md#aurorax_data_products_availability)
- [`aurorax_create_advanced_distances_hash`](search.md#aurorax_create_advanced_distances_hash)
- [`aurorax_conjunction_search`](search.md#aurorax_conjunction_search)
- [`aurorax_conjunction_describe`](search.md#aurorax_conjunction_describe)
- [`aurorax_data_product_search`](search.md#aurorax_data_product_search)
- [`aurorax_data_product_describe`](search.md#aurorax_data_product_describe)
- [`aurorax_ephemeris_search`](search.md#aurorax_ephemeris_search)
- [`aurorax_ephemeris_describe`](search.md#aurorax_ephemeris_describe)
- [`aurorax_create_metadata_filter_expression`](search.md#aurorax_create_metadata_filter_expression)
- [`aurorax_create_metadata_filter`](search.md#aurorax_create_metadata_filter)
- [`aurorax_open_conjunctions_in_swarmaurora`](search.md#aurorax_open_conjunctions_in_swarmaurora)
- [`aurorax_save_swarmaurora_custom_import_file`](search.md#aurorax_save_swarmaurora_custom_import_file)
- [`aurorax_create_criteria_block`](search.md#aurorax_create_criteria_block)
- [`aurorax_create_response_format_template`](search.md#aurorax_create_response_format_template)
- [`aurorax_list_sources`](search.md#aurorax_list_sources)

## Other

- [View all](other.md)
- [`aurorax_set_proxy`](other.md#aurorax_set_proxy)
- [`aurorax_get_proxy`](other.md#aurorax_get_proxy)
- [`aurorax_clear_proxy`](other.md#aurorax_clear_proxy)
- [`aurorax_check_version`](other.md#aurorax_check_version)
