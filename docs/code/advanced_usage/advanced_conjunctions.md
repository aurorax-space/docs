# Advanced conjunction searches

AuroraX's search engine provides an interface for running powerful and highly customizable conjunction search requests. While the [basic usage](/code/basic_usage/conjunctions/) section covers the quickest way to get started with conjunction searches, there are additional options for more advanced uses. This section will provide examples for some common complex searches.

## Multi-conjunction searches

Conjunctions are events between at least two data sources. A conjunction event with more than two data sources are  called a **multi-conjunction**. For example, a conjunction between three data sources, is often referred to as a triple-conjunction event.

In AuroraX, the number of data sources involved in a conjunction is determined by the number of criteria blocks in the query.

!!! warning "Criteria block limits"

    Please note, AuroraX imposes a limit of **10** criteria blocks in a search query.

Below, we'll have a look at an example of a quadruple-conjunction search, using two ground and two space criteria blocks (4 total criteria blocks).

!!! example "Example - search for quadruple-conjunctions"

    This example is a search to find quadruple-conjunctions (4 criteria blocks). 

    === "Python"

        In PyAuroraX, we use the "ground" and "space" parameters to define multiple criteria blocks in each.

        ```python
        # imports
        import pyaurorax
        import datetime

        # set query parameters
        start = datetime.datetime(2020, 1, 1, 0, 0, 0)
        end = datetime.datetime(2020, 1, 4, 23, 59, 59)
        ground_params = [
            {"programs": ["themis-asi"]},
            {"programs": ["trex"]},
        ]
        space_params = [
            {"programs": ["swarm"], "hemisphere": ["northern"]},
            {"programs": ["themis"], "hemisphere": ["northern"]}
        ]
        distance = 500

        # perform the search
        s = pyaurorax.conjunctions.search(start=start,
                                          end=end,
                                          distance=distance,
                                          ground=ground_params,
                                          space=space_params,
                                          verbose=True)

        # view the results
        print(s.data)
        ```

        Example output from this search would be:
        
        ```
        [2022-03-02 19:58:42.910237] Search object created
        [2022-03-02 19:58:43.109389] Request submitted
        [2022-03-02 19:58:43.109494] Request ID: 701eecb6-b8cd-44f4-83c5-32f8b80e5ca8
        [2022-03-02 19:58:43.109509] Request details available at: https://api.aurorax.space/api/v1/conjunctions/requests/701eecb6-b8cd-44f4-83c5-32f8b80e5ca8
        [2022-03-02 19:58:43.109515] Waiting for data ...
        [2022-03-02 19:58:44.201872] Checking for data ...
        [2022-03-02 19:58:45.275906] Checking for data ...
        [2022-03-02 19:58:45.349495] Data is now available
        [2022-03-02 19:58:45.353346] Retrieving data ...
        [2022-03-02 19:58:45.446223] Retrieved 93.6 kB of data containing 8 records

        [
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=257.71, data_sources=[...], events=[...]),
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=449.17, data_sources=[...], events=[...]),
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=257.71, data_sources=[...], events=[...]),
            ...
            ...
            ...
        ]
        ```

    === "IDL"

        In IDL-AuroraX, we use the "ground" and "space" parameters to define multiple criteria blocks in each.

        ```idl
        ; define timeframe and distance parameters
        distance = 500
        start_dt = '2020-01-01T00:00:00'
        end_dt = '2020-01-04T23:59:59'

        ; create ground criteria blocks
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'],/GROUND)
        ground2 = aurorax_create_criteria_block(programs=['trex'],/GROUND)
        ground = list(ground1, ground2)
        
        ; create space criteria blocks
        space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
        space2 = aurorax_create_criteria_block(programs=['themis'],hemisphere=['northern'],/SPACE)
        space = list(space1, space2)
        
        ; perform search
        data = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space)
        ```

        Example output from the search function (the output can be silenced using the `/QUIET` keyword):

        ```
        [Wed Mar 02 12:41:27 2022] Parsing start and end timestamps
        [Wed Mar 02 12:41:27 2022] Creating request struct
        [Wed Mar 02 12:41:27 2022] Sending search request ...
        [Wed Mar 02 12:41:27 2022] Search request accepted
        [Wed Mar 02 12:41:27 2022] Request ID: a4f57af1-5e7a-4748-ad1c-16d7d9a6656f
        [Wed Mar 02 12:41:27 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:28 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:29 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:30 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:31 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:32 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:33 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:34 2022] Waiting for search to finish ...
        [Wed Mar 02 12:41:35 2022] Data is now available
        [Wed Mar 02 12:41:35 2022] Downloading 94.63 KB of data ...
        [Wed Mar 02 12:41:35 2022] Data downloaded, search completed
        [Wed Mar 02 12:41:35 2022] Post-processing data into IDL struct
        [Wed Mar 02 12:41:35 2022] Search completed, found 8 conjunctions in 8.7 seconds
        ```

        Example output of a conjunction returned by the function:

        ```idl
        IDL> help,data[0]
        ** Structure <65836ab0>, 8 tags, length=88, data length=88, refs=2:
           START_DT        STRING    '2020-01-03T12:33:00'
           END_DT          STRING    '2020-01-03T12:34:00'
           MIN_DISTANCE    DOUBLE           257.47343
           MAX_DISTANCE    DOUBLE           257.71434
           CLOSEST_EPOCH   STRING    '2020-01-03T12:34:00'
           FARTHEST_EPOCH  STRING    '2020-01-03T12:33:00'
           DATA_SOURCES    OBJREF    <ObjHeapVar2530(LIST)>
           EVENTS          OBJREF    <ObjHeapVar2746(LIST)>
        IDL> data[0]
        {
            "START_DT": "2020-01-03T12:33:00",
            "END_DT": "2020-01-03T12:34:00",
            "MIN_DISTANCE": 257.47343405047997,
            "MAX_DISTANCE": 257.71433923582998,
            "CLOSEST_EPOCH": "2020-01-03T12:34:00",
            "FARTHEST_EPOCH": "2020-01-03T12:33:00",
            "DATA_SOURCES": <ObjHeapVar2530(LIST)>,
            "EVENTS": <ObjHeapVar2746(LIST)>
        }
        ```

