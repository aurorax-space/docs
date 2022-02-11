# Ephemeris

AuroraX developer tools provide a way to retrieve ephemeris records from the AuroraX database. Below, we'll have a look at how to perform a ephemeris search request, which is much like conjunction and data product searching.

* [About ephemeris data](/about_the_data/categories/#ephemeris)
* [Asynchronous searches](/code/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/code/advanced_usage/searches_with_metadata_filters/)

## Perform a simple ephemeris search

Let's say we want to retrieve all the ephemeris data for the THEMIS ASI in Gillam, for a single hour (UT06). We'll have a look at how to do this example below.

!!! example "Example - perform a simple ephemeris search"

    === "Python"

        The [`ephemeris`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html){:target="_blank"} module provides a way to retrieve data product data from AuroraX. Specifically we'll be interested in using the `pyaurorax.data_products.search()` function.

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
