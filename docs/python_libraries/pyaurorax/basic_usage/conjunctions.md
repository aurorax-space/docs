# Conjunction Search
The [`conjunctions`](/python_libraries/pyaurorax/api_reference/pyaurorax/conjunctions.html) module provides a way to quickly find conjunctions between instruments. Synchronous and [asynchronous search](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/) functions are available in the conjunctions module.

Also see:

* [Advanced conjunction searches](/python_libraries/pyaurorax/advanced_usage/advanced_conjunctions/)
* [Asynchronous searches](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/)

## Criteria blocks
Conjunction searches are performed between data sources that fall into what we call **criteria blocks**. A criteria block is simply a dictionary that specifies data source parameters. It is used to filter down the set of data sources we want to consider in our conjunction search. Filtering criteria are lists of program names, platform names, instrument types, and [ephemeris metadata filters](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/). **Every conjunction found will be comprised of one data source per criteria block.**

```python
criteria = [
    {
        "programs": [
            "string"
        ],
        "platforms": [
            "string"
        ],
        "instrument_types": [
            "string"
        ],
        "ephemeris_metadata_filters": [
            {
                "key": "string",
                "operator": "=",
                "values": [
                    "string"
                ]
            }
        ]
    }
]
```

Criteria blocks can be as broad or as specific as needed to filter data sources:
```python
# criteria block for all Swarm data sources
c1 = {
    "programs": ["swarm"]
}

# criteria block for all "trex" program instruments on 
# platforms "gillam" and "pinawa"
c2 = {
    "programs": ["trex"],
    "platforms": ["gillam", "pinawa"]
}

# criteria block for all instruments on platforms 
# "yellowknife", "fort smith", and "kuujjuaq"
c3 = {
    "platforms": ["yellowknife", "fort smith", "kuujjuaq"]
}
```

*Learn how to filter by ephemeris metadata [here](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/).*

In a basic conjunction search there must be two lists of criteria blocks provided: one for the ground-based data sources we are interested in, and one for the space-based data sources we are interested in.

*(Conjunction searches between just space instruments are also possible. They are described further down this page.)*

```python hl_lines="5-14"
# search for conjunctions between THEMIS-ASI intruments and 
# Swarm A or Swarm C instruments
start = datetime.datetime(2020, 1, 1, 0, 0, 0)
end = datetime.datetime(2020, 1, 1, 6, 59, 59)
ground_params = [
    {
        "programs": ["themis-asi"]
    }
]
space_params = [
    {
        "platforms": ["swarma", "swarmc"]
    }
]

# synchronous search returns a completed Search object with data
s1 = pyaurorax.conjunctions.search(start=start,
                                 end=end,
                                 ground=ground_params,
                                 space=space_params)

```

The example above is specifying that we want conjunctions between (a data source in the "themis-asi" program) and ([a data source on the "swarma" platform] OR [a data source on the "swarmc" platform]).

Learn about multi-conjunctions in the advanced section [here](/python_libraries/pyaurorax/advanced_usage/advanced_conjunctions/).

## Search
```python
# define search parameters
# search for conjunctions between THEMIS-ASI intruments and Swarm instruments
start = datetime.datetime(2020, 1, 1, 0, 0, 0)
end = datetime.datetime(2020, 1, 1, 6, 59, 59)
ground_params = [
    {
        "programs": ["themis-asi"]
    }
]
space_params = [
    {
        "programs": ["swarm"]
    }
]

# synchronous search returns a completed Search object with data
s1 = pyaurorax.conjunctions.search(start=start,
                                 end=end,
                                 ground=ground_params,
                                 space=space_params)

# any result data returned is in the data attribute
data = s1.data

# get start and end time for the first conjunction result
conjunction_start = data[0].start
conjunction_end = data[0].end

# get data sources for the first conjunction result
conjunction_data_sources = data[0].data_sources

# get minimum and maximum distances for the first conjunction result
conjunction_min_distance = data[0].min_distance
conjunction_max_distance = data[0].max_distance
```


## Search between space instruments
To search for conjunctions between space instruments, leave ```ground_params``` as an empty list and add blocks to ```space_params``` as needed.

```python
# define search parameters for southern hemisphere conjunctions
# between any (Swarm A or Swarm B) instrument and any THEMIS instrument
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 1, 1, 23, 59, 59)
ground_params = []
space_params = [
    {
        "programs": ["swarm"],
        "platforms": ["swarma", "swarmb"],
        "hemisphere": ["southern"]
    },
    {
        "programs": ["themis"],
    }
]

# execute synchronous search
s = pyaurorax.conjunctions.search(start=start,
                                end=end,
                                ground=ground_params,
                                space=space_params)

# any result data returned is in the data attribute
data = s1.data
```