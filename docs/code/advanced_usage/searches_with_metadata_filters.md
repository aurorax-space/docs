# Searches with metadata filters

The AuroraX search engine can be used with something we refer to as "metadata filters". As the AuroraX database contains ephemeris and data product records with arbitrary metadata fields, we can leverage this to further enhance conjunction, ephemeris, and data product searches.

Below, we'll go through a simple example of using the metadata filters for a conjunction, ephemeris, and data product search.

Also see:

* [Information about the ephemeris metadata field](/about_the_data/categories/#metadata)
* [Information about the data products metadata field](/about_the_data/categories/#metadata_1)

## Overview

Metadata filters are added as part of a criteria block in a conjunction search, and as a parameter for the ephemeris and data product search functions.

Every filter takes the same form:

```python
{
    "key": "some key name",
    "operator": "in",  # operator options are: =, >, <, >=, <=, between, in, not in
    "values": [
        "some value",
        "another value if we want",
        ...
    ]
}
```

* `key` is the key of the metadata value in the record
* `operator` can be one of =, >, <, <=, >=, !=, "in", "not in", and "between"
* `values` is a list of values to filter for. 
    * the list can contain at most one entry if the operator is an =, >, <, <=, >=, !=.
    * for the operator "in" and "not in", the list can contain a number of values.
    * for the operator "between", the list must contain exactly two values.

## A conjunction search example

To include a metadata filter in a conjunction search, place it within the criteria block it applies to.

!!! info "Improvement on its way for PyAuroraX"

    Please note - an improvement to the structure of conjunction searches is coming soon to PyAuroraX, as part of release v0.10.0. See the milestone [here](https://github.com/aurorax-space/pyaurorax/milestone/3){:target="_blank"} and the specific issue tickets for the improvements are [!28](https://github.com/aurorax-space/pyaurorax/issues/28){:target="_blank"}, [!51](https://github.com/aurorax-space/pyaurorax/issues/51){:target="_blank"}, and [!54](https://github.com/aurorax-space/pyaurorax/issues/54){:target="_blank"}.

!!! example "Conjunction search with metadata filters"

    In the following example, we are searching for conjunctions between ground instruments in the "themis-asi" program and space instruments in the "swarm" program. We narrow the search using filters on the "calgary_cloud_ml_v1" and "nbtrace_region" metadata fields on the ground and space criteria blocks, respectively.

    === "Python"

        ```python
        # imports
        import pyaurorax
        import datetime

        # set up search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 31, 23, 59, 59)
        ground_params = [
            {
                "programs": ["themis-asi"],
                "ephemeris_metadata_filters": {
                    "logical_operator": "AND",
                    "expressions": [
                        {
                            "key": "calgary_cloud_ml_v1",
                            "operator": "in",
                            "values": [
                                "classified as not cloudy"
                            ]
                        }
                    ]
                }
            }
        ]
        space_params = [
            {
                "programs": ["themis"],
                "hemisphere": ["northern"],
                "ephemeris_metadata_filters": {
                    "logical_operator": "AND",
                    "expressions": [
                        {
                            "key": "nbtrace_region",
                            "operator": "in",
                            "values": [
                                "north polar cap"
                            ]
                        }
                    ]
                }
            }
        ]
        distance = 500

        # perform the search
        s = pyaurorax.conjunctions.search(start=start,
                                        end=end,
                                        distance=distance,
                                        ground=ground_params,
                                        space=space_params,
                                        verbose=True)

        # output data
        print(s.data)
        ```

        Example output from this code would be:

        ```
        [2022-03-02 23:00:27.761557] Search object created
        [2022-03-02 23:00:28.016696] Request submitted
        [2022-03-02 23:00:28.016772] Request ID: d6ae7403-a799-455d-ab98-386323ab1a16
        [2022-03-02 23:00:28.016784] Request details available at: https://api.aurorax.space/api/v1/conjunctions/requests/d6ae7403-a799-455d-ab98-386323ab1a16
        [2022-03-02 23:00:28.016788] Waiting for data ...
        [2022-03-02 23:00:29.083976] Checking for data ...
        [2022-03-02 23:00:30.173733] Checking for data ...
        [2022-03-02 23:00:30.254631] Data is now available
        [2022-03-02 23:00:30.254683] Retrieving data ...
        [2022-03-02 23:00:30.348727] Retrieved 32.8 kB of data containing 5 records
        ```

        And example conjunctions would be:

        ```
        [
            Conjunction(start=datetime.datetime(2019, 1, 20, 9, 30), end=datetime.datetime(2019, 1, 20, 9, 51), min_distance=305.86, max_distance=498.35, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 20, 8, 51), end=datetime.datetime(2019, 1, 20, 9, 9), min_distance=61.12, max_distance=119.83, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 22, 6, 20), end=datetime.datetime(2019, 1, 22, 6, 29), min_distance=436.22, max_distance=468.41, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 22, 5, 16), end=datetime.datetime(2019, 1, 22, 5, 29), min_distance=388.89, max_distance=492.20, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 22, 5, 40), end=datetime.datetime(2019, 1, 22, 5, 49), min_distance=339.71, max_distance=344.09, data_sources=[...], events=[...])
        ]
        ```
    
    === "IDL"

        Using the metadata filter helper functions, we can create a metadata filter object that will be added to a criteria block.

        ```idl
        ; set distance and timeframe
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-31T23:59:59'
        distance = 500

        ; set our ground metadata filter
        expression = aurorax_create_metadata_filter_expression('calgary_cloud_ml_v1', list('classified as not cloudy'),/OPERATOR_IN)
        expressions = list(expression)
        ground_metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)

        ; set our ground criteria block
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'], metadata_filters=ground_metadata_filters,/GROUND)
        ground = list(ground1)

        ; set our space metadata filter
        expression = aurorax_create_metadata_filter_expression('nbtrace_region', list('north polar cap'),/OPERATOR_IN)
        expressions = list(expression)
        space_metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)

        ; set our space criteria block
        space1 = aurorax_create_criteria_block(programs=['themis'],hemisphere=['northern'],metadata_filters=space_metadata_filters,/SPACE)
        space = list(space1)

        ; perform the search
        data = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/nbtrace)
        ```

        Example output from this code would be:

        ```
        [Wed Mar 02 16:14:42 2022] Parsing start and end timestamps
        [Wed Mar 02 16:14:42 2022] Creating request struct
        [Wed Mar 02 16:14:42 2022] Sending search request ...
        [Wed Mar 02 16:14:42 2022] Search request accepted
        [Wed Mar 02 16:14:42 2022] Request ID: dfd75094-6f20-4f80-a2fa-e61a215eb0be
        [Wed Mar 02 16:14:42 2022] Waiting for search to finish ...
        [Wed Mar 02 16:14:43 2022] Data is now available
        [Wed Mar 02 16:14:43 2022] Downloading 32.07 KB of data ...
        [Wed Mar 02 16:14:43 2022] Data downloaded, search completed
        [Wed Mar 02 16:14:43 2022] Post-processing data into IDL struct
        [Wed Mar 02 16:14:43 2022] Search completed, found 5 conjunctions in 1.2 seconds
        ```

        An example conjunction record would be:

        ```idl
        IDL> help,data[0]
        ** Structure <6edd4810>, 8 tags, length=88, data length=88, refs=2:
           START_DT        STRING    '2019-01-20T09:30:00'
           END_DT          STRING    '2019-01-20T09:51:00'
           MIN_DISTANCE    DOUBLE           305.86436
           MAX_DISTANCE    DOUBLE           498.35154
           CLOSEST_EPOCH   STRING    '2019-01-20T09:30:00'
           FARTHEST_EPOCH  STRING    '2019-01-20T09:51:00'
           DATA_SOURCES    OBJREF    <ObjHeapVar4872(LIST)>
           EVENTS          OBJREF    <ObjHeapVar4922(LIST)>
        IDL> data[0]
        {
            "START_DT": "2019-01-20T09:30:00",
            "END_DT": "2019-01-20T09:51:00",
            "MIN_DISTANCE": 305.86435755861999,
            "MAX_DISTANCE": 498.35153965450996,
            "CLOSEST_EPOCH": "2019-01-20T09:30:00",
            "FARTHEST_EPOCH": "2019-01-20T09:51:00",
            "DATA_SOURCES": <ObjHeapVar4872(LIST)>,
            "EVENTS": <ObjHeapVar4922(LIST)>
        }
        ```

## An ephemeris search example

To include a metadata filter in an ephemeris search, supply it as an addition argument to the search function.

!!! info "Improvement on its way for PyAuroraX"

    Please note - an improvement to the structure of metadata filters is coming soon to PyAuroraX, as part of release v0.10.0. See the milestone [here](https://github.com/aurorax-space/pyaurorax/milestone/3){:target="_blank"} and the specific issue ticket for the improvement is [!28](https://github.com/aurorax-space/pyaurorax/issues/28){:target="_blank"}.

!!! example "Ephemeris search with metadata filters"

    In the following example, we are searching for ephemeris records over one day for the "swarm" program and "swarma" platform, where the metadata filter for "nbtrace_region" is either "north polar cap" or "north auroral oval".

    === "Python"

        We use the [`pyaurorax.ephemeris.search()`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.search){:target="_blank"} function with the `metadata_filters_logical_operator` and `metadata_filters` parameters supplied.

        ```python
        # imports
        import pyaurorax
        import datetime

        # set up search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 1, 23, 59, 59)
        programs = ["swarm"]
        platforms = ["swarma"]
        metadata_filters_logical_operator = "AND"
        metadata_filters = [
            {
                "key": "nbtrace_region",
                "operator": "in",
                "values": [
                    "north polar cap",
                    "north auroral oval"
                ]
            }
        ]

        # perform the search
        s = pyaurorax.ephemeris.search(start=start,
                                       end=end,
                                       programs=programs,
                                       platforms=platforms,
                                       metadata_filters_logical_operator=metadata_filters_logical_operator,
                                       metadata_filters=metadata_filters,
                                       verbose=True)

        # output data
        print(s.data)
        ```

        Example output from this code would be:

        ```
        [2022-03-03 15:41:32.699680] Search object created
        [2022-03-03 15:41:32.758331] Request submitted
        [2022-03-03 15:41:32.758422] Request ID: 63e341af-2f2c-4bde-98f9-977e82736ad8
        [2022-03-03 15:41:32.758442] Request details available at: https://api.aurorax.space/api/v1/ephemeris/requests/63e341af-2f2c-4bde-98f9-977e82736ad8
        [2022-03-03 15:41:32.758447] Waiting for data ...
        [2022-03-03 15:41:33.831208] Checking for data ...
        [2022-03-03 15:41:33.903628] Data is now available
        [2022-03-03 15:41:33.903717] Retrieving data ...
        [2022-03-03 15:41:34.092507] Retrieved 1.5 MB of data containing 269 records
        ```

        And example ephemeris records would be:

        ```
        [
            Ephemeris(data_source=DataSource(identifier=3, program='swarm', platform='swarma', instrument_type='footprint', source_type='leo', display_name='Swarm A'), epoch=datetime.datetime(2019, 1, 1, 0, 22), location_geo=Location(lat=67.75, lon=-134.21866), location_gsm=Location(lat=79.08494, lon=137.89024), nbtrace=Location(lat=68.18764, lon=-133.78503), nbtrace=Location(lat=68.18764, lon=-133.78503), metadata={'state': 'definitiv...}),
            Ephemeris(data_source=DataSource(identifier=3, program='swarm', platform='swarma', instrument_type='footprint', source_type='leo', display_name='Swarm A'), epoch=datetime.datetime(2019, 1, 1, 0, 25), location_geo=Location(lat=79.17033, lon=-127.45004), location_gsm=Location(lat=72.97663, lon=-179.49547), nbtrace=Location(lat=79.30263, lon=-127.23894000000001), nbtrace=Location(lat=79.30263, lon=-127.23894000000001), metadata={'state': 'definitiv...}),
            Ephemeris(data_source=DataSource(identifier=3, program='swarm', platform='swarma', instrument_type='footprint', source_type='leo', display_name='Swarm A'), epoch=datetime.datetime(2019, 1, 1, 0, 26), location_geo=Location(lat=82.853424, lon=-120.02243000000001), location_gsm=Location(lat=69.864494, lon=-172.31992), nbtrace=Location(lat=82.91019, lon=-120.09123), nbtrace=Location(lat=82.91019, lon=-120.09123), metadata={'state': 'definitiv...}),
            ...
            ...
            ...
        ]
        ```
    
    === "IDL"

        Using the metadata filter helper functions, we can create a metadata filter object that will be added to a our ephemeris search.

        ```idl
        ; set timeframe, programs, and platforms
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-01T23:59:59'
        programs = ['swarm']
        platforms = ['swarma']
        
        ; set metadata filter
        expression = aurorax_create_metadata_filter_expression('nbtrace_region', list('north polar cap', 'north auroral oval'),/OPERATOR_IN)
        expressions = list(expression)
        metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)

        ; perform the search
        data = aurorax_ephemeris_search(start_dt,end_dt,programs=programs,platforms=platforms,metadata_filters=metadata_filters)
        ```

        Example output from this code would be:

        ```
        [Thu Mar 03 08:47:21 2022] Parsing start and end timestamps
        [Thu Mar 03 08:47:21 2022] Creating request struct
        [Thu Mar 03 08:47:21 2022] Sending search request ...
        [Thu Mar 03 08:47:21 2022] Search request accepted
        [Thu Mar 03 08:47:21 2022] Request ID: 91f5ed5c-1b22-4b60-b7d2-f8bea44030a3
        [Thu Mar 03 08:47:21 2022] Waiting for search to finish ...
        [Thu Mar 03 08:47:22 2022] Data is now available
        [Thu Mar 03 08:47:22 2022] Downloading 1.46 MB of data ...
        [Thu Mar 03 08:47:22 2022] Data downloaded, search completed
        [Thu Mar 03 08:47:22 2022] Search completed, found 269 records in 1.5 seconds
        ```

        An example conjunction record would be:

        ```idl
        IDL> help,data[0]
        ** Structure <69a33d60>, 7 tags, length=296, data length=289, refs=2:
           DATA_SOURCE     STRUCT    -> <Anonymous> Array[1]
           EPOCH           STRING    '2019-01-01T00:22:00'
           LOCATION_GEO    STRUCT    -> <Anonymous> Array[1]
           LOCATION_GSM    STRUCT    -> <Anonymous> Array[1]
           NBTRACE         STRUCT    -> <Anonymous> Array[1]
           SBTRACE         STRUCT    -> <Anonymous> Array[1]
           METADATA        STRUCT    -> <Anonymous> Array[1]
        IDL> data[0]
        {
            "DATA_SOURCE": {
                "IDENTIFIER": 3,
                "PROGRAM": "swarm",
                "PLATFORM": "swarma",
                "INSTRUMENT_TYPE": "footprint",
                "SOURCE_TYPE": "leo",
                "DISPLAY_NAME": "Swarm A"
            },
            "EPOCH": "2019-01-01T00:22:00",
            "LOCATION_GEO": {
                "LAT": 67.750000000000000,
                "LON": -134.21866000000000
            },
            "LOCATION_GSM": {
                "LAT": 79.084940000000003,
                "LON": 137.89024000000001
            },
            "NBTRACE": {
                "LAT": 68.187640000000002,
                "LON": -133.78503000000001
            },
            "SBTRACE": {
                "LAT": -64.920006000000001,
                "LON": 170.13804999999999
            },
            "METADATA": {
                "STATE": "definitive",
                "TII_ON": true,
                "NBTRACE_REGION": "north auroral oval",
                "SBTRACE_REGION": "south mid-latitude",
                "RADIAL_DISTANCE": 6805.6910331714098,
                "TII_QUALITY_VIY": 0,
                "TII_QUALITY_VIZ": 0,
                "TII_QUALITY_VIXH": 0,
                "TII_QUALITY_VIXV": 1,
                "SPACECRAFT_REGION": "nightside magnetosphere",
                "RADIAL_TRACE_REGION": "north auroral oval"
            }
        }
        ```

## A data product search example

To include a metadata filter in a data product search, supply it as an addition argument to the search function.

!!! info "Improvement on its way for PyAuroraX"

    Please note - an improvement to the structure of metadata filters is coming soon to PyAuroraX, as part of release v0.10.0. See the milestone [here](https://github.com/aurorax-space/pyaurorax/milestone/3){:target="_blank"} and the specific issue ticket for the improvement is [!28](https://github.com/aurorax-space/pyaurorax/issues/28){:target="_blank"}.

!!! example "Data product search with metadata filters"

    In the following example, we are searching for data product records over one day for the one of the TREx RGB instruments (Gillam), where the metadata filter for "keogram_type" is either "daily" or "hourly".

    === "Python"

        We use the [`pyaurorax.data_products.search()`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.search){:target="_blank"} function with the `metadata_filters_logical_operator` and `metadata_filters` parameters supplied.

        ```python
        # imports
        import pyaurorax
        import datetime

        # set up search parameters
        start = datetime.datetime(2020, 1, 1, 0, 0, 0)
        end = datetime.datetime(2020, 1, 1, 23, 59, 59)
        programs = ["trex"]
        platforms = ["gillam"]
        instrument_types = ["RGB ASI"]
        metadata_filters_logical_operator = "AND"
        metadata_filters = [
            {
                "key": "keogram_type",
                "operator": "in",
                "values": [
                    "daily",
                    "hourly"
                ]
            }
        ]

        # perform the search
        s = pyaurorax.data_products.search(start=start,
                                           end=end,
                                           programs=programs,
                                           platforms=platforms,
                                           instrument_types=instrument_types,
                                           metadata_filters_logical_operator=metadata_filters_logical_operator,
                                           metadata_filters=metadata_filters,
                                           verbose=True)

        # output data
        print(s.data)
        ```

        Example output from this code would be:

        ```
        [2022-03-03 16:02:00.816900] Search object created
        [2022-03-03 16:02:00.937031] Request submitted
        [2022-03-03 16:02:00.937115] Request ID: c1c87ea8-6d7f-4885-8e12-7c320099ac89
        [2022-03-03 16:02:00.937127] Request details available at: https://api.aurorax.space/api/v1/data_products/requests/c1c87ea8-6d7f-4885-8e12-7c320099ac89
        [2022-03-03 16:02:00.937131] Waiting for data ...
        [2022-03-03 16:02:02.008381] Checking for data ...
        [2022-03-03 16:02:02.141127] Data is now available
        [2022-03-03 16:02:02.141256] Retrieving data ...
        [2022-03-03 16:02:02.199203] Retrieved 40.0 kB of data containing 16 records
        ```

        And example data product records would be:

        ```
        [
            DataProduct(data_source=DataSource(identifier=103, program='trex', platform='gillam', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB GILL'), start=datetime.datetime(2020, 1, 1, 0, 0), end=datetime.datetime(2020, 1, 1, 23, 59), data_product_type='keogram', url='https://data.phys.uc...', metadata={'keogram_type': 'da...}),
            DataProduct(data_source=DataSource(identifier=103, program='trex', platform='gillam', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB GILL'), start=datetime.datetime(2020, 1, 1, 0, 0), end=datetime.datetime(2020, 1, 1, 0, 59), data_product_type='keogram', url='https://data.phys.uc...', metadata={'keogram_type': 'ho...}),
            DataProduct(data_source=DataSource(identifier=103, program='trex', platform='gillam', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB GILL'), start=datetime.datetime(2020, 1, 1, 1, 0), end=datetime.datetime(2020, 1, 1, 1, 59), data_product_type='keogram', url='https://data.phys.uc...', metadata={'keogram_type': 'ho...}),
            ...
            ...
            ...
        ]
        ```
    
    === "IDL"

        Using the metadata filter helper functions, we can create a metadata filter object that will be added to a our data product search.

        ```idl
        ; set timeframe, programs, and platforms
        start_dt = '2020-01-01T00:00:00'
        end_dt = '2020-01-01T23:59:59'
        programs = ['trex']
        platforms = ['gillam']
        instrument_types = ['RGB ASI']
        
        ; set metadata filter
        expression = aurorax_create_metadata_filter_expression('keogram_type', list('daily', 'hourly'),/OPERATOR_IN)
        expressions = list(expression)
        metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)

        ; perform the search
        data = aurorax_data_product_search(start_dt,end_dt,programs=programs,platforms=platforms,instrument_types=instrument_types,metadata_filters=metadata_filters)
        ```

        Example output from this code would be:

        ```
        [Thu Mar 03 09:04:12 2022] Parsing start and end timestamps
        [Thu Mar 03 09:04:12 2022] Creating request struct
        [Thu Mar 03 09:04:12 2022] Sending search request ...
        [Thu Mar 03 09:04:12 2022] Search request accepted
        [Thu Mar 03 09:04:12 2022] Request ID: 763d8e14-cafd-4d29-afe6-e66098dbc954
        [Thu Mar 03 09:04:12 2022] Waiting for search to finish ...
        [Thu Mar 03 09:04:13 2022] Data is now available
        [Thu Mar 03 09:04:13 2022] Downloading 39.11 KB of data ...
        [Thu Mar 03 09:04:13 2022] Data downloaded, search completed
        [Thu Mar 03 09:04:13 2022] Post-processing data into IDL struct
        [Thu Mar 03 09:04:13 2022] Search completed, found 16 records in 1.2 seconds
        ```

        An example conjunction record would be:

        ```idl
        IDL> help,data[0]
        ** Structure <713d4c00>, 6 tags, length=200, data length=200, refs=2:
           START_DT           STRING    '2020-01-01T00:00:00'
           END_DT             STRING    '2020-01-01T23:59:00'
           DATA_SOURCE        STRUCT    -> <Anonymous> Array[1]
           URL                STRING    'https://data.phys.ucalgary.ca/sort_by_project/TREx/RGB/stream2/2020/01/01/gill_rgb-04/20200101__gill_rgb-04_full-keogram.jpg'
           DATA_PRODUCT_TYPE  STRING    'keogram'
           METADATA           STRUCT    -> <Anonymous> Array[1]
        IDL> data[0]
        {
            "START_DT": "2020-01-01T00:00:00",
            "END_DT": "2020-01-01T23:59:00",
            "DATA_SOURCE": {
                "IDENTIFIER": 103,
                "PROGRAM": "trex",
                "PLATFORM": "gillam",
                "INSTRUMENT_TYPE": "RGB ASI",
                "SOURCE_TYPE": "ground",
                "DISPLAY_NAME": "TREx RGB GILL"
            },
            "URL": "https://data.phys.ucalgary.ca/sort_by_project/TREx/RGB/stream2/2020/01/01/gill_rgb-04/20200101__gill_rgb-04_full-keogram.jpg",
            "DATA_PRODUCT_TYPE": "keogram",
            "METADATA": {
                "KEOGRAM_TYPE": "daily",
                "IMAGING_END_TIME": "2020-01-01T13:16:00.000000",
                "IMAGING_START_TIME": "2019-12-31T23:30:00.000000"
            }
        }
        ```


