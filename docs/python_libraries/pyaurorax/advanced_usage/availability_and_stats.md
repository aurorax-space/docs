# Data Availability and Stats

## Availability queries
The ```availability``` module has functions for retrieving the availability of ephemeris and data product records. These functions return a list of [```AvailabilityResult```](/python_libraries/pyaurorax/api_reference/aurorax/availability.html#aurorax.availability.AvailabilityResult) objects for every data source that matches the filter criteria provided to the function.

### Retrieve availability of ephemeris records
In this example, the availability of ephemeris records is retrieved for all Swarm instruments:
```python
start_date = datetime.datetime(2019, 1, 1)
end_date = datetime.date(2019, 1, 31)
program = "swarm"

# get availability
availability = aurorax.availability.ephemeris(start_date, 
                                              end_date,
                                              program=program)

# availability result for the first instrument matched
first = availability[0]

# number of available ephemeris records for 2019-01-21:
first.available_ephemeris["2019-01-21"]
```

### Retrieve availability of data product records
In this example, the availability of data product records is retrieved for all TREx RGB ASI instruments:
```python
start_date = datetime.datetime(2019, 1, 1)
end_date = datetime.date(2019, 1, 31)
program = "trex"
instrument_type = "RGB ASI"

# get availability
availability = aurorax.availability.data_products(start_date,
                                                  end_date,
                                                  program=program,
                                                  instrument_type=instrument_type)

# availability result for the first instrument matched
first = availability[0]

# number of available data product records for 2019-01-21:
first.available_data_products["2019-01-21"]
```

## Data source statistics queries
The ```sources``` module has a function for retrieving statistics about a specific data source. The information retrieved includes the earliest and latest dates for ephemeris and data product records associated with the data source. This function returns a [```DataStatisticsResult```](/python_libraries/pyaurorax/api_reference/aurorax/sources.html#aurorax.sources.DataStatisticsResult) object.

### Get statistics for a data source
```python
identifier = 3
stats = aurorax.sources.get_stats(identifier, "full_record")

# data source information
stats.data_source

# earliest ephemeris record
stats.earliest_ephemeris_loaded

# latest ephemeris record
stats.latest_ephemeris_loaded

# ephemeris record count
stats.ephemeris_count

# earliest data product record
stats.earliest_data_product_loaded

# latest data product record
stats.latest_data_product_loaded

# data product record count
stats.data_product_count
```