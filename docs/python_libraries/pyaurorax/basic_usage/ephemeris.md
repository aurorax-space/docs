# Ephemeris

The [`ephemeris`](/python_libraries/pyaurorax/api_reference/aurorax/ephemeris.html) module provides functions for searching, adding, updating, and deleting ephemeris records. 

* See [this description](/about_the_data/categories/#ephemeris) of the ephemeris category.
* [Searches with metadata filters](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/)


## Search
The following example will execute a search for ephemeris records on January 1, 2019 for the program "swarm", platform "swarma", and instrument type "footprint".
```python
# define search params
start_dt = datetime.datetime(2019, 1, 1, 0, 0, 0)
end_dt = datetime.datetime(2019, 1, 1, 23, 59, 59)
programs = ["swarm"]
platforms = ["swarma"]
instrument_types = ["footprint"]

# synchronous search returns a completed Search object with data
s1 = aurorax.ephemeris.search(start_dt,
                              end_dt,
                              programs=programs,
                              platforms=platforms,
                              instrument_types=instrument_types)

# any result data returned is in the data attribute
data = s1.data
```
