# Data Products
The [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html) module provides functions for searching, adding, updating, and deleting data product records. Synchronous and [asynchronous search](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/) functions are available in the data_products module.

* See [this description](/about_the_data/categories/#data-products) of the data product category.
* [Asynchronous searches](/python_libraries/pyaurorax/advanced_usage/asynchronous_search/)
* [Searches with metadata filters](/python_libraries/pyaurorax/advanced_usage/searches_with_metadata_filters/)


## Search
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
