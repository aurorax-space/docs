---
hide:
  - toc
---

# Search Engine

Below are all functions and procedures available in IDL-AuroraX related to using the AuroraX search engine (conjunctions, ephemeris, data products).

- [`aurorax_ephemeris_availability`](#aurorax_ephemeris_availability)
- [`aurorax_data_products_availability`](#aurorax_data_products_availability)
- [`aurorax_create_advanced_distances_hash`](#aurorax_create_advanced_distances_hash)
- [`aurorax_conjunction_search`](#aurorax_conjunction_search)
- [`aurorax_conjunction_describe`](#aurorax_conjunction_describe)
- [`aurorax_data_product_search`](#aurorax_data_product_search)
- [`aurorax_data_product_describe`](#aurorax_data_product_describe)
- [`aurorax_ephemeris_search`](#aurorax_ephemeris_search)
- [`aurorax_ephemeris_describe`](#aurorax_ephemeris_describe)
- [`aurorax_create_metadata_filter_expression`](#aurorax_create_metadata_filter_expression)
- [`aurorax_create_metadata_filter`](#aurorax_create_metadata_filter)
- [`aurorax_open_conjunctions_in_swarmaurora`](#aurorax_open_conjunctions_in_swarmaurora)
- [`aurorax_save_swarmaurora_custom_import_file`](#aurorax_save_swarmaurora_custom_import_file)
- [`aurorax_create_criteria_block`](#aurorax_create_criteria_block)
- [`aurorax_create_response_format_template`](#aurorax_create_response_format_template)
- [`aurorax_list_sources`](#aurorax_list_sources)

## aurorax_ephemeris_availability

```
;+
; :Description:
;       Retrieve data availability information for ephemeris records
;       in the AuroraX Search Engine. Optional parameters are used to
;       filter unwanted data sources out.
;
;       This function returns the retrieved data availability information,
;       as a list of structs
;
; :Parameters:
;       start_date: in, required, String
;         start year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;       end_date: in, required, String
;         end year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;
; :Keywords:
;       program: in, optional, String
;         program to filter on
;       platform: in, optional, String
;         platform to filter on
;       instrument_type: in, optional, String
;         instrument type to filter on
;       source_type: in, optional, String
;         source type to filter on (valid values are: leo, heo, lunar, ground, event_list)

; :Returns:
;       List
;
; :Examples:
;       data = aurorax_ephemeris_availability('20200101','20200105',program='swarm')
;       data = aurorax_ephemeris_availability('2020-01-01','2020-03-15',program='themis',platform='themisc')
;+
```

## aurorax_data_products_availability

```
;+
; :Description:
;       Retrieve data availability information for data product records
;       in the AuroraX platform. Optional parameters are used to filter
;       unwanted data sources out.
;
;       This function returns the retrieved data availability information,
;       as a list of structs
;
; :Parameters:
;       start_date: in, required, String
;         start year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;       end_date: in, required, String
;         end year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;
; :Keywords:
;       program: in, optional, String
;         program to filter on
;       platform: in, optional, String
;         platform to filter on
;       instrument_type: in, optional, String
;         instrument type to filter on
;       source_type: in, optional, String
;         source type to filter on (valid values are: leo, heo, lunar, ground, event_list)
;
; :Returns:
;       List
;
; :Examples:
;       data = aurorax_data_products_availability('20200101','20200105',program='auroramax')
;       data = aurorax_data_products_availability('2020-01-01','2020-03-15',program='trex',platform='gillam')
;+
```

## aurorax_create_advanced_distances_hash

```
;+
; :Description:
;       Create advanced distances pairing for a conjunction search.
;
;       The AuroraX conjunction search requires distance pairings for every
;       possibility of criteria blocks. This function will generate all
;       possibilities for you.
;
;       The function returns the advanced distances, as a hash with the default
;       value for each value being the 'distance' variable supplied.
;
; :Parameters:
;       distance: in, required, Integer
;         default distance for each pairing
;
; :Keywords:
;       ground_count: in, optional, Integer
;         number of ground criteria blocks
;       space_count: in, optional, Integer
;         number of space criteria blocks
;       events_count: in, optional, Integer
;         number of events criteria blocks
;       custom_count: in, optional, Integer
;         number of custom locations criteria blocks
;
; :Returns:
;       Hash
;
; :Examples:
;       distances = aurorax_create_advanced_distances_hash(500, ground_count=1, space_count=2)
;       distances = aurorax_create_advanced_distances_hash(500, space_count=1, events_count=1)
;       distances = aurorax_create_advanced_distances_hash(500, space_count=1, custom_count=1)
;+
```

## aurorax_conjunction_search

```
;+
; :Description:
;       Search the AuroraX platform for conjunctions using the supplied filter criteria.
;       This function returns the found conjunctions, as a search response struct. If the
;       'response_format' parameter is supplied, data will be returned as a hash.
;
;       The 'start_ts' and 'end_ts' parameters are to be timestamps in a variety of formats. The
;       following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_ts = '2020'
;         start_ts = '202001'
;         start_ts = '20200101'
;         start_ts = '2020010100'
;         start_ts = '202001010000'
;         start_ts = '2020-01-01'
;         start_ts = '2020/01/01T00:00'
;         start_ts = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_ts = '2020'
;         end_ts = '202012'
;         end_ts = '20201231'
;         end_ts = '2020123123'
;         end_ts = '202012312359'
;         end_ts = '2020-12-31'
;         end_ts = '2020/12/31T23'
;         end_ts = '2020-12-31 23'

; :Parameters:
;       start_ts: in, required, String
;         start datetime, string (different formats allowed, see above)
;       end_ts: in, required, String
;         end datetime, string (different formats allowed, see above)
;       distance: in, required, Integer or Hash
;         max distance between criteria blocks, integer or hash
;
; :Keywords:
;       ground: in, optional, List
;         ground criteria blocks
;       space: in, optional, List
;         space criteria blocks
;       events: in, optional, List
;         events criteria blocks
;       custom_locations: in, optional, List
;         custom locations criteria blocks
;       poll_interval: in, optional, Integer
;         sleep time between polling events while waiting for data (in seconds; default is 1s)
;       nbtrace: in, optional, Boolean
;         search for north B-trace conjunctions
;       sbtrace: in, optional, Boolean
;         search for south B-trace conjunctions
;       geographic: in, optional, Boolean
;         search for geographic conjunctions
;       quiet: in, optional, Boolean
;         quiet output when searching, no print messages will be shown
;       dryrun: in, optional, Boolean
;         run in dry-run mode, which will exit before sending the search
;         request to AuroraX. The query will be printed though, so that
;         users can check to make sure it would have sent the request
;         that they wanted it to send.
;
; :Returns:
;       Struct, Hash
;
; :Examples:
;       ; simple example
;       distance = 500
;       start_ts = '2019-01-01T00:00:00'
;       end_ts = '2019-01-03T23:59:59'
;       ground1 = aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND)
;       ground = list(ground1)
;       space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
;       space = list(space1)
;       response = aurorax_conjunction_search(start_ts,end_ts,distance,ground=ground,space=space,/nbtrace)
;
;       ; example with metadata
;       distance = 500
;       start_ts = '2008-01-01T00:00:00'
;       end_ts = '2008-01-31T23:59:59'
;       expression1 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1', list('classified as APA'),/OPERATOR_IN)
;       expression2 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence', 95,/OPERATOR_GE)
;       expressions = list(expression1, expression2)
;       ground_metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;       ground1 = aurorax_create_criteria_block(programs=['themis-asi'],metadata_filters=ground_metadata_filters,/GROUND)
;       ground = list(ground1)
;       space1 = aurorax_create_criteria_block(programs=['themis'],hemisphere=['northern'],/SPACE)
;       space = list(space1)
;       response = aurorax_conjunction_search(start_ts,end_ts,distance,ground=ground,space=space,/nbtrace)
;+
```

## aurorax_conjunction_describe

```
;+
; :Description:
;       Describe a conjunction search query.
;
;       This function returns the description string for the conjunction search.
;
; :Parameters:
;       start_ts: in, required, String
;         start datetime, string (different formats allowed, see above)
;       end_ts: in, required, String
;         end datetime, string (different formats allowed, see above)
;       distance: in, required, Integer or Hash
;         max distance between criteria blocks, integer or hash
;
; :Keywords:
;       ground: in, optional, List
;         ground criteria blocks
;       space: in, optional, List
;         space criteria blocks
;       events: in, optional, List
;         events criteria blocks
;       custom_locations: in, optional, List
;         custom locations criteria blocks
;       nbtrace: in, optional, Boolean
;         search for north B-trace conjunctions
;       sbtrace: in, optional, Boolean
;         search for south B-trace conjunctions
;       geographic: in, optional, Boolean
;         search for geographic conjunctions
;
; :Returns:
;       String
;
; :Examples:
;       ; simple example
;       distance = 500
;       start_ts = '2019-01-01T00:00:00'
;       end_ts = '2019-01-03T23:59:59'
;       ground = list(aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND))
;       space = list(aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE))
;       response = aurorax_conjunction_describe(start_ts,end_ts,distance,ground=ground,space=space,/nbtrace)
;+
```

## aurorax_data_product_search

```
;+
; :Description:
;       Search for data product records in the AuroraX Search Engine,
;       with optional parameters used to filter for specific matching
;       data.
;
;       This function returns the found data product records, as a search
;       response struct

;
;       The 'start_ts' and 'end_ts' parameters are to be timestamps in a
;       variety of formats. The following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_ts = '2020'
;         start_ts = '202001'
;         start_ts = '20200101'
;         start_ts = '2020010100'
;         start_ts = '202001010000'
;         start_ts = '2020-01-01'
;         start_ts = '2020/01/01T00:00'
;         start_ts = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_ts = '2020'
;         end_ts = '202012'
;         end_ts = '20201231'
;         end_ts = '2020123123'
;         end_ts = '202012312359'
;         end_ts = '2020-12-31'
;         end_ts = '2020/12/31T23'
;         end_ts = '2020-12-31 23'
;
; :Parameters:
;       start_ts: in, required, String
;         start datetime, string (different formats allowed, see above)
;       end_ts: in, required, String
;         end datetime, string (different formats allowed, see above)
;
; :Keywords:
;       programs: in, optional, List
;         programs to filter for
;       platforms: in, optional, List
;         platforms to filter for
;       instrument_types: in, optional, List
;         instrument types to filter for
;       data_product_types: in, optional, List
;         data product types to filter for
;       metadata_filters: in, optional, Hash
;         metadata filters to filter for
;       poll_interval: in, optional, Integer
;         sleep time between polling events while waiting for data (in seconds; default is 1s)
;       quiet: in, optional, Boolean
;         quiet output when searching, no print messages will be shown
;       dryrun: in, optional, Boolean
;         run in dry-run mode, which will exit before sending the search
;         request to AuroraX. The query will be printed though, so that
;         users can check to make sure it would have sent the request
;         that they wanted it to send.
;
; :Returns:
;       Struct
;
; :Examples:
;       ; simple example
;       response = aurorax_data_product_search('2020-01-01T00:00','2020-01-01T23:59',programs=['trex'],platforms=['gillam'],instrument_types=['RGB ASI'])
;
;       ; example with metadata
;       expression = aurorax_create_metadata_filter_expression('keogram_type', list('daily'),/OPERATOR_IN)
;       expressions = list(expression)
;       metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;       response = aurorax_data_product_search('2020-01-01T00:00','2020-01-01T23:59',programs=['trex'],metadata_filters=metadata_filters)
;+
```

## aurorax_data_product_describe

```
;+
; :Description:
;       Describe a data product search query.
;
;       This function returns the description string for the data product search.
;       The 'start_ts' and 'end_ts' parameters are to be timestamps in a variety of formats. The
;       following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_ts = '2020'
;         start_ts = '202001'
;         start_ts = '20200101'
;         start_ts = '2020010100'
;         start_ts = '202001010000'
;         start_ts = '2020-01-01'
;         start_ts = '2020/01/01T00:00'
;         start_ts = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_ts = '2020'
;         end_ts = '202012'
;         end_ts = '20201231'
;         end_ts = '2020123123'
;         end_ts = '202012312359'
;         end_ts = '2020-12-31'
;         end_ts = '2020/12/31T23'
;         end_ts = '2020-12-31 23'
;
; :Parameters:
;       start_ts: in, required, String
;           start timestamp, string (different formats allowed, see above)
;       end_ts: in, required, String
;           end timestamp, string (different formats allowed, see above)
;
; :Keywords:
;       programs: in, optional, List
;           programs to filter for
;       platforms: in, optional, List
;           platforms to filter for
;       instrument_types: in, optional, List
;           instrument types to filter for
;       data_product_types: in, optional, List
;         data product types to filter for
;       metadata_filters: in, optional, Hash
;           metadata filters to filter for
;
; :Returns:
;       String
;
; :Examples:
;       ; simple example
;       start_ts = '2019-01-01T00:00:00'
;       end_ts = '2019-01-03T23:59:59'
;       programs = ['themis-asi']
;       description = aurorax_data_product_describe(start_ts,end_ts,programs=programs)
;+
```

## aurorax_ephemeris_search

```
;+
; :Description:
;       Search for ephemeris records in the AuroraX Search Engine, with
;       optional parameters used to filter for specific matching data.
;
;       This function returns the found ephemeris records, as a search response struct

;       The 'start_ts' and 'end_ts' parameters are to be timestamps in a variety of formats. The
;       following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_ts = '2020'
;         start_ts = '202001'
;         start_ts = '20200101'
;         start_ts = '2020010100'
;         start_ts = '202001010000'
;         start_ts = '2020-01-01'
;         start_ts = '2020/01/01T00:00'
;         start_ts = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_ts = '2020'
;         end_ts = '202012'
;         end_ts = '20201231'
;         end_ts = '2020123123'
;         end_ts = '202012312359'
;         end_ts = '2020-12-31'
;         end_ts = '2020/12/31T23'
;         end_ts = '2020-12-31 23'
;
; :Parameters:
;       start_ts: in, required, String
;           start timestamp, string (different formats allowed, see above)
;       end_ts: in, required, String
;           end timestamp, string (different formats allowed, see above)
;
; :Keywords:
;       programs: in, optional, List
;           programs to filter for
;       platforms: in, optional, List
;           platforms to filter for
;       instrument_types: in, optional, List
;           instrument types to filter for
;       metadata_filters: in, optional, Hash
;           metadata filters to filter for
;       poll_interval: in, optional, Integer
;           sleep time between polling events while waiting for data (in seconds; default is 1s)
;       quiet: in, optional, Boolean
;           quiet output when searching, no print messages will be shown
;       dryrun: in, optional, Boolean
;           run in dry-run mode, which will exit before sending the search
;           request to AuroraX. The query will be printed though, so that
;           users can check to make sure it would have sent the request
;           that they wanted it to send.
;
; :Returns:
;       Struct
;
; :Examples:
;       ; simple example
;       response = aurorax_ephemeris_search('2020-01-01T00:00','2020-01-01T23:59',programs=['swarm'],platforms=['swarma'],instrument_types=['footprint'])
;
;       ; example with metadata
;       expression = aurorax_create_metadata_filter_expression('nbtrace_region', list('north auroral oval', 'north mid-latitude'),/OPERATOR_IN)
;       expressions = list(expression)
;       metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;       response = aurorax_ephemeris_search('2020-01-01T00:00','2020-01-01T23:59',programs=['swarm'],metadata_filters=metadata_filters)
;+
```

## aurorax_ephemeris_describe

```
;+
; :Description:
;       Describe an ephemeris search query.
;
;       This function returns the description string for the ephemeris search.
;       The 'start_ts' and 'end_ts' parameters are to be timestamps in a variety of formats. The
;       following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_ts = '2020'
;         start_ts = '202001'
;         start_ts = '20200101'
;         start_ts = '2020010100'
;         start_ts = '202001010000'
;         start_ts = '2020-01-01'
;         start_ts = '2020/01/01T00:00'
;         start_ts = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_ts = '2020'
;         end_ts = '202012'
;         end_ts = '20201231'
;         end_ts = '2020123123'
;         end_ts = '202012312359'
;         end_ts = '2020-12-31'
;         end_ts = '2020/12/31T23'
;         end_ts = '2020-12-31 23'
;
; :Parameters:
;       start_ts: in, required, String
;           start timestamp, string (different formats allowed, see above)
;       end_ts: in, required, String
;           end timestamp, string (different formats allowed, see above)
;
; :Keywords:
;       programs: in, optional, List
;           programs to filter for
;       platforms: in, optional, List
;           platforms to filter for
;       instrument_types: in, optional, List
;           instrument types to filter for
;       metadata_filters: in, optional, Hash
;           metadata filters to filter for
;
; :Returns:
;       String
;
; :Examples:
;       ; simple example
;       start_ts = '2019-01-01T00:00:00'
;       end_ts = '2019-01-03T23:59:59'
;       programs = ['themis-asi']
;       description = aurorax_ephemeris_describe(start_ts,end_ts,programs=programs)
;+
```

## aurorax_create_metadata_filter_expression

```
;+
; :Description:
;       Create metadata filter expression for AuroraX Search Engine
;       queries.
;
;       The AuroraX Search Engine ephemeris, data products, and conjunction
;       searches can take metadata filters to help refine your search. This
;       function provides an easy way to create metadata filter expressions
;       which will be added to a metadata_filter object later on.
;
; :Parameters:
;       key: in, required, String
;         the metadata field key
;       values: in, required, String or List
;         the values to filter on
;
; :Keywords:
;       operator_eq: in, optional, Boolean
;         operator for this expression will be '='
;       operator_ne: in, optional, Boolean
;         operator for this expression will be '!='
;       operator_gt: in, optional, Boolean
;         operator for this expression will be '>'
;       operator_lt: in, optional, Boolean
;         operator for this expression will be '<'
;       operator_ge: in, optional, Boolean
;         operator for this expression will be '>='
;       operator_le: in, optional, Boolean
;         operator for this expression will be '<='
;       operator_between: in, optional, Boolean
;         operator for this expression will be 'between'
;       operator_in: in, optional, Boolean
;         operator for this expression will be 'in'
;       operator_not_in: in, optional, Boolean
;         operator for this expression will be 'not in'
;
; :Returns:
;       Hash
;
; :Examples:
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1',list('classified as APA'),/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence',95,/OPERATOR_GE)
;       expression = aurorax_create_metadata_filter_expression('tii_on','true',/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('tii_quality_vixh','0,2',/OPERATOR_BETWEEN)
;+
```

## aurorax_create_metadata_filter

```
;+
; :Description:
;       Create metadata filter object for searches
;
;       The AuroraX ephemeris, data products, and conjunction searches can take
;       metadata filters to help refine your search. This function provides
;       an easy way to create a metadata filter object using a list of expressions.
;
; :Parameters:
;       expressions: in, required, List
;         the expressions to use for this metadata filter (use
;         aurorax_create_metadata_filter_expressions() function to create the expression(s))
;
; :Keywords:
;       operator_and: in, optional, Boolean
;         logical operator for this filter will be 'AND'
;       operator_or: in, optional, Boolean
;         logical operator for this filter will be 'OR'
;
; :Returns:
;       Hash
;
; :Examples:
;       expression1 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1', list('classified as APA'),/OPERATOR_IN)
;       expression2 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence', 95,/OPERATOR_GE)
;       expressions = list(expression1, expression2)
;       metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;+
```

## aurorax_open_conjunctions_in_swarmaurora

```
;+
; :Description:
;       Realize a browser window showing conjunction search results
;       in Swarm-Aurora.
;
; :Parameters:
;       request_id: in, required, String
;         the request ID for the conjunction search
;
; :Keywords:
;       xsize: in, optional, Integer
;         specify the width of the browser window rendered, default is 95% of native screen width
;       ysize: in, optional, Integer
;         specify the height of the browser window rendered, default is 90% of native screen height
;       clipboard: in, optional, Boolean
;         copy the Swarm-Aurora URL to the clipboard
;       print_url: in, optional, Boolean
;         instead of rendering a browser window, print out the Swarm-Aurora URL
;
; :Examples:
;       response = aurorax_conjunction_search(start_ts, end_ts, distance, ground=ground, space=space)
;       aurorax_open_conjunctions_in_swarmaurora, response.request_id
;+
```

## aurorax_save_swarmaurora_custom_import_file

```
;+
; :Description:
;       Download a Swarm-Aurora custom import file
;
;       Retrieve a Swarm-Aurora custom import file for a conjunction
;       search request, and save it to a JSON file.
;
; :Parameters:
;       request_id: in, required, String
;         the request ID for the conjunction search
;
; :Keywords:
;       filename: in, optional, String
;         the filename to save the custom import file to, default is a filename made up
;         from the current working directory of the IDL instance
;
; :Examples:
;       response = aurorax_conjunction_search(start_ts, end_ts, distance, ground=ground, space=space)
;       aurorax_save_swarmaurora_custom_import_file, response.request_id
;+
```

##

```
;+
; :Description:
;       Realize a browser window showing conjunction search results in the AuroraX conjunction 
;       search website.
;
; :Parameters:
;       request_id: in, required, String
;         the request ID for the conjunction search
;
; :Keywords:
;       xsize: in, optional, Integer
;         specify the width of the browser window rendered, default is 95% of native screen width
;       ysize: in, optional, Integer
;         specify the height of the browser window rendered, default is 90% of native screen height
;       clipboard: in, optional, Boolean
;         copy the AuroraX URL to the clipboard
;       print_url: in, optional, Boolean
;         instead of rendering a browser window, print out the AuroraX URL
;       expert: in, optional, Boolean
;         open in the "expert mode" AuroraX conjunction search webpage
;
; :Examples:
;       response = aurorax_conjunction_search(start_ts, end_ts, distance, ground=ground, space=space)
;       aurorax_open_conjunctions_in_aurorax, response.request_id
;+
```

## aurorax_create_criteria_block

```
;+
; :Description:
;   Create conjunction search criteria block.
;
;   Supported keywords for /GROUND criteria blocks: programs, platforms, instrument_types, metadata_filters
;   Supported keywords for /SPACE criteria blocks: programs, platforms, hemispheres, metadata_filters
;   Supported keywords for /EVENTS criteria blocks: platforms, instrument_types, metadata_filters
;   Supported keywords for /CUSTOM criteria blocks: locations
;
; :Keywords:
;     programs: in, optional, List or Array
;         programs for this criteria block
;     platforms: in, optional, List or Array
;         platforms for this criteria block
;     instrument_types: in, optional, List or Array
;         instrument types for this criteria block
;     hemisphere: in, optional, List or Array
;         hemisphere values for this criteria block (valid values are 'northern' and/or 'southern')
;     locations: in, optional, List
;         list of 2-element arrays representing custom locations; order is [latitude, longitude].
;     metadata_filters: in, optional, Hash
;         metadata filters to filter for
;     ground: in, optional, Boolean
;         create a "ground" criteria block
;     space: in, optional, Boolean
;         create a "space" criteria block
;     events: in, optional, Boolean
;         create an "events" criteria block
;     custom: in, optional, Boolean
;         create a "custom locations" criteria block
;
; :Returns:
;     Struct
;
; :Examples:
;     cb = aurorax_create_criteria_block(programs = ['themis-asi'], /ground)
;     cb = aurorax_create_criteria_block(programs = ['swarm'], hemisphere = ['northern'], /space)
;     cb = aurorax_create_criteria_block(instrument_types = ['substorm onset'], /events)
;     cb = aurorax_create_criteria_block(locations = list([51.04, -114.07]), /custom)
;-
```

## aurorax_create_response_format_template

```
;+
; :Description:
;   Get a template response format for conjunction, ephemeris, or data product searches.
;
; :Keywords:
;     true: in, optional, Boolean
;         set all values in template as 'true'
;     false: in, optional, Boolean
;         set all values in template as 'false'
;     conjunctions: in, optional, Boolean
;         return the template for a conjunction search
;     ephemeris: in, optional, Boolean
;         return the template for an ephemeris search
;     data_products: in, optional, Boolean
;         return the template for a data products search
;
; :Returns:
;     Hash
;
; :Examples:
;   t = aurorax_create_response_format_template(/conjunctions)
;   t = aurorax_create_response_format_template(/ephemeris)
;   t = aurorax_create_response_format_template(/data_products)
;   t = aurorax_create_response_format_template(/conjunctions, /false)
;-
```

## aurorax_list_sources

```
;+
; :Description:
;       Retrieve AuroraX Search Engine data sources, with optional parameters
;       used to filter for certain data sources. This function returns the found
;       data sources, as a list of structs.
;
; :Keywords:
;       program: in, optional, String
;           program to filter on
;       platform: in, optional, String
;           platform to filter on
;       instrument_type: in, optional, String
;           instrument type to filter on
;       source_type: in, optional, String
;           source type to filter on (valid values are: leo, heo, lunar, ground, event_list)
;       format_full_record: in, optional, Boolean
;           data sources returned have all available information about them
;       format_identifier_only: in, optional, Boolean
;           data sources returned have minimal information about them, just the identifier
;       include_stats: in, optional, Boolean
;           include stats information
;
; :Returns:
;       List
;
; :Examples:
;       ; simple example
;       data = aurorax_list_sources()
;
;       ; example with full record format
;       data = aurorax_list_sources(program='swarm', format_full_record=1)
;
;       ; example with platform filter
;       data = aurorax_list_sources(platform='gillam')
;
;       ; example with multiple filters
;       data = aurorax_list_sources(program='trex', platform='fort smith')
;
;       ; example with stats included
;       data = aurorax_list_sources(program='trex', include_stats=1)
;+
```