URLS=[
"pyaurorax/index.html",
"pyaurorax/api.html",
"pyaurorax/availability.html",
"pyaurorax/conjunctions.html",
"pyaurorax/data_products.html",
"pyaurorax/ephemeris.html",
"pyaurorax/exceptions.html",
"pyaurorax/metadata.html",
"pyaurorax/models.html",
"pyaurorax/requests.html",
"pyaurorax/sources.html",
"pyaurorax/util.html"
];
INDEX=[
{
"ref":"pyaurorax",
"url":0,
"doc":"The PyAuroraX package provides a way to interact with the [AuroraX REST API](https: aurorax.space/data/api_libraries). It is intended to provide an intuitive process for those in the space physics and citizen science communities to programmatically query AuroraX's vast database for conjunctions, ephemeris or data product records, data availability, and statistics. Requires Python3.6+. Check out this project on [GitHub](https: github.com/aurorax-space/pyaurorax) and explore the evolving ecosystem of visualizations, tools, and data at [AuroraX](https: aurorax.space/). For an overview of intended usage and examples, visit the [AuroraX Documentation website](https: docs.aurorax.space/python_libraries/pyaurorax/). Details of functionality and options are available in the [API reference](https: docs.aurorax.space/python_libraries/pyaurorax/api_reference/aurorax/). Installation:   $ pip install pyaurorax   Basic usage:   > import pyaurorax  "
},
{
"ref":"pyaurorax.api",
"url":1,
"doc":"The API module contains classes and methods used throughout PyAuroraX for API interaction."
},
{
"ref":"pyaurorax.api.get_api_key",
"url":1,
"doc":"Returns the currently set API key for the module. Returns: Current API key string.",
"func":1
},
{
"ref":"pyaurorax.api.authenticate",
"url":1,
"doc":"Set authentication values for use with subsequent queries. Attributes: api_key: AuroraX API key string.",
"func":1
},
{
"ref":"pyaurorax.api.AuroraXResponse",
"url":1,
"doc":"Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.AuroraXResponse.request",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXResponse.data",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXResponse.status_code",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest",
"url":1,
"doc":"Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.AuroraXRequest.url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.method",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.params",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.body",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.headers",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.null_response",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.execute",
"url":1,
"doc":"Execute an AuroraX request. Attributes: limited_evaluation: set this to True if you don't want to evaluate the response outside of the retry mechanism, defaults to False. Returns: An AuroraXResponse object. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXNotFoundException: requested resource was not found. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.api.URLs",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.base_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.data_sources_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.stats_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.ephemeris_availability_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.data_products_availability_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.ephemeris_search_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.ephemeris_upload_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.ephemeris_request_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.data_products_search_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.data_products_upload_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.data_products_request_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.conjunction_search_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.URLs.conjunction_request_url",
"url":1,
"doc":""
},
{
"ref":"pyaurorax.api.set_base_url",
"url":1,
"doc":"Change the base URL for the API (ie. change to the staging system or local server). Attributes: url: new base url string (ie. 'https: api.staging.aurorax.space').",
"func":1
},
{
"ref":"pyaurorax.api.get_base_url",
"url":1,
"doc":"Returns the current base URL for the API.",
"func":1
},
{
"ref":"pyaurorax.api.reset_base_url",
"url":1,
"doc":"Set the base URL for the API back to the default.",
"func":1
},
{
"ref":"pyaurorax.availability",
"url":2,
"doc":"The availability module provides the means to quickly determine the availability of desired ephemeris or data product records in AuroraX."
},
{
"ref":"pyaurorax.availability.AvailabilityResult",
"url":2,
"doc":"Availability result data type. Attributes: data_source: pyaurorax.sources.DataSource object that the ephemeris record is associated with. available_data_products: data product availability dictionary of shape {\"YYYY-MM-DD\":  }. available_ephemeris: ephemeris availability dictionary of shape {\"YYYY-MM-DD\":  }. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.availability.AvailabilityResult.data_source",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.availability.AvailabilityResult.available_data_products",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.availability.AvailabilityResult.available_ephemeris",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.availability.ephemeris",
"url":2,
"doc":"Retrieve information about the number of existing ephemeris records. Attributes: start: start datetime.date. end: end datetime.date. program: program string name to filter sources by, defaults to None. platform: platform string name to filter sources by, defaults to None. instrument_type: instrument type string to filter sources by, defaults to None. source_type: source type string to filter sources by (heo, leo, lunar, or ground), defaults to None. owner: owner email address string to filter sources by, defaults to None. format: the format of the data sources returned (identifier_only, basic_info, full_record), defaults to \"basic_info\". slow: query the data directly (slower) for more accurate results, defaults to false. Returns: A list of pyaurorax.availability.AvailabilityResult objects.",
"func":1
},
{
"ref":"pyaurorax.availability.data_products",
"url":2,
"doc":"Retrieve information about the number of existing data product records. Attributes: start: start datetime.date. end: end datetime.date. program: program string name to filter sources by, defaults to None. platform: platform string name to filter sources by, defaults to None. instrument_type: instrument type string to filter sources by, defaults to None. source_type: source type string to filter sources by (heo, leo, lunar, or ground), defaults to None. owner: owner email address string to filter sources by, defaults to None. format: the format of the data sources returned (identifier_only, basic_info, full_record), defaults to \"basic_info\". slow: query the data directly (slower) for more accurate results, defaults to false. Returns: A list of pyaurorax.availability.AvailabilityResult objects.",
"func":1
},
{
"ref":"pyaurorax.conjunctions",
"url":3,
"doc":"AuroraX provides a conjunction module for finding conjunction events between ground and space instruments, and between space instruments."
},
{
"ref":"pyaurorax.conjunctions.Conjunction",
"url":3,
"doc":"Conjunction data type. Attributes: conjunction_type: conjunction type \"nbtrace\" or \"sbtrace\". start: start datetime.datetime of conjunction event(s). end: end datetime.datetime of conjunction event(s). data_sources: pyaurorax.sources.DataSource sources in the conjunction. min_distance: minimum kilometre distance of conjunction event(s), float. max_distance: maximum kilometre distance of conjunction event(s), float. events: list of dictionaries containing details of individual conjunction events. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.conjunctions.Conjunction.conjunction_type",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.start",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.end",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.data_sources",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.min_distance",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.max_distance",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.events",
"url":3,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Search",
"url":3,
"doc":"Class representing an AuroraX conjunctions search. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. ground: List of ground instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"] } ] space: List of one or more space instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"] } ] conjunction_types: list of conjunction types, defaults to [\"nbtrace\"]. max_distances: dictionary of Dict[str, float] ground-space and space-space maximum distances for conjunctions. default_distance will be used for any ground-space and space-space maximum distances not specified. See examples for usage. e.g. distances = { \"ground1-ground2\": None, \"ground1-space1\": 500, \"ground1-space2\": 500, \"ground2-space1\": 500, \"ground2-space2\": 500, \"space1-space2\": None } default_distance: default maximum distance in kilometers for conjunction. Used when max distance is not specified for any ground-space and space-space instrument pairs. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. response_format: JSON representation of desired data response format. request: pyaurorax.AuroraXResponse object returned when the search is executed. request_id: unique AuroraX string ID assigned to the request. request_url: unique AuroraX URL string assigned to the request. executed: boolean, gets set to True when the search is executed. completed: boolean, gets set to True when the search is checked to be finished. data_url: URL string where data is accessed. query: dictionary of values sent for the search query. status: dictionary of status updates. data: list of pyaurorax.conjunctions.Conjunction objects returned. logs: list of logging messages from the API. Returns: A pyaurorax.conjunctions.Search object."
},
{
"ref":"pyaurorax.conjunctions.Search.execute",
"url":3,
"doc":"Initiate conjunction search request. Raises: pyaurorax.exceptions.AuroraXBadParametersException: too many criteria blocks.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.update_status",
"url":3,
"doc":"Update the status of this conjunctions search. Attributes: status: retrieved status dictionary (include to avoid requesting it from the API again), defaults to None.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.check_for_data",
"url":3,
"doc":"Check to see if data is available for this conjunctions search request. Returns: True if data is available, else False.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.get_data",
"url":3,
"doc":"Retrieve the data available for this conjunctions search request.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.wait",
"url":3,
"doc":"Block and wait until the request is complete and data is available for retrieval. Attributes: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. verbose: output poll times, defaults to False.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.cancel",
"url":3,
"doc":"Cancel the conjunction search request at the API. This method returns asynchronously by default. Attributes: wait: set to True to block until the cancellation request has been completed. This may take several minutes. verbose: when wait=True, output poll times, defaults to False. poll_interval: when wait=True, seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.search_async",
"url":3,
"doc":"Submit a request for a conjunctions search, return asynchronously. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. ground: List of ground instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"] } ] space: List of one or more space instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"] } ] conjunction_types: list of conjunction types, defaults to [\"nbtrace\"]. max_distances: dictionary of Dict[str, float] ground-space and space-space maximum distances for conjunctions. default_distance will be used for any ground-space and space-space maximum distances not specified. See examples for usage. e.g. distances = { \"ground1-ground2\": None, \"ground1-space1\": 500, \"ground1-space2\": 500, \"ground2-space1\": 500, \"ground2-space2\": 500, \"space1-space2\": None } default_distance: default maximum distance in kilometers for conjunction. Used when max distance is not specified for any ground-space and space-space instrument pairs. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. response_format: JSON representation of desired data response format. Returns: A pyaurorax.conjunctions.Search object.",
"func":1
},
{
"ref":"pyaurorax.conjunctions.search",
"url":3,
"doc":"Search for conjunctions and block until results are returned. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. ground: List of ground instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"] } ] space: List of one or more space instrument search parameters. See examples for usage. e.g. [ { \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"] } ] conjunction_types: list of conjunction types, defaults to [\"nbtrace\"]. max_distances: dictionary of Dict[str, float] ground-space and space-space maximum distances for conjunctions. default_distance will be used for any ground-space and space-space maximum distances not specified. See examples for usage. e.g. distances = { \"ground1-ground2\": None, \"ground1-space1\": 500, \"ground1-space2\": 500, \"ground2-space1\": 500, \"ground2-space2\": 500, \"space1-space2\": None } default_distance: default maximum distance in kilometers for conjunction. Used when max distance is not specified for any ground-space and space-space instrument pairs. verbose: boolean to show the progress of the request using the request log, defaults to False. poll_interval: seconds to wait between polling calls, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. response_format: JSON representation of desired data response format. Returns: A pyaurorax.conjunctions.Search object.",
"func":1
},
{
"ref":"pyaurorax.data_products",
"url":4,
"doc":"AuroraX holds records for various types of data products produced by ground and space instruments. The most common type of data product is the keogram."
},
{
"ref":"pyaurorax.data_products.DataProduct",
"url":4,
"doc":"DataProduct data type. Attributes: data_source: pyaurorax.sources.DataSource source that the ephemeris record is associated with. data_product_type: data product type (\"keogram\", \"movie\", \"summary_plot\"). start: starting datetime.datetime timestamp for the record in UTC. end: ending datetime.datetime timestamp for the record in UTC. url: URL location string of data product. metdata: metadata dictionary for this record. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.data_products.DataProduct.data_source",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.data_product_type",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.start",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.end",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.url",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.metadata",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.to_json_serializable",
"url":4,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings). Returns: Dictionary JSON-serializable object.",
"func":1
},
{
"ref":"pyaurorax.data_products.upload",
"url":4,
"doc":"Upload data product records to AuroraX. Attributes: identifier: AuroraX data source ID int. records: list of pyaurorax.data_products.DataProduct records to upload. validate_source: boolean, set to True to validate all records before uploading. Returns: 1 for success, raises exception on error. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error. pyaurorax.exceptions.AuroraXUploadException: upload error. pyaurorax.exceptions.AuroraXValidationException: data source validation error.",
"func":1
},
{
"ref":"pyaurorax.data_products.delete_daterange",
"url":4,
"doc":"Deletes data products associated with a data source in the date range provided. This method is asynchronous. Attributes: data_source: pyaurorax.sources.DataSource source associated with the data product records. Identifier, program, platform, and instrument_type are required. start: datetime.datetime beginning of range to delete records for, inclusive. end: datetime.datetime end of datetime range to delete records for, inclusive. data_product_types: specific types of data product to delete, e.g. [\"keogram\", \"movie\"]. If omitted, all data product types will be deleted. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: source not found. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.data_products.delete",
"url":4,
"doc":"Delete data products by URL. This method is asynchronous. Attributes: data_source: pyaurorax.sources.DataSource source associated with the data product records. Identifier, program, platform, and instrument_type are required. urls: list of URL strings associated with the data products being deleted. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXBadParametersException: invalid parameters entered. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search",
"url":4,
"doc":"Class representing an AuroraX data products search. start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of program names to search. platforms: list of platform names to search. instrument_types: list of instrument types to search. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } data_product_type_filters: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } response_format: JSON representation of desired data response format. request: pyaurorax.AuroraXResponse object returned when the search is executed. request_id: unique AuroraX string ID assigned to the request. request_url: unique AuroraX URL string assigned to the request. executed: boolean, gets set to True when the search is executed. completed: boolean, gets set to True when the search is checked to be finished. data_url: URL string where data is accessed. query: dictionary of values sent for the search query. status: dictionary of status updates. data: list of pyaurorax.data_products.DataProduct objects returned, or a list of raw JSON results if response_format is specified. logs: list of logging messages from the API. Create a new Search object."
},
{
"ref":"pyaurorax.data_products.Search.execute",
"url":4,
"doc":"Initiate data products search request.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.update_status",
"url":4,
"doc":"Update the status of this data products search request. Attributes: status: retrieved status dictionary (include to avoid requesting it from the API again), defaults to None.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.check_for_data",
"url":4,
"doc":"Check to see if data is available for this data products search request. Returns: True if data is available, else False.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.get_data",
"url":4,
"doc":"Retrieve the data available for this data products search request.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.wait",
"url":4,
"doc":"Block and wait for the request to complete and data is available for retrieval. Attributes: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. verbose: output poll times, defaults to False.",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.cancel",
"url":4,
"doc":"Cancel the data product search request at the API. This method returns asynchronously by default. Attributes: wait: set to True to block until the cancellation request has been completed. This may take several minutes. verbose: when wait=True, output poll times, defaults to False. poll_interval: when wait=True, seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.data_products.search_async",
"url":4,
"doc":"Submit a request for a data products search, return asynchronously. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of programs to search through, defaults to None. platforms: list of platforms to search through, defaults to None. instrument_types: list of instrument types to search through, defaults to None. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } data_product_type_filters: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } response_format: JSON representation of desired data response format. Returns: A pyaurorax.data_products.Search object.",
"func":1
},
{
"ref":"pyaurorax.data_products.search",
"url":4,
"doc":"Search for data product records and block until results are returned. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of programs to search through, defaults to None. platforms: list of platforms to search through, defaults to None. instrument_types: list of instrument types to search through, defaults to None. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } data_product_type_filters: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } verbose: output poll times, defaults to False. poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. response_format: JSON representation of desired data response format. Returns: A pyaurorax.data_products.Search object.",
"func":1
},
{
"ref":"pyaurorax.ephemeris",
"url":5,
"doc":"AuroraX holds ephemeris records for ground and space instruments in operation."
},
{
"ref":"pyaurorax.ephemeris.Ephemeris",
"url":5,
"doc":"Ephemeris data type. Attributes: data_source: pyaurorax.sources.DataSource source that the ephemeris record is associated with. epoch: datetime.datetime timestamp for the record in UTC. location_geo: pyaurorax.Location object with latitude and longitude in geographic coordinates. location_gsm: pyaurorax.Location object with latitude and longitude in GSM coordinates (leave empty for data sources with a type of 'ground'). nbtrace: pyaurorax.Location object with north B-trace geomagnetic latitude and longitude. sbtrace: pyaurorax.Location object with south B-trace geomagnetic latitude and longitude. metadata: dictionary containing metadata values for this record. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.data_source",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.epoch",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.location_geo",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.location_gsm",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.nbtrace",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.sbtrace",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.metadata",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.to_json_serializable",
"url":5,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings). Returns: Dictionary JSON-serializable object.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search",
"url":5,
"doc":"Class representing an AuroraX ephemeris search. At least one search criteria from programs, platforms, instrument_types, or metadata_filters must be specified. start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of program names to search. platforms: list of platform names to search. instrument_types: list of instrument types to search. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } response_format: JSON representation of desired data response format. request: pyaurorax.AuroraXResponse object returned when the search is executed. request_id: unique AuroraX string ID assigned to the request. request_url: unique AuroraX URL string assigned to the request. executed: boolean, gets set to True when the search is executed. completed: boolean, gets set to True when the search is checked to be finished. data_url: URL string where data is accessed. query: dictionary of values sent for the search query. status: dictionary of status updates. data: list of pyaurorax.ephemeris.Ephemeris objects returned, or a list of raw JSON results if response_format is specified. logs: list of logging messages from the API. Create a new Search object."
},
{
"ref":"pyaurorax.ephemeris.Search.execute",
"url":5,
"doc":"Initiate ephemeris search request. Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.update_status",
"url":5,
"doc":"Update the status of this ephemeris search request. Attributes: status: retrieved status dictionary (include to avoid requesting it from the API again), defaults to None.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.check_for_data",
"url":5,
"doc":"Check to see if data is available for this ephemeris search request. Returns: True if data is available, else False.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.get_data",
"url":5,
"doc":"Retrieve the data available for this ephemeris search request.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.wait",
"url":5,
"doc":"Block and wait for the request to complete and data is available for retrieval. Attributes: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. verbose: output poll times, defaults to False.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.cancel",
"url":5,
"doc":"Cancel the ephemeris search request at the API. This method returns asynchronously by default. Attributes: wait: set to True to block until the cancellation request has been completed. This may take several minutes. verbose: when wait=True, output poll times, defaults to False. poll_interval: when wait=True, seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.search_async",
"url":5,
"doc":"Submit a request for an ephemeris search, return asynchronously. At least one search criteria from programs, platforms, instrument_types, or metadata_filters must be specified. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of programs to search through, defaults to None. platforms: list of platforms to search through, defaults to None. instrument_types: list of instrument types to search through, defaults to None. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } response_format: JSON representation of desired data response format. Returns: A pyaurorax.ephemeris.Search object. Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.search",
"url":5,
"doc":"Search for ephemeris records. At least one search criteria from programs, platforms, instrument_types, or metadata_filters must be specified. Attributes: start: start datetime.datetime timestamp of the search. end: end datetime.datetime timestamp of the search. programs: list of programs to search through, defaults to None. platforms: list of platforms to search through, defaults to None. instrument_types: list of instrument types to search through, defaults to None. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None. e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } verbose: output poll times, defaults to False. poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME. response_format: JSON representation of desired data response format. Returns: A pyaurorax.ephemeris.Search object. Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.upload",
"url":5,
"doc":"Upload ephemeris records to AuroraX. Attributes: identifier: AuroraX data source ID int. records: list of pyaurorax.ephemeris.Ephemeris records to upload. validate_source: boolean, set to True to validate all records before uploading. Returns: 1 for success, raises exception on error. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error. pyaurorax.exceptions.AuroraXUploadException: upload error. pyaurorax.exceptions.AuroraXValidationException: data source validation error.",
"func":1
},
{
"ref":"pyaurorax.ephemeris.delete",
"url":5,
"doc":"Delete a range of ephemeris records. This method is asynchronous. Attributes: data_source: pyaurorax.sources.DataSource source associated with the data product records. Identifier, program, platform, and instrument_type are required. start: datetime.datetime beginning of range to delete records for, inclusive. end: datetime.datetime end of datetime range to delete records for, inclusive. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: source not found. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation. pyaurorax.exceptions.AuroraXBadParametersException: missing parameters.",
"func":1
},
{
"ref":"pyaurorax.exceptions",
"url":6,
"doc":"The exceptions module contains descriptive exceptions unique to AuroraX."
},
{
"ref":"pyaurorax.exceptions.AuroraXException",
"url":6,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"pyaurorax.exceptions.AuroraXNotFoundException",
"url":6,
"doc":"The AuroraX record was not found."
},
{
"ref":"pyaurorax.exceptions.AuroraXDuplicateException",
"url":6,
"doc":"A duplicate record already exists."
},
{
"ref":"pyaurorax.exceptions.AuroraXValidationException",
"url":6,
"doc":"Validation of data failed."
},
{
"ref":"pyaurorax.exceptions.AuroraXUnexpectedContentTypeException",
"url":6,
"doc":"The API responded with an unexpected content type."
},
{
"ref":"pyaurorax.exceptions.AuroraXMaxRetriesException",
"url":6,
"doc":"The maximum number of retries for the request has been reached."
},
{
"ref":"pyaurorax.exceptions.AuroraXBadParametersException",
"url":6,
"doc":"Bad parameters were given in the request."
},
{
"ref":"pyaurorax.exceptions.AuroraXUnauthorizedException",
"url":6,
"doc":"A privileged operation was attempted without authorization."
},
{
"ref":"pyaurorax.exceptions.AuroraXConflictException",
"url":6,
"doc":"A conflict occurred while modifying records."
},
{
"ref":"pyaurorax.exceptions.AuroraXUploadException",
"url":6,
"doc":"Error occurred during upload operation."
},
{
"ref":"pyaurorax.metadata",
"url":7,
"doc":"AuroraX metadata schemas describe the intended structure of metadata stored in ephemeris and data product records."
},
{
"ref":"pyaurorax.metadata.validate",
"url":7,
"doc":"Validate the metadata record against a schema. This checks that the key names match and there aren't fewer or more keys than expected. Attributes: schema: list of dictionaries representing the metadata schema to validate against. record: metadata record dictionary to validate. Returns: True if the metadata record is valid.",
"func":1
},
{
"ref":"pyaurorax.metadata.get_ephemeris_schema",
"url":7,
"doc":"Retrieve the metadata schema for an ephemeris record. Attributes: identifier: ephemeris source ID. Returns: Metadata schema associated with the record.",
"func":1
},
{
"ref":"pyaurorax.metadata.get_data_products_schema",
"url":7,
"doc":"Retrieve the metadata schema for a data products record. Attributes: identifier: ephemeris source ID. Returns: Metadata schema associated with the record.",
"func":1
},
{
"ref":"pyaurorax.models",
"url":8,
"doc":"This module contains the Location class."
},
{
"ref":"pyaurorax.models.Location",
"url":8,
"doc":"Class representing an AuroraX location (ie. geographic coordinates, GSM coordinates, northern/southern magnetic footprints). Attributes: lat: latitude (degrees East). lon: longitude (degrees North). Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.models.Location.lat",
"url":8,
"doc":""
},
{
"ref":"pyaurorax.models.Location.lon",
"url":8,
"doc":""
},
{
"ref":"pyaurorax.models.Location.both_must_be_none_or_number",
"url":8,
"doc":"",
"func":1
},
{
"ref":"pyaurorax.requests",
"url":9,
"doc":"The requests module contains methods for retrieving data from an AuroraX request."
},
{
"ref":"pyaurorax.requests.get_status",
"url":9,
"doc":"Retrieve the status of a request. Attributes: request_url: URL of the request information. Returns: Status dictionary for the request.",
"func":1
},
{
"ref":"pyaurorax.requests.get_data",
"url":9,
"doc":"Retrieve the data for a request. Makes a GET request if no post_body is specified, else makes a POST request with the given post_body. Attributes: data_url: URL for the data of a request. post_body: dictionary for body of a post request. Returns: List of JSON data objects in the response.",
"func":1
},
{
"ref":"pyaurorax.requests.get_logs",
"url":9,
"doc":"Retrieve the logs for a request. Attributes: request_url: URL of the request information. Returns: List of logged messages for the request.",
"func":1
},
{
"ref":"pyaurorax.requests.wait_for_data",
"url":9,
"doc":"Block and wait for the data to be made available for a request. Attributes: request_url: URL of the request information. poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times, defaults to False. Returns: Status dictionary for the request.",
"func":1
},
{
"ref":"pyaurorax.requests.cancel",
"url":9,
"doc":"Cancel the request at the given URL. This operation is asynchronous by default unless the wait param is set to True. Attributes: request_url: URL string of the request to be canceled. wait: set to True to block until the cancellation request has been completed. This may take several minutes. verbose: when wait=True, output poll times, defaults to False. poll_interval: when wait=True, seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation.",
"func":1
},
{
"ref":"pyaurorax.sources",
"url":10,
"doc":"AuroraX data sources are unique instruments that produce ephemeris or data product records."
},
{
"ref":"pyaurorax.sources.DataSource",
"url":10,
"doc":"Data source data type. Attributes: identifier: an integer unique to the data source. program: a string representing the data source program. platform: a string representing the data source platform. instrument_type: a string representing the data source instrument type. source_type: a string representing the data source type. display_name: a string representing the data source's proper display name. metadata: a dictionary of metadata properties. owner: a string representing the data source's owner in AuroraX. maintainers: a list of strings representing the email addresses of AuroraX accounts that can alter this data source and its associated records. ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with the data source. data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with the data source. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.DataSource.identifier",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.program",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.platform",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.instrument_type",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.source_type",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.display_name",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.metadata",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.owner",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.maintainers",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.ephemeris_metadata_schema",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.data_product_metadata_schema",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics",
"url":10,
"doc":"Data type for data source statistics. Attributes: data_source: the data source the statistics are associated with earliest_ephemeris_loaded: datetime.datetime of the earliest ephemeris record latest_ephemeris_loaded: datetime.datetime of the latest ephemeris record ephemeris_count: total number of ephemeris records for this data source earliest_data_product_loaded: datetime.datetime of the earliest data_product record latest_data_product_loaded: datetime.datetime of the latest data product record data_product_count: total number of ephemeris records for this data source Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.data_source",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.earliest_ephemeris_loaded",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.latest_ephemeris_loaded",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.ephemeris_count",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.earliest_data_product_loaded",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.latest_data_product_loaded",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.data_product_count",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.sources.list",
"url":10,
"doc":"Retrieve all data source records. Attributes: order: string value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\". format: string record format, defaults to \"basic_info\". Returns: A list of AuroraX DataSource objects. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error.",
"func":1
},
{
"ref":"pyaurorax.sources.get",
"url":10,
"doc":"Retrieve a specific data source record. Attributes: program: the string name of the program. platform: the string name of the platform. instrument_type: the string name of the instrument type. format: record format, defaults to \"basic_info\". Returns: An AuroraX DataSource object matching the input parameters. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: source not found.",
"func":1
},
{
"ref":"pyaurorax.sources.get_using_filters",
"url":10,
"doc":"Retrieve all data source records matching a filter. Attributes: program: the string name of the program. platform: the string name of the platform. instrument_type: the string name of the instrument type. source_type: the string name of the data source type. owner: the AuroraX data source owner's email address. format: record format, defaults to \"basic_info\". order: string value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\". Returns: A list of AuroraX DataSource objects matching the filter parameters. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error.",
"func":1
},
{
"ref":"pyaurorax.sources.get_using_identifier",
"url":10,
"doc":"Retrieve data source record matching an identifier. Attributes: identifier: an integer unique to the data source. format: record format, defaults to \"basic_info\". Returns: An AuroraX DataSource object matching the input identifier. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error.",
"func":1
},
{
"ref":"pyaurorax.sources.get_stats",
"url":10,
"doc":"Retrieve statistics for a data source. Attributes: identifier: an integer unique to the data source. format: record format, defaults to \"basic_info\". slow: a boolean indicating whether to use slow method which gets most up-to-date stats info. Returns: A dictionary of statistics information about the data source. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXNotFoundException: data source not found. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error.",
"func":1
},
{
"ref":"pyaurorax.sources.add",
"url":10,
"doc":"Add a new data source to AuroraX. Attributes: data_source: the fully defined AuroraX DataSource object to add. Returns: The newly created AuroraX DataSource object. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXDuplicateException: duplicate data source, already exists.",
"func":1
},
{
"ref":"pyaurorax.sources.delete",
"url":10,
"doc":"Delete a data source from AuroraX. Attributes: identifier: an integer unique to the data source. Returns: 1 on success. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: data source not found. pyaurorax.exceptions.AuroraXConflictException: conflict of some type.",
"func":1
},
{
"ref":"pyaurorax.sources.update",
"url":10,
"doc":"Update a data source in AuroraX. This operation will fully replace the data source with the data_source argument passed in. Please make sure data_source is complete. Refer to examples for usage. Attributes: data_source: the fully defined AuroraX DataSource object to update. Returns: The updated AuroraX DataSource object. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: data source not found. pyaurorax.exceptions.AuroraXBadParametersException: missing parameters.",
"func":1
},
{
"ref":"pyaurorax.sources.partial_update",
"url":10,
"doc":"Partially update a data source in AuroraX. Omitted fields are ignored in the update. Refer to examples for usage. Attributes: identifier: an integer unique to the data source. program: a string representing the data source program. platform: a string representing the data source platform. instrument_type: a string representing the data source instrument type. source_type: a string representing the data source type. display_name: a string representing the data source's proper display name. metadata: a dictionary of metadata properties. owner: a string representing the data source's owner in AuroraX. maintainers: a list of strings representing the email addresses of AuroraX accounts that can alter this data source and its associated records. ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with the data source. data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with the data source. Returns: The updated AuroraX DataSource object. Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error. pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error. pyaurorax.exceptions.AuroraXNotFoundException: data source not found. pyaurorax.exceptions.AuroraXBadParametersException: missing parameters.",
"func":1
},
{
"ref":"pyaurorax.util",
"url":11,
"doc":"Utility methods for converting geographic locations to North/South B trace coordinates."
},
{
"ref":"pyaurorax.util.ground_geo_to_nbtrace",
"url":11,
"doc":"Convert geographic location to North B-Trace geographic location. Attributes: geo_location: pyaurorax.Location object representing the geographic location. dt: datetime.datetime object representing the timestamp. Returns: North B-trace location as a pyaurorax.Location object.",
"func":1
},
{
"ref":"pyaurorax.util.ground_geo_to_sbtrace",
"url":11,
"doc":"Convert geographic location to South B-Trace geographic location. Attributes: geo_location: pyaurorax.Location object representing the geographic location. dt: datetime.datetime object representing the timestamp. Returns: South B-trace location as a pyaurorax.Location object.",
"func":1
}
]