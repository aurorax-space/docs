# Advanced conjunction searches

AuroraX's search engine provides an interface for running powerful and highly customizable conjunction search requests. While the [basic usage](/code/basic_usage/conjunctions/) section covers the quickest way to get started with conjunction searches, there are additional options for more advanced uses. This section will provide examples for some common complex searches.

## Multi-conjunction searches

Conjunctions are events between at least two data sources. A conjunction event with more than two data sources are  called a **multi-conjunction**. For example, a conjunction between three data sources, is often referred to as a triple-conjunction event.

In AuroraX, the number of data sources involved in a conjunction is determined by the number of criteria blocks in the query.

!!! warning "Criteria block limits"

    Please note, AuroraX imposes a limit of **10** criteria blocks in a search query.

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

The `conjunctions` module's search functions use a default conjunction distance of 300 km, intended to facilitate fast access to data. Given that there are cases where a user may want to be more specific, however, the search functions also provide a way to explicitly set custom distances between criteria blocks. In the `conjunctions.search` and `conjunctions.search_async` functions, this option is provided by the `max_distances` argument. Combined with the `default_distance` argument, this provides a highly customizable search with full control over conjunction distances.

### Default distance

Under the hood, every conjunction search query sent to the API includes a parameter that indicates the maximum distance between each pair of criteria blocks. That parameter is a dictionary with the following form:
```python
{
    "ground1-space1": 300,
    "ground1-space2": 300,
    "ground1-space3": 300,
    "ground2-space1": 300,
    ...
    "space1-space2": 300,
    "space1-space3": 300,
    "space2-space3": 300
}
```

As shown above, an entry is included for every ground-space instrument combination and for every space-space criteria combination. This setting indicates that, in order for an event to be returned as a conjunction, the distance between every pair of instruments must satisfy the maximum distances specified for their respective criteria blocks.

*Note that ground-ground pairs aren't included because their distances are fixed.*

The `default_distance` argument, when provided, is used to override every entry in this dictionary. Below is an example of how this would work for a query with two space criteria blocks and one ground criteria block:
```python hl_lines="19 26"
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 1, 9, 23, 59, 59)
ground_params = [
    {
        "instrument_types": ["RGB ASI", "DSLR"]
    }
]
space_params = [
    {
        "programs": ["swarm"],
        "platforms": ["swarma", "swarmb"]
    },
    {
        "programs": ["themis"]
    }
]

# specify a maximum conjunction distance between instruments
distance = 1000

# execute synchronous search
s = pyaurorax.conjunctions.search(start=start,
                                end=end,
                                ground=ground_params,
                                space=space_params,
                                default_distance=distance)
```

Behind the scenes, the search function will take the ```default_distance``` argument and construct this dictionary to send to the API:
```python
{
    "ground1-space1": 1000,
    "ground1-space2": 1000,
    "space1-space2": 1000
}
```

### Custom maximum distances

The `max_distances` argument is a dictionary with an entry for each space-space or ground-space criteria block pair in the conjunction search for which the user wishes to specify a custom distance. For example, in a search with two space criteria blocks and one ground criteria block, the dictionary might be set by the user to look like this:
```python
{
    "ground1-space1": 400,
    "space1-space2": 805
}
```

This setting indicates that, in order for an event to be returned as a conjunction, there must be:

1. maximum 400 km between ground instruments in criteria block 1 and space instruments in criteria block 1, and
2. maximum 805 km between space instruments in criteria block 1 and space instruments in criteria block 2

The missing pair in this dictionary is `"ground1-space2"`. The search function will automatically fill in the entry for this pair using the default setting of 300 km, or using the `default_distance` argument if it is provided.

*A pair can also be assigned a value of `None` if the distance between those two data sources does not matter.*

### Combining default and maximum distance

To override all distances in the query while also setting specific cases, the `default_distance` and `maximum_distances` arguments can be used together.
```python hl_lines="22 25-28 35-36"
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 1, 9, 23, 59, 59)
ground_params = [
    {
        "instrument_types": ["RGB ASI", "DSLR"]
    },
    {
        "program": ["themis-asi"]
    }
]
space_params = [
    {
        "programs": ["swarm"],
        "platforms": ["swarma", "swarmb"]
    },
    {
        "programs": ["themis"]
    }
]

# specify a default maximum conjunction distance between criteria blocks
distance = 400

# override specific cases
max_distances = {
    "ground2-space2": None,
    "space1-space2": 700
}

# execute synchronous search
s = pyaurorax.conjunctions.search(start=start,
                                end=end,
                                ground=ground_params,
                                space=space_params,
                                default_distance=distance,
                                maximum_distances=max_distances)
```

In this example, the distances that get used in the query are:
```python
{
    "ground1-space1": 400,
    "ground1-space2": 400,
    "ground2-space1": 400,
    "ground2-space2": None,
    "space1-space2": 700
}
```
