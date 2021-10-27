# Asynchronous Searches

Search times for data products, ephemeris, and conunctions can vary widely depending on the length of time, number of data sources involved, and metadata filters used. The basic search functions in the [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html#aurorax.data_products.search), [`ephemeris`](/python_libraries/pyaurorax/api_reference/aurorax/ephemeris.html#aurorax.ephemeris.search), and [`conjunctions`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.search) modules will block and wait until results are returned. The blocked time waiting for the query results to be returned can be anywhere from several seconds to many minutes. To avoid idle time during this blocking time in your scripts and programs, or to take advantage of the possibility to run multiple search queries in parallel, consider using an **asynchronous search**.

## Overview
Asynchronous searches in PyAuroraX modules all follow the same process:

1. The client executes an asynchronous search using the same parameters as what would be used in a regular (synchronous) search.
2. The API starts processing the query in the background, and immediately responds with a request ID that is stored in the response object.
3. The client continues with execution flow in their application, checking the status of the asynchronous query periodically and retrieving data whenever it is ready.

Asynchronous search is available in the [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html#aurorax.data_products.search_async), [`ephemeris`](/python_libraries/pyaurorax/api_reference/aurorax/ephemeris.html#aurorax.ephemeris.search_async), and [`conjunctions`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.search_async) modules. The example below illustrates its use in the conjunctions module, but the same usage applies in the data_products and ephemeris.

## Example: asynchronous conjunction search
This example will go through the steps of executing an asynchronous conjunction search, checking for data, and retrieving data when it is ready. In this example we are searching for conjunctions within a 1-year period. Searches for this long of a period can take several minutes, so we will benefit from using the asynchronous option.

```python
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 12, 31, 23, 59, 59)
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

s = aurorax.conjunctions.search_async(start=start,
                                      end=end,
                                      ground=ground_params,
                                      space=space_params,
                                      default_distance=300)

# do other useful things while waiting for results...

# this loop checks for data every 10 seconds
while not s.check_for_data():
    time.sleep(10)

s.get_data()
conjunction_results = s.data
```

### Setting up an asynchronous search
Asynchronous searches are set up and executed similarly to regular (synchronous) searches. The main difference is that the `search_asynch` function is used instead of `search`. The response object, in this case `s`, will contain the information needed to continue with checking for, and retrieving, data when it is ready.

```python hl_lines="28-32"
start = datetime.datetime(2019, 1, 1, 0, 0, 0)
end = datetime.datetime(2019, 12, 31, 23, 59, 59)
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

s = aurorax.conjunctions.search_async(start=start,
                                      end=end,
                                      ground=ground_params,
                                      space=space_params,
                                      default_distance=300)

# do other useful things while waiting for results...

# this loop checks for data every 10 seconds
while not s.check_for_data():
    time.sleep(10)

s.get_data()
conjunction_results = s.data
```

### Checking for data
The main advantage of an asynchronous search is that it lets you check for data whenever it is most optimal in your application. Your application will continue with execution because `search_async` does not block and wait for data to be returned. This also means that the task of checking for data falls to you. Our working example illustrates this using a simple loop that checks for data every 10 seconds. In practice you would continue on with whatever useful code your application executes while waiting for the search results, and check for data at the end. 

```python hl_lines="7-11"
s = aurorax.conjunctions.search_async(start=start,
                                      end=end,
                                      ground=ground_params,
                                      space=space_params,
                                      default_distance=300)

# do other useful things while waiting for results...

# this loop checks for data every 10 seconds
while not s.check_for_data():
    time.sleep(10)

s.get_data()
conjunction_results = s.data
```

### Retrieving data
When the [`check_for_data()`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.Search.check_for_data) function indicates that search result is complete, it is time to retrieve the result with a call to [`get_data()`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.Search.get_data). The data is then available in the `data` attribute of the response object.

```python hl_lines="13-14"
s = aurorax.conjunctions.search_async(start=start,
                                      end=end,
                                      ground=ground_params,
                                      space=space_params,
                                      default_distance=300)

# do other useful things while waiting for results...

# this loop checks for data every 10 seconds
while not s.check_for_data():
    time.sleep(10)

s.get_data()
conjunction_results = s.data
```

## The `wait()` function
Included with every asynchronous search is a [`wait()`](/python_libraries/pyaurorax/api_reference/aurorax/conjunctions.html#aurorax.conjunctions.Search.wait) function which mimics the blocking behaviour of a synchronous search. This function is useful in cases where the application reaches a point where it needs the search result data to continue. Under the hood, `wait()` functions similarly to the waiting loop implemented in the example above. We can rewrite that example to use `wait()`.

```python hl_lines="10"
s = aurorax.conjunctions.search_async(start=start,
                                      end=end,
                                      ground=ground_params,
                                      space=space_params,
                                      default_distance=300)

# do other useful things while waiting for results...

# block and wait for results
s.wait()

s.get_data()
conjunction_results = s.data
```

The [`data_products`](/python_libraries/pyaurorax/api_reference/aurorax/data_products.html#aurorax.data_products.Search.wait) and [`ephemeris`](/python_libraries/pyaurorax/api_reference/aurorax/ephemeris.html#aurorax.ephemeris.Search.wait) modules have `wait()` functions in their asynchronous search as well.