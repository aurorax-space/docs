# Data Availability and Statistics

Since the AuroraX platform is built around metadata in a database, we lose a bit of visibility regarding what data is in the system at any given time. To help with this, we have two functions that can quickly provide data availability and statistics information to users. Below, we'll have a closer look at each of these functions and how they can be used.

## Data availability

Data availability information from AuroraX consists of the number of ephemeris or data product records for a given day and a given data source. We visualize it using the [Data Availability webpage](https://aurorax.space/data/availability){:target="_blank"}.

Below, we'll have a look at an example of retrieving data availability information programmatically.

!!! example "Example - get data availability information"

    In this example, the availability of ephemeris records is retrieved for all Swarm instruments for a 5 day period.

    === "Python"

        The [`availability`](/code/pyaurorax_api_reference/pyaurorax/availability/index.html){:target="_blank"} module has functions for retrieving the availability of ephemeris and data product records. These functions return a list of [`AvailabilityResult`](/code/pyaurorax_api_reference/pyaurorax/availability/index.html#pyaurorax.availability.AvailabilityResult){:target="_blank"} objects for every data source that matches the filter criteria provided to the function.

        ```python
        # imports
        import pyaurorax
        import datetime

        # set up availability params
        start = datetime.date(2019, 1, 1)
        end = datetime.date(2019, 1, 5)
        program = "swarm"

        # get availability information
        availability = pyaurorax.availability.ephemeris(start, 
                                                        end,
                                                        program=program)

        # have a look at the availability data
        print(availability)
        ```

        Example output would look like:

        ```
        [
            AvailabilityResult(data_source=DataSource(identifier=3, program='swarm', platform='swarma', instrument_type='footprint', source_type='leo', display_name='Swarm A'), 
                               available_data_products=None, 
                               available_ephemeris={
                                   '2019-01-01': 1440, 
                                   '2019-01-02': 1440, 
                                   '2019-01-03': 1440, 
                                   '2019-01-04': 1440, 
                                   '2019-01-05': 1440}),
            AvailabilityResult(data_source=DataSource(identifier=29, program='swarm', platform='swarmb', instrument_type='footprint', source_type='leo', display_name='Swarm B'), 
                               available_data_products=None, 
                               available_ephemeris={
                                   '2019-01-01': 1440, 
                                   '2019-01-02': 1440, 
                                   '2019-01-03': 1440, 
                                   '2019-01-04': 1440, 
                                   '2019-01-05': 1440}),
            AvailabilityResult(data_source=DataSource(identifier=30, program='swarm', platform='swarmc', instrument_type='footprint', source_type='leo', display_name='Swarm C'), 
                               available_data_products=None, 
                               available_ephemeris={
                                   '2019-01-01': 1440, 
                                   '2019-01-02': 1440, 
                                   '2019-01-03': 1440, 
                                   '2019-01-04': 1440, 
                                   '2019-01-05': 1440})
        ]
        ```

    === "Command Line"

        You can use the aurorax-cli tool to retrieve data availability information too.

        ```console
        $ aurorax-cli availability ephemeris 2020/01/01 2020/01/05 --program=swarm
        ```

        Example output would be:

        ```
        Identifier ↓   Display Name   Program   Platform   Instrument Type   Source Type   Date         Available Records
        =================================================================================================================
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-01   1,440            
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-02   1,440            
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-03   1,440            
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-04   1,440            
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-05   1,440            
        3              Swarm A        swarm     swarma     footprint         leo           2020-01-06   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-01   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-02   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-03   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-04   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-05   1,440            
        29             Swarm B        swarm     swarmb     footprint         leo           2020-01-06   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-01   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-02   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-03   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-04   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-05   1,440            
        30             Swarm C        swarm     swarmc     footprint         leo           2020-01-06   1,440            
        ```

        For more usage details, you can look at the aurorax-cli help too.

        ```console
        $ aurorax-cli availability ephemeris --help 
        ```

    === "Javascript"

        There are many different ways in Javascript to send a GET request, so we'll show it using a basic HTTP request. You can do this with AJAX, JQuery, Node, React, etc.

        ```javascript
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.aurorax.space/api/v1/availability/ephemeris?start=2020-01-01&end=2020-01-31&program=swarm");
        xhr.send();
        console.log(xhr.responseText)
        ```

    === "Browser"

        You can also just make the request right from your browser. Copy the following URL and paste it in your browser URL bar.

        ```
        https://api.aurorax.space/api/v1/availability/ephemeris?start=2020-01-01&end=2020-01-31&program=swarm
        ```

## Data statistics

AuroraX also has the ability to inform on the total number of ephemeris or data product records there exists for each data source, along with the earliest/latest timestamp values. This information is part of the "stats" API endpoints, and visualized on the [Data Statistics webpage](https://aurorax.space/data/statistics){:target="_blank"}.

Below, we'll have a look at an example of retrieving data source statistics information programmatically.

!!! example "Example - get data availability information"

    In this example, the data source statistics of the TREx RGB in Gillam are retrieved.

    === "Python"

        The [`sources`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html){:target="_blank"} module has a function for retrieving statistics of a data source. The information retrieved includes the earliest and latest dates for ephemeris and data product records associated with the data source. A [`DataStatisticsResult`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataStatisticsResult){:target="_blank"} object is returned by this function.

        ```python
        # imports
        import pyaurorax
        import datetime

        # get identifier for the TREx RGB in Gillam
        data_source = pyaurorax.sources.list(program="trex", platform="gillam", instrument_type="RGB ASI")
        
        # retrieve stats for this data source
        stats = pyaurorax.sources.get_stats(data_source[0].identifier, format=pyaurorax.FORMAT_IDENTIFIER_ONLY)

        # have a look at the stats info we retrieved
        print(stats)
        ```

        Example output would look like:

        ```
        DataSourceStatistics(data_source=DataSource(identifier=103), 
                             earliest_ephemeris_loaded=datetime.datetime(2019, 9, 27, 1, 25),
                             latest_ephemeris_loaded=datetime.datetime(2020, 11, 30, 23, 59),
                             ephemeris_count=222573, 
                             earliest_data_product_loaded=datetime.datetime(2019, 9, 27, 0, 0),
                             latest_data_product_loaded=datetime.datetime(2021, 10, 22, 23, 59),
                             data_product_count=28312)
        ```

    === "Command Line"

        You can use the aurorax-cli tool to retrieve data source statistics information too.

        ```console
        $ aurorax-cli sources get_stats 103
        ```

        Example output would be:

        ```
        Data source:                    DataSource(identifier=103, program='trex', platform='gillam', instrument_type='RGB ASI', source_type='ground', display_name='TREx RGB GILL')
        Ephemeris count:                222,573
        Earliest ephemeris loaded:      2019-09-27 01:25:00
        Latest ephemeris loaded:        2020-11-30 23:59:00
        Data product count:	            28,312
        Earliest data product loaded:	2019-09-27 00:00:00
        Latest data product loaded:	    2021-10-22 23:59:00
        ```

        !!! warning "Input is identifier number of data source"
        
            This command requires the input be the identifier number of a data source, so before the below command we used the "list" command to find that TREx RGB in Gillam is identifier `103`.

        For more usage details, you can look at the aurorax-cli help too.

        ```console
        $ aurorax-cli sources get_stats --help 
        ```

    === "Javascript"

        There are many different ways in Javascript to send a GET request, so we'll show it using a basic HTTP request. You can do this with AJAX, JQuery, Node, React, etc.

        ```javascript
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.aurorax.space/api/v1/data_sources/103");
        xhr.send();
        console.log(xhr.responseText)
        ```

    === "Browser"

        You can also just make the request right from your browser. Copy the following URL and paste it in your browser URL bar.

        ```
        https://api.aurorax.space/api/v1/data_sources/103
        ```
