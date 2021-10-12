# Advanced conjunction searches
The ```conjunctions``` module's search functions provide an interface for running powerful and highly customizable conjunction search queries. While the [basic usage](/python_libraries/pyaurorax/basic_usage/#conjunction-search) section covers the quickest way to get started in finding conjunctions, there are additional options for more advanced use of the functions in this module. This section will cover multi-conjunction searches and custom conjunction distances.

## Multi-conjunctions
Coming soon

## Epoch search precision
Coming soon

## Custom conjunction distances
The ```conjunctions``` module's search functions use a default conjunction distance of 300 km, intended to facilitate fast access to data. Given that there are cases where a user may want to be more specific, however, the search functions also provide a way to explicitly set custom distances between criteria blocks. In the ```conjunctions.search``` and ```conjunctions.search_async``` functions, this option is provided by the ```max_distances``` argument. Combined with the ```default_distance``` argument, this provides a highly customizable search with full control over conjunction distances.

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

The ```default_distance``` argument, when provided, is used to override every entry in this dictionary. Below is an example of how this would work for a query with two space criteria blocks and one ground criteria block:
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
s = aurorax.conjunctions.search(start=start,
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
The ```max_distances``` argument is a dictionary with an entry for each space-space or ground-space criteria block pair in the conjunction search for which the user wishes to specify a custom distance. For example, in a search with two space criteria blocks and one ground criteria block, the dictionary might be set by the user to look like this:
```python
{
    "ground1-space1": 400,
    "space1-space2": 805
}
```

This setting indicates that, in order for an event to be returned as a conjunction, there must be:

1. maximum 400 km between ground instruments in criteria block 1 and space instruments in criteria block 1, and
2. maximum 805 km between space instruments in criteria block 1 and space instruments in criteria block 2

The missing pair in this dictionary is ```"ground1-space2"```. The search function will automatically fill in the entry for this pair using the default setting of 300 km, or using the ```default_distance``` argument if it is provided.


### Combining default and maximum distance
To override all distances in the query while also setting specific cases, the ```default_distance``` and ```maximum_distances``` arguments can be used together.
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
    "ground2-space2": 200,
    "space1-space2": 700
}

# execute synchronous search
s = aurorax.conjunctions.search(start=start,
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
    "ground2-space2": 200,
    "space1-space2": 700
}
```
