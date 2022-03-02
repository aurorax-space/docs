# Data Products

AuroraX developer tools provide a way to retrieve data product records from the AuroraX database. Below, we'll have a look at how to perform a data product search request, which is much like conjunction and ephemeris searching.

* [About data product data](/about_the_data/categories/#data-products)
* [Asynchronous searches](/code/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/code/advanced_usage/searches_with_metadata_filters/)

## Perform a simple data product search

Let's say we want to retrieve all the data product records the TREx RGB in Fort Smith, for a single day. We'll have a look at how to do this example below.

!!! example "Example - perform a simple data product search"

    === "Python"

        The [`data_products`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html){:target="_blank"} module provides a way to retrieve data product data from AuroraX. Specifically we'll be interested in using the [`pyaurorax.data_products.search()`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.search){:target="_blank"} function.

        ```python
        # imports
        import pyaurorax
        import datetime

        # define search params
        start = datetime.datetime(2020, 1, 1, 0, 0, 0)
        end = datetime.datetime(2020, 1, 1, 23, 59, 59)
        programs = ["trex"]
        platforms = ["fort smith"]
        instrument_types = ["RGB ASI"]

        # perform the data product search
        s = pyaurorax.data_products.search(start,
                                           end,
                                           programs=programs,
                                           platforms=platforms,
                                           instrument_types=instrument_types,
                                           verbose=True)

        # have a look at our results
        print(s.data)
        ```

        Example output from the search function (the output can be silenced if you don't set the `verbose` parameter):

        ```
        [2022-02-10 19:47:29.571828] Search object created
        [2022-02-10 19:47:29.712905] Request submitted
        [2022-02-10 19:47:29.712995] Request ID: 214e97d4-0397-42f4-a863-55bafb43899b
        [2022-02-10 19:47:29.713010] Request details available at: https://api.aurorax.space/api/v1/data_products/requests/214e97d4-0397-42f4-a863-55bafb43899b
        [2022-02-10 19:47:29.713016] Waiting for data ...
        [2022-02-10 19:47:30.789724] Checking for data ...
        [2022-02-10 19:47:30.886493] Data is now available
        [2022-02-10 19:47:30.886644] Retrieving data ...
        [2022-02-10 19:47:30.988056] Retrieved 165.9 kB of data containing 66 records

        [
            DataProduct(data_source=DataSource(identifier=96, program='trex', platform='fort smith', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB FSMI'), 
                        start=datetime.datetime(2020, 1, 1, 0, 0), 
                        end=datetime.datetime(2020, 1, 1, 23, 59), 
                        data_product_type='keogram', 
                        url='https://data.phys.uc...', 
                        metadata={'keogram_type': 'da...}), 
            DataProduct(data_source=DataSource(identifier=96, program='trex', platform='fort smith', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB FSMI'), 
                        start=datetime.datetime(2020, 1, 1, 0, 0), 
                        end=datetime.datetime(2020, 1, 1, 23, 59), 
                        data_product_type='movie', 
                        url='https://data.phys.uc...', 
                        metadata={'movie_type': 'real...}), 
            DataProduct(data_source=DataSource(identifier=96, program='trex', platform='fort smith', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB FSMI'), 
                        start=datetime.datetime(2020, 1, 1, 0, 0), 
                        end=datetime.datetime(2020, 1, 1, 23, 59), 
                        data_product_type='keogram', 
                        url='https://data.phys.uc...', 
                        metadata={'keogram_type': 'da...})
            ...
            ...
            ...
        ]
        ```

    === "IDL"

        IDL-AuroraX provides the [`aurorax_data_product_search()`](/code/idlaurorax_api_reference/data_products/search/){:target="_blank"} function to perform a data product search.

        ```idl
        IDL> data = aurorax_data_product_search('2020-01-01T00:00','2020-01-01T23:59',programs=['trex'],platforms=['fort smith'],instrument_types=['RGB ASI'])
        ```

        Example output from the search function (the output can be silenced using the `/QUIET` keyword):

        ```
        [Tue Mar 01 19:06:55 2022] Parsing start and end timestamps
        [Tue Mar 01 19:06:55 2022] Creating request struct
        [Tue Mar 01 19:06:55 2022] Sending search request ...
        [Tue Mar 01 19:06:55 2022] Search request accepted
        [Tue Mar 01 19:06:55 2022] Request ID: 04a174bf-ad0f-4827-97c0-b8550a460ce6
        [Tue Mar 01 19:06:55 2022] Waiting for search to finish ...
        [Tue Mar 01 19:06:56 2022] Data is now available
        [Tue Mar 01 19:06:56 2022] Downloading 162.04 KB of data ...
        [Tue Mar 01 19:06:56 2022] Data downloaded, search completed
        [Tue Mar 01 19:06:56 2022] Post-processing data into IDL struct
        [Tue Mar 01 19:06:56 2022] Search completed, found 66 records in 1.2 seconds
        ```

        Example output of a data product record returned by the function:

        ```idl
        IDL> help,data[0]
        ** Structure <660aecc0>, 6 tags, length=200, data length=200, refs=2:
          START_DT        STRING    '2020-01-01T00:00:00'
          END_DT          STRING    '2020-01-01T23:59:00'
          DATA_SOURCE     STRUCT    -> <Anonymous> Array[1]
          URL             STRING    'https://data.phys.ucalgary.ca/sort_by_project/TREx/RGB/rt-fullres/movie_derived_daily_keograms/2020/01/01/20200101__fsmi_rgb-01_moviebased-keogram.jpg'
          DATA_PRODUCT_TYPE
                          STRING    'keogram'
          METADATA        STRUCT    -> <Anonymous> Array[1]

        IDL> data[0]
        {
            "START_DT": "2020-01-01T00:00:00",
            "END_DT": "2020-01-01T23:59:00",
            "DATA_SOURCE": {
                "IDENTIFIER": 96,
                "PROGRAM": "trex",
                "PLATFORM": "fort smith",
                "INSTRUMENT_TYPE": "RGB ASI",
                "SOURCE_TYPE": "ground",
                "DISPLAY_NAME": "TREx RGB FSMI"
            },
            "URL": "https://data.phys.ucalgary.ca/sort_by_project/TREx/RGB/rt-fullres/movie_derived_daily_keograms/2020/01/01/20200101__fsmi_rgb-01_moviebased-keogram.jpg",
            "DATA_PRODUCT_TYPE": "keogram",
            "METADATA": {
                "KEOGRAM_TYPE": "daily_moviederived",
                "IMAGING_END_TIME": "2020-01-01T14:38:00.000000",
                "IMAGING_START_TIME": "2020-01-01T00:27:00.000000"
            }
        }
        ```

    === "Command Line"

        Performing data product searches from the command line can be done using `aurorax-cli` and an input JSON file with the search parameters specified in it.

        First step is to create your search JSON file.

        Filename: **data_product_search.json**
        ```json
        {
          "start": "2020-01-01T00:00:00",
          "end": "2020-01-01T23:59:59",
          "data_sources": {
            "programs": ["trex"],
            "platforms": ["fort smith"],
            "instrument_types": ["RGB ASI"]
          },
          "data_product_type_filters": []
        }
        ```

        Now, you can use the command line to run the search. The search results will be saved to a file that you can specify optionally.

        ```console
        $ aurorax-cli data_products search data_products_search.json
        ```

        And here is the example output from that command:

        ```
        [2022-02-10 19:53:19.181867] Reading in query file ...
        [2022-02-10 19:53:19.182120] Preparing search ...
        [2022-02-10 19:53:19.182315] Search object created
        [2022-02-10 19:53:19.278056] Request submitted
        [2022-02-10 19:53:19.278151] Request ID: ed62eed1-d3f8-46f9-8ebe-ff5be8505e5f
        [2022-02-10 19:53:19.278167] Request details available at: https://api.aurorax.space/api/v1/data_products/requests/ed62eed1-d3f8-46f9-8ebe-ff5be8505e5f
        [2022-02-10 19:53:20.371726] Checking for data ...
        [2022-02-10 19:53:20.500736] Data is now available
        [2022-02-10 19:53:20.507256] Downloading 66 results and 165.9 kB of data ...
        [2022-02-10 19:53:20.575526] Writing data to file ...
        [2022-02-10 19:53:20.577364] Data has been saved to 'ed62eed1-d3f8-46f9-8ebe-ff5be8505e5f_data.json'
        ```

        To view all available parameters for the search command, you can view the help:

        ```console
        $ aurorax-cli data_products search --help
        ```