## Advanced distances

Simple conjunction searches use a single integer input for the distance, however, you can also make more complex conjunction searches using "advanced distances". This alternative input for the `distance` parameter provides a way to explicitly set custom distances between criteria blocks.

The `distances` argument can be either a single integer, or a dictionary with a key and value for each criteria block pairing. 

!!! warning "Using none/nan values"

    Please note, an advanced distance pair can be assigned a null value. Setting a pair to null tells the search engine to disregard the distance between those two criteria blocks. For example, setting null for `space1-space2` would mean that the search engine should not care about the distance between those two space criteria blocks.

    Use the value `None` in Python, `!NULL` in IDL, or `null` in Javascript.

Below is an example of a conjunction search using the advanced distances functionality. This will be a search between one ground and two space criteria blocks, where the distance for `space1-space2` is null.

!!! example "Example - advanced distances"

    This example is a search using advanced distances.

    === "Python"

        First, we'll set up our search with a default distance. Then, we'll modify the distances to be more complex.

        ```python
        # imports
        import pyaurorax
        import datetime

        # set search parameters
        start = datetime.datetime(2019, 1, 1, 0, 0, 0)
        end = datetime.datetime(2019, 1, 9, 23, 59, 59)
        ground_params = [
            {
                "programs": ["themis-asi"]
            },
        ]
        space_params = [
            {
                "programs": ["swarm"],
            },
            {
                "programs": ["themis"]
            }
        ]
        distance = 500

        # create search object
        s = pyaurorax.conjunctions.Search(start=start,
                                          end=end,
                                          distance=distance,
                                          ground=ground_params,
                                          space=space_params)
        ```

        Now that we've created our search object, we can adjust the advanced distances to what we want.

        ```python
        # get the advanced distances pairings
        advanced_distances = s.get_advanced_distances_combos()
        print(advanced_distances)

        # make our changes
        advanced_distances["ground1-space1"] = 500
        advanced_distances["ground1-space2"] = 500
        advanced_distances["space1-space2"] = None
        print(advanced_distances)

        # update the search object with the new advanced distances
        s.distance = advanced_distances
        ```

        ```
        Output:
        {'ground1-space1': None, 'ground1-space2': None, 'space1-space2': None}
        {'ground1-space1': 500, 'ground1-space2': 500, 'space1-space2': None}
        ```

        Lastly, we perform the search:

        ```python
        # run the search
        s.execute()
        s.wait()
        s.get_data()
        print(len(s.data))
        ```

        ```
        Output:
        46
        ```
    
    === "IDL"

        First, we'll create an advanced distances hash object and adjust it. Then we'll perform our search.

        ```idl
        ; create our advanced distances object and adjust for our query
        advanced_distances = aurorax_create_advanced_distances_hash(500, ground=1, space=2)
        advanced_distances['space1-space2'] = !NULL

        ; define timeframe and distance parameters
        distance = 500
        start_dt = '2019-01-01T00:00:00'
        end_dt = '2019-01-09T23:59:59'
        
        ; create ground criteria block
        ground1 = aurorax_create_criteria_block(programs=['themis-asi'],/GROUND)
        ground = list(ground1)
        
        ; create space criteria block
        space1 = aurorax_create_criteria_block(programs=['swarm'],/SPACE)
        space2 = aurorax_create_criteria_block(programs=['themis'],/SPACE)
        space = list(space1, space2)
        
        ; perform search
        data = aurorax_conjunction_search(start_dt,end_dt,advanced_distances,ground=ground,space=space,/NBTRACE)
        ```

        Example output from this search is:

        ```
        [Wed Mar 02 14:07:40 2022] Parsing start and end timestamps
        [Wed Mar 02 14:07:40 2022] Creating request struct
        [Wed Mar 02 14:07:40 2022] Sending search request ...
        [Wed Mar 02 14:07:40 2022] Search request accepted
        [Wed Mar 02 14:07:40 2022] Request ID: 551bf56e-6127-4035-8a09-a51d9c1f72dc
        [Wed Mar 02 14:07:40 2022] Waiting for search to finish ...
        [Wed Mar 02 14:07:41 2022] Waiting for search to finish ...
        [Wed Mar 02 14:07:42 2022] Waiting for search to finish ...
        [Wed Mar 02 14:07:43 2022] Waiting for search to finish ...
        [Wed Mar 02 14:07:44 2022] Waiting for search to finish ...
        [Wed Mar 02 14:07:45 2022] Data is now available
        [Wed Mar 02 14:07:45 2022] Downloading 470.61 KB of data ...
        [Wed Mar 02 14:07:46 2022] Data downloaded, search completed
        [Wed Mar 02 14:07:46 2022] Post-processing data into IDL struct
        [Wed Mar 02 14:07:46 2022] Search completed, found 46 conjunctions in 5.8 seconds
        ```