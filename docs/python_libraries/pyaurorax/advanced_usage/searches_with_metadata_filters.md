# Searches with metadata filters

All AuroraX records contain a flexible metadata field that can contain additional information about the record. Search functions in the [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html#aurorax.data_products.search), [`ephemeris`](/python_libraries/pyaurorax/api_reference/aurorax/ephemeris.html#aurorax.ephemeris.search), and [`conjunctions`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.search) modules include the option of refining a search by specifying additional metadata filters.

Also see:

* [Information about the ephemeris metadata field](/about_the_data/categories/#metadata)
* [Information about the data products metadata field](/about_the_data/categories/#metadata_1)

## Overview
Metadata filters are added as a list to a search function or as part of a [criteria block](/python_libraries/pyaurorax/basic_usage/conjunctions/#criteria-blocks). Every filter takes the same form:

```python
{
    "key": "string",
    "operator": "=",
    "values": [
        ...
    ]
}
```

where:

* `key` is the key of the metadata value in the record.
* `operator` can be one of =, >, <, <=, >=, !=, "in", "not in", and "between".
* `values` is a list of values to filter for. 
    * The list can contain at most one entry if the operator is an =, >, <, <=, >=, !=.
    * For the operator "in" and "not in", the list can contain a number of values.
    * For the operator "between", the list can contain exactly two values.


## Ephemeris search with metadata filters
In this first example we will consider an ephemeris search with metadata filters on three keys: "nbtrace_region", "spacecraft_region", and "radial_distance".

```python hl_lines="6-28 35"
start = datetime.datetime(2019, 2, 1, 0, 0, 0)
end = datetime.datetime(2019, 2, 2, 23, 59, 59)
programs = ["swarm"]
platforms = ["swarma"]
instrument_types = ["footprint"]
metadata_filters = [
    {
        "key": "nbtrace_region",
        "operator": "in",
        "values": [
            "north auroral oval", "north cleft", "north cusp"
        ]
    },
    {
        "key": "spacecraft_region",
        "operator": "!=",
        "values": [
            "dayside magnetosphere"
        ]
    },
    {
        "key": "radial_distance",
        "operator": "between",
        "values": [
            6810, 6825
        ]
    }
]

s = aurorax.ephemeris.search(start=start, 
                             end=end,
                             programs=programs,
                             platforms=platforms,
                             instrument_types=instrument_types,
                             metadata_filters=metadata_filters)

data = s.data
```

In this example, the search will return ephemeris records that have the following metadata fields:

* the "nbtrace_region" value will be one of "north auroral oval", "north cleft", or "north cusp"; and
* the "spacecraft_region" value will not be "dayside magnetosphere"; and
* the "radial_distance" value will be a number between 6810 and 6825.

## Data product search with metadata filters
Metadata filters are used in exactly the same way for data product searches. Consider the following example where we search for hourly keograms using a filter on the "keogram_type" metadata field:

```python hl_lines="6-14 21"
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 1, 1, 23, 59, 59)
programs = ["auroramax"]
platforms = ["yellowknife"]
instrument_types = ["DSLR"]
metadata_filters = [
    {
        "key": "keogram_type",
        "operator": "=",
        "values": [
            "hourly"
        ]
    }
]

s = aurorax.data_products.search(start=start, 
                                 end=end,
                                 programs=programs,
                                 platforms=platforms,
                                 instrument_types=instrument_types,
                                 metadata_filters=metadata_filters)

data = s.data
```

## Conjunction searches with metadata filters
To include a metadata filter in a conjunction search, place it within the  [criteria block](/python_libraries/pyaurorax/basic_usage/conjunctions/#criteria-blocks) it applies to.

In the following example, we are searching for conjunctions between ground instruments in the "themis-asi" program and space instruments in the "swarm" program. We narrow the search using filters on the "ml_cloud_v1" and "nbtrace_region" metadata fields on the ground and space criteria blocks, respectively. Any conjunctions found will conform to these additional criteria.


```python hl_lines="5-13 17-25"
start = datetime.datetime(2019, 3, 1, 0, 0, 0)
end = datetime.datetime(2019, 3, 31, 23, 59, 59)
ground_params = [{
    "programs": ["themis-asi"],
    "ephemeris_metadata_filters": [
        {
            "key": "ml_cloud_v1",
            "operator": "=",
            "values": [
                "not classified as cloud"
            ]
        }
    ]
}]
space_params = [{
    "programs": ["swarm"],
    "ephemeris_metadata_filters": [
        {
            "key": "nbtrace_region",
            "operator": "=",
            "values": [
                "north polar cap"
            ]
        }
    ]
}]

s = aurorax.conjunctions.search(start=start,
                                end=end,
                                ground=ground_params,
                                space=space_params)

data = s.data
```