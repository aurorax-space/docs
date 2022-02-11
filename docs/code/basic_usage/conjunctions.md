# Conjunction Search

AuroraX developer tools provide a way to quickly find conjunctions between data sources. Below, we'll have a look at how to perform a simple conjunction search request.

Also see:

* [Advanced conjunction searches](/code/advanced_usage/advanced_conjunctions/)
* [Asynchronous searches](/code/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/code/advanced_usage/searches_with_metadata_filters/)

## Performing a simple conjunction search

Below, we'll have a look at how to run "Example 1" on the Conjunction Search webpage: searching for conjunctions between a couple THEMIS ASIs and any Swarm satellite, across 3 days, with a max distance of 500km.

!!! example "Example - search for conjunctions between a single ground and space data source"

    === "Python"

        The [`conjunctions`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html){:target="_blank"} module provides a way to search for conjunctions between data sources. Specifically we'll be interested in using the `pyaurorax.conjunctions.search()` function.

        ```python
        # imports
        import pyaurorax
        import datetime

        # define search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 3, 23, 59, 59)
        ground_params = [
            {
                "programs": ["themis-asi"],
                "platforms": ["fort smith", "gillam"],
            }
        ]
        space_params = [
            {
                "programs": ["swarm"],
                "hemisphere": ["northern"],
            }
        ]
        distance = 500


        # run conjunction search request
        s = pyaurorax.conjunctions.search(start=start,
                                          end=end,
                                          distance=distance,
                                          ground=ground_params,
                                          space=space_params,
                                          verbose=True)

        # have a look at our results
        print(s.data)
        ```

        Example output from the search function (the output can be silenced if you don't set the `verbose` parameter):

        ```
        [2022-02-10 18:22:23.205686] Search object created
        [2022-02-10 18:22:23.295399] Request submitted
        [2022-02-10 18:22:23.295471] Request ID: c6d50305-5635-4b3e-9fe1-b517dfb1d7ba
        [2022-02-10 18:22:23.295482] Request details available at: https://api.aurorax.space/api/v1/conjunctions/requests/c6d50305-5635-4b3e-9fe1-b517dfb1d7ba
        [2022-02-10 18:22:23.295486] Waiting for data ...
        [2022-02-10 18:22:24.404386] Checking for data ...
        [2022-02-10 18:22:25.498323] Checking for data ...
        [2022-02-10 18:22:25.589729] Data is now available
        [2022-02-10 18:22:25.589881] Retrieving data ...
        [2022-02-10 18:22:25.696360] Retrieved 83.9 kB of data containing 11 records

        [
            Conjunction(start=datetime.datetime(2019, 1, 2, 9, 17), end=datetime.datetime(2019, 1, 2, 9, 17), min_distance=340.43, max_distance=340.43, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 3, 8, 37), end=datetime.datetime(2019, 1, 3, 8, 38), min_distance=237.91, max_distance=315.12, data_sources=[...], events=[...]), 
            Conjunction(start=datetime.datetime(2019, 1, 1, 5, 58), end=datetime.datetime(2019, 1, 1, 5, 59), min_distance=318.75, max_distance=415.14, data_sources=[...], events=[...]),
            ...
            ...
            ...
        ]
        ```

    === "Command Line"

        Performing conjunction searches from the command line can be done using `aurorax-cli` and an input JSON file with the search parameters specified in it.

        First step is to create your search JSON file.

        Note: You can use the [Conjunction Search webpage](https://aurorax.space/conjunctionSearch/standard){:target="_blank"} to generate this JSON if you want. Set up your search and then click on the "About Query" button, and copy the "JSON Format" content to your clipboard.

        Filename: **conjunction_search.json**
        ```json
        {
          "start": "2019-01-01T00:00:00",
          "end": "2019-01-03T23:59:59",
          "conjunction_types": ["nbtrace"],
          "ground": [
            {
              "programs": ["themis-asi"],
              "platforms": ["fort smith", "gillam"],
              "instrument_types": ["panchromatic ASI"],
              "ephemeris_metadata_filters": {}
            }
          ],
          "space": [
            {
              "programs": ["swarm"],
              "platforms": [],
              "instrument_types": ["footprint"],
              "ephemeris_metadata_filters": {},
              "hemisphere": ["northern"]
            }
          ],
          "events": [],
          "max_distances": {"ground1-space1": 500}
        }
        ```

        Now, you can use the command line to run the search. The search results will be saved to a file that you can specify optionally.

        ```console
        $ aurorax-cli conjunctions search conjunction_search.json
        ```

        And here is the example output from that command:

        ```
        [2022-02-10 18:41:53.282721] Reading in query file ...
        [2022-02-10 18:41:53.283756] Preparing search ...
        [2022-02-10 18:41:53.284067] Search object created
        [2022-02-10 18:41:53.399045] Request submitted
        [2022-02-10 18:41:53.399224] Request ID: 7c3d28d4-62b5-450c-b533-3d67c7553cf9
        [2022-02-10 18:41:53.399257] Request details available at: https://api.aurorax.space/api/v1/conjunctions/requests/7c3d28d4-62b5-450c-b533-3d67c7553cf9
        [2022-02-10 18:41:54.517145] Checking for data ...
        [2022-02-10 18:41:54.632752] Data is now available
        [2022-02-10 18:41:54.633190] Downloading 11 results and 87.4 kB of data ...
        [2022-02-10 18:41:54.745625] Writing data to file ...
        [2022-02-10 18:41:54.750772] Data has been saved to '7c3d28d4-62b5-450c-b533-3d67c7553cf9_data.json'
        ```

        To view all available parameters for the search command, you can view the help:

        ```console
        $ aurorax-cli conjunctions search --help
        ```
