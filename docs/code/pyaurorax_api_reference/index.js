URLS=[
"pyaurorax/index.html",
"pyaurorax/exceptions.html",
"pyaurorax/ephemeris/index.html",
"pyaurorax/ephemeris/ephemeris.html",
"pyaurorax/ephemeris/classes/index.html",
"pyaurorax/ephemeris/classes/ephemeris.html",
"pyaurorax/ephemeris/classes/search.html",
"pyaurorax/data_products/index.html",
"pyaurorax/data_products/data_products.html",
"pyaurorax/data_products/classes/index.html",
"pyaurorax/data_products/classes/data_product.html",
"pyaurorax/data_products/classes/search.html",
"pyaurorax/sources/index.html",
"pyaurorax/sources/sources.html",
"pyaurorax/sources/classes/index.html",
"pyaurorax/sources/classes/data_source.html",
"pyaurorax/sources/classes/data_source_stats.html",
"pyaurorax/metadata/index.html",
"pyaurorax/metadata/metadata.html",
"pyaurorax/availability/index.html",
"pyaurorax/availability/availability.html",
"pyaurorax/availability/classes/index.html",
"pyaurorax/availability/classes/availability_result.html",
"pyaurorax/conjunctions/index.html",
"pyaurorax/conjunctions/conjunctions.html",
"pyaurorax/conjunctions/classes/index.html",
"pyaurorax/conjunctions/classes/conjunction.html",
"pyaurorax/conjunctions/classes/search.html",
"pyaurorax/conjunctions/swarmaurora/index.html",
"pyaurorax/conjunctions/swarmaurora/tools.html",
"pyaurorax/util/index.html",
"pyaurorax/util/calculate_btrace.html",
"pyaurorax/api/index.html",
"pyaurorax/api/classes/index.html",
"pyaurorax/api/classes/urls.html",
"pyaurorax/api/classes/request.html",
"pyaurorax/api/classes/response.html",
"pyaurorax/api/api.html",
"pyaurorax/requests/index.html",
"pyaurorax/requests/requests.html",
"pyaurorax/location.html"
];
INDEX=[
{
"ref":"pyaurorax",
"url":0,
"doc":"The PyAuroraX package provides a way to interact with the [AuroraX API](https: aurorax.space/data/apiLibraries). It is intended to provide an intuitive process for those in the space physics and related communities to programmatically query AuroraX's vast database for conjunctions, ephemeris or data product records, data availability information, and more. PyAuroraX requires Python 3.6, 3.7, 3.8, or 3.9 (Python 3.10 currently not supported). Check out this project on [GitHub](https: github.com/aurorax-space/pyaurorax) and explore the evolving ecosystem of visualizations, tools, and data at [AuroraX](https: aurorax.space/). For an overview of usage and examples, visit the [AuroraX Documentation website](https: docs.aurorax.space/code/overview). Details of functionality and options are available in the [API reference](https: docs.aurorax.space/code/pyaurorax_api_reference/pyaurorax/). Installation:   $ python -m pip install pyaurorax   Basic usage:   > import pyaurorax  "
},
{
"ref":"pyaurorax.exceptions",
"url":1,
"doc":"The exceptions module contains exceptions unique to the PyAuroraX library"
},
{
"ref":"pyaurorax.exceptions.AuroraXException",
"url":1,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"pyaurorax.exceptions.AuroraXNotFoundException",
"url":1,
"doc":"The AuroraX record was not found"
},
{
"ref":"pyaurorax.exceptions.AuroraXDuplicateException",
"url":1,
"doc":"A duplicate record already exists"
},
{
"ref":"pyaurorax.exceptions.AuroraXValidationException",
"url":1,
"doc":"Validation of data failed"
},
{
"ref":"pyaurorax.exceptions.AuroraXUnexpectedContentTypeException",
"url":1,
"doc":"The API responded with an unexpected content type"
},
{
"ref":"pyaurorax.exceptions.AuroraXMaxRetriesException",
"url":1,
"doc":"The maximum number of retries for the request has been reached"
},
{
"ref":"pyaurorax.exceptions.AuroraXBadParametersException",
"url":1,
"doc":"Bad parameters were given in the request"
},
{
"ref":"pyaurorax.exceptions.AuroraXUnauthorizedException",
"url":1,
"doc":"A privileged operation was attempted without authorization"
},
{
"ref":"pyaurorax.exceptions.AuroraXConflictException",
"url":1,
"doc":"A conflict occurred while modifying records"
},
{
"ref":"pyaurorax.exceptions.AuroraXUploadException",
"url":1,
"doc":"Error occurred during upload operation"
},
{
"ref":"pyaurorax.exceptions.AuroraXUnexpectedEmptyResponse",
"url":1,
"doc":"An empty response was received when it wasn't expected"
},
{
"ref":"pyaurorax.exceptions.AuroraXDataRetrievalException",
"url":1,
"doc":"Error occurred while retrieving search data"
},
{
"ref":"pyaurorax.exceptions.AuroraXTimeoutException",
"url":1,
"doc":"A timeout was reached while communicating with the AuroraX API"
},
{
"ref":"pyaurorax.exceptions.AuroraXSearchException",
"url":1,
"doc":"An error occured in the API while performing a search"
},
{
"ref":"pyaurorax.ephemeris",
"url":2,
"doc":"The ephemeris module is used to search and upload ephemeris records within AuroraX. Note that all functions and classes from submodules are all imported at this level of the ephemeris module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.ephemeris.search",
"url":2,
"doc":"Search for ephemeris records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: output poll times and other progress messages, defaults to False Returns: A pyaurorax.ephemeris.Search object Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.upload",
"url":2,
"doc":"Upload ephemeris records to AuroraX Args: identifier: AuroraX data source ID records: ephemeris records to upload validate_source: validate all records before uploading, defaults to False Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUploadException: upload error pyaurorax.exceptions.AuroraXValidationException: data source validation error",
"func":1
},
{
"ref":"pyaurorax.ephemeris.delete",
"url":2,
"doc":"Delete ephemeris records between a timeframe. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start: timestamp marking beginning of range to delete records for, inclusive end: timestamp marking end of range to delete records for, inclusive Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.describe",
"url":2,
"doc":"Describe an ephemeris search as a \"SQL-like\" string Args: search_obj: the ephemeris search object to describe Returns: the \"SQL-like\" string describing the ephemeris search object",
"func":1
},
{
"ref":"pyaurorax.ephemeris.get_request_url",
"url":2,
"doc":"Get the ephemeris search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted ephemeris searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Ephemeris",
"url":2,
"doc":"Ephemeris object Attributes: data_source: data source that the ephemeris record is associated with epoch: timestamp for the record (assumed it is in UTC) location_geo: Location object containing geographic latitude and longitude location_gsm: Location object containing GSM latitude and longitude (leave empty for data sources with a type of 'ground') nbtrace: Location object with north B-trace geographic latitude and longitude sbtrace: Location object with south B-trace geographic latitude and longitude metadata: metadata for this record (arbitrary keys and values) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.data_source",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.epoch",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.location_geo",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.location_gsm",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.nbtrace",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.sbtrace",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.metadata",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.Ephemeris.to_json_serializable",
"url":2,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search",
"url":2,
"doc":"Class representing an ephemeris search Note: At least one search criteria from programs, platforms, or instrument_types must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the ephemeris records found logs: all log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.ephemeris.Search.query",
"url":2,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.ephemeris.Search.execute",
"url":2,
"doc":"Initiate ephemeris search request Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.update_status",
"url":2,
"doc":"Update the status of this ephemeris search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.check_for_data",
"url":2,
"doc":"Check to see if data is available for this ephemeris search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.get_data",
"url":2,
"doc":"Retrieve the data available for this ephemeris search request",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.wait",
"url":2,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.ephemeris.Search.cancel",
"url":2,
"doc":"Cancel the ephemeris search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.ephemeris.ephemeris",
"url":3,
"doc":"Functions for performing ephemeris searches"
},
{
"ref":"pyaurorax.ephemeris.ephemeris.search",
"url":3,
"doc":"Search for ephemeris records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: output poll times and other progress messages, defaults to False Returns: A pyaurorax.ephemeris.Search object Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.ephemeris.upload",
"url":3,
"doc":"Upload ephemeris records to AuroraX Args: identifier: AuroraX data source ID records: ephemeris records to upload validate_source: validate all records before uploading, defaults to False Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUploadException: upload error pyaurorax.exceptions.AuroraXValidationException: data source validation error",
"func":1
},
{
"ref":"pyaurorax.ephemeris.ephemeris.delete",
"url":3,
"doc":"Delete ephemeris records between a timeframe. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start: timestamp marking beginning of range to delete records for, inclusive end: timestamp marking end of range to delete records for, inclusive Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.ephemeris.describe",
"url":3,
"doc":"Describe an ephemeris search as a \"SQL-like\" string Args: search_obj: the ephemeris search object to describe Returns: the \"SQL-like\" string describing the ephemeris search object",
"func":1
},
{
"ref":"pyaurorax.ephemeris.ephemeris.get_request_url",
"url":3,
"doc":"Get the ephemeris search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted ephemeris searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes",
"url":4,
"doc":"Separted classes and functions used by the ephemeris module. Note that these classes and variables are all imported higher up at the top of the ephemeris module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris",
"url":5,
"doc":"Class definition for an ephemeris record"
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris",
"url":5,
"doc":"Ephemeris object Attributes: data_source: data source that the ephemeris record is associated with epoch: timestamp for the record (assumed it is in UTC) location_geo: Location object containing geographic latitude and longitude location_gsm: Location object containing GSM latitude and longitude (leave empty for data sources with a type of 'ground') nbtrace: Location object with north B-trace geographic latitude and longitude sbtrace: Location object with south B-trace geographic latitude and longitude metadata: metadata for this record (arbitrary keys and values) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.data_source",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.epoch",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.location_geo",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.location_gsm",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.nbtrace",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.sbtrace",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.metadata",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.ephemeris.classes.ephemeris.Ephemeris.to_json_serializable",
"url":5,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search",
"url":6,
"doc":"Class definition for an ephemeris search"
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search",
"url":6,
"doc":"Class representing an ephemeris search Note: At least one search criteria from programs, platforms, or instrument_types must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None e.g. { \"key\": \"string\", \"operator\": \"=\", \"values\": [ \"string\" ] } metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the ephemeris records found logs: all log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.query",
"url":6,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.execute",
"url":6,
"doc":"Initiate ephemeris search request Raises: pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.update_status",
"url":6,
"doc":"Update the status of this ephemeris search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.check_for_data",
"url":6,
"doc":"Check to see if data is available for this ephemeris search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.get_data",
"url":6,
"doc":"Retrieve the data available for this ephemeris search request",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.wait",
"url":6,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.ephemeris.classes.search.Search.cancel",
"url":6,
"doc":"Cancel the ephemeris search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products",
"url":7,
"doc":"The data_products module is used to search and upload data product records within AuroraX. One example of a data product is a keogram. Note that all functions and classes from submodules are all imported at this level of the data_products module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.data_products.DATA_PRODUCT_TYPE_KEOGRAM",
"url":7,
"doc":"Data product type for keograms. Keograms are a 2-D representation of a series of images, and are one of the most popular data products that auroral science uses. More information can be found at https: docs.aurorax.space/about_the_data/standards/ keograms."
},
{
"ref":"pyaurorax.data_products.DATA_PRODUCT_TYPE_MONTAGE",
"url":7,
"doc":"Data product type for montages. Like keograms, montages are another representation of a series of images. However, montages are not a 2D representation but rather a collage of thumnbail images for the period of time. An example can be found at https: data.phys.ucalgary.ca/sort_by_project/THEMIS/asi/stream2/2021/12/28/gill_themis19/20211228__gill_themis19_full-montage.pgm.jpg"
},
{
"ref":"pyaurorax.data_products.DATA_PRODUCT_TYPE_MOVIE",
"url":7,
"doc":"Data product type for movies. Movies are timelapse video files of auroral data, usually as MP4 or MPEG. They can consist of frames for a whole night, or an hour, and can be at any cadence that is most appropriate."
},
{
"ref":"pyaurorax.data_products.DATA_PRODUCT_TYPE_SUMMARY_PLOT",
"url":7,
"doc":"Data product type for summary plots. A summary plot can be any type of plot that shows auroral data in a summary format, for example a background-subtracted meridian scanning photometer plot showing counts in Rayleighs."
},
{
"ref":"pyaurorax.data_products.DATA_PRODUCT_TYPE_DATA_AVAILABILITY",
"url":7,
"doc":"Data product type for data availability. The AuroraX data availability system does not account for times when data was not expected to be collected, such as summer shutdowns due to inadequate night hours. This data product type for 'data availbility' is meant to be used as a smarter data availability mechanism for Aurora."
},
{
"ref":"pyaurorax.data_products.search",
"url":7,
"doc":"Search for data product records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None data_product_types: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. Options are in the pyaurorax.data_products module, or at the top level using the pyaurorax.DATA_PRODUCT_TYPE variables. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: output poll times and other progress messages, defaults to False Returns: a pyaurorax.data_products.Search object",
"func":1
},
{
"ref":"pyaurorax.data_products.upload",
"url":7,
"doc":"Upload data product records to AuroraX Args: identifier: the AuroraX data source ID records: data product records to upload validate_source: validate all records before uploading, defaults to False Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUploadException: upload error pyaurorax.exceptions.AuroraXValidationException: data source validation error",
"func":1
},
{
"ref":"pyaurorax.data_products.delete_urls",
"url":7,
"doc":"Delete data products by URL. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) urls: URLs of data product records to delete Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXBadParametersException: invalid parameters entered pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products.delete",
"url":7,
"doc":"Delete data products associated with a data source within a date range. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start: timestamp marking beginning of range to delete records for, inclusive end: timestamp marking end of range to delete records for, inclusive data_product_types: specific types of data product to delete, e.g. [\"keogram\", \"movie\"]. If omitted, all data product types will be deleted. Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products.describe",
"url":7,
"doc":"Describe a data product search as an \"SQL-like\" string Args: search_obj: the data product search object to describe Returns: the \"SQL-like\" string describing the data product search object",
"func":1
},
{
"ref":"pyaurorax.data_products.get_request_url",
"url":7,
"doc":"Get the data product search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted data product searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.data_products.DataProduct",
"url":7,
"doc":"Data product object Attributes: data_source: data source that the ephemeris record is associated with data_product_type: data product type (\"keogram\", \"movie\", \"summary_plot\") start: starting timestamp for the record (assumed it is in UTC), inclusive end: ending timestamp for the record (assumed it is in UTC), inclusive url: the URL of data product metdata: metadata for this record (arbitrary keys and values) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.data_products.DataProduct.data_source",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.data_product_type",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.start",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.end",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.url",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.metadata",
"url":7,
"doc":""
},
{
"ref":"pyaurorax.data_products.DataProduct.to_json_serializable",
"url":7,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.data_products.Search",
"url":7,
"doc":"Class representing a data product search Attributes: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of program names to search platforms: list of platform names to search instrument_types: list of instrument types to search data_product_types: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. Options are in the pyaurorax.data_products module, or at the top level using the pyaurorax.DATA_PRODUCT_TYPE variables. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the data product records found logs: all log messages outputed by the AuroraX API for this request"
},
{
"ref":"pyaurorax.data_products.Search.query",
"url":7,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.data_products.Search.execute",
"url":7,
"doc":"Initiate a data product search request",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.update_status",
"url":7,
"doc":"Update the status of this data product search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.check_for_data",
"url":7,
"doc":"Check to see if data is available for this data product search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.get_data",
"url":7,
"doc":"Retrieve the data available for this data product search request",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.wait",
"url":7,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.data_products.Search.cancel",
"url":7,
"doc":"Cancel the data product search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products",
"url":8,
"doc":"Functions for performing data product searches"
},
{
"ref":"pyaurorax.data_products.data_products.search",
"url":8,
"doc":"Search for data product records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of programs to search through, defaults to None platforms: list of platforms to search through, defaults to None instrument_types: list of instrument types to search through, defaults to None data_product_types: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. Options are in the pyaurorax.data_products module, or at the top level using the pyaurorax.DATA_PRODUCT_TYPE variables. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: output poll times and other progress messages, defaults to False Returns: a pyaurorax.data_products.Search object",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products.upload",
"url":8,
"doc":"Upload data product records to AuroraX Args: identifier: the AuroraX data source ID records: data product records to upload validate_source: validate all records before uploading, defaults to False Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUploadException: upload error pyaurorax.exceptions.AuroraXValidationException: data source validation error",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products.delete_urls",
"url":8,
"doc":"Delete data products by URL. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) urls: URLs of data product records to delete Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXBadParametersException: invalid parameters entered pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products.delete",
"url":8,
"doc":"Delete data products associated with a data source within a date range. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source: data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start: timestamp marking beginning of range to delete records for, inclusive end: timestamp marking end of range to delete records for, inclusive data_product_types: specific types of data product to delete, e.g. [\"keogram\", \"movie\"]. If omitted, all data product types will be deleted. Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products.describe",
"url":8,
"doc":"Describe a data product search as an \"SQL-like\" string Args: search_obj: the data product search object to describe Returns: the \"SQL-like\" string describing the data product search object",
"func":1
},
{
"ref":"pyaurorax.data_products.data_products.get_request_url",
"url":8,
"doc":"Get the data product search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted data product searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.data_products.classes",
"url":9,
"doc":"Separted classes and functions used by the data_products module. Note that these classes and variables are all imported higher up at the top of the data_products module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.data_products.classes.data_product",
"url":10,
"doc":"Class definition for a data product"
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct",
"url":10,
"doc":"Data product object Attributes: data_source: data source that the ephemeris record is associated with data_product_type: data product type (\"keogram\", \"movie\", \"summary_plot\") start: starting timestamp for the record (assumed it is in UTC), inclusive end: ending timestamp for the record (assumed it is in UTC), inclusive url: the URL of data product metdata: metadata for this record (arbitrary keys and values) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.data_source",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.data_product_type",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.start",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.end",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.url",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.metadata",
"url":10,
"doc":""
},
{
"ref":"pyaurorax.data_products.classes.data_product.DataProduct.to_json_serializable",
"url":10,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search",
"url":11,
"doc":"Class definition for a data product search"
},
{
"ref":"pyaurorax.data_products.classes.search.Search",
"url":11,
"doc":"Class representing a data product search Attributes: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) programs: list of program names to search platforms: list of platform names to search instrument_types: list of instrument types to search data_product_types: list of dictionaries describing data product types to filter on e.g. \"keogram\", defaults to None. Options are in the pyaurorax.data_products module, or at the top level using the pyaurorax.DATA_PRODUCT_TYPE variables. metadata_filters: list of dictionaries describing metadata keys and values to filter on, defaults to None Example: [{ \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [\"north polar cap\"] }] metadata_filters_logical_operator: the logical operator to use when evaluating metadata filters (either 'AND' or 'OR'), defaults to \"AND\" response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the data product records found logs: all log messages outputed by the AuroraX API for this request"
},
{
"ref":"pyaurorax.data_products.classes.search.Search.query",
"url":11,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.data_products.classes.search.Search.execute",
"url":11,
"doc":"Initiate a data product search request",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search.Search.update_status",
"url":11,
"doc":"Update the status of this data product search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search.Search.check_for_data",
"url":11,
"doc":"Check to see if data is available for this data product search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search.Search.get_data",
"url":11,
"doc":"Retrieve the data available for this data product search request",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search.Search.wait",
"url":11,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.data_products.classes.search.Search.cancel",
"url":11,
"doc":"Cancel the data product search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.sources",
"url":12,
"doc":"AuroraX data sources are unique instruments that produce ephemeris or data product records. Note that all functions and classes from submodules are all imported at this level of the sources module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.sources.FORMAT_BASIC_INFO",
"url":12,
"doc":"Data sources are returned with the basic information: identifier, program, platform, instrument type, source type, and display name"
},
{
"ref":"pyaurorax.sources.FORMAT_BASIC_INFO_WITH_METADATA",
"url":12,
"doc":"Data sources are returned with the basic information, plus the metadata"
},
{
"ref":"pyaurorax.sources.FORMAT_FULL_RECORD",
"url":12,
"doc":"Data sources are returned with all information about them. This includes at least: identifier, program, platform, instrument type, source type, display name, metadata, owner, maintainers, the ephemeris metadata schema, and the data products meatadata schema."
},
{
"ref":"pyaurorax.sources.FORMAT_IDENTIFIER_ONLY",
"url":12,
"doc":"Data sources are returned with only the identifier"
},
{
"ref":"pyaurorax.sources.FORMAT_DEFAULT",
"url":12,
"doc":"Default data source format (basic info)"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_NOT_APPLICABLE",
"url":12,
"doc":"Data source 'source_type' category for a specially-curated event list"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_EVENT_LIST",
"url":12,
"doc":"Data source 'source_type' category for a specially-curated event list"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_GROUND",
"url":12,
"doc":"Data source 'source_type' category for a ground instrument"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_HEO",
"url":12,
"doc":"Data source 'source_type' category for a highly-elliptical orbiting satellite"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_LEO",
"url":12,
"doc":"Data source 'source_type' category for a low-earth orbiting satellite"
},
{
"ref":"pyaurorax.sources.SOURCE_TYPE_LUNAR",
"url":12,
"doc":"Data source 'source_type' category for a lunar orbiting satellite"
},
{
"ref":"pyaurorax.sources.list",
"url":12,
"doc":"Retrieve all data source records (using params to filter as desired) Args: program: the program to filter for, defaults to None platform: the platform to filter for, defaults to None instrument_type: the instrument type to filter for, defaults to None source_type: the data source type to filter for, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: the owner's email address to filter for, defaults to None format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False include_na: include \"not_applicable\" special data sources (ie. adhoc sources) Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.search",
"url":12,
"doc":"Search for data source records (using params to filter as desired) This is very similar to the 'list' function, however multiple programs, platforms, and/or instrument types can be supplied to this function. The 'list' function only supports single values for those parameters. Args: programs: the programs to filter for, defaults to [] platforms: the platforms to filter for, defaults to [] instrument_type: the instrument types to filter for, defaults to [] format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.get",
"url":12,
"doc":"Retrieve a specific data source record Args: program: the program name platform: the platform name instrument_type: the instrument type name format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: the data source matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found",
"func":1
},
{
"ref":"pyaurorax.sources.get_using_filters",
"url":12,
"doc":"Retrieve all data source records matching a filter Args: program: the program to filter for, defaults to None platform: the platform to filter for, defaults to None instrument_type: the instrument type to filter for, defaults to None source_type: the data source type to filter for, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: the owner's email address to filter for, defaults to None format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False include_na: include \"not_applicable\" special data sources (ie. adhoc sources) Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.get_using_identifier",
"url":12,
"doc":"Retrieve data source record matching an identifier Args: identifier: the AuroraX unique ID for the data source format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: the data source matching the identifier Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.get_stats",
"url":12,
"doc":"Retrieve statistics for a data source Args: identifier: the AuroraX unique ID for the data source format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: retrieve the stats using a slower, but more accurate method, defaults to False Returns: the data source including additional stats information about it Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.add",
"url":12,
"doc":"Add a new data source to AuroraX Args: data_source: the data source to add (note: it must be a fully-defined DataSource object) Returns: the newly created data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXDuplicateException: duplicate data source, already exists",
"func":1
},
{
"ref":"pyaurorax.sources.delete",
"url":12,
"doc":"Delete a data source from AuroraX Args: identifier: the AuroraX unique ID for the data source Returns: 0 on success, raises error if an issue was encountered Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXConflictException: conflict of some type",
"func":1
},
{
"ref":"pyaurorax.sources.update",
"url":12,
"doc":"Update a data source in AuroraX This operation will fully replace the data source with the data_source argument passed in. Be sure that the data_source object is complete. If the data source is missing the value for identifier, program, platform, instrument type, source type, or display name, the update will fail and raise a AuroraXBadParametersException exception. Args: data_source: the data source to update (note: it must be a fully-defined DataSource object with the values set to what you want AuroraX to update it to) Returns: the updated data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.sources.update_partial",
"url":12,
"doc":"Partially update a data source in AuroraX (omitted fields are ignored) Args: identifier: the AuroraX unique ID for the data source, defaults to None program: the new program for the data source, defaults to None platform: the new platform for the data source, defaults to None instrument_type: the new instrument type for the data source, defaults to None source_type: the new source type for the data source, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. display_name: the new display name for the data source, defaults to None metadata: the new metadata for the data source, defaults to None maintainers: the new maintainer AuroraX account email addresses, defaults to None ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with the data source, defaults to None data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with the data source, defaults to None Returns: the updated data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.sources.DataSource",
"url":12,
"doc":"Data source object Attributes: identifier: the unique AuroraX ID for this data source program: the program for this data source platform: the platform for this data source instrument_type: the instrument type for this data source source_type: the data source type for this data source. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. display_name: the display name for this data source metadata: metadata for this data source (arbitrary keys and values) owner: the owner's email address of this data source maintainers: the email addresses of AuroraX accounts that can alter this data source and its associated records ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with this data source data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with this data source format: the format used when printing the data source, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.DataSource.identifier",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.program",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.platform",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.instrument_type",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.source_type",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.display_name",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.metadata",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.owner",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.maintainers",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.ephemeris_metadata_schema",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.data_product_metadata_schema",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.format",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSource.stats",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics",
"url":12,
"doc":"Data source statistics object Attributes: earliest_ephemeris_loaded: timestamp of the earliest ephemeris record latest_ephemeris_loaded: timestamp of the latest ephemeris record ephemeris_count: total number of ephemeris records for this data source earliest_data_product_loaded: timestamp of the earliest data_product record latest_data_product_loaded: timestamp of the latest data product record data_product_count: total number of ephemeris records for this data source Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.earliest_ephemeris_loaded",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.latest_ephemeris_loaded",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.ephemeris_count",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.earliest_data_product_loaded",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.latest_data_product_loaded",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.DataSourceStatistics.data_product_count",
"url":12,
"doc":""
},
{
"ref":"pyaurorax.sources.sources",
"url":13,
"doc":"Functions for interacting with data sources"
},
{
"ref":"pyaurorax.sources.sources.list",
"url":13,
"doc":"Retrieve all data source records (using params to filter as desired) Args: program: the program to filter for, defaults to None platform: the platform to filter for, defaults to None instrument_type: the instrument type to filter for, defaults to None source_type: the data source type to filter for, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: the owner's email address to filter for, defaults to None format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False include_na: include \"not_applicable\" special data sources (ie. adhoc sources) Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.sources.search",
"url":13,
"doc":"Search for data source records (using params to filter as desired) This is very similar to the 'list' function, however multiple programs, platforms, and/or instrument types can be supplied to this function. The 'list' function only supports single values for those parameters. Args: programs: the programs to filter for, defaults to [] platforms: the platforms to filter for, defaults to [] instrument_type: the instrument types to filter for, defaults to [] format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.sources.get",
"url":13,
"doc":"Retrieve a specific data source record Args: program: the program name platform: the platform name instrument_type: the instrument type name format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: the data source matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: source not found",
"func":1
},
{
"ref":"pyaurorax.sources.sources.get_using_filters",
"url":13,
"doc":"Retrieve all data source records matching a filter Args: program: the program to filter for, defaults to None platform: the platform to filter for, defaults to None instrument_type: the instrument type to filter for, defaults to None source_type: the data source type to filter for, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: the owner's email address to filter for, defaults to None format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. order: the value to order results by (identifier, program, platform, instrument_type, display_name, owner), defaults to \"identifier\" include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False include_na: include \"not_applicable\" special data sources (ie. adhoc sources) Returns: any data sources matching the requested parameters Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.sources.get_using_identifier",
"url":13,
"doc":"Retrieve data source record matching an identifier Args: identifier: the AuroraX unique ID for the data source format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. include_stats: include additional stats information about the data source (note: slower response time since an additional request must be done for each data source), defaults to False Returns: the data source matching the identifier Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.sources.get_stats",
"url":13,
"doc":"Retrieve statistics for a data source Args: identifier: the AuroraX unique ID for the data source format: the format of the data sources returned, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: retrieve the stats using a slower, but more accurate method, defaults to False Returns: the data source including additional stats information about it Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error",
"func":1
},
{
"ref":"pyaurorax.sources.sources.add",
"url":13,
"doc":"Add a new data source to AuroraX Args: data_source: the data source to add (note: it must be a fully-defined DataSource object) Returns: the newly created data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXDuplicateException: duplicate data source, already exists",
"func":1
},
{
"ref":"pyaurorax.sources.sources.delete",
"url":13,
"doc":"Delete a data source from AuroraX Args: identifier: the AuroraX unique ID for the data source Returns: 0 on success, raises error if an issue was encountered Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXConflictException: conflict of some type",
"func":1
},
{
"ref":"pyaurorax.sources.sources.update",
"url":13,
"doc":"Update a data source in AuroraX This operation will fully replace the data source with the data_source argument passed in. Be sure that the data_source object is complete. If the data source is missing the value for identifier, program, platform, instrument type, source type, or display name, the update will fail and raise a AuroraXBadParametersException exception. Args: data_source: the data source to update (note: it must be a fully-defined DataSource object with the values set to what you want AuroraX to update it to) Returns: the updated data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.sources.sources.update_partial",
"url":13,
"doc":"Partially update a data source in AuroraX (omitted fields are ignored) Args: identifier: the AuroraX unique ID for the data source, defaults to None program: the new program for the data source, defaults to None platform: the new platform for the data source, defaults to None instrument_type: the new instrument type for the data source, defaults to None source_type: the new source type for the data source, defaults to None. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. display_name: the new display name for the data source, defaults to None metadata: the new metadata for the data source, defaults to None maintainers: the new maintainer AuroraX account email addresses, defaults to None ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with the data source, defaults to None data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with the data source, defaults to None Returns: the updated data source Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXNotFoundException: data source not found pyaurorax.exceptions.AuroraXBadParametersException: missing parameters",
"func":1
},
{
"ref":"pyaurorax.sources.classes",
"url":14,
"doc":"Separted classes and functions used by the sources module. Note that these classes and variables are all imported higher up at the top of the sources module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.sources.classes.data_source",
"url":15,
"doc":"Class definition for a data source"
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource",
"url":15,
"doc":"Data source object Attributes: identifier: the unique AuroraX ID for this data source program: the program for this data source platform: the platform for this data source instrument_type: the instrument type for this data source source_type: the data source type for this data source. Options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. display_name: the display name for this data source metadata: metadata for this data source (arbitrary keys and values) owner: the owner's email address of this data source maintainers: the email addresses of AuroraX accounts that can alter this data source and its associated records ephemeris_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with this data source data_product_metadata_schema: a list of dictionaries capturing the metadata keys and values that can appear in data product records associated with this data source format: the format used when printing the data source, defaults to \"full_record\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.identifier",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.program",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.platform",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.instrument_type",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.source_type",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.display_name",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.metadata",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.owner",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.maintainers",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.ephemeris_metadata_schema",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.data_product_metadata_schema",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.format",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source.DataSource.stats",
"url":15,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats",
"url":16,
"doc":"Class definition for a statistics about a data source"
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics",
"url":16,
"doc":"Data source statistics object Attributes: earliest_ephemeris_loaded: timestamp of the earliest ephemeris record latest_ephemeris_loaded: timestamp of the latest ephemeris record ephemeris_count: total number of ephemeris records for this data source earliest_data_product_loaded: timestamp of the earliest data_product record latest_data_product_loaded: timestamp of the latest data product record data_product_count: total number of ephemeris records for this data source Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.earliest_ephemeris_loaded",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.latest_ephemeris_loaded",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.ephemeris_count",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.earliest_data_product_loaded",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.latest_data_product_loaded",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.sources.classes.data_source_stats.DataSourceStatistics.data_product_count",
"url":16,
"doc":""
},
{
"ref":"pyaurorax.metadata",
"url":17,
"doc":"AuroraX metadata schemas describe the intended structure of metadata stored in ephemeris and data product records. This module provides functions for interacting with the schemas. Note that all functions and classes from submodules are all imported at this level of the metadata module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.metadata.get_data_products_schema",
"url":17,
"doc":"Retrieve the data products metadata schema for a data source Args: identifier: the AuroraX data source ID Returns: the data products metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.metadata.get_ephemeris_schema",
"url":17,
"doc":"Retrieve the ephemeris metadata schema for a data source Args: identifier: the AuroraX data source ID Returns: the ephemeris metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.metadata.validate",
"url":17,
"doc":"Validate a metadata record against a schema. This checks that the key names match and there aren't fewer or more keys than expected. Args: schema: the metadata schema to validate against record: metadata record to validate Returns: True if the metadata record is valid, False if it is not",
"func":1
},
{
"ref":"pyaurorax.metadata.metadata",
"url":18,
"doc":"Functions for interacting with metadata filters"
},
{
"ref":"pyaurorax.metadata.metadata.validate",
"url":18,
"doc":"Validate a metadata record against a schema. This checks that the key names match and there aren't fewer or more keys than expected. Args: schema: the metadata schema to validate against record: metadata record to validate Returns: True if the metadata record is valid, False if it is not",
"func":1
},
{
"ref":"pyaurorax.metadata.metadata.get_ephemeris_schema",
"url":18,
"doc":"Retrieve the ephemeris metadata schema for a data source Args: identifier: the AuroraX data source ID Returns: the ephemeris metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.metadata.metadata.get_data_products_schema",
"url":18,
"doc":"Retrieve the data products metadata schema for a data source Args: identifier: the AuroraX data source ID Returns: the data products metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.availability",
"url":19,
"doc":"The availability module provides functions to quickly determine what data exists on the AuroraX platform. Note that all functions and classes from submodules are all imported at this level of the availability module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.availability.ephemeris",
"url":19,
"doc":"Retrieve information about the number of existing ephemeris records Args: start: start date to retrieve availability info from (inclusive) end: end date to retrieve availability info until (inclusive) program: program name to filter sources by, defaults to None platform: platform name to filter sources by, defaults to None instrument_type: instrument type to filter sources by, defaults to None source_type: source type to filter sources by, defaults to None. Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: owner email address to filter sources by, defaults to None format: the format of the data sources returned, defaults to \"basic_info\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: query the data using a slower, but more accurate method, defaults to False Returns: ephemeris availability information matching the requested parameters",
"func":1
},
{
"ref":"pyaurorax.availability.data_products",
"url":19,
"doc":"Retrieve information about the number of existing data product records Args: start: start date to retrieve availability info from (inclusive) end: end date to retrieve availability info until (inclusive) program: program name to filter sources by, defaults to None platform: platform name to filter sources by, defaults to None instrument_type: instrument type to filter sources by, defaults to None source_type: source type to filter sources by, defaults to None. Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: owner email address to filter sources by, defaults to None format: the format of the data sources returned, defaults to \"basic_info\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: query the data using a slower, but more accurate method, defaults to False Returns: data product availability information matching the requested parameters",
"func":1
},
{
"ref":"pyaurorax.availability.AvailabilityResult",
"url":19,
"doc":"Availability information object Attributes: data_source: the data source that the records are associated with available_data_products: the data product availability information available_ephemeris: the ephemeris availability information Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.availability.AvailabilityResult.data_source",
"url":19,
"doc":""
},
{
"ref":"pyaurorax.availability.AvailabilityResult.available_data_products",
"url":19,
"doc":""
},
{
"ref":"pyaurorax.availability.AvailabilityResult.available_ephemeris",
"url":19,
"doc":""
},
{
"ref":"pyaurorax.availability.availability",
"url":20,
"doc":"Functions for retrieving availablity information"
},
{
"ref":"pyaurorax.availability.availability.ephemeris",
"url":20,
"doc":"Retrieve information about the number of existing ephemeris records Args: start: start date to retrieve availability info from (inclusive) end: end date to retrieve availability info until (inclusive) program: program name to filter sources by, defaults to None platform: platform name to filter sources by, defaults to None instrument_type: instrument type to filter sources by, defaults to None source_type: source type to filter sources by, defaults to None. Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: owner email address to filter sources by, defaults to None format: the format of the data sources returned, defaults to \"basic_info\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: query the data using a slower, but more accurate method, defaults to False Returns: ephemeris availability information matching the requested parameters",
"func":1
},
{
"ref":"pyaurorax.availability.availability.data_products",
"url":20,
"doc":"Retrieve information about the number of existing data product records Args: start: start date to retrieve availability info from (inclusive) end: end date to retrieve availability info until (inclusive) program: program name to filter sources by, defaults to None platform: platform name to filter sources by, defaults to None instrument_type: instrument type to filter sources by, defaults to None source_type: source type to filter sources by, defaults to None. Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.SOURCE_TYPE_ variables. owner: owner email address to filter sources by, defaults to None format: the format of the data sources returned, defaults to \"basic_info\". Other options are in the pyaurorax.sources module, or at the top level using the pyaurorax.FORMAT_ variables. slow: query the data using a slower, but more accurate method, defaults to False Returns: data product availability information matching the requested parameters",
"func":1
},
{
"ref":"pyaurorax.availability.classes",
"url":21,
"doc":"Separted classes and functions used by the availability module. Note that these classes and variables are all imported higher up at the top of the availability module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.availability.classes.availability_result",
"url":22,
"doc":"Class definition used for containing Availability information"
},
{
"ref":"pyaurorax.availability.classes.availability_result.AvailabilityResult",
"url":22,
"doc":"Availability information object Attributes: data_source: the data source that the records are associated with available_data_products: the data product availability information available_ephemeris: the ephemeris availability information Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.availability.classes.availability_result.AvailabilityResult.data_source",
"url":22,
"doc":""
},
{
"ref":"pyaurorax.availability.classes.availability_result.AvailabilityResult.available_data_products",
"url":22,
"doc":""
},
{
"ref":"pyaurorax.availability.classes.availability_result.AvailabilityResult.available_ephemeris",
"url":22,
"doc":""
},
{
"ref":"pyaurorax.conjunctions",
"url":23,
"doc":"The conjunction module is used for finding conjunctions between groupings of data sources. Note that all functions and classes from submodules are all imported at this level of the conjunctions module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.conjunctions.CONJUNCTION_TYPE_NBTRACE",
"url":23,
"doc":"Conjunction search 'conjunction_type' category for finding conjunctions using the north B-trace data"
},
{
"ref":"pyaurorax.conjunctions.CONJUNCTION_TYPE_SBTRACE",
"url":23,
"doc":"Conjunction search 'conjunction_type' category for finding conjunctions using the south B-trace data"
},
{
"ref":"pyaurorax.conjunctions.search",
"url":23,
"doc":"Search for conjunctions between data sources By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) distance: the maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground: list of ground instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"calgary_apa_ml_v1\", \"operator\": \"in\", \"values\": [ \"classified as APA\" ] } ] } }] space: list of one or more space instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [ \"north auroral oval\" ] } ] }, \"hemisphere\": [ \"northern\" ] }] events: list of one or more events search parameters, defaults to [] Example: [{ \"programs\": [ \"events\" ], \"platforms\": [ \"toshi\" ], \"instrument_types\": [ \"substorm onsets\" ] }] conjunction_types: list of conjunction types, defaults to [] (meaning all conjunction types). Options are in the pyaurorax.conjunctions module, or at the top level using the pyaurorax.CONJUNCTION_TYPE_ variables. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. Note - this parameter is under active development and still considered \"alpha\". response_format: JSON representation of desired data response format poll_interval: seconds to wait between polling calls, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: show the progress of the request using the request log, defaults Returns: a pyaurorax.conjunctions.Search object",
"func":1
},
{
"ref":"pyaurorax.conjunctions.describe",
"url":23,
"doc":"Describe a conjunction search as an \"SQL-like\" string Args: search_obj: the conjunction search to describe Returns: the \"SQL-like\" string describing the conjunction search object",
"func":1
},
{
"ref":"pyaurorax.conjunctions.get_request_url",
"url":23,
"doc":"Get the conjunction search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted conjunction searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Conjunction",
"url":23,
"doc":"Conjunction object Attributes: conjunction_type: the type of location data used when the conjunction was found (either be 'nbtrace' or 'sbtrace') start: start timestamp of the conjunction end: end timestamp of the conjunction data_sources: data sources in the conjunction min_distance: minimum kilometer distance of the conjunction max_distance: maximum kilometer distance of the conjunction events: the sub-conjunctions that make up this over-arching conjunction (the conjunctions between each set of two data sources) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.conjunctions.Conjunction.conjunction_type",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.start",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.end",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.data_sources",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.min_distance",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.max_distance",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Conjunction.events",
"url":23,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.Search",
"url":23,
"doc":"Class representing a conjunction search Attributes: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) distance: the maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground: list of ground instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"calgary_apa_ml_v1\", \"operator\": \"in\", \"values\": [ \"classified as APA\" ] } ] } }] space: list of one or more space instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [ \"north auroral oval\" ] } ] }, \"hemisphere\": [ \"northern\" ] }] events: list of one or more events search parameters, defaults to [] Example: [{ \"programs\": [ \"events\" ], \"platforms\": [ \"toshi\" ], \"instrument_types\": [ \"substorm onsets\" ] }] conjunction_types: list of conjunction types, defaults to [\"nbtrace\"]. Options are in the pyaurorax.conjunctions module, or at the top level using the pyaurorax.CONJUNCTION_TYPE_ variables. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. Note - this parameter is under active development and still considered \"alpha\". response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the conjunctions found logs: all log messages outputed by the AuroraX API for this request Returns: a pyaurorax.conjunctions.Search object"
},
{
"ref":"pyaurorax.conjunctions.Search.check_criteria_block_count_validity",
"url":23,
"doc":"Check the number of of criteria blocks to see if there is too many. A max of 10 is allowed by the AuroraX conjunction search engine. An exception is raised if it was determined to have too many. Raises: pyaurorax.exceptions.AuroraXBadParametersException: too many criteria blocks are found",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.get_advanced_distances_combos",
"url":23,
"doc":"Get the advanced distances combinations for this search Args: default_distance: the default distance to use, defaults to None Returns: the advanced distances combinations",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.distance",
"url":23,
"doc":"Property for the distance parameter Returns: the distance dictionary with all combinations"
},
{
"ref":"pyaurorax.conjunctions.Search.query",
"url":23,
"doc":"Property for the query value Returns: the query parameter"
},
{
"ref":"pyaurorax.conjunctions.Search.execute",
"url":23,
"doc":"Initiate a conjunction search request Raises: pyaurorax.exceptions.AuroraXBadParametersException: too many criteria blocks",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.update_status",
"url":23,
"doc":"Update the status of this conjunction search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.check_for_data",
"url":23,
"doc":"Check to see if data is available for this conjunction search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.get_data",
"url":23,
"doc":"Retrieve the data available for this conjunction search request",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.wait",
"url":23,
"doc":"Block and wait until the request is complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.conjunctions.Search.cancel",
"url":23,
"doc":"Cancel the conjunction search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.conjunctions.conjunctions",
"url":24,
"doc":"Functions for performing conjunction searches"
},
{
"ref":"pyaurorax.conjunctions.conjunctions.search",
"url":24,
"doc":"Search for conjunctions between data sources By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Args: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) distance: the maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground: list of ground instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"calgary_apa_ml_v1\", \"operator\": \"in\", \"values\": [ \"classified as APA\" ] } ] } }] space: list of one or more space instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [ \"north auroral oval\" ] } ] }, \"hemisphere\": [ \"northern\" ] }] events: list of one or more events search parameters, defaults to [] Example: [{ \"programs\": [ \"events\" ], \"platforms\": [ \"toshi\" ], \"instrument_types\": [ \"substorm onsets\" ] }] conjunction_types: list of conjunction types, defaults to [] (meaning all conjunction types). Options are in the pyaurorax.conjunctions module, or at the top level using the pyaurorax.CONJUNCTION_TYPE_ variables. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. Note - this parameter is under active development and still considered \"alpha\". response_format: JSON representation of desired data response format poll_interval: seconds to wait between polling calls, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME return_immediately: initiate the search and return without waiting for data to be received, defaults to False verbose: show the progress of the request using the request log, defaults Returns: a pyaurorax.conjunctions.Search object",
"func":1
},
{
"ref":"pyaurorax.conjunctions.conjunctions.describe",
"url":24,
"doc":"Describe a conjunction search as an \"SQL-like\" string Args: search_obj: the conjunction search to describe Returns: the \"SQL-like\" string describing the conjunction search object",
"func":1
},
{
"ref":"pyaurorax.conjunctions.conjunctions.get_request_url",
"url":24,
"doc":"Get the conjunction search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted conjunction searches. Args: request_id: the request identifier Returns: the request URL",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes",
"url":25,
"doc":"Separted classes and functions used by the conjunctions module. Note that these classes and variables are all imported higher up at the top of the conjunctions module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction",
"url":26,
"doc":"Class definition for a conjunction"
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction",
"url":26,
"doc":"Conjunction object Attributes: conjunction_type: the type of location data used when the conjunction was found (either be 'nbtrace' or 'sbtrace') start: start timestamp of the conjunction end: end timestamp of the conjunction data_sources: data sources in the conjunction min_distance: minimum kilometer distance of the conjunction max_distance: maximum kilometer distance of the conjunction events: the sub-conjunctions that make up this over-arching conjunction (the conjunctions between each set of two data sources) Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.conjunction_type",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.start",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.end",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.data_sources",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.min_distance",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.max_distance",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.conjunction.Conjunction.events",
"url":26,
"doc":""
},
{
"ref":"pyaurorax.conjunctions.classes.search",
"url":27,
"doc":"Class definition for a conjunction search"
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search",
"url":27,
"doc":"Class representing a conjunction search Attributes: start: start timestamp of the search (inclusive) end: end timestamp of the search (inclusive) distance: the maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground: list of ground instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\"], \"platforms\": [\"gillam\", \"rabbit lake\"], \"instrument_types\": [\"RGB\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"calgary_apa_ml_v1\", \"operator\": \"in\", \"values\": [ \"classified as APA\" ] } ] } }] space: list of one or more space instrument search parameters, defaults to [] Example: [{ \"programs\": [\"themis-asi\", \"swarm\"], \"platforms\": [\"themisa\", \"swarma\"], \"instrument_types\": [\"footprint\"], \"ephemeris_metadata_filters\": { \"logical_operator\": \"AND\", \"expressions\": [ { \"key\": \"nbtrace_region\", \"operator\": \"in\", \"values\": [ \"north auroral oval\" ] } ] }, \"hemisphere\": [ \"northern\" ] }] events: list of one or more events search parameters, defaults to [] Example: [{ \"programs\": [ \"events\" ], \"platforms\": [ \"toshi\" ], \"instrument_types\": [ \"substorm onsets\" ] }] conjunction_types: list of conjunction types, defaults to [\"nbtrace\"]. Options are in the pyaurorax.conjunctions module, or at the top level using the pyaurorax.CONJUNCTION_TYPE_ variables. epoch_search_precision: the time precision to which conjunctions are calculated. Can be 30 or 60 seconds. Defaults to 60 seconds. Note - this parameter is under active development and still considered \"alpha\". response_format: JSON representation of desired data response format request: AuroraXResponse object returned when the search is executed request_id: unique ID assigned to the request by the AuroraX API request_url: unique URL assigned to the request by the AuroraX API executed: indicates if the search has been executed/started completed: indicates if the search has finished data_url: the URL where data is accessed query: the query for this request as JSON status: the status of the query data: the conjunctions found logs: all log messages outputed by the AuroraX API for this request Returns: a pyaurorax.conjunctions.Search object"
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.check_criteria_block_count_validity",
"url":27,
"doc":"Check the number of of criteria blocks to see if there is too many. A max of 10 is allowed by the AuroraX conjunction search engine. An exception is raised if it was determined to have too many. Raises: pyaurorax.exceptions.AuroraXBadParametersException: too many criteria blocks are found",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.get_advanced_distances_combos",
"url":27,
"doc":"Get the advanced distances combinations for this search Args: default_distance: the default distance to use, defaults to None Returns: the advanced distances combinations",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.distance",
"url":27,
"doc":"Property for the distance parameter Returns: the distance dictionary with all combinations"
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.query",
"url":27,
"doc":"Property for the query value Returns: the query parameter"
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.execute",
"url":27,
"doc":"Initiate a conjunction search request Raises: pyaurorax.exceptions.AuroraXBadParametersException: too many criteria blocks",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.update_status",
"url":27,
"doc":"Update the status of this conjunction search request Args: status: the previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.check_for_data",
"url":27,
"doc":"Check to see if data is available for this conjunction search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.get_data",
"url":27,
"doc":"Retrieve the data available for this conjunction search request",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.wait",
"url":27,
"doc":"Block and wait until the request is complete and data is available for retrieval Args: poll_interval: time in seconds to wait between polling attempts, defaults to pyaurorax.requests.STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.conjunctions.classes.search.Search.cancel",
"url":27,
"doc":"Cancel the conjunction search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait: wait until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora",
"url":28,
"doc":"Interact with Swarm-Aurora using conjunction searches from AuroraX"
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.get_url",
"url":28,
"doc":"Get a URL that displays a conjunction search in the Swarm-Aurora Conjunction Finder Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated Returns: the Swarm-Aurora Conjunction Finder URL for this conjunction search",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.open_in_browser",
"url":28,
"doc":"In a browser, open a conjunction search in the Swarm-Aurora Conjunction Finder. Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated browser: the browser type to load using. Default is your default browser. Some common other options are \"google-chrome\", \"firefox\", or \"safari\". For all available options, refer to https: docs.python.org/3/library/webbrowser.html webbrowser.get",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.create_custom_import_file",
"url":28,
"doc":"Generate a Swarm-Aurora custom import file for a given conjunction search Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated filename: the output filename, default is 'swarmaurora_custom_import_file_{requestID}.json' returnDict: return the custom import file contents as a dictionary instead of saving a file, default is False Returns: the filename of the saved custom import file, or a dictionary with the file contents if  returnDict is set to True",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.tools",
"url":29,
"doc":"Functions for using conjunction searches with Swarm-Aurora"
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.tools.get_url",
"url":29,
"doc":"Get a URL that displays a conjunction search in the Swarm-Aurora Conjunction Finder Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated Returns: the Swarm-Aurora Conjunction Finder URL for this conjunction search",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.tools.open_in_browser",
"url":29,
"doc":"In a browser, open a conjunction search in the Swarm-Aurora Conjunction Finder. Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated browser: the browser type to load using. Default is your default browser. Some common other options are \"google-chrome\", \"firefox\", or \"safari\". For all available options, refer to https: docs.python.org/3/library/webbrowser.html webbrowser.get",
"func":1
},
{
"ref":"pyaurorax.conjunctions.swarmaurora.tools.create_custom_import_file",
"url":29,
"doc":"Generate a Swarm-Aurora custom import file for a given conjunction search Args: search_obj: a conjunction search object, must be a completed search with the 'request_id' value populated filename: the output filename, default is 'swarmaurora_custom_import_file_{requestID}.json' returnDict: return the custom import file contents as a dictionary instead of saving a file, default is False Returns: the filename of the saved custom import file, or a dictionary with the file contents if  returnDict is set to True",
"func":1
},
{
"ref":"pyaurorax.util",
"url":30,
"doc":"The util module provides helper methods such as converting arbitrary geographic locations to North/South B-trace geographic locations. Note that all functions and classes from submodules are all imported at this level of the util module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.util.ground_geo_to_nbtrace",
"url":30,
"doc":"Convert geographic location to North B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates. This conversion is different based on the timestamp since the magnetic coordinates change over time. Note: aacgmv2 must be installed. To install it, you can run \"python -m pip install pyaurorax[aacgmv2]\". Args: geo_location: a Location object representing the geographic location dt: timestamp for this set of lat and lons Returns: the north B-trace location as a Location object",
"func":1
},
{
"ref":"pyaurorax.util.ground_geo_to_sbtrace",
"url":30,
"doc":"Convert geographic location to South B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates. This conversion is different based on the timestamp since the magnetic coordinates change over time. Note: aacgmv2 must be installed. To install it, you can run \"python -m pip install pyaurorax[aacgmv2]\". Args: geo_location: a Location object representing the geographic location dt: timestamp for this set of lat and lons Returns: the south B-trace location as a Location object",
"func":1
},
{
"ref":"pyaurorax.util.calculate_btrace",
"url":31,
"doc":"Helper functions for calculating the north and south B-trace geographic locations for ground-based instruments."
},
{
"ref":"pyaurorax.util.calculate_btrace.ground_geo_to_nbtrace",
"url":31,
"doc":"Convert geographic location to North B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates. This conversion is different based on the timestamp since the magnetic coordinates change over time. Note: aacgmv2 must be installed. To install it, you can run \"python -m pip install pyaurorax[aacgmv2]\". Args: geo_location: a Location object representing the geographic location dt: timestamp for this set of lat and lons Returns: the north B-trace location as a Location object",
"func":1
},
{
"ref":"pyaurorax.util.calculate_btrace.ground_geo_to_sbtrace",
"url":31,
"doc":"Convert geographic location to South B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates. This conversion is different based on the timestamp since the magnetic coordinates change over time. Note: aacgmv2 must be installed. To install it, you can run \"python -m pip install pyaurorax[aacgmv2]\". Args: geo_location: a Location object representing the geographic location dt: timestamp for this set of lat and lons Returns: the south B-trace location as a Location object",
"func":1
},
{
"ref":"pyaurorax.api",
"url":32,
"doc":"This module is the under-the-hood interface for RESTful API requests. It provides helper functions that the PyAuroraX library uses to make robust requests. Note that all functions and classes from submodules are all imported at this level of the api module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.api.DEFAULT_BASE_URL",
"url":32,
"doc":"The default API base URL to use when sending requests"
},
{
"ref":"pyaurorax.api.AuroraXRequest",
"url":32,
"doc":"AuroraX API request class Attributes: url: the URL to make the request against method: the HTTP method to use (get, post, put, delete, etc.) params: any URL parameters to send in the request, defaults to {} body: the body of the request (ie. post data), defaults to {} headers: any headers to send as part of the request (in addition to the default ones), default is {} null_response: signifies if we expect a response from the API that has no body/data in it (ie. requests to upload data that respond with just a 202 status code), defaults to False Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.AuroraXRequest.url",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.method",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.params",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.body",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.headers",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.null_response",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXRequest.execute",
"url":32,
"doc":"Execute an AuroraX request Args: limited_evaluation: don't evaluate the response after the retry mechanism, defaults to False skip_retry_logic: exclude the retry logic in the request, defaults to False Returns: an AuroraXResponse object Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXNotFoundException: requested resource was not found pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUnexpectedEmptyResponse: unexpected empty response pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.api.AuroraXResponse",
"url":32,
"doc":"AuroraX API response class Attributes: request: the request object data: the data received as part of the request status_code: the HTTP status code received when making the request Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.AuroraXResponse.request",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXResponse.data",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.AuroraXResponse.status_code",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.api.get_api_key",
"url":32,
"doc":"Returns the currently set API key for the module Returns: current API key",
"func":1
},
{
"ref":"pyaurorax.api.authenticate",
"url":32,
"doc":"Set authentication values for use with subsequent queries Args: api_key: an AuroraX API key string",
"func":1
},
{
"ref":"pyaurorax.api.set_base_url",
"url":32,
"doc":"Change the base URL for the API (ie. change to the staging system or local server) Args: url: the new base url string (ie. 'https: api.staging.aurorax.space')",
"func":1
},
{
"ref":"pyaurorax.api.get_base_url",
"url":32,
"doc":"Returns the current base URL for the API Returns: current base URL",
"func":1
},
{
"ref":"pyaurorax.api.reset_base_url",
"url":32,
"doc":"Set the base URL for the API back to the default",
"func":1
},
{
"ref":"pyaurorax.api.classes",
"url":33,
"doc":"Separted classes and functions used by the api module. Note that these classes and variables are all imported higher up at the top of the api module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.api.classes.urls",
"url":34,
"doc":"This class provides the URL endpoints for different AuroraX API requests. It is contained in a special class so that we can use different base URLs if desired."
},
{
"ref":"pyaurorax.api.classes.urls.URLs",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.base_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_sources_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_sources_search_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.ephemeris_availability_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_products_availability_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.ephemeris_search_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.ephemeris_upload_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.ephemeris_request_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_products_search_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_products_upload_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.data_products_request_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.conjunction_search_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.conjunction_request_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.describe_conjunction_query_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.describe_data_products_query_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.describe_ephemeris_query_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.list_requests_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.urls.URLs.delete_requests_url",
"url":34,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request",
"url":35,
"doc":"Class definition used for managing an API request"
},
{
"ref":"pyaurorax.api.classes.request.DEFAULT_RETRIES",
"url":35,
"doc":"Number of retry attempts when requesting data from the API"
},
{
"ref":"pyaurorax.api.classes.request.REQUEST_HEADERS",
"url":35,
"doc":"The default headers sent as part of a request to the AuroraX API"
},
{
"ref":"pyaurorax.api.classes.request.REQUEST_TIMEOUT",
"url":35,
"doc":"Default request timeout, in seconds"
},
{
"ref":"pyaurorax.api.classes.request.API_KEY_HEADER_NAME",
"url":35,
"doc":"The API key header used when sending requests to the AuroraX API"
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest",
"url":35,
"doc":"AuroraX API request class Attributes: url: the URL to make the request against method: the HTTP method to use (get, post, put, delete, etc.) params: any URL parameters to send in the request, defaults to {} body: the body of the request (ie. post data), defaults to {} headers: any headers to send as part of the request (in addition to the default ones), default is {} null_response: signifies if we expect a response from the API that has no body/data in it (ie. requests to upload data that respond with just a 202 status code), defaults to False Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.url",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.method",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.params",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.body",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.headers",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.null_response",
"url":35,
"doc":""
},
{
"ref":"pyaurorax.api.classes.request.AuroraXRequest.execute",
"url":35,
"doc":"Execute an AuroraX request Args: limited_evaluation: don't evaluate the response after the retry mechanism, defaults to False skip_retry_logic: exclude the retry logic in the request, defaults to False Returns: an AuroraXResponse object Raises: pyaurorax.exceptions.AuroraXMaxRetriesException: max retry error pyaurorax.exceptions.AuroraXNotFoundException: requested resource was not found pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected content error pyaurorax.exceptions.AuroraXUnexpectedEmptyResponse: unexpected empty response pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.api.classes.response",
"url":36,
"doc":"Class definition used for managing the response from an API request"
},
{
"ref":"pyaurorax.api.classes.response.AuroraXResponse",
"url":36,
"doc":"AuroraX API response class Attributes: request: the request object data: the data received as part of the request status_code: the HTTP status code received when making the request Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.api.classes.response.AuroraXResponse.request",
"url":36,
"doc":""
},
{
"ref":"pyaurorax.api.classes.response.AuroraXResponse.data",
"url":36,
"doc":""
},
{
"ref":"pyaurorax.api.classes.response.AuroraXResponse.status_code",
"url":36,
"doc":""
},
{
"ref":"pyaurorax.api.api",
"url":37,
"doc":"Helper functions when interacting with the API"
},
{
"ref":"pyaurorax.api.api.get_api_key",
"url":37,
"doc":"Returns the currently set API key for the module Returns: current API key",
"func":1
},
{
"ref":"pyaurorax.api.api.authenticate",
"url":37,
"doc":"Set authentication values for use with subsequent queries Args: api_key: an AuroraX API key string",
"func":1
},
{
"ref":"pyaurorax.api.api.set_base_url",
"url":37,
"doc":"Change the base URL for the API (ie. change to the staging system or local server) Args: url: the new base url string (ie. 'https: api.staging.aurorax.space')",
"func":1
},
{
"ref":"pyaurorax.api.api.get_base_url",
"url":37,
"doc":"Returns the current base URL for the API Returns: current base URL",
"func":1
},
{
"ref":"pyaurorax.api.api.reset_base_url",
"url":37,
"doc":"Set the base URL for the API back to the default",
"func":1
},
{
"ref":"pyaurorax.requests",
"url":38,
"doc":"The requests module contains helper methods for retrieving data from an AuroraX request. Note that all functions and classes from submodules are all imported at this level of the requests module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.requests.get_data",
"url":38,
"doc":"Retrieve the data for a request Args: data_url: the URL for the data of a request, response_format: the response format to send as post data, defaults to None skip_serializing: skip any object serializing, defaults to False Raises: pyaurorax.exceptions.AuroraXDataRetrievalException: error retrieving data Returns: the data for this request",
"func":1
},
{
"ref":"pyaurorax.requests.get_logs",
"url":38,
"doc":"Retrieve the logs for a request Args: request_url: the URL of the request information Returns: the log messages for the request",
"func":1
},
{
"ref":"pyaurorax.requests.get_status",
"url":38,
"doc":"Retrieve the status of a request Args: request_url: the URL of the request information Returns: the status information for the request",
"func":1
},
{
"ref":"pyaurorax.requests.wait_for_data",
"url":38,
"doc":"Block and wait for the data to be made available for a request Args: request_url: the URL of the request information poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False Returns: the status information for the request",
"func":1
},
{
"ref":"pyaurorax.requests.cancel",
"url":38,
"doc":"Cancel the request at the given URL. This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: request_url: the URL string of the request to be canceled wait: set to True to block until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: if True then output poll times and other progress, defaults to False Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.requests.list",
"url":38,
"doc":"Retrieve a list of search requests matching certain criteria. Administrators only. Args: search_type: the type of search request, valid values are 'conjunction', 'ephemeris', or 'data_product'. Exclusion of value will return all search requests of any type, defaults to None active: return searches that are currently active or not, exclude for both, defaults to None start: start timestamp for narrowing down search timeframes, defaults to None end: end timestamp for narrowing down search timeframes, defaults to None file_size: filter by result file size, measured in KB, defaults to None result_count: filter by result count, defaults to None query_duration: filter by query duration, measured in milliseconds, defaults to None error_condition: filter by if an error occurred or not, exclude for both, defaults to None Returns: list of matching search requests Raises: pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.requests.delete",
"url":38,
"doc":"Entirely remove a search request from the AuroraX database. Administrators only. Args: request_id: search request UUID Returns: 0 on success, raises error on failure Raises: pyaurorax.exceptions.AuroraXNotFoundException: data source not found",
"func":1
},
{
"ref":"pyaurorax.requests.requests",
"url":39,
"doc":"Functions for interacting with AuroraX requests"
},
{
"ref":"pyaurorax.requests.requests.FIRST_FOLLOWUP_SLEEP_TIME",
"url":39,
"doc":"Initial sleep time when waiting for data"
},
{
"ref":"pyaurorax.requests.requests.STANDARD_POLLING_SLEEP_TIME",
"url":39,
"doc":"Polling sleep time when waiting for data (after the initial sleep time)"
},
{
"ref":"pyaurorax.requests.requests.ALLOWED_SEARCH_LISTING_TYPES",
"url":39,
"doc":"Allowed types when listing search requests"
},
{
"ref":"pyaurorax.requests.requests.get_status",
"url":39,
"doc":"Retrieve the status of a request Args: request_url: the URL of the request information Returns: the status information for the request",
"func":1
},
{
"ref":"pyaurorax.requests.requests.get_data",
"url":39,
"doc":"Retrieve the data for a request Args: data_url: the URL for the data of a request, response_format: the response format to send as post data, defaults to None skip_serializing: skip any object serializing, defaults to False Raises: pyaurorax.exceptions.AuroraXDataRetrievalException: error retrieving data Returns: the data for this request",
"func":1
},
{
"ref":"pyaurorax.requests.requests.get_logs",
"url":39,
"doc":"Retrieve the logs for a request Args: request_url: the URL of the request information Returns: the log messages for the request",
"func":1
},
{
"ref":"pyaurorax.requests.requests.wait_for_data",
"url":39,
"doc":"Block and wait for the data to be made available for a request Args: request_url: the URL of the request information poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME verbose: output poll times and other progress messages, defaults to False Returns: the status information for the request",
"func":1
},
{
"ref":"pyaurorax.requests.requests.cancel",
"url":39,
"doc":"Cancel the request at the given URL. This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: request_url: the URL string of the request to be canceled wait: set to True to block until the cancellation request has been completed (may wait for several minutes) poll_interval: seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose: if True then output poll times and other progress, defaults to False Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXUnexpectedContentTypeException: unexpected error pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.requests.requests.list",
"url":39,
"doc":"Retrieve a list of search requests matching certain criteria. Administrators only. Args: search_type: the type of search request, valid values are 'conjunction', 'ephemeris', or 'data_product'. Exclusion of value will return all search requests of any type, defaults to None active: return searches that are currently active or not, exclude for both, defaults to None start: start timestamp for narrowing down search timeframes, defaults to None end: end timestamp for narrowing down search timeframes, defaults to None file_size: filter by result file size, measured in KB, defaults to None result_count: filter by result count, defaults to None query_duration: filter by query duration, measured in milliseconds, defaults to None error_condition: filter by if an error occurred or not, exclude for both, defaults to None Returns: list of matching search requests Raises: pyaurorax.exceptions.AuroraXUnauthorizedException: invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.requests.requests.delete",
"url":39,
"doc":"Entirely remove a search request from the AuroraX database. Administrators only. Args: request_id: search request UUID Returns: 0 on success, raises error on failure Raises: pyaurorax.exceptions.AuroraXNotFoundException: data source not found",
"func":1
},
{
"ref":"pyaurorax.location",
"url":40,
"doc":"The Location module provides a class used throughout the PyAuroraX library to manage lat/lon positions of different things."
},
{
"ref":"pyaurorax.location.Location",
"url":40,
"doc":"Class representing an AuroraX location (ie. geographic coordinates, GSM coordinates, northern/southern B-trace magnetic footprints) The numbers are in decimal degrees format and range from -90 to 90 for latitude and -180 to 180 for longitude. Attributes: lat: latitude value lon: longitude value Create a new model by parsing and validating input data from keyword arguments. Raises ValidationError if the input data cannot be parsed to form a valid model."
},
{
"ref":"pyaurorax.location.Location.lat",
"url":40,
"doc":""
},
{
"ref":"pyaurorax.location.Location.lon",
"url":40,
"doc":""
}
]