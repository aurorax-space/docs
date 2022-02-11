# Data Sources

Each record in AuroraX is associated with a unique data source that produced it. Each data source is uniquely identified by an integer identifier in the database, or by the combination of its program, platform, and instrument type values.

Also see:

* [Data source availability webpage :octicons-link-external-16:](https://aurorax.space/data/availability){:target="_blank"} 
* [Data source statistics webpage :octicons-link-external-16:](https://aurorax.space/data/information){:target="_blank"} 
* [Retrieving data source availability and statistics](/code/advanced_usage/availability_and_stats/#data-source-statistics)


## Retrieve data sources

You can retrieve all data sources, or retrieve data sources matching a certain set of filter criteria. Below are a few examples.

!!! example "Example - get data sources"

    === "Python"

        PyAuroraX includes the [`sources`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html){:target="_blank"} module and serializes data into [`DataSource`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource){:target="_blank"} objects.

        You can retrieve ALL data sources using the "list" function with no parameters.

        ```python
        import pyaurorax
        sources = pyaurorax.sources.list()
        print(sources)
        ```

        If you want to limit the amount of information that is retrieved from AuroraX, you can specify a different `format` parameter, like so:

        ```python
        import pyaurorax
        sources = pyaurorax.sources.list(format=pyaurorax.FORMAT_BASIC_INFO)
        print(sources)
        ```

        If you want to retrieve data sources that match certain filter criteria, say all "Swarm" data sources, you can use the additional parameters in the "list" function.

        ```python
        import pyaurorax
        sources = pyaurorax.sources.list(program="swarm")
        print(sources)
        ```

    === "Command Line"

        You can retrieve ALL data sources using the "list" function with no parameters.

        ```console
        $ aurorax-cli sources list
        ```

        If you want to retrieve data sources that match certain filter criteria, say all "Swarm" data sources, you can use the additional parameters in the "list" function.

        ```console
        $ aurorax-cli sources list --program=swarm
        ```

        To view all available parameters for this command, you can look at the help list so:

        ```console
        $ aurorax-cli sources list --help
        ```

    === "Javascript"

        There are many different ways in Javascript to send a GET request, so we'll show it using a basic HTTP request. You can do this with AJAX, JQuery, Node, React, etc.

        ```javascript
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.aurorax.space/api/v1/data_sources");
        xhr.send();
        console.log(xhr.responseText)
        ```

    === "Browser"

        You can also just make the request right from your browser. Copy the following URL and paste it in your browser URL bar.

        ```
        https://api.aurorax.space/api/v1/data_sources
        ```
