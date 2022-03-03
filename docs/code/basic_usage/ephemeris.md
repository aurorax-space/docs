# Ephemeris

AuroraX developer tools provide a way to retrieve ephemeris records from the AuroraX database. Below, we'll have a look at how to perform a ephemeris search request, which is much like conjunction and data product searching.

* [About ephemeris data](/about_the_data/categories/#ephemeris)
* [Asynchronous searches](/code/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/code/advanced_usage/searches_with_metadata_filters/)

## Perform a simple ephemeris search

Let's say we want to retrieve all the ephemeris data for the THEMIS ASI in Gillam, for a single hour (UT06). We'll have a look at how to do this example below.

!!! example "Example - perform a simple ephemeris search"

    === "Python"

        The [`ephemeris`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html){:target="_blank"} module provides a way to retrieve data product data from AuroraX. Specifically we'll be interested in using the [`pyaurorax.data_products.search()`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.search){:target="_blank"} function.

        ```python
        # imports
        import pyaurorax
        import datetime

        # define search params
        start = datetime.datetime(2019, 1, 1, 6, 0, 0)
        end = datetime.datetime(2019, 1, 1, 6, 59, 59)
        programs = ["themis-asi"]
        platforms = ["gillam"]
        instrument_types = ["panchromatic ASI"]

        # perform the ephemeris search
        s = pyaurorax.ephemeris.search(start,
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
        [2022-02-10 18:58:17.199294] Search object created
        [2022-02-10 18:58:17.255970] Request submitted
        [2022-02-10 18:58:17.256096] Request ID: 86d06815-47da-4098-b04f-b021d9ae21bf
        [2022-02-10 18:58:17.256117] Request details available at: https://api.aurorax.space/api/v1/ephemeris/requests/86d06815-47da-4098-b04f-b021d9ae21bf
        [2022-02-10 18:58:17.256123] Waiting for data ...
        [2022-02-10 18:58:18.342237] Checking for data ...
        [2022-02-10 18:58:18.624596] Data is now available
        [2022-02-10 18:58:18.624683] Retrieving data ...
        [2022-02-10 18:58:18.705637] Retrieved 203.5 kB of data containing 60 records

        [
            Ephemeris(data_source=DataSource(identifier=46, program='themis-asi', platform='gillam', instrument_type='panchromatic ASI', source_type='ground', display_name='THEMIS-ASI GILL'),
                      epoch=datetime.datetime(2019, 1, 1, 6, 0), 
                      location_geo=Location(lat=56.376723, lon=-94.643664), 
                      location_gsm=Location(lat=None, lon=None), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      metadata={'clausen_ml_oath': ...}),
            Ephemeris(data_source=DataSource(identifier=46, program='themis-asi', platform='gillam', instrument_type='panchromatic ASI', source_type='ground', display_name='THEMIS-ASI GILL'),
                      epoch=datetime.datetime(2019, 1, 1, 6, 1), 
                      location_geo=Location(lat=56.376723, lon=-94.643664), 
                      location_gsm=Location(lat=None, lon=None), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      metadata={'clausen_ml_oath': ...}),
            Ephemeris(data_source=DataSource(identifier=46, program='themis-asi', platform='gillam', instrument_type='panchromatic ASI', source_type='ground', display_name='THEMIS-ASI GILL'),
                      epoch=datetime.datetime(2019, 1, 1, 6, 2), 
                      location_geo=Location(lat=56.376723, lon=-94.643664), 
                      location_gsm=Location(lat=None, lon=None), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      nbtrace=Location(lat=56.376723, lon=-94.643664), 
                      metadata={'clausen_ml_oath': ...}),
            ...
            ...
            ...
        ]
        ```

    === "IDL"

        IDL-AuroraX provides the [`aurorax_ephemeris_search()`](/code/idlaurorax_api_reference/ephemeris/search/){:target="_blank"} function to perform an ephemeris search.

        ```idl
        IDL> data = aurorax_ephemeris_search('2019-01-01T06:00','2019-01-01T06:59',programs=['themis-asi'],platforms=['gillam'],instrument_types=['panchromatic ASI'])
        ```

        Example output from the search function (the output can be silenced using the `/QUIET` keyword):

        ```
        [Tue Mar 01 18:58:56 2022] Parsing start and end timestamps
        [Tue Mar 01 18:58:56 2022] Creating request struct
        [Tue Mar 01 18:58:56 2022] Sending search request ...
        [Tue Mar 01 18:58:56 2022] Search request accepted
        [Tue Mar 01 18:58:56 2022] Request ID: 815f36e9-80d5-4965-a4d1-1dba3810a337
        [Tue Mar 01 18:58:57 2022] Waiting for search to finish ...
        [Tue Mar 01 18:58:58 2022] Data is now available
        [Tue Mar 01 18:58:58 2022] Downloading 198.77 KB of data ...
        [Tue Mar 01 18:58:58 2022] Data downloaded, search completed
        [Tue Mar 01 18:58:58 2022] Search completed, found 60 records in 2.7 seconds
        ```

        Example output of an ephemeris record returned by the function:

        ```idl
        IDL> help,data[0]
        ** Structure <69a38590>, 7 tags, length=248, data length=248, refs=2:
           DATA_SOURCE     STRUCT    -> <Anonymous> Array[1]
           EPOCH           STRING    '2019-01-01T06:00:00'
           LOCATION_GEO    STRUCT    -> <Anonymous> Array[1]
           LOCATION_GSM    STRUCT    -> <Anonymous> Array[1]
           NBTRACE         STRUCT    -> <Anonymous> Array[1]
           SBTRACE         STRUCT    -> <Anonymous> Array[1]
           METADATA        STRUCT    -> <Anonymous> Array[1]

        IDL> data[0]
        {
            "DATA_SOURCE": {
                "IDENTIFIER": 46,
                "PROGRAM": "themis-asi",
                "PLATFORM": "gillam",
                "INSTRUMENT_TYPE": "panchromatic ASI",
                "SOURCE_TYPE": "ground",
                "DISPLAY_NAME": "THEMIS-ASI GILL"
            },
            "EPOCH": "2019-01-01T06:00:00",
            "LOCATION_GEO": {
                "LAT": 56.376722999999998,
                "LON": -94.643664000000001
            },
            "LOCATION_GSM": {
                "LAT": "!NULL",
                "LON": "!NULL"
            },
            "NBTRACE": {
                "LAT": 56.376722999999998,
                "LON": -94.643664000000001
            },
            "SBTRACE": {
                "LAT": -72.794974970070754,
                "LON": -134.97438185364899
            },
            "METADATA": {
                "CLAUSEN_ML_OATH": "classified as discrete",
                "CALGARY_APA_ML_V1": "classified as not APA",
                "CALGARY_CLOUD_ML_V1": "classified as not cloudy",
                "CALGARY_APA_ML_V1_CONFIDENCE": 100.00000000000000,
                "CALGARY_CLOUD_ML_V1_CONFIDENCE": 99.980000000000004
            }
        }
        ```

    === "Command Line"

        Performing ephemeris searches from the command line can be done using `aurorax-cli` and an input JSON file with the search parameters specified in it.

        First step is to create your search JSON file.

        Filename: **ephemeris_search.json**
        ```json
        {
          "start": "2019-01-01T06:00:00",
          "end": "2019-01-01T06:59:59",
          "data_sources": {
            "programs": ["themis-asi"],
            "platforms": ["gillam"],
            "instrument_types": ["panchromatic ASI"]
          }
        }
        ```

        Now, you can use the command line to run the search. The search results will be saved to a file that you can specify optionally.

        ```console
        $ aurorax-cli ephemeris search ephemeris_search.json
        ```

        And here is the example output from that command:

        ```
        [2022-02-10 19:09:02.252895] Reading in query file ...
        [2022-02-10 19:09:02.253117] Preparing search ...
        [2022-02-10 19:09:02.253493] Search object created
        [2022-02-10 19:09:02.319513] Request submitted
        [2022-02-10 19:09:02.319598] Request ID: c37fd159-36c3-47bd-a9e1-6b4ea7ec2138
        [2022-02-10 19:09:02.319611] Request details available at: https://api.aurorax.space/api/v1/ephemeris/requests/c37fd159-36c3-47bd-a9e1-6b4ea7ec2138
        [2022-02-10 19:09:03.395136] Checking for data ...
        [2022-02-10 19:09:03.493674] Data is now available
        [2022-02-10 19:09:03.511975] Downloading 60 results and 203.5 kB of data ...
        [2022-02-10 19:09:03.617620] Writing data to file ...
        [2022-02-10 19:09:03.620776] Data has been saved to 'c37fd159-36c3-47bd-a9e1-6b4ea7ec2138_data.json'
        ```

        To view all available parameters for the search command, you can view the help:

        ```console
        $ aurorax-cli ephemeris search --help
        ```
