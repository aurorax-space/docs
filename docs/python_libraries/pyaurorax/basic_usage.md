# PyAuroraX Basic Usage

This page outlines the most commonly used functionality of PyAuroraX. The following sections describe data sources, ephemeris and data product records, and conjunction search.

## Data Sources
Each record in AuroraX is associated with a unique data source that produced it. Each data source is uniquely identified by an integer identifier, or by the combination of its program name, platform name, and instrument type. PyAuroraX uses the ```DataSource``` type for data sources.

### Get all data sources
```python
sources = aurorax.sources.list(order="program", format="full_record")
```

```order``` and ```format``` arguments are both optional and default to "identifier" and "basic_info", respectively.

### Get data sources using filters
```python
sources = aurorax.sources.get_using_filters(program="trex",
                                            instrument_type="RGB ASI")
```

Available filter parameters are ```program```, ```platform```, ```instrument_type```, ```source_type```, and ```owner```.

### Determine the identifier of a data source
Each data source in AuroraX has a unique integer identifier. The identifier is returned as part of the response of every data source request.
```python hl_lines="6"
sources = aurorax.sources.get_using_filters(program="swarm",
                                            platform="swarma",
                                            instrument_type="footprint")

# get the identifier of the first data source returned
identifier = sources[0].identifier
```

### Get a data source using its identifier
If you already know the identifier of a data source, you can retrieve it directly:
```python
source = aurorax.sources.get_using_identifier(3)
```

### Get data source information with different levels of detail
Both the ```get_using_identifier()``` and ```get_using_filters()``` functions allow the ```format``` parameter. The available format options are: identifier_only, basic_info, full_record.

```python
# less information
source1 = aurorax.sources.get_using_filters(program="swarm",
                                            platform="swarma", 
                                            instrument_type="footprint",
                                            format="identifier_only")

# default information
source2 = aurorax.sources.get_using_identifier(3, format="basic_info")

# more information
source3 = aurorax.sources.get_using_identifier(3, format="full_record")
```

