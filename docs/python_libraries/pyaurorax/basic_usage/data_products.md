# Data Products
The [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html) module provides functions for searching, adding, updating, and deleting data product records. Synchronous and [asynchronous search](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/) functions are available in the data_products module.

* See [this description](/about_the_data/categories/#data-products) of the data product category.
* [Asynchronous searches](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/)


## Synchronous search
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

## Asynchronous search
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