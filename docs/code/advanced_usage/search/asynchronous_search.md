# Asynchronous Searches

!!! warning "Only on PyAuroraX and REST API"

    Please note, performing asynchronous search requests is only supported on PyAuroraX and when using the RESTful API directly. 
    
    The `idl-aurorax` library **does not** support this functionality. Searches are already done asynchronously under-the-hood with no control over this for users currently.

    Therefore, all following information on this page is specific to Python and PyAuroraX.

Search times for data products, ephemeris, and conjunctions can vary widely depending on the length of time, number of data sources involved, and metadata filters used. The basic search functions in the [`data_products`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.search){:target="_blank"}, [`ephemeris`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.search){:target="_blank"}, and [`conjunctions`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.search){:target="_blank"} modules will block and wait until results are returned, and may return more than a gigabyte of data. The blocked time waiting for the query results to be returned can be anywhere from several seconds to many minutes. To avoid idle time during this blocking time, or to take advantage of the possibility to run multiple search queries in parallel, consider using an **asynchronous search**.

## Overview

Asynchronous searches in PyAuroraX modules all follow the same process:

1. The client executes a search using the same parameters, except `return_immediately` is set to True. 
2. The API starts processing the query in the background, and immediately responds with a request ID that is stored in the Search object.
3. The client continues with execution flow in their application, checking the status of the Search object periodically and retrieving data whenever it is ready.

Separating the request and the resulting data into two different API calls allows flexibility in duration and size of the overall request.

The example below illustrates its use in the conjunctions module, but the same usage applies for ephemeris and data_products.

## Example: asynchronous conjunction search

This example will go through the steps of executing an asynchronous conjunction search, checking for data, and retrieving data when it is ready. In this example we are searching for conjunctions within a 1-year period. Searches for this long of a period can take several minutes, so we will benefit from using this alternative approach.

!!! example "Example - asynchronous conjunction search"

    === "Python"

        ```python
        # imports
        import datetime
        import pyaurorax
        aurorax = pyaurorax.PyAuroraX()

        # set up search parameters
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

        # initiate search
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=500,
                                               ground=ground_params,
                                               space=space_params
                                               return_immediately=True)

        # do other useful things while waiting for results...
        foo()
        bar()

        # check for data every 5 seconds
        while not s.check_for_data():
            time.sleep(5)

        # now that we have data, let's retrieve it
        s.get_data()

        # output data
        print(s.data)
        ```

## A closer look at the example

In the below sections, we'll have a closer look at each part of the example.

### Setting up an asynchronous search

Asynchronous searches are set up and executed the same as regular searches. The main difference is that the `search` function is provided a special flag, `return_immediately`, to indicate that it should not wait for data to be available before returning. The Search object, in this case `s`, will contain the information needed to continue with checking for, and retrieving, data when it is ready.

!!! example "Setting up the search"

    === "Python"

        ```python hl_lines="0-7"
        # initiate search
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=500,
                                               ground=ground_params,
                                               space=space_params
                                               return_immediately=True)

        # do other useful things while waiting for results...
        foo()
        bar()

        # check for data every 5 seconds
        while not s.check_for_data():
            time.sleep(5)

        # now that we have data, let's retrieve it
        s.get_data()

        # output data
        print(s.data)
        ```

### Checking for data

The main advantage of an asynchronous search is that it lets you check for data whenever it is most optimal in your application. Your application will continue with execution because the search function will not block and wait for data to be returned. This also means that the task of checking for data falls to you, as a programmer. 

Our working example illustrates this using a simple loop that checks for data every 5 seconds. In practice you would continue on with whatever useful code your application executes while waiting for the search results, and check for data at the end. 

!!! example "Checking for data"

    === "Python"

        ```python hl_lines="13-15"
        # initiate search
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=500,
                                               ground=ground_params,
                                               space=space_params
                                               return_immediately=True)

        # do other useful things while waiting for results...
        foo()
        bar()

        # check for data every 5 seconds
        while not s.check_for_data():
            time.sleep(5)

        # now that we have data, let's retrieve it
        s.get_data()

        # output data
        print(s.data)
        ```

### Retrieving data

When the [`check_for_data()`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.Search.check_for_data){:target="_blank"} function indicates that search result is complete, it is time to retrieve the result with a call to [`get_data()`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.Search.get_data){:target="_blank"}. The data is then available in the `data` attribute of the response object.

!!! example "Retrieve data"

    === "Python"

        ```python hl_lines="17-18"
        # initiate search
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=500,
                                               ground=ground_params,
                                               space=space_params
                                               return_immediately=True)

        # do other useful things while waiting for results...
        foo()
        bar()

        # check for data every 5 seconds
        while not s.check_for_data():
            time.sleep(5)

        # now that we have data, let's retrieve it
        s.get_data()

        # output data
        print(s.data)
        ```

### Using the `wait()` function instead

Included with every Search object is a [`wait()`](/code/pyaurorax_api_reference/pyaurorax/conjunctions/index.html#pyaurorax.conjunctions.Search.wait){:target="_blank"} function which mimics the blocking behaviour of a synchronous search. This function is useful in cases where the application reaches a point when it needs the search result data to continue. Under the hood, `wait()` functions similarly to the waiting loop implemented in the example above. We can rewrite that example to use `wait()`.

!!! example "Using the wait() function instead"

    === "Python"

        ```python hl_lines="13-14"
        # initiate search
        s = aurorax.search.conjunctions.search(start=start,
                                               end=end,
                                               distance=500,
                                               ground=ground_params,
                                               space=space_params
                                               return_immediately=True)

        # do other useful things while waiting for results...
        foo()
        bar()

        # block and wait for data
        s.wait()

        # now that we have data, let's retrieve it
        s.get_data()

        # output data
        print(s.data)
        ```
