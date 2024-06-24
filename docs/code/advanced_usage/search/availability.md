# Data Availability

Since the AuroraX platform is built around metadata in a database, we lose a bit of visibility regarding what data is in the system at any given time. To help with this, we have a function that provides data availability information to users.

Data availability information from AuroraX consists of the number of ephemeris or data product records for a given day and a given data source. We visualize it using the [Data Availability webpage](https://aurorax.space/data/availability){:target="_blank"}.

Below, we'll have a look at an example of retrieving data availability information programmatically.

!!! example "Example - get data availability information"

    In this example, the availability of ephemeris records is retrieved for all Swarm instruments for a 5 day period.

    === "Python"

        The [`search.availability`](/code/pyaurorax_api_reference/pyaurorax/search/availability/index.html){:target="_blank"} module has functions for retrieving the availability of ephemeris and data product records. These functions return a list of [`AvailabilityResult`](/code/pyaurorax_api_reference/pyaurorax/search/availability/index.html#pyaurorax.search.AvailabilityResult){:target="_blank"} objects for every data source that matches the filter criteria provided to the function.

        ```python
        # imports
        import datetime
        import pyaurorax
        aurorax = pyaurorax.PyAuroraX()

        # set up availability params
        start = datetime.date(2019, 1, 1)
        end = datetime.date(2019, 1, 5)
        program = "swarm"

        # get availability information
        availability = aurorax.search.availability.ephemeris(start, 
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

    === "IDL"

        Use the [`aurorax_ephemeris_availability()`](/code/idlaurorax_api_reference/search/availability/ephemeris/){:target="_blank"} and [`aurorax_data_product_availability()`](/code/idlaurorax_api_reference/search/availability/data_products/){:target="_blank"} functions to retrieve data availability information from AuroraX in IDL.

        ```idl
        IDL> data = aurorax_ephemeris_availability('20200101','20200105',program='swarm')
        ```

        Example output would look like:

        ```
        IDL> help,data[0]
        ** Structure <5cab0610>, 2 tags, length=128, data length=128, refs=2:
           DATA_SOURCE            STRUCT    -> <Anonymous> Array[1]
           AVAILABLE_EPHEMERIS    STRUCT    -> <Anonymous> Array[1]
        IDL> data[0]
        {
            "DATA_SOURCE": {
                "IDENTIFIER": 3,
                "PROGRAM": "swarm",
                "PLATFORM": "swarma",
                "INSTRUMENT_TYPE": "footprint",
                "SOURCE_TYPE": "leo",
                "DISPLAY_NAME": "Swarm A"
            },
            "AVAILABLE_EPHEMERIS": {
                "_2020_01_01": 1440,
                "_2020_01_02": 1440,
                "_2020_01_03": 1440,
                "_2020_01_04": 1440,
                "_2020_01_05": 1440
            }
        }
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
