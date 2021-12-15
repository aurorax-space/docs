# Data Sources
Each record in AuroraX is associated with a unique data source that produced it. Each data source is uniquely identified by an integer identifier, or by the combination of its program name, platform name, and instrument type. PyAuroraX includes the [`sources`](/python_libraries/pyaurorax/api_reference/pyaurorax/sources.html) module and uses the [`DataSource`](/python_libraries/pyaurorax/api_reference/pyaurorax/sources.html#pyaurorax.sources.DataSource) type for data sources.

Also see:

* [Data source statistics](/python_libraries/pyaurorax/advanced_usage/availability_and_stats/#data-source-statistics)
* [Data source information](https://aurorax.space/data/information) on the main AuroraX website

## Get all data sources
```python
sources = pyaurorax.sources.list(order="program", format="full_record")
```

`order` and `format` arguments are both optional and default to "identifier" and "basic_info", respectively.

## Get data sources using filters
```python
sources = pyaurorax.sources.get_using_filters(program="trex",
                                            instrument_type="RGB ASI")
```

Available filter parameters are `program`, `platform`, `instrument_type`, `source_type`, and `owner`.

## Determine the identifier of a data source
Each data source in AuroraX has a unique integer identifier. The identifier is returned as part of the response of every data source request.
```python hl_lines="6"
sources = pyaurorax.sources.get_using_filters(program="swarm",
                                            platform="swarma",
                                            instrument_type="footprint")

# get the identifier of the first data source returned
identifier = sources[0].identifier
```

## Get a data source using its identifier
If you already know the identifier of a data source, you can retrieve it directly:
```python
source = pyaurorax.sources.get_using_identifier(3)
```

## Get data source information with different levels of detail
Both the [`get_using_identifier`](/python_libraries/pyaurorax/api_reference/pyaurorax/sources.html#pyaurorax.sources.get_using_identifier) and [`get_using_filters`](/python_libraries/pyaurorax/api_reference/pyaurorax/sources.html#pyaurorax.sources.get_using_filters) functions allow the `format` parameter. The available format options are: identifier_only, basic_info, full_record.

```python
# less information
source1 = pyaurorax.sources.get_using_filters(program="swarm",
                                            platform="swarma", 
                                            instrument_type="footprint",
                                            format="identifier_only")

# default information
source2 = pyaurorax.sources.get_using_identifier(3, format="basic_info")

# more information
source3 = pyaurorax.sources.get_using_identifier(3, format="full_record")
```