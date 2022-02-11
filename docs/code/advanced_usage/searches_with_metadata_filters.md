# Searches with metadata filters

All AuroraX records contain a flexible metadata field that can contain additional information about the record. Search functions in the [`data_products`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.search){:target="_blank"}, [`ephemeris`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.search){:target="_blank"}, and [`conjunctions`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.search){:target="_blank"} modules include the option of refining a search by specifying additional metadata filters.

Also see:

* [Information about the ephemeris metadata field](/about_the_data/categories/#metadata)
* [Information about the data products metadata field](/about_the_data/categories/#metadata_1)

## Overview

Metadata filters are added as part of a criteria block in your search. Every filter takes the same form:

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

## Conjunction searches with metadata filters

To include a metadata filter in a conjunction search, place it within the criteria block it applies to.

In the following example, we are searching for conjunctions between ground instruments in the "themis-asi" program and space instruments in the "swarm" program. We narrow the search using filters on the "ml_cloud_v1" and "nbtrace_region" metadata fields on the ground and space criteria blocks, respectively. Any conjunctions found will conform to these additional criteria.

```python hl_lines="5-13 17-25"
# imports
import pyaurorax
import datetime

# set up search parameters
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 1, 31, 23, 59, 59)
ground_params = [{
    "programs": ["themis-asi"],
    "instrument_types": ["panchromatic ASI"],
    "ephemeris_metadata_filters": {
        "logical_operator": "AND",
        "expressions": [
            {
                "key": "calgary_cloud_ml_v1",
                "operator": "in",
                "values": [
                    "classified as not cloudy"
                ]
            }
        ]
    }
}]
space_params = [{
    "programs": ["themis"],
    "instrument_types": ["footprint"],
    "hemisphere": ["northern"],
    "ephemeris_metadata_filters": {
        "logical_operator": "AND",
        "expressions": [
            {
                "key": "nbtrace_region",
                "operator": "in",
                "values": [
                    "north polar cap"
                ]
            }
        ]
    }
}]
distance = 500

# perform the search
s = pyaurorax.conjunctions.search(start=start,
                                  end=end,
                                  distance=distance,
                                  ground=ground_params,
                                  space=space_params,
                                  verbose=True)

# output data
print(s.data)
```