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
        [2022-02-10 21:51:35.940036] Search object created
        [2022-02-10 21:51:36.048155] Request submitted
        [2022-02-10 21:51:36.048229] Request ID: af59c66f-ff36-4f35-a9a0-973a8026b8e2
        [2022-02-10 21:51:36.048258] Request details available at: https://api.aurorax.space/api/v1/conjunctions/requests/af59c66f-ff36-4f35-a9a0-973a8026b8e2
        [2022-02-10 21:51:36.048264] Waiting for data ...
        [2022-02-10 21:51:38.442945] Checking for data ...
        [2022-02-10 21:51:39.743267] Checking for data ...
        [2022-02-10 21:51:40.845350] Checking for data ...
        [2022-02-10 21:51:41.945969] Checking for data ...
        [2022-02-10 21:51:43.311126] Checking for data ...
        [2022-02-10 21:51:43.386510] Data is now available
        [2022-02-10 21:51:43.386600] Retrieving data ...
        [2022-02-10 21:51:43.508624] Retrieved 140.5 kB of data containing 12 records

        [
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=257.71, data_sources=[...], events=[...]),
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=449.17, data_sources=[...], events=[...]),
            Conjunction(start=datetime.datetime(2020, 1, 3, 12, 33), end=datetime.datetime(2020, 1, 3, 12, 34), min_distance=257.47, max_distance=449.17, data_sources=[...], events=[...]),
            ...
            ...
            ...
        ]
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
