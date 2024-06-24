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

        The [`conjunctions`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html){:target="_blank"} module provides a way to search for conjunctions between data sources. Specifically we'll be interested in using the [`pyaurorax.conjunctions.search()`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.search){:target="_blank"} function.

        ```python
        # imports
        import datetime
        import pyaurorax
        aurorax = pyaurorax.PyAuroraX()

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
        s = aurorax.search.conjunctions.search(start=start,
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

    === "IDL"

        IDL-AuroraX provides the [`aurorax_conjunction_search()`](/code/idlaurorax_api_reference/search/conjunctions/search/){:target="_blank"} function to perform a conjunction search. Further, there are a couple helper functions to create the necessary objects as parameters to the search function.

        ```idl
        ; define timeframe and distance parameters
        distance = 500
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-03T23:59:59'
        
        ; create ground criteria block
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND)
        ground = list(ground1)
        
        ; create space criteria block
        space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
        space = list(space1)
        
        ; perform search
        response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/NBTRACE)
        ```

        Example output from the search function (the output can be silenced using the `/QUIET` keyword):

        ```
        [Tue Mar 08 19:42:42 2022] Parsing start and end timestamps
        [Tue Mar 08 19:42:42 2022] Creating request struct
        [Tue Mar 08 19:42:42 2022] Sending search request ...
        [Tue Mar 08 19:42:42 2022] Search request accepted
        [Tue Mar 08 19:42:42 2022] Request ID: 4b0b6845-7b54-4a47-ab70-96d338f47167
        [Tue Mar 08 19:42:42 2022] Waiting for search to finish ...
        [Tue Mar 08 19:42:43 2022] Waiting for search to finish ...
        [Tue Mar 08 19:42:44 2022] Waiting for search to finish ...
        [Tue Mar 08 19:42:45 2022] Data is now available
        [Tue Mar 08 19:42:45 2022] Downloading 85.39 KB of data ...
        [Tue Mar 08 19:42:45 2022] Data downloaded, search completed
        [Tue Mar 08 19:42:45 2022] Post-processing data into IDL struct
        [Tue Mar 08 19:42:45 2022] Search completed, found 11 conjunctions in 3.6 seconds
        ```

        Example output of a conjunction returned by the function:

        ```idl
        IDL> help,response
        ** Structure <3cb2f360>, 3 tags, length=40, data length=36, refs=1:
           REQUEST_TYPE    STRING    'conjunctions'
           REQUEST_ID      STRING    '4b0b6845-7b54-4a47-ab70-96d338f47167'
           DATA            OBJREF    <ObjHeapVar2121(LIST)>
        IDL> help,response.data[0]
        ** Structure <65839f30>, 8 tags, length=88, data length=88, refs=2:
           START_DT        STRING    '2019-01-03T08:37:00'
           END_DT          STRING    '2019-01-03T08:38:00'
           MIN_DISTANCE    DOUBLE           237.91423
           MAX_DISTANCE    DOUBLE           315.11637
           CLOSEST_EPOCH   STRING    '2019-01-03T08:37:00'
           FARTHEST_EPOCH  STRING    '2019-01-03T08:38:00'
           DATA_SOURCES    OBJREF    <ObjHeapVar3252(LIST)>
           EVENTS          OBJREF    <ObjHeapVar3362(LIST)>
        IDL> response.data[0]
        {
            "START_DT": "2019-01-03T08:37:00",
            "END_DT": "2019-01-03T08:38:00",
            "MIN_DISTANCE": 237.91422828781000,
            "MAX_DISTANCE": 315.11636987259999,
            "CLOSEST_EPOCH": "2019-01-03T08:37:00",
            "FARTHEST_EPOCH": "2019-01-03T08:38:00",
            "DATA_SOURCES": <ObjHeapVar3252(LIST)>,
            "EVENTS": <ObjHeapVar3362(LIST)>
        }
        ```

        Lastly, you can visualize this conjunction search in the Swarm-Aurora Conjunction Browser using a handy procedure called [`aurorax_open_conjunctions_in_swarmaurora`](/code/idlaurorax_api_reference/search/conjunctions/open_in_swarmaurora/){:target="_blank"}:

        ```idl
        IDL> aurorax_open_conjunctions_in_swarmaurora,response.request_id
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