## Ephemeris
* See [this description](/about_the_data/categories/#ephemeris) of the ephemeris category.


### Ephemeris Search
Synchronous and asynchronous search functions are available in the ephemeris module.

### Synchronous search
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

### Asynchronous search
Under the hood an ephemeris search is asynchronous. This adds some more complexity for the user, but also opens the search up to some additional possibilities. The main advantage is being able to perform queries for a large timeframe. These queries will take a bit longer and could exceed several minutes and return more than a gigabyte of data. Separating the request and the resulting data into two different API calls allows flexibility in duration and size of the overall request.

```python
# define search params
start_dt = datetime.datetime(2019, 1, 1, 0, 0, 0)
end_dt = datetime.datetime(2019, 1, 1, 23, 59, 59)
programs = ["swarm"]
platforms = ["swarma"]
instrument_types = ["footprint"]

# asynchronous search will return an initiated Search object without data
s2 = aurorax.ephemeris.search_async(start_dt,
                                    end_dt,
                                    programs=programs,
                                    platforms=platforms,
                                    instrument_types=instrument_types)

# update the status by checking for data
# this updates s2.status and s2.logs
s2.check_for_data()

# retrieve data from the server after the search is complete
s2.get_data()

# any result data returned is in the data attribute
data = s2.data
```

It's also possible to mimic the behaviour of a synchronous search by blocking and waiting for data after executing the search:
```python hl_lines="16"
# define search params
start_dt = datetime.datetime(2019, 1, 1, 0, 0, 0)
end_dt = datetime.datetime(2019, 1, 1, 23, 59, 59)
programs = ["swarm"]
platforms = ["swarma"]
instrument_types = ["footprint"]

# asynchronous search will return an initiated Search object without data
s3 = aurorax.ephemeris.search_async(start_dt,
                                    end_dt,
                                    programs=programs,
                                    platforms=platforms,
                                    instrument_types=instrument_types)

# mimic a synchronous search by blocking and waiting until data is ready
s3.wait()

# retrieve data from the server
s3.get_data()

# any result data returned is in the data attribute
data = s3.data
```

## Data Products
* See [this description](/about_the_data/categories/#data-products) of the data product category.

Synchronous and asynchronous search functions are available in the data_products module.

### Synchronous search
```python
# define search params
start_dt = datetime.datetime(2020, 2, 1, 0, 0, 0)
end_dt = datetime.datetime(2020, 2, 5, 23, 59, 59)
programs = ["trex"]
instrument_types = ["RGB ASI"]

# synchronous search returns a completed Search object with data
s1 = aurorax.data_products.search(start_dt,
                                  end_dt,
                                  programs=programs,
                                  instrument_types=instrument_types)

# any result data returned is in the data attribute
data = s1.data
```

### Asynchronous search
Under the hood a data products search is asynchronous. This adds some more complexity for the user, but also opens the search up to some additional possibilities. The main advantage is being able to perform queries for a large timeframe. These queries will take a bit longer and could exceed several minutes and return more than a gigabyte of data. Separating the request and the resulting data into two different API calls allows flexibility in duration and size of the overall request.

```python
# define search params
start_dt = datetime.datetime(2020, 2, 1, 0, 0, 0)
end_dt = datetime.datetime(2020, 2, 5, 23, 59, 59)
programs = ["trex"]
instrument_types = ["RGB ASI"]

# asynchronous search will return an initiated Search object without data
s2 = aurorax.data_products.search_async(start_dt,
                                    end_dt,
                                    programs=programs,
                                    instrument_types=instrument_types)

# update the status by checking for data
# this updates s2.status and s2.logs
s2.check_for_data()

# retrieve data from the server after the search is complete
s2.get_data()

# any result data returned is in the data attribute
data = s2.data
```

It's also possible to mimic the behaviour of a synchronous search by blocking and waiting for data after executing the search:

```python hl_lines="14"
# define search params
start_dt = datetime.datetime(2020, 2, 1, 0, 0, 0)
end_dt = datetime.datetime(2020, 2, 5, 23, 59, 59)
programs = ["trex"]
instrument_types = ["RGB ASI"]

# asynchronous search will return an initiated Search object without data
s3 = aurorax.data_products.search_async(start_dt,
                                    end_dt,
                                    programs=programs,
                                    instrument_types=instrument_types)

# mimic a synchronous search by blocking and waiting until data is ready
s3.wait()

# retrieve data from the server
s3.get_data()

# any result data returned is in the data attribute
data = s3.data
```

## Conjunction Search
The conjunctions module provides a way to quickly find conjunctions between instruments. Synchronous and asynchronous search functions are available in the conjunctions module.

Also see:

* [Advanced conjunction searches](/python_libraries/pyaurorax/advanced_usage/advanced_conjunctions/)

### Synchronous search
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
s1 = aurorax.conjunctions.search(start=start,
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


### Asynchronous search
Under the hood a data products search is asynchronous. This adds some more complexity for the user, but also opens the search up to some additional possibilities. The main advantage is being able to perform queries for a large timeframe. These queries will take a bit longer and could exceed several minutes and return more than a gigabyte of data. Separating the request and the resulting data into two different API calls allows flexibility in duration and size of the overall request.

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
s2 = aurorax.conjunctions.search_async(start=start,
                                       end=end,
                                       ground=ground_params,
                                       space=space_params)

# update the status by checking for data
# this updates s2.status and s2.logs
s2.check_for_data()

# retrieve data from the server after the search is complete
s2.get_data()

# any result data returned is in the data attribute
data = s2.data
```

It's also possible to mimic the behaviour of a synchronous search by blocking and waiting for data after executing the search:

```python hl_lines="23"
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
s3 = aurorax.conjunctions.search_async(start=start,
                                       end=end,
                                       ground=ground_params,
                                       space=space_params)

# mimic a synchronous search by blocking and waiting until data is ready
s3.wait()

# retrieve data from the server
s3.get_data()

# any result data returned is in the data attribute
data = s3.data
```

### Search between space instruments
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
distance = 1000

# execute synchronous search
s = aurorax.conjunctions.search(start=start,
                                end=end,
                                ground=ground_params,
                                space=space_params,
                                max_distances=distances,
                                verbose=True)

# any result data returned is in the data attribute
data = s1.data
```