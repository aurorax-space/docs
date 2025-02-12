URLS=[
"pyaurorax/index.html",
"pyaurorax/models/index.html",
"pyaurorax/models/atm/index.html",
"pyaurorax/data/index.html",
"pyaurorax/data/ucalgary/index.html",
"pyaurorax/data/ucalgary/read/index.html",
"pyaurorax/tools/index.html",
"pyaurorax/tools/spectra/index.html",
"pyaurorax/tools/grid_files/index.html",
"pyaurorax/tools/calibration/index.html",
"pyaurorax/tools/bounding_box/index.html",
"pyaurorax/tools/bounding_box/extract_metric/index.html",
"pyaurorax/tools/montage/index.html",
"pyaurorax/tools/mosaic/index.html",
"pyaurorax/tools/ccd_contour/index.html",
"pyaurorax/tools/keogram/index.html",
"pyaurorax/tools/classes/index.html",
"pyaurorax/tools/classes/mosaic.html",
"pyaurorax/tools/classes/keogram.html",
"pyaurorax/tools/classes/montage.html",
"pyaurorax/exceptions.html",
"pyaurorax/search/index.html",
"pyaurorax/search/ephemeris/index.html",
"pyaurorax/search/ephemeris/classes/index.html",
"pyaurorax/search/ephemeris/classes/ephemeris.html",
"pyaurorax/search/ephemeris/classes/search.html",
"pyaurorax/search/data_products/index.html",
"pyaurorax/search/data_products/classes/index.html",
"pyaurorax/search/data_products/classes/data_product.html",
"pyaurorax/search/data_products/classes/search.html",
"pyaurorax/search/conjunctions/index.html",
"pyaurorax/search/conjunctions/swarmaurora/index.html",
"pyaurorax/search/conjunctions/classes/index.html",
"pyaurorax/search/conjunctions/classes/criteria_block.html",
"pyaurorax/search/conjunctions/classes/search.html",
"pyaurorax/search/conjunctions/classes/conjunction.html",
"pyaurorax/search/requests/index.html",
"pyaurorax/search/api/index.html",
"pyaurorax/search/api/classes/index.html",
"pyaurorax/search/api/classes/request.html",
"pyaurorax/search/api/classes/response.html",
"pyaurorax/search/location.html",
"pyaurorax/search/availability/index.html",
"pyaurorax/search/availability/classes/index.html",
"pyaurorax/search/availability/classes/availability_result.html",
"pyaurorax/search/sources/index.html",
"pyaurorax/search/sources/classes/index.html",
"pyaurorax/search/sources/classes/data_source_stats.html",
"pyaurorax/search/sources/classes/data_source.html",
"pyaurorax/search/metadata_filters.html",
"pyaurorax/search/metadata/index.html",
"pyaurorax/search/util/index.html"
];
INDEX=[
{
"ref":"pyaurorax",
"url":0,
"doc":"The PyAuroraX package provides a way to interact with the [AuroraX Data Platform](https: aurorax.space), facilitating programmatic usage of AuroraX's search engine and data analysis tools. For an overview of usage and examples, visit the [AuroraX Developer Zone website](https: docs.aurorax.space/code/overview), or explore the examples contained in the Github repository [here](https: github.com/aurorax-space/pyaurorax/tree/main/examples). Installation:   pip install pyaurorax   Basic usage:   import pyaurorax aurorax = pyaurorax.PyAuroraX()  "
},
{
"ref":"pyaurorax.PyAuroraX",
"url":0,
"doc":"The  PyAuroraX class is the primary entry point for utilizing this library. It is used to initialize a session, capturing details about API connectivity, environment, and more. All submodules are encapsulated within this class, so any usage of the library starts with creating this object.   import pyaurorax aurorax = pyaurorax.PyAuroraX()   When working with this object, you can set configuration parameters, such as the destination directory for downloaded data, or API special settings (e.g., timeout, HTTP headers, API key). These parameters can be set when instantiating the object, or after instantiating using the self-contained accessible variables. Attributes: download_output_root_path (str): Destination directory for downloaded data. The default for this path is a subfolder in the user's home directory, such as  /home/user/pyaurorax_data in Linux. In Windows and Mac, it is similar. read_tar_temp_path (str): Temporary directory used for tar extraction phases during file reading (e.g., reading TREx RGB Burst data). The default for this is   /.tar_temp_working . For faster performance when reading tar-based data, one option on Linux is to set this to use RAM directly at  /dev/shm/pyaurorax_tar_temp_working . api_base_url (str): URL prefix to use when interacting with the AuroraX API. By default this is set to  https: api.aurorax.space . This parameter is primarily used by the development team to test and build new functions using the private staging API. api_timeout (int): The timeout used when communicating with the Aurorax API. This value is represented in seconds, and by default is  10 seconds . api_key (str): API key to use when interacting with the AuroraX API. The default value is None. Please note that an API key is only required for write operations to the AuroraX search API, such as creating data sources or uploading ephemeris data. progress_bar_backend (str): The progress bar backend to use. Valid choices are 'auto', 'standard', or 'notebook'. Default is 'auto'. This parameter is optional. srs_obj (pyucalgarysrs.PyUCalgarySRS): A [PyUCalgarySRS](https: docs-pyucalgarysrs.phys.ucalgary.ca/ pyucalgarysrs.PyUCalgarySRS) object. If not supplied, it will create the object with some settings carried over from the PyAuroraX object. Note that specifying this is for advanced users and only necessary a few special use-cases. Raises: pyaurorax.exceptions.AuroraXInitializationError: an error was encountered during initialization of the paths"
},
{
"ref":"pyaurorax.PyAuroraX.search",
"url":0,
"doc":"Access to the  search submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.PyAuroraX.data",
"url":0,
"doc":"Access to the  data submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.PyAuroraX.models",
"url":0,
"doc":"Access to the  models submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.PyAuroraX.tools",
"url":0,
"doc":"Access to the  tools submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.PyAuroraX.api_base_url",
"url":0,
"doc":"Property for the API base URL. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.api_headers",
"url":0,
"doc":"Property for the API headers. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.api_timeout",
"url":0,
"doc":"Property for the API timeout. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.api_key",
"url":0,
"doc":"Property for the API key. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.download_output_root_path",
"url":0,
"doc":"Property for the download output root path. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.read_tar_temp_path",
"url":0,
"doc":"Property for the read tar temp path. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.progress_bar_backend",
"url":0,
"doc":"Property for the progress bar backend. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.srs_obj",
"url":0,
"doc":"Property for the PyUCalgarySRS object. See above for details."
},
{
"ref":"pyaurorax.PyAuroraX.pretty_print",
"url":0,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.PyAuroraX.purge_download_output_root_path",
"url":0,
"doc":"Delete all files in the  download_output_root_path directory. Since the library downloads data to this directory, over time it can grow too large and the user can risk running out of space. This method is here to assist with easily clearing out this directory. Note that it also deletes all files in the PyUCalgarySRS object's download_output_root_path path as well. Normally, these two paths are the same, but it can be different if the user specifically changes it. Args: dataset_name (str): Delete only files for a specific dataset name. This parameter is optional. Raises: pyaurorax.exceptions.AuroraXPurgeError: an error was encountered during the purge operation",
"func":1
},
{
"ref":"pyaurorax.PyAuroraX.purge_read_tar_temp_path",
"url":0,
"doc":"Delete all files in the  read_tar_temp_path directory. Since the library extracts temporary data to this directory, sometime issues during reading can cause this directory to contain residual files that aren't deleted during the normal read routine. Though this is very rare, it is still possible. Therefore, this method is here to assist with easily clearing out this directory. Note that it also deletes all files in the PyUCalgarySRS object's read_tar_temp_path path as well. Normally, these two paths are the same, but it can be different if the user specifically changes it. Raises: pyaurorax.exceptions.AuroraXPurgeError: an error was encountered during the purge operation",
"func":1
},
{
"ref":"pyaurorax.PyAuroraX.show_data_usage",
"url":0,
"doc":"Print the volume of data existing in the download_output_root_path, broken down by dataset. Alternatively return the information in a dictionary. This can be a helpful tool for managing your disk space. Args: order (bool): Order results by either  size or  name . Default is  size . return_dict (bool): Instead of printing the data usage information, return the information as a dictionary. Returns: Printed output. If  return_dict is True, then it will instead return a dictionary with the disk usage information. Notes: Note that size on disk may differ slightly from the values determined by this routine. For example, the results here will be slightly different than the output of a 'du' command on  nix systems.",
"func":1
},
{
"ref":"pyaurorax.models",
"url":1,
"doc":"Interact with various auroral models, such as the TREx Auroral Transport Model (ATM)."
},
{
"ref":"pyaurorax.models.ModelsManager",
"url":1,
"doc":"The ModelsManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.models.ModelsManager.atm",
"url":1,
"doc":"Access to the  atm submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.models.atm",
"url":2,
"doc":""
},
{
"ref":"pyaurorax.models.atm.ATMManager",
"url":2,
"doc":"The ATMManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.models.atm.ATMManager.forward",
"url":2,
"doc":"Perform a forward calculation using the TREx Auroral Transport Model and the supplied input parameters. Note that this function utilizes the UCalgary Space Remote Sensing API to perform the calculation. The ATM model is 1D and time-independent. However, the optional parameters  timescale_auroral and  timescale_transport provide limited support for time-dependent and transport process. The  timescale_auroral parameter (T0) is the duration of the precipitation. The  timescale_transport parameter is defined by L/v0, in which L is the dimension of the auroral structure, and v0 is the cross-structure drift speed. The model quasi-analytically solves the continuity equation under a square input (with time duration T0 and spatial width L) input of precipitation. The initial/boundary conditions are given by IRI. The output yields the mean density/VER over [0-L] at time T0. Args: timestamp (datetime.datetime): Timestamp for the calculation. This value is expected to be in UTC, and is valid for any value up to the end of the previous day. Any timezone data will be ignored. This parameter is required. geodetic_latitude (float): Latitude in geodetic coordinates: -90.0 to 90.0. This parameter is required. geodetic_longitude (float): Longitude in geodetic coordinates: -180.0 to 180.0. This parameter is required. output (ATMForwardOutputFlags): Flags to indicate which values are included in the output. See [ ATMForwardOutputFlags ](https: docs-pyucalgarysrs.phys.ucalgary.ca/models/atm/classes_forward.html pyucalgarysrs.models.atm.classes_forward.ATMForwardOutputFlags) for more details. This parameter is required. maxwellian_energy_flux (float): Maxwellian energy flux in erg/cm2/s. Default is 10. This parameter is optional. gaussian_energy_flux (float): Gaussian energy flux in erg/cm2/s. Default is 0.0. Note that  gaussian_peak_energy and  gaussian_spectral_width must be specified if the  gaussian_energy_flux is not 0. This parameter is optional. maxwellian_characteristic_energy (float): Maxwellian characteristic energy in eV. Default is 5000. Note that  maxwellian_characteristic_energy must be specified if the  maxwellian_energy_flux is not 0. This parameter is optional. gaussian_peak_energy (float): Gaussian peak energy in eV. Default is 1000. Note this parameter must be specified if the  gaussian_energy_flux is not 0. This parameter is optional. gaussian_spectral_width (float): Gaussian spectral width in eV. Default is 100. Note this parameter must be specified if the  gaussian_energy_flux is not 0. This parameter is optional. nrlmsis_model_version (str): NRLMSIS version number. Possible values are  00 or  2.0 . Default is  2.0 . This parameter is optional. More details about this empirical model can be found [here](https: ccmc.gsfc.nasa.gov/models/NRLMSIS~00/), and [here](https: ccmc.gsfc.nasa.gov/models/NRLMSIS~2.0/). oxygen_correction_factor (float): Oxygen correction factor used to multiply by in the empirical model. Default is 1. This parameter is optional. timescale_auroral (int): The duration of the precipitation, in seconds. Default is 600 (10 minutes). This parameter is optional. timescale_transport (int): Defined by L/v0, in which L is the dimension of the auroral structure, and v0 is the cross-structure drift speed. Represented in seconds. Default is 600 (10 minutes). This parameter is optional. atm_model_version (str): ATM model version number. Possible values are only '1.0' at this time, but will have additional possible values in the future. This parameter is optional. custom_spectrum (ndarray): A 2-dimensional numpy array (dtype is any float type) containing values representing the energy in eV, and flux in 1/cm2/sr/eV. The shape is expected to be [N, 2], with energy in [:, 0] and flux in [:, 1]. Note that this array cannot contain negative values (SRSAPIError will be raised if so). This parameter is optional. no_cache (bool): The UCalgary Space Remote Sensing API utilizes a caching layer for performing ATM calculations. If this variation of input parameters has been run before (and the cache is still valid), then it will not re-run the calculation. Instead it will return the cached results immediately. To disable the caching layer, set this parameter to  True . Default is  False . This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: An [ ATMForwardResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/models/atm/classes_forward.html pyucalgarysrs.models.atm.classes_forward.ATMForwardResult) object containing the requested output data, among other values. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.models.atm.ATMManager.inverse",
"url":2,
"doc":"Perform an inverse calculation using the TREx Auroral Transport Model and the supplied input parameters. Note that this function utilizes the UCalgary Space Remote Sensing API to perform the calculation. Args: timestamp (datetime.datetime): Timestamp for the calculation. This value is expected to be in UTC, and is valid a pre-defined timeframe. An error will be raised if outside of the valid timeframe. Any timezone data will be ignored. This parameter is required. geodetic_latitude (float): Latitude in geodetic coordinates. Currently limited to the Transition Region Explorer (TREx) region of >=50.0 and  =-110 and <-70 degrees. An error will be raised if outside of this range. This parameter is required. intensity_4278 (float): Intensity of the 427.8nm (blue) wavelength in Rayleighs. This parameter is required. intensity_5577 (float): Intensity of the 557.7nm (green) wavelength in Rayleighs. This parameter is required. intensity_6300 (float): Intensity of the 630.0nm (red) wavelength in Rayleighs. This parameter is required. intensity_8446 (float): Intensity of the 844.6nm (near infrared) wavelength in Rayleighs. This parameter is required. output (ATMInverseOutputFlags): Flags to indicate which values are included in the output. See [ ATMInverseOutputFlags ](https: docs-pyucalgarysrs.phys.ucalgary.ca/models/atm/classes_inverse.html pyucalgarysrs.models.atm.classes_inverse.ATMInverseOutputFlags) for more details. This parameter is required. precipitation_flux_spectral_type (str): The precipitation flux spectral type to use. Possible values are  gaussian or  maxwellian . The default is  gaussian . This parameter is optional. nrlmsis_model_version (str): NRLMSIS version number. Possible values are  00 or  2.0 . Default is  2.0 . This parameter is optional. More details about this empirical model can be found [here](https: ccmc.gsfc.nasa.gov/models/NRLMSIS~00/), and [here](https: ccmc.gsfc.nasa.gov/models/NRLMSIS~2.0/). atmospheric_attenuation_correction (bool): Apply an atmospheric attenuation correction factor. Default is  False . atm_model_version (str): ATM model version number. Possible values are only '1.0' at this time, but will have additional possible values in the future. This parameter is optional. no_cache (bool): The UCalgary Space Remote Sensing API utilizes a caching layer for performing ATM calculations. If this variation of input parameters has been run before (and the cache is still valid), then it will not re-run the calculation. Instead it will return the cached results immediately. To disable the caching layer, set this parameter to  True . Default is  False . This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: An [ ATMInverseResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/models/atm/classes_inverse.html pyucalgarysrs.models.atm.classes_inverse.ATMInverseResult) object containing the requested output data, among other values. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.data",
"url":3,
"doc":"Instrument data downloading and reading module. This module presently has support for data provided by the University of Calgary, such as THEMIS ASI, REGO, and the Transition Region Explorer (TREx) instruments."
},
{
"ref":"pyaurorax.data.DataManager",
"url":3,
"doc":"The DataManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.data.DataManager.ucalgary",
"url":3,
"doc":"Access to the  ucalgary submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.data.DataManager.list_datasets",
"url":3,
"doc":"List available datasets from all providers Args: name (str): Supply a name used for filtering. If that name is found in the available dataset names received from the API, it will be included in the results. This parameter is optional. level (str): Supply a level string for filtering. Valid strings are: L0, L1, L1A, L2, L3. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A list of [ Dataset ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Dataset) objects. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.DataManager.list_datasets_in_table",
"url":3,
"doc":"Print available datasets from all providers in a table Args: name (str): Supply a name used for filtering. If that name is found in the available dataset names received from the API, it will be included in the results. This parameter is optional. level (str): Supply a level string for filtering. Valid strings are: L0, L1, L1A, L2, L3. This parameter is optional. max_width (int): Maximum width of the table. Default is  200 . This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: Printed table. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.DataManager.get_dataset",
"url":3,
"doc":"Get a specific dataset Args: name (str): The dataset name to get. Case is insensitive. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: The found [ Dataset ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Dataset) object. Raises an exception if not found. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.DataManager.list_observatories",
"url":3,
"doc":"List information about observatories utilized by all providers. Args: instrument_array (str): The instrument array to list observatories for. Valid values are: themis_asi, rego, trex_rgb, trex_nir, trex_blue, and trex_spectrograph. uid (str): Supply a observatory unique identifier used for filtering (usually 4-letter site code). If that UID is found in the available observatories received from the API, it will be included in the results. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A list of [ Observatory ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Observatory) objects. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.DataManager.list_observatories_in_table",
"url":3,
"doc":"Print available observatories for a given instrument array in a table Args: instrument_array (str): The instrument array to list observatories for. Valid values are: themis_asi, rego, trex_rgb, trex_nir, trex_blue, and trex_spectrograph. uid (str): Supply a observatory unique identifier used for filtering (usually 4-letter site code). If that UID is found in the available observatories received from the API, it will be included in the results. This parameter is optional. max_width (int): Maximum width of the table. Default is  200 . This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: Printed table. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary",
"url":4,
"doc":"Data downloading and reading routines for data provided by the University of Calgary."
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager",
"url":4,
"doc":"The UCalgaryManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.readers",
"url":4,
"doc":"Access to the  read submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.list_datasets",
"url":4,
"doc":"List available datasets Args: name (str): Supply a name used for filtering. If that name is found in the available dataset names received from the API, it will be included in the results. This parameter is optional. level (str): Supply a level string for filtering. Valid strings are: L0, L1, L1A, L2, L3. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A list of [ Dataset ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Dataset) objects. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.get_dataset",
"url":4,
"doc":"Get a specific dataset Args: name (str): The dataset name to get. Case is insensitive. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: The found [ Dataset ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Dataset) object. Raises an exception if not found. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.list_observatories",
"url":4,
"doc":"List information about observatories Args: instrument_array (str): The instrument array to list observatories for. Valid values are: themis_asi, rego, trex_rgb, trex_nir, trex_blue, and trex_spectrograph. uid (str): Supply a observatory unique identifier used for filtering (usually 4-letter site code). If that UID is found in the available observatories received from the API, it will be included in the results. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A list of [ Observatory ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Observatory) objects. Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.list_supported_read_datasets",
"url":4,
"doc":"List the datasets which have file reading capabilities supported. Returns: A list of the dataset names with file reading support.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.is_read_supported",
"url":4,
"doc":"Check if a given dataset has file reading support. Not all datasets available in the UCalgary Space Remote Sensing Open Data Platform have special readfile routines in this library. This is because some datasets are in basic formats such as JPG or PNG, so unique functions aren't necessary. We leave it up to the user to open these basic files in whichever way they prefer. Use the  list_supported_read_datasets() function to see all datasets that have special file reading functionality in this library. Args: dataset_name (str): The dataset name to check if file reading is supported. This parameter is required. Returns: Boolean indicating if file reading is supported.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.download",
"url":4,
"doc":"Download data from the UCalgary Space Remote Sensing Open Data Platform. The parameters  dataset_name ,  start , and  end are required. All other parameters are optional. Note that usage of the site and device UID filters applies differently to some datasets. For example, both fields can be used for most raw and keogram data, but only site UID can be used for skymap datasets, and only device UID can be used for calibration datasets. If fields are specified during a call in which site or device UID is not used, a UserWarning is display to provide the user with feedback about this detail. Args: dataset_name (str): Name of the dataset to download data for. Use the  list_datasets() function to get the possible values for this parameter. One example is \"THEMIS_ASI_RAW\". Note that dataset names are case sensitive. This parameter is required. start (datetime.datetime): Start timestamp to use (inclusive), expected to be in UTC. Any timezone data will be ignored. This parameter is required. end (datetime.datetime): End timestamp to use (inclusive), expected to be in UTC. Any timezone data will be ignored. This parameter is required. site_uid (str): The site UID to filter for. If specified, data will be downloaded for only the site matching the given value. If excluded, data for all available sites will be downloaded. An example value could be 'atha', meaning all data from the Athabasca observatory will be downloaded for the given dataset name, start, and end times. This parameter is optional. device_uid (str): The device UID to filter for. If specified, data will be downloaded for only the device matching the given value. If excluded, data for all available devices will be downloaded. An example value could be 'themis02', meaning all data matching that device will be downloaded for the given dataset name, start, and end times. This parameter is optional. n_parallel (int): Number of data files to download in parallel. Default value is 5. Adjust as needed for your internet connection. This parameter is optional. overwrite (bool): By default, data will not be re-downloaded if it already exists locally. Use the  overwrite parameter to force re-downloading. Default is  False . This parameter is optional. progress_bar_disable (bool): Disable the progress bar. Default is  False . This parameter is optional. progress_bar_ncols (int): Number of columns for the progress bar (straight passthrough of the  ncols parameter in a tqdm progress bar). This parameter is optional. See Notes section below for further information. progress_bar_ascii (str): ASCII value to use when constructing the visual aspect of the progress bar (straight passthrough of the  ascii parameter in a tqdm progress bar). This parameter is optional. See Notes section below for further details. progress_bar_desc (str): Description value to use when constructing the visual aspect of the progress bar (straight passthrough of the  desc parameter in a tqdm progress bar). This parameter is optional. See notes section below for further details. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileDownloadResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileDownloadResult) object containing details about what data files were downloaded. Raises: pyaurorax.exceptions.AuroraXDownloadError: an error was encountered while downloading a specific file pyaurorax.exceptions.AuroraXAPIError: an API error was encountered Notes:     The  progress_bar_ parameters can be used to enable/disable/adjust the progress bar. Excluding the  progress_bar_disable parameter, all others are straight pass-throughs to the tqdm progress bar function. The  progress_bar_ncols parameter allows for adjusting the width. The  progress_bar_ascii parameter allows for adjusting the appearance of the progress bar. And the  progress_bar_desc parameter allows for adjusting the description at the beginning of the progress bar. Further details can be found on the [tqdm documentation](https: tqdm.github.io/docs/tqdm/ tqdm-objects). Data downloading will use the  download_data_root_path variable within the super class' object ([ PyAuroraX ]( / /index.html pyaurorax.PyAuroraX to determine where to save data to. If you'd like to change this path to somewhere else you can change that variable before your download() call, like so:   import pyaurorax aurorax = pyaurorax.PyAuroraX() aurorax.data_download_root_path = \"some_new_path\" aurorax.data.download(dataset_name, start, end)  ",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.download_using_urls",
"url":4,
"doc":"Download data from the UCalgary Space Remote Sensing Open Data Platform using a FileListingResponse object. This would be used in cases where more customization is needed than the generic  download() function. One example of using this function would start by using  get_urls() to retrieve the list of URLs available for download, then further process this list to fewer files based on some other requirement (ie. time down-sampling such as one file per hour). Lastly using this function to download the new custom set URLs. Args: file_listing_response (FileListingResponse): A [ FileListingResponse ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileListingResponse) object returned from a  get_urls() call, which contains a list of URLs to download for a specific dataset. This parameter is required. n_parallel (int): Number of data files to download in parallel. Default value is 5. Adjust as needed for your internet connection. This parameter is optional. overwrite (bool): By default, data will not be re-downloaded if it already exists locally. Use the  overwrite parameter to force re-downloading. Default is  False . This parameter is optional. progress_bar_disable (bool): Disable the progress bar. Default is  False . This parameter is optional. progress_bar_ncols (int): Number of columns for the progress bar (straight passthrough of the  ncols parameter in a tqdm progress bar). This parameter is optional. See Notes section below for further information. progress_bar_ascii (str): ASCII value to use when constructing the visual aspect of the progress bar (straight passthrough of the  ascii parameter in a tqdm progress bar). This parameter is optional. See Notes section below for further details. progress_bar_desc (str): Description value to use when constructing the visual aspect of the progress bar (straight passthrough of the  desc parameter in a tqdm progress bar). This parameter is optional. See notes section below for further details. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileDownloadResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileDownloadResult) object containing details about what data files were downloaded. Raises: pyaurorax.exceptions.AuroraXDownloadError: an error was encountered while downloading a specific file pyaurorax.exceptions.AuroraXAPIError: an API error was encountered Notes:     The  progress_bar_ parameters can be used to enable/disable/adjust the progress bar. Excluding the  progress_bar_disable parameter, all others are straight pass-throughs to the tqdm progress bar function. The  progress_bar_ncols parameter allows for adjusting the width. The  progress_bar_ascii parameter allows for adjusting the appearance of the progress bar. And the  progress_bar_desc parameter allows for adjusting the description at the beginning of the progress bar. Further details can be found on the [tqdm documentation](https: tqdm.github.io/docs/tqdm/ tqdm-objects). Data downloading will use the  download_data_root_path variable within the super class' object ([ PyAuroraX ]( / /index.html pyaurorax.PyAuroraX to determine where to save data to. If you'd like to change this path to somewhere else you can change that variable before your download() call, like so:   import pyaurorax aurorax = pyaurorax.PyAuroraX() aurorax.data_download_root_path = \"some_new_path\" aurorax.data.download(dataset_name, start, end)  ",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.get_urls",
"url":4,
"doc":"Get URLs of data files The parameters  dataset_name ,  start , and  end are required. All other parameters are optional. Note that usage of the site and device UID filters applies differently to some datasets. For example, both fields can be used for most raw and keogram data, but only site UID can be used for skymap datasets, and only device UID can be used for calibration datasets. If fields are specified during a call in which site or device UID is not used, a UserWarning is display to provide the user with feedback about this detail. Args: dataset_name (str): Name of the dataset to download data for. Use the  list_datasets() function to get the possible values for this parameter. One example is \"THEMIS_ASI_RAW\". Note that dataset names are case sensitive. This parameter is required. start (datetime.datetime): Start timestamp to use (inclusive), expected to be in UTC. Any timezone data will be ignored. This parameter is required. end (datetime.datetime): End timestamp to use (inclusive), expected to be in UTC. Any timezone data will be ignored. This parameter is required. site_uid (str): The site UID to filter for. If specified, data will be downloaded for only the site matching the given value. If excluded, data for all available sites will be downloaded. An example value could be 'atha', meaning all data from the Athabasca observatory will be downloaded for the given dataset name, start, and end times. This parameter is optional. device_uid (str): The device UID to filter for. If specified, data will be downloaded for only the device matching the given value. If excluded, data for all available devices will be downloaded. An example value could be 'themis02', meaning all data matching that device will be downloaded for the given dataset name, start, and end times. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileListingResponse ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileListingResponse) object containing a list of the available URLs, among other values. Raises: pyaurorax.exceptions.AuroraXAPIError: an API error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.read",
"url":4,
"doc":"Read in data files for a given dataset. Note that only one type of dataset's data should be read in using a single call. Args: dataset (Dataset): The dataset object for which the files are associated with. This parameter is required. file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXUnsupportedReadError: an unsupported dataset was used when trying to read files. pyaurorax.exceptions.AuroraXError: a generic read error was encountered Notes:     - For users who are familiar with the themis-imager-readfile and trex-imager-readfile libraries, the read function provides a near-identical usage. Further improvements have been integrated, and those libraries are anticipated to be deprecated at some point in the future.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.download_best_skymap",
"url":4,
"doc":"Download the skymap file that best matches the parameters supplied. Args: dataset_name (str): Name of the dataset to download data for. Use the  list_datasets() function to get the possible values for this parameter. One example is \"THEMIS_ASI_SKYMAP_IDLSAV\". Note that dataset names are case sensitive. This parameter is required. site_uid (str): The site UID to evaluate. timestamp (datetime.datetime): The timestamp to use for deciding the best skymap, expected to be in UTC. Any timezone data will be ignored. This parameter is required. overwrite (bool): If the skymap file exists locally, download the file and overwrite it. Default is False. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileDownloadResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileDownloadResult) object containing details about what data files were downloaded. Raises: ValueError: issue with supplied timestamp pyaurorax.exceptions.AuroraXAPIError: an API error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.download_best_flatfield_calibration",
"url":4,
"doc":"Download the flatfield calibration file that best matches the parameters supplied. Args: dataset_name (str): Name of the dataset to download data for. Use the  list_datasets() function to get the possible values for this parameter. One example is \"THEMIS_ASI_SKYMAP_IDLSAV\". Note that dataset names are case sensitive. This parameter is required. device_uid (str): The device UID to evaluate. timestamp (datetime.datetime): The timestamp to use for deciding the best skymap, expected to be in UTC. Any timezone data will be ignored. This parameter is required. overwrite (bool): If the calibration file exists locally, download the file and overwrite it. Default is False. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileDownloadResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileDownloadResult) object containing details about what data files were downloaded. Raises: ValueError: issue with supplied timestamp pyaurorax.exceptions.AuroraXAPIError: an API error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.UCalgaryManager.download_best_rayleighs_calibration",
"url":4,
"doc":"Download the Rayleighs calibration file that best matches the parameters supplied. Args: dataset_name (str): Name of the dataset to download data for. Use the  list_datasets() function to get the possible values for this parameter. One example is \"REGO_CALIBRATION_RAYLEIGHS_IDLSAV\". Note that dataset names are case sensitive. This parameter is required. device_uid (str): The device UID to evaluate. timestamp (datetime.datetime): The timestamp to use for deciding the best calibration file, expected to be in UTC. Any timezone data will be ignored. This parameter is required. overwrite (bool): If the calibration file exists locally, download the file and overwrite it. Default is False. This parameter is optional. timeout (int): Represents how many seconds to wait for the API to send data before giving up. The default is 10 seconds, or the  api_timeout value in the super class'  pyaurorax.PyAuroraX object. This parameter is optional. Returns: A [ FileDownloadResult ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.FileDownloadResult) object containing details about what data files were downloaded. Raises: ValueError: issue with supplied timestamp pyaurorax.exceptions.AuroraXAPIError: an API error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Observatory",
"url":4,
"doc":"Representation for an observatory. Attributes: uid (str): The 4-letter unique identifier (traditionally referred to as the site UID) full_name (str): Full location string for the observatory geodetic_latitude (float): Geodetic latitude for the observatory, in decimal format (-90 to 90) geodetic_longitude (float): Geodetic longitude for the observatory, in decimal format (-180 to 180) provider (str): Data provider"
},
{
"ref":"pyaurorax.data.ucalgary.Observatory.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Dataset",
"url":4,
"doc":"A dataset available from the UCalgary Space Remote Sensing API, with possibly support for downloading and/or reading. Attributes: name (str): Dataset name short_description (str): A short description about the dataset long_description (str): A longer description about the dataset data_tree_url (str): The data tree URL prefix. Used for saving data locally with a similar data tree structure compared to the UCalgary Open Data archive. file_listing_supported (bool): Flag indicating if file listing (downloading) is supported for this dataset. file_reading_supported (bool): Flag indicating if file reading is supported for this dataset. file_time_resolution (str): Time resolution of the files for this dataset, represented as a string. Possible values are: 1min, 1hr, 1day, not_applicable. level (str): Dataset level as per L0/L1/L2/etc standards. doi (str): Dataset DOI unique identifier. doi_details (str): Further details about the DOI. citation (str): String to use when citing usage of the dataset. provider (str): Data provider. supported_libraries (List[str]): Libraries that support usage of this dataset."
},
{
"ref":"pyaurorax.data.ucalgary.Dataset.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult",
"url":4,
"doc":"Representation of the results from a data download call. Attributes: filenames (List[str]): List of downloaded files, as absolute paths of their location on the local machine. count (int): Number of files downloaded total_bytes (int): Cumulative amount of bytes saved on the local machine. output_root_path (str): The root path of where the data was saved to on the local machine. dataset (Dataset): The  Dataset object for this data."
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.filenames",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.count",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.total_bytes",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.output_root_path",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.dataset",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileDownloadResult.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse",
"url":4,
"doc":"Representation of the file listing response from the UCalgary Space Remote Sensing API. Attributes: urls (List[str]): A list of URLs for available data files. path_prefix (str): The URL prefix, which is sed for saving data locally with a similar data tree structure compared to the UCalgary Open Data archive. count (int): The number of URLs available. dataset (Dataset): The  Dataset object for this data. total_bytes (int): The cumulative amount of bytes for the available URLs."
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.urls",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.path_prefix",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.count",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.dataset",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.total_bytes",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.FileListingResponse.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Data",
"url":4,
"doc":"Representation of the data read in from a  read call. Attributes: data (Any): The loaded data. This can be one of the following types: ndarray, List[Skymap], List[Calibration]. timestamp (List[datetime.datetime]): List of timestamps for the read in data. metadata (List[Dict]): List of dictionaries containing metadata specific to each timestamp/image/record. problematic_files (List[ProblematicFiles]): A list detailing any files that encountered issues during reading. calibrated_data (Any): A calibrated version of the data. Populated and utilized by data analysis libraries. Has a  None value until calibrated data is inserted manually. dataset (Dataset): The  Dataset object for this data."
},
{
"ref":"pyaurorax.data.ucalgary.Data.data",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.timestamp",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.metadata",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.problematic_files",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.calibrated_data",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.dataset",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Data.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Skymap",
"url":4,
"doc":"Representation for a skymap file. Attributes: filename (str): Filename for the skymap file, as an absolute path of its location on the local machine. project_uid (str): Project unique identifier site_uid (str): Site unique identifier imager_uid (str): Imager/device unique identifier site_map_latitude (float): Geodetic latitude of instrument site_map_longitude (float): Geodetic longitude of instrument site_map_altitude (float): Altitude of the instrument (in meters) full_elevation (ndarray): Elevation angle from horizon, for each image pixel (in degrees) full_azimuth (ndarray | None): Local azimuth angle from 0 degrees north, positive moving east (in degrees). None for TREx Spectrograph. full_map_altitude (ndarray): Altitudes that image coordinates are mapped to (in kilometers) full_map_latitude (ndarray): Geodetic latitudes of pixel corners, mapped to various altitudes (specified by  full_map_altitude ) full_map_longitude (ndarray): Geodetic longitudes of pixel corners, mapped to various altitudes (specified by  full_map_altitude ) generation_info (SkymapGenerationInfo): Metadata describing details about this skymap's generation process version (str): Version of the skymap dataset (Dataset): The  Dataset object for this data."
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.filename",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.project_uid",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.site_uid",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.imager_uid",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.site_map_latitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.site_map_longitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.site_map_altitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.full_elevation",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.full_azimuth",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.full_map_altitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.full_map_latitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.full_map_longitude",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.generation_info",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.version",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Skymap.get_precalculated_altitudes",
"url":4,
"doc":"Get the altitudes that have been precalculated in this skymap. Units are kilometers.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.Calibration",
"url":4,
"doc":"Representation for a calibration file. Attributes: filename (str): Filename for the calibration file, as an absolute path of its location on the local machine. detector_uid (str): Detector/imager/camera unique identifier version (str): Version number of the calibration file generation_info (CalibrationGenerationInfo): Metadata describing details about this calibration's generation process rayleighs_perdn_persecond (float): Calibrated value for Rayleighs per data number per second (R/dn/s). This value will be None if a flatfield calibration file was read instead of a rayleighs calibration file. flat_field_multiplier (ndarray): Calibrated flat field array. This value will be None if a rayleighs calibration file was read instead of a flatfield calibration file. dataset (Dataset): The  Dataset object for this data."
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.filename",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.detector_uid",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.version",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.generation_info",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.rayleighs_perdn_persecond",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.flat_field_multiplier",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.dataset",
"url":4,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.Calibration.pretty_print",
"url":4,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read",
"url":5,
"doc":""
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager",
"url":5,
"doc":"The UCalgaryManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.list_supported_datasets",
"url":5,
"doc":"List the datasets which have file reading capabilities supported. Returns: A list of the dataset names with file reading support.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.is_supported",
"url":5,
"doc":"Check if a given dataset has file reading support. Not all datasets available in the UCalgary Space Remote Sensing Open Data Platform have special readfile routines in this library. This is because some datasets are in basic formats such as JPG or PNG, so unique functions aren't necessary. We leave it up to the user to open these basic files in whichever way they prefer. Use the  list_supported_read_datasets() function to see all datasets that have special file reading functionality in this library. Args: dataset_name (str): The dataset name to check if file reading is supported. This parameter is required. Returns: Boolean indicating if file reading is supported.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read",
"url":5,
"doc":"Read in data files for a given dataset. Note that only one type of dataset's data should be read in using a single call. Args: dataset (Dataset): The dataset object for which the files are associated with. This parameter is required. file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXUnsupportedReadError: an unsupported dataset was used when trying to read files. pyaurorax.exceptions.AuroraXError: a generic read error was encountered Notes:     - For users who are familiar with the themis-imager-readfile and trex-imager-readfile libraries, the read function provides a near-identical usage. Further improvements have been integrated, and those libraries are anticipated to be deprecated at some point in the future.",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_themis",
"url":5,
"doc":"Read in THEMIS ASI raw data (stream0 full.pgm files). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_rego",
"url":5,
"doc":"Read in REGO raw data (stream0 pgm files). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_trex_nir",
"url":5,
"doc":"Read in TREx near-infrared (NIR) raw data (stream0 pgm files). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_trex_blue",
"url":5,
"doc":"Read in TREx Blueline raw data (stream0 pgm files). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_trex_rgb",
"url":5,
"doc":"Read in TREx RGB raw data (stream0 h5, stream0.burst png.tar, unstable stream0 and stream0.colour pgm and png ). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_trex_spectrograph",
"url":5,
"doc":"Read in TREx Spectrograph raw data (stream0 pgm files). Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Data object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_skymap",
"url":5,
"doc":"Read in UCalgary skymap files. Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. quiet (bool): Do not print out errors while reading skymap files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Skymap object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_calibration",
"url":5,
"doc":"Read in UCalgary calibration files. Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. quiet (bool): Do not print out errors while reading calibration files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  Calibration object. This parameter is optional. dataset (Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A [ Data ](https: docs-pyucalgarysrs.phys.ucalgary.ca/data/classes.html pyucalgarysrs.data.classes.Data) object containing the data read in, among other values. Raises: pyaurorax.exceptions.AuroraXError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.data.ucalgary.read.ReadManager.read_grid",
"url":5,
"doc":"Read in grid files. Args: file_list (List[str], List[Path], str, Path): The files to read in. Absolute paths are recommended, but not technically necessary. This can be a single string for a file, or a list of strings to read in multiple files. This parameter is required. n_parallel (int): Number of data files to read in parallel using multiprocessing. Default value is 1. Adjust according to your computer's available resources. This parameter is optional. first_record (bool): Only read in the first record in each file. This is the same as the first_frame parameter in the themis-imager-readfile and trex-imager-readfile libraries, and is a read optimization if you only need one image per minute, as opposed to the full temporal resolution of data (e.g., 3sec cadence). This parameter is optional. no_metadata (bool): Skip reading of metadata. This is a minor optimization if the metadata is not needed. Default is  False . This parameter is optional. start_time (datetime.datetime): The start timestamp to read data onwards from (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  end_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will assume the start time is the timestamp of the first record in the first file supplied (ie. beginning of the supplied data). This parameter is optional. end_time (datetime.datetime): The end timestamp to read data up to (inclusive). This can be utilized to read a portion of a data file, and could be paired with the  start_time parameter. This tends to be utilized for datasets that are hour or day-long files where it is possible to only read a smaller bit of that file. An example is the TREx Spectrograph processed data (1 hour files), or the riometer data (1 day files). If not supplied, it will it will assume the end time is the timestamp of the last record in the last file supplied (ie. end of the supplied data). This parameter is optional. quiet (bool): Do not print out errors while reading data files, if any are encountered. Any files that encounter errors will be, as usual, accessible via the  problematic_files attribute of the returned  pyucalgarysrs.data.classes.Data object. This parameter is optional. dataset (pyucalgarysrs.data.classes.Dataset): The dataset object for which the files are associated with. This parameter is optional. Returns: A  pyucalgarysrs.data.classes.Data object containing the data read in, among other values. Raises: pyucalgarysrs.exceptions.SRSError: a generic read error was encountered",
"func":1
},
{
"ref":"pyaurorax.tools",
"url":6,
"doc":"Data analysis toolkit for working with all-sky imager data available within the AuroraX platform. This portion of the PyAuroraX library allows you to easily generate basic plots for ASI data, and common manipulations. These include things like displaying single images, making keograms, projecting ASI data onto maps, and extracting metrics for a given lat/lon bounding box. Example: For shorter function calls, you can initialize the tools submodule using like so:  import pyaurorax aurorax = pyaurorax.PyAuroraX() at = aurorax.tools  "
},
{
"ref":"pyaurorax.tools.ToolsManager",
"url":6,
"doc":"The ToolsManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.ToolsManager.bounding_box",
"url":6,
"doc":"Access to the  bounding_box submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.calibration",
"url":6,
"doc":"Access to the  calibration submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.ccd_contour",
"url":6,
"doc":"Access to the  ccd_contour submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.grid_files",
"url":6,
"doc":"Access to the  grid_files submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.keogram",
"url":6,
"doc":"Access to the  keogram submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.montage",
"url":6,
"doc":"Access to the  montage submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.mosaic",
"url":6,
"doc":"Access to the  mosaic submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.spectra",
"url":6,
"doc":"Access to the  spectra submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.ToolsManager.display",
"url":6,
"doc":"Render a visualization of a single image. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: image (numpy.ndarray): The image to display, represented as a numpy array. cmap (str): The matplotlib colormap to use. Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). figsize (tuple): The matplotlib figure size to use when displaying, tuple of two integers (ie.  figsize=(14, 4) ) aspect (str or float): The matplotlib imshow aspect ration to use. A common value for this is  auto . All valid values can be found on the [matplotlib documentation](https: matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.imshow.html). colorbar (bool): Display a colorbar. Default is  False . title (str): A title to display above the rendered image. Defaults to no title. returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed image, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues encountered with supplied parameters.",
"func":1
},
{
"ref":"pyaurorax.tools.ToolsManager.movie",
"url":6,
"doc":"Generate a movie file from a list of filenames. Note that the codec used is \"mp4v\". Args: input_filenames (List[str]): Filenames of frames to use for movie generation. No sorting is applied, so it is assumed the list is in the desired order. This parameter is required. output_filename (str): Filename for the created movie file. This parameter is required. n_parallel (int): Number of multiprocessing workers to use. Default is  1 , which does not use multiprocessing. fps (int): Frames per second (FPS) for the movie file. Default is  25 . progress_bar_disable (bool): Toggle the progress bars off. Default is  False . Raises: IOError: I/O related issue while generating movie",
"func":1
},
{
"ref":"pyaurorax.tools.ToolsManager.scale_intensity",
"url":6,
"doc":"Scale all values of an array that lie in the range min<=x<=max in to the range 0<=x<=high. Args: data (numpy.ndarray): Data array, can be 2, 3, or 4-dimensional. Assumed to be an image, or array of images. Also assumed that the first 2 dimensions are the image's x and y coordinates, and the following dimensions are some combination of the number of images, and/or the colour channel. min (float): Minimum value of array to be considered max (float): Maximum value of array to be considered top (float): Maximum value of the scaled result. If not supplied, the max value of the data array's dtype is used. memory_saver (bool): Utilize less RAM when scaling a set of images. Defaults to  True . If set to  False then the scaling routine will be faster, but will utilize significantly more RAM. Returns: A new  numpy.ndarray that is the same dimensions as the inputted data array, with the scaling applied. Raises: ValueError: issues encountered with supplied min, max, or top value(s)",
"func":1
},
{
"ref":"pyaurorax.tools.ToolsManager.set_theme",
"url":6,
"doc":"A handy wrapper for setting the matplotlib global theme. Common choices are  light ,  dark , or  default . Args: theme (str): Theme name. Common choices are  light ,  dark , or  default . If default, then matplotlib theme settings will be fully reset to their defaults. Additional themes can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html)",
"func":1
},
{
"ref":"pyaurorax.tools.Keogram",
"url":6,
"doc":"Class representation for a keogram Attributes: data (numpy.ndarray): The derived keogram data. timestamp (List[datetime.datetime]): Timestamps corresponding to each keogram slice. instrument_type (str): String giving instrument type, either 'asi' or 'spectrograph'. ccd_y (numpy.ndarray): The y-axis representing CCD Y coordinates for the keogram. mag_y (numpy.ndarray): The y-axis representing magnetic latitude for the keogram. geo_y (numpy.ndarray): The y-axis representing geographic latitude for the keogram."
},
{
"ref":"pyaurorax.tools.Keogram.pretty_print",
"url":6,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.Keogram.set_geographic_latitudes",
"url":6,
"doc":"Set the geographic latitude values for this keogram, using the specified skymap data. The data will be set to the geo_y attribute of this Keogram object, which can then be used for plotting and/or further analysis. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap object to use. This parameter is required. altitude_km (int): The altitude to use, in kilometers. If not specified, it will use the default in the skymap object. If the specified altitude is not valid, a ValueError will be raised. Returns: None. The Keogram object's  geo_y attribute will be updated. Raises: ValueError: Issues with specified altitude.",
"func":1
},
{
"ref":"pyaurorax.tools.Keogram.set_magnetic_latitudes",
"url":6,
"doc":"Set the magnetic latitude values for this keogram, using the specified skymap data. AACGMv2 will be utilized to perform the calculations. The resulting data will be set to the mag_y attribute of this Keogram object, which can then be used for plotting and/or further analysis. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap object to use. This parameter is required. timestamp (datetime.datetime): The timestamp to use when converting skymap data to magnetic coordinates. Utilizes AACGMv2 to do the conversion. altitude_km (int): The altitude to use. If not specified, it will use the default in the skymap object. If the specified altitude is not valid, a ValueError will be raised. Returns: None. The Keogram object's  mag_y attribute will be updated. Raises: ValueError: Issues with specified altitude.",
"func":1
},
{
"ref":"pyaurorax.tools.Keogram.plot",
"url":6,
"doc":"Generate a plot of the keogram data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: y_type (str): Type of y-axis to use when plotting. Options are  ccd ,  mag , or  geo . The default is  ccd . This parameter is required. title (str): The title to display above the plotted keogram. Default is no title. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . cmap (str): The matplotlib colormap to use. Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). aspect (str or float): The matplotlib imshow aspect ration to use. A common value for this is  auto . All valid values can be found on the [matplotlib documentation](https: matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.imshow.html). axes_visible (bool): Display the axes. Default is  True . xlabel (str): The x-axis label to use. Default is  Time (UTC) . ylabel (str): The y-axis label to use. Default is based on y_type. xtick_increment (int): The x-axis tick increment to use. Default is 100. ytick_increment (int): The y-axis tick increment to use. Default is 50. returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed keogram, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues encountered with the y-axis choice",
"func":1
},
{
"ref":"pyaurorax.tools.Montage",
"url":6,
"doc":"Class representation for a montage Attributes: data (numpy.ndarray): The derived montage data. timestamp (List[datetime.datetime]): Timestamps corresponding to each montage image."
},
{
"ref":"pyaurorax.tools.Montage.pretty_print",
"url":6,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.Montage.plot",
"url":6,
"doc":"Generate a plot of the montage data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: rows (int): The number of rows to use when displaying the images as a montage. The product of the  rows and  cols parameters must match the number of images supplied when creating the  Montage object. If not, a ValueError will be raised. This parameter is required. cols (int): The number of columns to use when displaying the images as a montage. The product of the  rows and  cols parameters must match the number of images supplied when creating the  Montage object. If not, a ValueError will be raised. This parameter is required. timestamps_display (bool): Display the timestamps on each montage image. Defaults to True. This parameter is optional. timestamps_format (str): The format of the timestamps when being displayed. This is the same format string as when using the  strftime() function for a  datetime object. Default format string is  %Y-%m-%d %H:%M:%S . Refer to the [Python documentation](https: docs.python.org/3/library/datetime.html strftime-and-strptime-format-codes) for further information. This parameter is optional. timestamps_fontsize (int): The font size for the displayed timestamps. Default is size 11. This parameter is optional. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . title (str): The title to display above the plotted montage. Default is no title. cmap (str): The matplotlib colormap to use. Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed montage, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues with the y-axis choice, or rows/cols choice.",
"func":1
},
{
"ref":"pyaurorax.tools.Mosaic",
"url":6,
"doc":"Class representation for a generated mosaic. Attributes: polygon_data (matplotlib.collections.PolyCollection): Generated polygons containing rendered data. cartopy_projection (cartopy.crs.Projection): Cartopy projection to utilize. contour_data (Dict[str, List[Any ): Generated contour data. spect_cmap (str): String giving the cmap to use for spect legend. spect_intensity_scale (Tuple[int]): The min and max values that spectrograph data is scaled to in the mosaic, if any is present."
},
{
"ref":"pyaurorax.tools.Mosaic.polygon_data",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.Mosaic.cartopy_projection",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.Mosaic.contour_data",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.Mosaic.spect_cmap",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.Mosaic.spect_intensity_scale",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.Mosaic.pretty_print",
"url":6,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.Mosaic.plot",
"url":6,
"doc":"Generate a plot of the mosaic data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: map_extent (List[int]): Latitude/longitude range to be visible on the rendered map. This is a list of 4 integers and/or floats, in the order of [min_lon, max_lon, min_lat, max_lat]. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . rayleighs (bool): Set to  True if the data being plotted is in Rayleighs. Defaults to  False . max_rayleighs (int): Max intensity scale for Rayleighs. Defaults to  20000 . title (str): The title to display above the plotted mosaic. Default is no title. ocean_color (str): Colour of the ocean. Default is cartopy's default shade of blue. Colours can be supplied as a word, or hexcode prefixed with a ' ' character (ie.  55AADD ). land_color (str): Colour of the land. Default is  gray . Colours can be supplied as a word, or hexcode prefixed with a ' ' character (ie.  41BB87 ). land_edgecolor (str): Color of the land edges. Default is  8A8A8A . Colours can be supplied as a word, or hexcode prefixed with a ' ' character. borders_color (str): Color of the country borders. Default is  AEAEAE . Colours can be supplied as a word, or hexcode prefixed with a ' ' character. borders_disable (bool): Disbale rendering of the borders. Default is  False . cbar_title (str): Title for the colorbar. Default is no title. colorbar_title (str): Deprecated as of v1.10.0. Use 'cbar_title' instead in the exact same way. cbar_colormap (str): The matplotlib colormap to use for the plotted color bar. Default is  gray , unless mosaic was created with spectrograph data, in which case defaults to the colormap used for spectrograph data Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed montage, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises:",
"func":1
},
{
"ref":"pyaurorax.tools.Mosaic.add_geo_contours",
"url":6,
"doc":"Add geographic contours to a mosaic. Args: lats (ndarray or list): Sequence of geographic latitudes defining a contour. lons (ndarray or list): Sequence of geographic longitudes defining a contour. constant_lats (float, int, or Sequence): Geographic Latitude(s) at which to add line(s) of constant latitude. constant_lons (float, int, or Sequence): Geographic Longitude(s) at which to add line(s) of constant longitude. color (str): The matplotlib color used for the contour(s). linewidth (float or int): The contour thickness. linestyle (str): The matplotlib linestyle used for the contour(s). marker (str): The matplotlib marker used for the contour(s). bring_to_front (bool): Plots the contour on top of all other currently plotted objects. Returns: The object's contour_data parameter is populated appropriately. Raises: ValueError: issues encountered with supplied parameters.",
"func":1
},
{
"ref":"pyaurorax.tools.Mosaic.add_mag_contours",
"url":6,
"doc":"Add geomagnetic contours to a mosaic. Args: timestamp (datetime.datetime): The timestamp used in computing AACGM coordinates. lats (ndarray or list): Sequence of geomagnetic latitudes defining a contour. lons (ndarray or list): Sequence of geomagnetic longitudes defining a contour. constant_lats (float, int, Sequence): Geomagnetic latitude(s) at which to add contour(s) of constant latitude. constant_lons (float, int, Sequence): Geomagnetic longitude(s) at which to add contours(s) of constant longitude. color (str): The matplotlib color used for the contour(s). linewidth (float or int): The contour thickness. linestyle (str): The matplotlib linestyle used for the contour(s). marker (str): The matplotlib marker used for the contour(s). bring_to_front (bool): Plots the contour on top of all other currently plotted objects. Returns: The object's contour_data parameter is populated appropriately. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.MosaicData",
"url":6,
"doc":"Prepared image data for use by mosaic routines. Attributes: site_uid_list (List[str]): List of site unique identifiers contained within this object. timestamps (List[datetime.datetime]): Timestamps of corresponding images. images (Dict[str, numpy.ndarray]): Image data prepared into the necessary format; a dictionary. Keys are the site UID, ndarray is the prepared data. images_dimensions (Dict[str, Tuple]): The image dimensions. data_types (List[str]): The data types for each data object."
},
{
"ref":"pyaurorax.tools.MosaicData.site_uid_list",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicData.timestamps",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicData.images",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicData.images_dimensions",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicData.data_types",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicData.pretty_print",
"url":6,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.MosaicSkymap",
"url":6,
"doc":"Prepared skymap data for use by mosaic routines. Attributes: site_uid_list (List[str]): List of site unique identifiers contained within this object. elevation (List[numpy.ndarray]): List of elevation data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute. polyfill_lat (List[numpy.ndarray]): List of latitude polygon data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute. polyfill_lon (List[numpy.ndarray]): List of longitude polygon data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute."
},
{
"ref":"pyaurorax.tools.MosaicSkymap.site_uid_list",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicSkymap.elevation",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicSkymap.polyfill_lat",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicSkymap.polyfill_lon",
"url":6,
"doc":""
},
{
"ref":"pyaurorax.tools.MosaicSkymap.pretty_print",
"url":6,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.spectra",
"url":7,
"doc":"Work with spectrograph data."
},
{
"ref":"pyaurorax.tools.spectra.SpectraManager",
"url":7,
"doc":"The SpectraManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.spectra.SpectraManager.plot",
"url":7,
"doc":"Generate a plot of one or more spectra from spectrograph data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: spect_data (pyaurorax.data.ucalgary.Data): The data object containing spectrograph data. timestamp (datetime.datetime): A timestamp or list of timestamps for which to plot spectra from. spect_loc (int): An int or list of ints giving the spectrograph spatial bin indices to plot. title (str): The title to display above the plotted spectra. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . color (str, List): A string or list of strings giving the matplotlib color names to use for plotting spectra. ylog (bool): Plot on a logarithmic axis. Default is linear. xlabel (str): The x-axis label to use. Default is  Wavelength (nm) . ylabel (str): The y-axis label to use. Default is 'Intensity (Rayleighs)'. ylim (Tuple[int]): The min and max values to display on the y-axis, in units of Rayleighs/nm. xlim (Tuple[int]): The min and max values to display on the x-axis, in units of nm. plot_line (float): A float, or list of floats, giving wavelengths at which to plot a vertical line, useful for comparing to known emission wavelengths (e.g. 557.7). plot_line_color (str): A string or list of strings giving the colors to use for plotting lines specified by 'plot_lines'. returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed spectra, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.grid_files",
"url":8,
"doc":"Prepare grid data for plotting."
},
{
"ref":"pyaurorax.tools.grid_files.GridFilesManager",
"url":8,
"doc":"The GridFilesManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.grid_files.GridFilesManager.prep_grid_image",
"url":8,
"doc":"Takes a grid image, and converts it to RGBA format, masking all empty cells with max transparency, so that it can be plotted overtop of a map. NOTE: the grid data passed in must be for a single grid image. Multiple images in a single call to this function is presently not supported. Args: grid (numpy.ndarray): The grid array to prepare. Usually a result of reading a grid file and obtaining grid data from said file. Please note that the data must be a single frame; multiple frames are currently not supported. fill_val (int or float): The fill value that was used to fill grid cells containing no data. Usually obtained from the grid file's metadata. scale (list or numpy.ndarray): A two-element vector specifying the minimum and maximum values to scale data between. This parameter is optional. Defaults to data min/max. cmap (str): A string giving the name of a matplotlib colormap to prep single-channel image data using. This parameter is optional. Defaults to \"Greys_r\". Returns: The prepared RGBA grid array. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.calibration",
"url":9,
"doc":"Perform various calibration procedures on image data."
},
{
"ref":"pyaurorax.tools.calibration.CalibrationManager",
"url":9,
"doc":"The CalibrationManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.calibration.CalibrationManager.rego",
"url":9,
"doc":"Apply various calibration adjustments to a single or set of images raw images. Args: images (numpy.ndarray): Raw images to perform calibration procedures on. cal_flatfield (pyaurorax.data.ucalgary.Calibration): Calibration object containing the flatfield data to utilize. This field is required if the  step_flatfield_corection is set to True. cal_rayleighs (pyaurorax.data.ucalgary.Calibration): Calibration object containing the Rayleighs data to utilize. This field is required if the  step_rayleighs_calibration is set to True. step_dark_frame_correction (bool): Perform the dark frame correction step by subtracting an average of a bottom corner grid from the image (ie. 4x4.). Defaults to  True . step_flatfield_calibration (bool): Perform the flatfield correction step. Defaults to  True . Note that the  cal_flatfield parameter must be supplied if this is True. step_rayleighs_calibration (bool): Perform the Rayleighs conversion step. Defaults to  True. Note that the  cal_rayleighs parameter must be supplied if this is True. exposure_length_sec (float): Force the exposure length to be a certain value. Default is TREx NIR's nominal operating mode exposure length of  2.0 seconds . Adjusting this field should be done with caution. Returns: The calibrated images. The shape of the calibrated data will be same as the input images. The dtype of the calibrated data will depend on if the Rayleighs conversion was performed. If it was, a float32 array will be returned. If it wasn't, the dtype will be the same as input images' dtype. Raises: ValueError: issues encountered with supplied parameters.",
"func":1
},
{
"ref":"pyaurorax.tools.calibration.CalibrationManager.trex_nir",
"url":9,
"doc":"Apply various calibration adjustments to a single or set of images raw images. Args: images (numpy.ndarray): Raw images to perform calibration procedures on. cal_flatfield (pyaurorax.data.ucalgary.Calibration): Calibration object containing the flatfield data to utilize. This field is required if the  step_flatfield_corection is set to True. cal_rayleighs (pyaurorax.data.ucalgary.Calibration): Calibration object containing the Rayleighs data to utilize. This field is required if the  step_rayleighs_calibration is set to True. step_dark_frame_correction (bool): Perform the dark frame correction step. Defaults to  True . step_flatfield_calibration (bool): Perform the flatfield correction step. Defaults to  True . Note that the  cal_flatfield parameter must be supplied if this is True. step_rayleighs_calibration (bool): Perform the Rayleighs conversion step. Defaults to  True. Note that the  cal_rayleighs parameter must be supplied if this is True. exposure_length_sec (float): Force the exposure length to be a certain value. Default is TREx NIR's nominal operating mode exposure length of  5.0 seconds . Adjusting this field should be done with caution. Returns: The calibrated images. The shape of the calibrated data will be same as the input images. The dtype of the calibrated data will depend on if the Rayleighs conversion was performed. If it was, a float32 array will be returned. If it wasn't, the dtype will be the same as input images' dtype. Raises: ValueError: issues encountered with supplied parameters.",
"func":1
},
{
"ref":"pyaurorax.tools.bounding_box",
"url":10,
"doc":"Methods for working with data in a specific bounding box."
},
{
"ref":"pyaurorax.tools.bounding_box.BoundingBoxManager",
"url":10,
"doc":"The BoundingBoxManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.bounding_box.BoundingBoxManager.extract_metric",
"url":10,
"doc":"Access to the  extract_metric submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric",
"url":11,
"doc":"Extract various metrics from a given bounding box."
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager",
"url":11,
"doc":"The ExtractMetricManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager.azimuth",
"url":11,
"doc":"Compute a metric of image data within an azimuthal boundary. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the image data. azimuth_bounds (Sequence[int, float]): A 2-element sequence specifying the azimuthal bounds from which to extract the metric. Anticipated order is [az_min, az_max]. metric (str): The name of the metric that is to be computed for the bounded area. Valid metrics are  mean ,  median ,  sum . Default is  median . n_channels (int): By default, function will assume the type of data passed as input - this argument can be used to manually specify the number of channels contained in image data. show_preview (bool): Plot a preview of the bounded area. Returns: A numpy.ndarray containing the metrics computed within azimuth range, for all image frames. Raises: ValueError: issue encountered with value supplied in parameter",
"func":1
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager.ccd",
"url":11,
"doc":"Compute a metric of image data within a CCD boundary. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. ccd_bounds (List[int]): A 4-element sequence specifying the (inclusive) CCD bounds from which to extract the metric. Anticipated order is [x0, x1, y0, y1]. metric (str): The name of the metric that is to be computed for the bounded area. Valid metrics are  mean ,  median ,  sum . Defaults to  median . n_channels (int): By default, function will assume the type of data passed as input - this argument can be used to manually specify the number of channels contained in image data. show_preview (bool): Plot a preview of the bounded area. Returns: A numpy.ndarray containing the metrics computed within CCD bounds, for all image frames. Raises: ValueError: issue encountered with value supplied in parameter",
"func":1
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager.elevation",
"url":11,
"doc":"Compute a metric of image data within an elevation boundary. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the image data. elevation_bounds (Sequence): A 2-element sequence specifying the elevation bounds from which to extract the metric. Anticipated order is [el_min, el_max]. metric (str): The name of the metric that is to be computed for the bounded area. Valid metrics are  mean ,  median ,  sum . Default is  median . n_channels (int): By default, function will assume the type of data passed as input - this argument can be used to manually specify the number of channels contained in image data. show_preview (bool): Plot a preview of the bounded area. Returns: A numpy.ndarray containing the metrics computed within elevation range, for all image frames. Raises: ValueError: issue encountered with value supplied in parameter",
"func":1
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager.geo",
"url":11,
"doc":"Compute a metric of image data within a geographic lat/lon boundary. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the image data. altitude_km (int or float): The altitude of the image data in kilometers. lonlat_bounds (Sequence): A 4-element sequence specifying the lat/lon bounds from which to extract the metric. Anticipated order is [lon_0, lon_1, lat_0, lat_1]. metric (str): The name of the metric that is to be computed for the bounded area. Valid metrics are  mean ,  median ,  sum . Default is  median . n_channels (int): By default, function will assume the type of data passed as input - this argument can be used to manually specify the number of channels contained in image data. show_preview (bool): Plot a preview of the bounded area. Returns: A numpy.ndarray containing the metrics computed within elevation range, for all image frames. Raises: ValueError: issue encountered with value supplied in parameter",
"func":1
},
{
"ref":"pyaurorax.tools.bounding_box.extract_metric.ExtractMetricManager.mag",
"url":11,
"doc":"Compute a metric of image data within a magnetic lat/lon boundary. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. timestamp (List[datetime.datetime]): A list of timestamps corresponding to each image. skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the image data. altitude_km (int or float): The altitude of the image data in kilometers. lonlat_bounds (Sequence): A 4-element sequence specifying the magnetic lat/lon bounds from which to extract the metric. Anticipated order is [lon_0, lon_1, lat_0, lat_1]. metric (str): The name of the metric that is to be computed for the bounded area. Valid metrics are  mean ,  median ,  sum . Default is  median . n_channels (int): By default, function will assume the type of data passed as input - this argument can be used to manually specify the number of channels contained in image data. show_preview (bool): Plot a preview of the bounded area. Returns: A numpy.ndarray containing the metrics computed within elevation range, for all image frames. Raises: ValueError: issue encountered with value supplied in parameter",
"func":1
},
{
"ref":"pyaurorax.tools.montage",
"url":12,
"doc":"Create montages."
},
{
"ref":"pyaurorax.tools.montage.MontageManager",
"url":12,
"doc":"The MontageManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.montage.MontageManager.create",
"url":12,
"doc":"Create a montage from a set of images. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. If it is not, then be sure to specify the  axis parameter accordingly. timestamp (List[datetime.datetime]): A list of timestamps corresponding to each image. Returns: A  pyaurorax.tools.Montage object.",
"func":1
},
{
"ref":"pyaurorax.tools.mosaic",
"url":13,
"doc":"Prepare data and create mosaics."
},
{
"ref":"pyaurorax.tools.mosaic.MosaicManager",
"url":13,
"doc":"The MosaicManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.mosaic.MosaicManager.create",
"url":13,
"doc":"Create a mosaic object. Args: prepped_data (pyaurorax.tools.MosaicData): The prepared mosaic data. Generated from a prior  prep_images() function call. prepped_skymap (pyaurorax.tools.MosaicSkymap): The prepared skymap data. Generated from a prior  prep_skymaps() function call. timestamp (datetime.datetime): The timestamp to generate a mosaic for. Must be within the range of timestamps for which image data was prepped and provided. cartopy_projection (cartopy.crs.Projection): The cartopy projection to use when creating the mosaic. min_elevation (int): The minimum elevation cutoff when projecting images on the map, in degrees. Default is  5 . cmap (str): The matplotlib colormap to use for the rendered image data. Default is  gray . Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). colormap (str): Deprecated as of v1.10.0. Use 'cmap' instead in the exact same way. spect_cmap (str): The matplotlib colormap to use for the colorbar if working with spectrograph data. Default is  gnuplot . image_intensity_scales (List or Dict): Ranges for scaling images. Either a a list with 2 elements which will scale all sites with the same range, or as a dictionary which can be used for scaling each site differently. Example of uniform scaling across all sites:  image_intensity_scales = [2000, 8000] Example of scaling each site differently:  image_intensity_scales = {\"fsmi\": [1000, 10000], \"gill\": [2000, 8000]} spect_intensity_scales (Tuple[int]): Min and max values, in Rayleighs, to scale ALL spectrograph data. spect_colormap (str): The name of a matplotlib colormap to use for plotting spectrograph data. Returns: The generated  pyaurorax.tools.Mosaic object. Raises: ValueError: issues encountered with supplied parameters pyaurorax.exceptions.AuroraXError: general issue encountered",
"func":1
},
{
"ref":"pyaurorax.tools.mosaic.MosaicManager.prep_images",
"url":13,
"doc":"Prepare the image data for use in a mosaic. Args: image_list (List[pyaurorax.data.ucalgary.Data]): List of image data. Each element of the list is the data for each site. data_attribute (str): The data attribute to use when prepping the images. Either  data or  calibrated_data . Default is  data . spect_emission (str): The emission (green, red, blue, hbeta) to prepare from spectrograph data. Default is 'green' (557.7 nm emission). spect_band (Tuple[float]): Manual selection of the wavelength region to integrate for obtaining emissions. Use this to prepare emissions that are not available in spect_emission. spect_band_bg (Tuple[float]): Manual selection of the wavelength region to subtract from integration for manually chosen emissions, via the spect_band argument. Returns: The prepared data, as a  pyaurorax.tools.MosaicData object. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.mosaic.MosaicManager.prep_skymaps",
"url":13,
"doc":"Prepare skymap data for use by the mosaic routine. This is not time-dependent, so it would only need to be done once. Allows for plotting multiple images on a map, masking the boundaries between images by elevation angle. Args: skymaps (List[pyaurorax.data.ucalgary.Skymap]): The skymaps to prep. height_km (int): The altitude to utilize, in kilometers. site_uid_order (List[str]): The site list order. The order of this list is not important for plotting, but must be consistent with the order of the  skymaps parameter. progress_bar_disable (bool): Disable the progress bar. Defaults to  False . n_parallel (int): Number of skymaps to prepare in parallel using multiprocessing. Default is  1 . Returns: The prepared skymap data as a  pyaurorax.tools.MosaicSkymap object. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.ccd_contour",
"url":14,
"doc":"Obtain contours in pixel coordinates from a skymap for plotting over CCD images."
},
{
"ref":"pyaurorax.tools.ccd_contour.CCDContourManager",
"url":14,
"doc":"The CCDContourManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.ccd_contour.CCDContourManager.azimuth",
"url":14,
"doc":"Obtain CCD Coordinates of a line of constant latitude. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the CCD image data to generate contours for. constant_azimuth (int or float): The azimuth angle, in degrees, to create contour of. min_elevation (int or float): Optionally specify the elevation angle at which contour begins. Defaults to 5. max_elevation (int or float): Optionally specify the elevation angle at which contour begins. Defaults to 90. n_points (int or float): Optionally specify the number of points used to define a contour. By default a reasonable value is selected automatically. remove_edge_cases (bool): Due to the nature of skymaps, often, around the edge of CCD data, contours will have often undesired behaviour due to being bounded within the CCD range. The result is flattened contours along the edge of CCD boundaries. This is completely expected, and these points are removed by default, completely for aesthetic choices. Set this keyword to False to keep all points in the contour. Returns: A tuple (x_pix, y_pix) of numpy arrays containing the coordinates, in pixel units, of the azimuth contour. Raises: ValueError: invalid azimuth supplied.",
"func":1
},
{
"ref":"pyaurorax.tools.ccd_contour.CCDContourManager.elevation",
"url":14,
"doc":"Obtain CCD Coordinates of a line of constant elevation. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the CCD image data to generate contours for. constant_elevation (int or float): The elevation angle, in degrees from the horizon, to create contour of. n_points (int or float): Optionally specify the number of points used to define a contour. By default a reasonable value is selected automatically. remove_edge_cases (bool): Due to the nature of skymaps, often, around the edge of CCD data, contours will have often undesired behaviour due to being bounded within the CCD range. The result is flattened contours along the edge of CCD boundaries. This is completely expected, and these points are removed by default, completely for aesthetic choices. Set this keyword to False to keep all points in the contour. Returns: A tuple (x_pix, y_pix) of numpy arrays containing the coordinates, in pixel units, of the elevation contour. Raises: ValueError: invalid elevation supplied.",
"func":1
},
{
"ref":"pyaurorax.tools.ccd_contour.CCDContourManager.geo",
"url":14,
"doc":"Obtain CCD Coordinates of a line of constant geographic latitude, constant geographic longitude, or a custom contour defined in geographic coordinates. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the CCD image data to generate contours for. altitude_km (int or float): The altitude of the image data to create contours for, in kilometers. contour_lats (ndarray or list): Sequence of geographic latitudes defining a contour. contour_lons (ndarray or list): Sequence of geographic longitudes defining a contour. constant_lat (float or int): Geographic Latitude at which to create line of constant latitude. constant_lon (float or int): Geographic Longitude at which to create line of constant longitude. n_points (int or float): Optionally specify the number of points used to define a contour. By default a reasonable value is selected automatically. remove_edge_cases (bool): Due to the nature of skymaps, often, around the edge of CCD data, contours will have often undesired behaviour due to being bounded within the CCD range. The result is flattened contours along the edge of CCD boundaries. This is completely expected, and these points are removed by default, completely for aesthetic choices. Set this keyword to False to keep all points in the contour. Returns: A tuple (x_pix, y_pix) of numpy arrays containing the coordinates, in pixel units, of the elevation contour. Raises: ValueError: invalid elevation supplied.",
"func":1
},
{
"ref":"pyaurorax.tools.ccd_contour.CCDContourManager.mag",
"url":14,
"doc":"Obtain CCD Coordinates of a line of constant magnetic latitude, constant magnetic longitude, or a custom contour defined in magnetic coordinates. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap corresponding to the CCD image data to generate contours for. timestamp (datetime.datetime): The timestamp used for AACGM Conversions. altitude_km (int or float): The altitude of the image data to create contours for, in kilometers. contour_lats (ndarray or list): Sequence of magnetic latitudes defining a contour. contour_lons (ndarray or list): Sequence of magnetic longitudes defining a contour. constant_lat (float or int): Magnetic Latitude at which to create line of constant latitude. constant_lon (float or int): Magnetic Longitude at which to create line of constant longitude. n_points (int or float): Optionally specify the number of points used to define a contour. By default a reasonable value is selected automatically. remove_edge_cases (bool): Due to the nature of skymaps, often, around the edge of CCD data, contours will have often undesired behaviour due to being bounded within the CCD range. The result is flattened contours along the edge of CCD boundaries. This is completely expected, and these points are removed by default, completely for aesthetic choices. Set this keyword to False to keep all points in the contour. Returns: A tuple (x_pix, y_pix) of numpy arrays containing the coordinates, in pixel units, of the elevation contour. Raises: ValueError: invalid elevation supplied.",
"func":1
},
{
"ref":"pyaurorax.tools.keogram",
"url":15,
"doc":"Generate keograms."
},
{
"ref":"pyaurorax.tools.keogram.KeogramManager",
"url":15,
"doc":"The KeogramManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.tools.keogram.KeogramManager.create",
"url":15,
"doc":"Create a keogram from a set of images. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. If it is not, then be sure to specify the  axis parameter accordingly. timestamp (List[datetime.datetime]): A list of timestamps corresponding to each image. axis (int): The axis to extract the keogram slice from. Default is  0 , meaning the rows (or Y) axis. spectra (bool): Make a keogram out of spectrograph data, for a specific emission. Defaults to False (ASI data). wavelength (numpy.ndarray): The wavelength array corresponding to spectrograph data. If spectra=True, this parameter must be supplied. spect_emission (str): The emission (green, red, blue, hbeta) to prepare from spectrograph data. Default is 'green' (557.7 nm emission). spect_band (Tuple[float]): Manual selection of the wavelength region to integrate for obtaining emissions. Use this to prepare emissions that are not available in spect_emission. spect_band_bg (Tuple[float]): Manual selection of the wavelength region to subtract from integration for manually chosen emissions, via the spect_band argument. Returns: A  pyaurorax.tools.Keogram object. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.keogram.KeogramManager.create_custom",
"url":15,
"doc":"Create a keogram, from a custom slice of a set of images. The slice used is defined by a set of points, in CCD, geographic, or geomagnetic coordinates, within the bounds of the image data. Keogram is created from the bottom up, meaning the first point will correspond to the bottom of the keogram data. Args: images (numpy.ndarray): A set of images. Normally this would come directly from a data  read call, but can also be any arbitrary set of images. It is anticipated that the order of axes is [rows, cols, num_images] or [row, cols, channels, num_images]. If it is not, then be sure to specify the  axis parameter accordingly. timestamp (List[datetime.datetime]): A list of timestamps corresponding to each image. coordinate_system (str): The coordinate system in which input points are defined. Valid options are \"ccd\", \"geo\", or \"mag\". width (int): Width of the desired keogram slice, in CCD pixel units. x_locs (Sequence[float, int]): Sequence of points giving the x-coordinates that define a path through the image data, from which to build the keogram. y_locs (Sequence[float, int]): Sequence of points giving the y-coordinates that define a path through the image data, from which to build the keogram. preview (Optional[bool]): When True, the first frame in images will be displayed, with the keogram slice plotted. skymap (Skymap): The skymap to use in georeferencing when working in geographic or magnetic coordinates. altitude_km (float, int): The altitude of the image data, in km, to use in georeferencing when working in geographic or magnetic coordinates. metric (str): The metric used to compute values for each keogram pixel. Valid options are \"median\", \"mean\", and \"sum\". Defaults to \"median\". Returns: A  pyaurorax.tools.Keogram object. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.classes",
"url":16,
"doc":"Class definitions for data analysis objects."
},
{
"ref":"pyaurorax.tools.classes.mosaic",
"url":17,
"doc":"Class representation for a mosaic."
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap",
"url":17,
"doc":"Prepared skymap data for use by mosaic routines. Attributes: site_uid_list (List[str]): List of site unique identifiers contained within this object. elevation (List[numpy.ndarray]): List of elevation data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute. polyfill_lat (List[numpy.ndarray]): List of latitude polygon data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute. polyfill_lon (List[numpy.ndarray]): List of longitude polygon data, with each element corresponding to each site. Order matches that of the  site_uid_list attribute."
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap.site_uid_list",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap.elevation",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap.polyfill_lat",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap.polyfill_lon",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicSkymap.pretty_print",
"url":17,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData",
"url":17,
"doc":"Prepared image data for use by mosaic routines. Attributes: site_uid_list (List[str]): List of site unique identifiers contained within this object. timestamps (List[datetime.datetime]): Timestamps of corresponding images. images (Dict[str, numpy.ndarray]): Image data prepared into the necessary format; a dictionary. Keys are the site UID, ndarray is the prepared data. images_dimensions (Dict[str, Tuple]): The image dimensions. data_types (List[str]): The data types for each data object."
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.site_uid_list",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.timestamps",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.images",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.images_dimensions",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.data_types",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.MosaicData.pretty_print",
"url":17,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic",
"url":17,
"doc":"Class representation for a generated mosaic. Attributes: polygon_data (matplotlib.collections.PolyCollection): Generated polygons containing rendered data. cartopy_projection (cartopy.crs.Projection): Cartopy projection to utilize. contour_data (Dict[str, List[Any ): Generated contour data. spect_cmap (str): String giving the cmap to use for spect legend. spect_intensity_scale (Tuple[int]): The min and max values that spectrograph data is scaled to in the mosaic, if any is present."
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.polygon_data",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.cartopy_projection",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.contour_data",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.spect_cmap",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.spect_intensity_scale",
"url":17,
"doc":""
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.pretty_print",
"url":17,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.plot",
"url":17,
"doc":"Generate a plot of the mosaic data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: map_extent (List[int]): Latitude/longitude range to be visible on the rendered map. This is a list of 4 integers and/or floats, in the order of [min_lon, max_lon, min_lat, max_lat]. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . rayleighs (bool): Set to  True if the data being plotted is in Rayleighs. Defaults to  False . max_rayleighs (int): Max intensity scale for Rayleighs. Defaults to  20000 . title (str): The title to display above the plotted mosaic. Default is no title. ocean_color (str): Colour of the ocean. Default is cartopy's default shade of blue. Colours can be supplied as a word, or hexcode prefixed with a ' ' character (ie.  55AADD ). land_color (str): Colour of the land. Default is  gray . Colours can be supplied as a word, or hexcode prefixed with a ' ' character (ie.  41BB87 ). land_edgecolor (str): Color of the land edges. Default is  8A8A8A . Colours can be supplied as a word, or hexcode prefixed with a ' ' character. borders_color (str): Color of the country borders. Default is  AEAEAE . Colours can be supplied as a word, or hexcode prefixed with a ' ' character. borders_disable (bool): Disbale rendering of the borders. Default is  False . cbar_title (str): Title for the colorbar. Default is no title. colorbar_title (str): Deprecated as of v1.10.0. Use 'cbar_title' instead in the exact same way. cbar_colormap (str): The matplotlib colormap to use for the plotted color bar. Default is  gray , unless mosaic was created with spectrograph data, in which case defaults to the colormap used for spectrograph data Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed montage, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises:",
"func":1
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.add_geo_contours",
"url":17,
"doc":"Add geographic contours to a mosaic. Args: lats (ndarray or list): Sequence of geographic latitudes defining a contour. lons (ndarray or list): Sequence of geographic longitudes defining a contour. constant_lats (float, int, or Sequence): Geographic Latitude(s) at which to add line(s) of constant latitude. constant_lons (float, int, or Sequence): Geographic Longitude(s) at which to add line(s) of constant longitude. color (str): The matplotlib color used for the contour(s). linewidth (float or int): The contour thickness. linestyle (str): The matplotlib linestyle used for the contour(s). marker (str): The matplotlib marker used for the contour(s). bring_to_front (bool): Plots the contour on top of all other currently plotted objects. Returns: The object's contour_data parameter is populated appropriately. Raises: ValueError: issues encountered with supplied parameters.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.mosaic.Mosaic.add_mag_contours",
"url":17,
"doc":"Add geomagnetic contours to a mosaic. Args: timestamp (datetime.datetime): The timestamp used in computing AACGM coordinates. lats (ndarray or list): Sequence of geomagnetic latitudes defining a contour. lons (ndarray or list): Sequence of geomagnetic longitudes defining a contour. constant_lats (float, int, Sequence): Geomagnetic latitude(s) at which to add contour(s) of constant latitude. constant_lons (float, int, Sequence): Geomagnetic longitude(s) at which to add contours(s) of constant longitude. color (str): The matplotlib color used for the contour(s). linewidth (float or int): The contour thickness. linestyle (str): The matplotlib linestyle used for the contour(s). marker (str): The matplotlib marker used for the contour(s). bring_to_front (bool): Plots the contour on top of all other currently plotted objects. Returns: The object's contour_data parameter is populated appropriately. Raises: ValueError: issues encountered with supplied parameters",
"func":1
},
{
"ref":"pyaurorax.tools.classes.keogram",
"url":18,
"doc":"Class representation for a keogram."
},
{
"ref":"pyaurorax.tools.classes.keogram.Keogram",
"url":18,
"doc":"Class representation for a keogram Attributes: data (numpy.ndarray): The derived keogram data. timestamp (List[datetime.datetime]): Timestamps corresponding to each keogram slice. instrument_type (str): String giving instrument type, either 'asi' or 'spectrograph'. ccd_y (numpy.ndarray): The y-axis representing CCD Y coordinates for the keogram. mag_y (numpy.ndarray): The y-axis representing magnetic latitude for the keogram. geo_y (numpy.ndarray): The y-axis representing geographic latitude for the keogram."
},
{
"ref":"pyaurorax.tools.classes.keogram.Keogram.pretty_print",
"url":18,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.keogram.Keogram.set_geographic_latitudes",
"url":18,
"doc":"Set the geographic latitude values for this keogram, using the specified skymap data. The data will be set to the geo_y attribute of this Keogram object, which can then be used for plotting and/or further analysis. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap object to use. This parameter is required. altitude_km (int): The altitude to use, in kilometers. If not specified, it will use the default in the skymap object. If the specified altitude is not valid, a ValueError will be raised. Returns: None. The Keogram object's  geo_y attribute will be updated. Raises: ValueError: Issues with specified altitude.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.keogram.Keogram.set_magnetic_latitudes",
"url":18,
"doc":"Set the magnetic latitude values for this keogram, using the specified skymap data. AACGMv2 will be utilized to perform the calculations. The resulting data will be set to the mag_y attribute of this Keogram object, which can then be used for plotting and/or further analysis. Args: skymap (pyaurorax.data.ucalgary.Skymap): The skymap object to use. This parameter is required. timestamp (datetime.datetime): The timestamp to use when converting skymap data to magnetic coordinates. Utilizes AACGMv2 to do the conversion. altitude_km (int): The altitude to use. If not specified, it will use the default in the skymap object. If the specified altitude is not valid, a ValueError will be raised. Returns: None. The Keogram object's  mag_y attribute will be updated. Raises: ValueError: Issues with specified altitude.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.keogram.Keogram.plot",
"url":18,
"doc":"Generate a plot of the keogram data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: y_type (str): Type of y-axis to use when plotting. Options are  ccd ,  mag , or  geo . The default is  ccd . This parameter is required. title (str): The title to display above the plotted keogram. Default is no title. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . cmap (str): The matplotlib colormap to use. Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). aspect (str or float): The matplotlib imshow aspect ration to use. A common value for this is  auto . All valid values can be found on the [matplotlib documentation](https: matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.imshow.html). axes_visible (bool): Display the axes. Default is  True . xlabel (str): The x-axis label to use. Default is  Time (UTC) . ylabel (str): The y-axis label to use. Default is based on y_type. xtick_increment (int): The x-axis tick increment to use. Default is 100. ytick_increment (int): The y-axis tick increment to use. Default is 50. returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed keogram, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues encountered with the y-axis choice",
"func":1
},
{
"ref":"pyaurorax.tools.classes.montage",
"url":19,
"doc":"Class representation for a montage."
},
{
"ref":"pyaurorax.tools.classes.montage.Montage",
"url":19,
"doc":"Class representation for a montage Attributes: data (numpy.ndarray): The derived montage data. timestamp (List[datetime.datetime]): Timestamps corresponding to each montage image."
},
{
"ref":"pyaurorax.tools.classes.montage.Montage.pretty_print",
"url":19,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.tools.classes.montage.Montage.plot",
"url":19,
"doc":"Generate a plot of the montage data. Either display it (default behaviour), save it to disk (using the  savefig parameter), or return the matplotlib plot object for further usage (using the  returnfig parameter). Args: rows (int): The number of rows to use when displaying the images as a montage. The product of the  rows and  cols parameters must match the number of images supplied when creating the  Montage object. If not, a ValueError will be raised. This parameter is required. cols (int): The number of columns to use when displaying the images as a montage. The product of the  rows and  cols parameters must match the number of images supplied when creating the  Montage object. If not, a ValueError will be raised. This parameter is required. timestamps_display (bool): Display the timestamps on each montage image. Defaults to True. This parameter is optional. timestamps_format (str): The format of the timestamps when being displayed. This is the same format string as when using the  strftime() function for a  datetime object. Default format string is  %Y-%m-%d %H:%M:%S . Refer to the [Python documentation](https: docs.python.org/3/library/datetime.html strftime-and-strptime-format-codes) for further information. This parameter is optional. timestamps_fontsize (int): The font size for the displayed timestamps. Default is size 11. This parameter is optional. figsize (tuple): The matplotlib figure size to use when plotting. For example  figsize=(14,4) . title (str): The title to display above the plotted montage. Default is no title. cmap (str): The matplotlib colormap to use. Commonly used colormaps are: - REGO:  gist_heat - THEMIS ASI:  gray - TREx Blue:  Blues_r - TREx NIR:  gray - TREx RGB:  None A list of all available colormaps can be found on the [matplotlib documentation](https: matplotlib.org/stable/gallery/color/colormap_reference.html). returnfig (bool): Instead of displaying the image, return the matplotlib figure object. This allows for further plot manipulation, for example, adding labels or a title in a different location than the default. Remember - if this parameter is supplied, be sure that you close your plot after finishing work with it. This can be achieved by doing  plt.close(fig) . Note that this method cannot be used in combination with  savefig . savefig (bool): Save the displayed image to disk instead of displaying it. The parameter savefig_filename is required if this parameter is set to True. Defaults to  False . savefig_filename (str): Filename to save the image to. Must be specified if the savefig parameter is set to True. savefig_quality (int): Quality level of the saved image. This can be specified if the savefig_filename is a JPG image. If it is a PNG, quality is ignored. Default quality level for JPGs is matplotlib/Pillow's default of 75%. Returns: The displayed montage, by default. If  savefig is set to True, nothing will be returned. If  returnfig is set to True, the plotting variables  (fig, ax) will be returned. Raises: ValueError: issues with the y-axis choice, or rows/cols choice.",
"func":1
},
{
"ref":"pyaurorax.exceptions",
"url":20,
"doc":"Unique exception classes utilized by PyAuroraX. These exceptions can be used to help trap specific errors raised by this library. Note that all exceptions are imported at the root level of the library. They can be referenced using [ pyaurorax.AuroraXError ](exceptions.html pyaurorax.exceptions.AuroraXError) or  pyaurorax.exceptions.AuroraXError ."
},
{
"ref":"pyaurorax.exceptions.AuroraXError",
"url":20,
"doc":"Common base class for all non-exit exceptions."
},
{
"ref":"pyaurorax.exceptions.AuroraXInitializationError",
"url":20,
"doc":"Error occurred during library initialization"
},
{
"ref":"pyaurorax.exceptions.AuroraXPurgeError",
"url":20,
"doc":"Error occurred during purging of download or tar extraction working directory"
},
{
"ref":"pyaurorax.exceptions.AuroraXAPIError",
"url":20,
"doc":"Error occurred during an API call"
},
{
"ref":"pyaurorax.exceptions.AuroraXNotFoundError",
"url":20,
"doc":"The AuroraX record was not found"
},
{
"ref":"pyaurorax.exceptions.AuroraXDuplicateError",
"url":20,
"doc":"A duplicate record already exists"
},
{
"ref":"pyaurorax.exceptions.AuroraXUnauthorizedError",
"url":20,
"doc":"A privileged operation was attempted without authorization"
},
{
"ref":"pyaurorax.exceptions.AuroraXConflictError",
"url":20,
"doc":"A conflict occurred while modifying records"
},
{
"ref":"pyaurorax.exceptions.AuroraXDataRetrievalError",
"url":20,
"doc":"Error occurred while retrieving search data"
},
{
"ref":"pyaurorax.exceptions.AuroraXSearchError",
"url":20,
"doc":"An error occurred in the API while performing a search"
},
{
"ref":"pyaurorax.exceptions.AuroraXUploadError",
"url":20,
"doc":"Error occurred during upload operation"
},
{
"ref":"pyaurorax.exceptions.AuroraXMaintenanceError",
"url":20,
"doc":"AuroraX API is in maintenance mode, read-only tasks are only possible"
},
{
"ref":"pyaurorax.exceptions.AuroraXUnsupportedReadError",
"url":20,
"doc":"Unsupported dataset for read function NOTE: this is primarily a PyUCalgarySRS error"
},
{
"ref":"pyaurorax.exceptions.AuroraXDownloadError",
"url":20,
"doc":"Error occurred during downloading of data NOTE: this is primarily a PyUCalgarySRS error"
},
{
"ref":"pyaurorax.search",
"url":21,
"doc":"Interact with the AuroraX search engine. This includes finding data sources, searching for conjunctions or ephemeris data, and uploading/managing your own data in the AuroraX platform."
},
{
"ref":"pyaurorax.search.SearchManager",
"url":21,
"doc":"The SearchManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.SearchManager.util",
"url":21,
"doc":"Access to the  util submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.api",
"url":21,
"doc":"Access to the  api submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.sources",
"url":21,
"doc":"Access to the  sources submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.availability",
"url":21,
"doc":"Access to the  availability submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.metadata",
"url":21,
"doc":"Access to the  metadata submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.requests",
"url":21,
"doc":"Access to the  requests submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.ephemeris",
"url":21,
"doc":"Access to the  ephemeris submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.data_products",
"url":21,
"doc":"Access to the  data_products submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.SearchManager.conjunctions",
"url":21,
"doc":"Access to the  conjunctions submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.DataSource",
"url":21,
"doc":"AuroraX data source record Attributes: identifier (int): The unique AuroraX data source identifier program (str): The program for this data source platform (str): The platform for this data source instrument_type (str): The instrument type for this data source source_type (str): The data source type for this data source. Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. display_name (str): The display name for this data source metadata (Dict): Metadata for this data source (arbitrary keys and values) owner (str): The owner's email address of this data source maintainers (List[str]): The email addresses of AuroraX accounts that can alter this data source and its associated records ephemeris_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with this data source data_product_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in data product records associated with this data source stats (DataSourceStatistics): Data source statistics information format (str): The format used when printing the data source, defaults to  full_record . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables."
},
{
"ref":"pyaurorax.search.DataSource.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.Location",
"url":21,
"doc":"Representation for an AuroraX search engine location. This data can be in geodetic coordinates, GSM coordinates, or geodetic northern/southern B-trace magnetic footprints. Latitude and longitude values are in decimal degrees format, ranging from -90 to 90 for latitude and -180 to 180 for longitude. Note that latitude and longitude must both be numbers, or both be None. Attributes: lat (float): latitude value lon (float): longitude value Raises: ValueError: if both latitude and longitude are not real numbers, or not both None."
},
{
"ref":"pyaurorax.search.Location.lat",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.Location.lon",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.Location.to_json_serializable",
"url":21,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.AvailabilityResult",
"url":21,
"doc":"Class definition for data availability information Attributes: data_source (pyaurorax.search.DataSource): The data source that the records are associated with available_ephemeris (Dict): The ephemeris availability information available_data_products (Dict): The data product availability information"
},
{
"ref":"pyaurorax.search.AvailabilityResult.data_source",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.AvailabilityResult.available_data_products",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.AvailabilityResult.available_ephemeris",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.EphemerisData",
"url":21,
"doc":"Ephemeris object Attributes: data_source (DataSource): Data source that the ephemeris record is associated with epoch (datetime.datetime): Timestamp for the record (assumed it is in UTC) location_geo (Location): Location object containing geographic latitude and longitude location_gsm (Location): Location object containing GSM latitude and longitude (leave empty for data sources with a type of 'ground') nbtrace (Location): Location object with north B-trace geographic latitude and longitude sbtrace (Location): Location object with south B-trace geographic latitude and longitude metadata (Dict): Metadata for this record (arbitrary keys and values)"
},
{
"ref":"pyaurorax.search.EphemerisData.to_json_serializable",
"url":21,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: A dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch",
"url":21,
"doc":"Class representing an ephemeris search Note: At least one search criteria from programs, platforms, or instrument_types must be specified. Attributes: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of programs to search through, defaults to None platforms (List[str]): List of platforms to search through, defaults to None instrument_types (List[str]): List of instrument types to search through, defaults to None metadata_filters (MetadataFilter or List[Dict]): List of dictionaries describing metadata keys and values to filter on, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  AND or  OR ), defaults to  AND response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[EphemerisData]): The ephemeris records found logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.EphemerisSearch.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.query",
"url":21,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.search.EphemerisSearch.execute",
"url":21,
"doc":"Initiate ephemeris search request Raises: pyaurorax.exceptions.AuroraXError: Invalid request parameters are set",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.update_status",
"url":21,
"doc":"Update the status of this ephemeris search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.check_for_data",
"url":21,
"doc":"Check to see if data is available for this ephemeris search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.get_data",
"url":21,
"doc":"Retrieve the data available for this ephemeris search request",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.wait",
"url":21,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.cancel",
"url":21,
"doc":"Cancel the ephemeris search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.EphemerisSearch.describe",
"url":21,
"doc":"Describe the ephemeris search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the ephemeris search object",
"func":1
},
{
"ref":"pyaurorax.search.DataProductData",
"url":21,
"doc":"Data product object Attributes: data_source (DataSource): Data source that the ephemeris record is associated with data_product_type (str): Data product type (\"keogram\", \"movie\", \"summary_plot\", etc.) start (datetime.datetime): Starting timestamp for the record (assumed it is in UTC), inclusive end (datetime.datetime): Ending timestamp for the record (assumed it is in UTC), inclusive url (str): The URL of data product metadata (Dict): Metadata for this record (arbitrary keys and values)"
},
{
"ref":"pyaurorax.search.DataProductData.to_json_serializable",
"url":21,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: A dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch",
"url":21,
"doc":"Class representing a data product search Attributes: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of program names to search platforms (List[str]): List of platform names to search instrument_types (List[str]): List of instrument types to search data_product_types (List[str]): List of strings describing data product types to filter on e.g. \"keogram\", defaults to None. Valid options are:  keogram ,  montage ,  movie ,  summary_plot , and  data_availability . metadata_filters (MetadataFilter or List[Dict]): The metadata filters to use when searching, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  and or  or ), defaults to  and . This parameter is deprecated in exchange for passing a MetadataFilter object into the metadata_filters parameter. response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[DataProductData]): The data product records found logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.DataProductSearch.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.query",
"url":21,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.search.DataProductSearch.execute",
"url":21,
"doc":"Initiate a data product search request",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.update_status",
"url":21,
"doc":"Update the status of this data product search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.check_for_data",
"url":21,
"doc":"Check to see if data is available for this data product search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.get_data",
"url":21,
"doc":"Retrieve the data available for this data product search request",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.wait",
"url":21,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.cancel",
"url":21,
"doc":"Cancel the data product search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to 1 second. verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.search.DataProductSearch.describe",
"url":21,
"doc":"Describe the data products search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the data products search object",
"func":1
},
{
"ref":"pyaurorax.search.Conjunction",
"url":21,
"doc":"Conjunction object Attributes: conjunction_type (str): The type of location data used when the conjunction was found (either  nbtrace ,  sbtrace , or  geographic ) start (datetime.datetime): Start timestamp of the conjunction end (datetime.datetime): End timestamp of the conjunction data_sources (List[DataSource]): Data sources in the conjunction min_distance (float): Minimum kilometer distance of the conjunction max_distance (float): Maximum kilometer distance of the conjunction events (List[Dict]): The sub-conjunctions that make up this over-arching conjunction (the conjunctions between each set of two data sources) closest_epoch (datetime.datetime): Timestamp for when data sources were closest farthest_epoch (datetime.datetime): Timestamp for when data sources were farthest"
},
{
"ref":"pyaurorax.search.Conjunction.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch",
"url":21,
"doc":"Class representing a conjunction search Attributes: start (datetime.datetime): Start timestamp of the search (inclusive). end (datetime.datetime): End timestamp of the search (inclusive). distance (int or float or Dict): The maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground (List[GroundCriteriaBlock or Dict]): List of ground instrument criteria blocks, defaults to []. space (List[SpaceCriteriaBlock or Dict]): List of space instrument criteria blocks, defaults to []. events (List[EventsCriteriaBlock or Dict]): List of event criteria blocks, defaults to []. custom_locations (List[CustomLocationsCriteriaBlock or Dict]): List of custom location criteria blocks, defaults to []. conjunction_types (List[str]): List of conjunction types, defaults to [] (meaning all conjunction types). Valid options are 'nbtrace', 'sbtrace', and 'geographic'. Defaults to 'nbtrace'. response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[Conjunction, Dict]): A list of the conjunctions found. The results will be dictionaries only if the response_format parameter was supplied. logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.ConjunctionSearch.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.check_criteria_block_count_validity",
"url":21,
"doc":"Check the number of of criteria blocks to see if there is too many. A max of 10 is allowed by the AuroraX conjunction search engine. An exception is raised if it was determined to have too many. Raises: pyaurorax.exceptions.AuroraXError: Too many criteria blocks are found",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.get_advanced_distances_combos",
"url":21,
"doc":"Get the advanced distances combinations for this search Args: default_distance (int): The default distance to use, defaults to None Returns: The advanced distances combinations",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.distance",
"url":21,
"doc":"Property for the distance parameter Returns: The distance dictionary with all combinations"
},
{
"ref":"pyaurorax.search.ConjunctionSearch.query",
"url":21,
"doc":"Property for the query value Returns: The query parameter"
},
{
"ref":"pyaurorax.search.ConjunctionSearch.execute",
"url":21,
"doc":"Initiate a conjunction search request Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.update_status",
"url":21,
"doc":"Update the status of this conjunction search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.check_for_data",
"url":21,
"doc":"Check to see if data is available for this conjunction search request Returns: True if data is available, else False Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.get_data",
"url":21,
"doc":"Retrieve the data available for this conjunction search request Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.wait",
"url":21,
"doc":"Block and wait until the request is complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.cancel",
"url":21,
"doc":"Cancel the conjunction search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ConjunctionSearch.describe",
"url":21,
"doc":"Describe the conjunction search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the conjunction search object",
"func":1
},
{
"ref":"pyaurorax.search.GroundCriteriaBlock",
"url":21,
"doc":"Representation of a ground criteria block used for conjunction searches. Attributes: programs (List[str]): List of program strings to use in this criteria block. Optional, default is  [] . platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.GroundCriteriaBlock.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.SpaceCriteriaBlock",
"url":21,
"doc":"Representation of a space criteria block used for conjunction searches. Attributes: programs (List[str]): List of program strings to use in this criteria block. Optional, default is  [] . platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . hemisphere (List[str]): List of hemisphere strings to use in this criteria block. Valid values are 'northern' or 'southern'. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.SpaceCriteriaBlock.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.EventsCriteriaBlock",
"url":21,
"doc":"Representation of a event criteria block used for conjunction searches. Attributes: platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.EventsCriteriaBlock.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.CustomLocationsCriteriaBlock",
"url":21,
"doc":"Representation of a custom location criteria block used for conjunction searches. Attributes: locations (List[Tuple[float, float ): List of locations to use in this criteria block. Location are 2-element tuples of (latitude, longitude). Latitude values must be between -90 and 90, and longitude values must be between -180 and 180. Optional, default is  [] ."
},
{
"ref":"pyaurorax.search.CustomLocationsCriteriaBlock.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.CustomLocationsCriteriaBlock.to_search_query_dict",
"url":21,
"doc":"",
"func":1
},
{
"ref":"pyaurorax.search.MetadataFilter",
"url":21,
"doc":"Representation for an AuroraX search engine metadata filter. These are used as part of conjunction, ephemeris, and data product searching. Attributes: expressions (List[MetadataFilterExpression]): The list of metadata filter expressions for use with conjunction, ephemeris, and data product searches. operator (str): The logical operator to use when the search engine will evaluate multiple expressions. If not supplied, the search engine will perform a logical 'AND' between each expression. Possible choices are 'and' or 'or'. Raises: ValueError: if invalid operator was specified."
},
{
"ref":"pyaurorax.search.MetadataFilter.operator",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.MetadataFilter.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.MetadataFilter.to_query_dict",
"url":21,
"doc":"Convert the expression object to a dictionary that will be used when executing a search.",
"func":1
},
{
"ref":"pyaurorax.search.MetadataFilterExpression",
"url":21,
"doc":"Representation for an AuroraX search engine metadata filter expression. These are used as part of conjunction, ephemeris, and data product searching. Attributes: key (str): The special key for the metadata filter. For example, 'nbtrace_region'. values (Any or List[Any]): The value(s) that the search will use when filtering. This can either be a single value, or a list of values. operator (str): The operator to use when the search engine evaluates the expression. Valid choices are: \"=\", \"!=\", \">\", \" =\", \"<=\", \"between\", \"in\", \"not in\". The \"in\" and \"not in\" operators are meant exclusively for expressions where there are multiple values (ie. the values parameter is a list of strings). Raises: ValueError: if invalid operator was specified."
},
{
"ref":"pyaurorax.search.MetadataFilterExpression.operator",
"url":21,
"doc":""
},
{
"ref":"pyaurorax.search.MetadataFilterExpression.pretty_print",
"url":21,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.MetadataFilterExpression.to_query_dict",
"url":21,
"doc":"Convert the expression object to a dictionary that will be used when executing a search.",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris",
"url":22,
"doc":"Use the AuroraX search engine to search and upload ephemeris records. Note that all functions and classes from submodules are all imported at this level of the ephemeris module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager",
"url":22,
"doc":"The EphemerisManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.search",
"url":22,
"doc":"Search for ephemeris records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of programs to search through, defaults to None platforms (List[str]): List of platforms to search through, defaults to None instrument_types (List[str]): List of instrument types to search through, defaults to None metadata_filters (MetadataFilter or List[Dict]): The metadata filters to use when searching, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  and or  or ), defaults to  and . This parameter is deprecated in exchange for passing a MetadataFilter object into the metadata_filters parameter. response_format (Dict): JSON representation of desired data response format poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second return_immediately (bool): Initiate the search and return without waiting for data to be received, defaults to False verbose (bool): Output poll times and other progress messages, defaults to False Returns: A  pyaurorax search.EphemerisSearch object Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.upload",
"url":22,
"doc":"Upload ephemeris records to AuroraX Args: identifier (int): AuroraX data source ID records (List[EphemerisData]): Ephemeris records to upload validate_source (bool): Validate all records before uploading, defaults to False chunk_size (int): Number of records to upload in a single call, defaults to 500 Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXUploadError: Upload error pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.delete",
"url":22,
"doc":"Delete ephemeris records between a timeframe. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source (DataSource): Data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start (datetime.datetime): Timestamp marking beginning of range to delete records for, inclusive end (datetime.datetime): Timestamp marking end of range to delete records for, inclusive Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXNotFoundError: Source not found pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.describe",
"url":22,
"doc":"Describe an ephemeris search as an \"SQL-like\" string. Either a EphemerisSearch object can be supplied, or a dictionary of the raw JSON query. Args: search_obj (EphemerisSearch): The ephemeris search to describe, optional query_dict (Dict): The ephemeris search query represented as a raw dictionary, optional Returns: The \"SQL-like\" string describing the ephemeris search object",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.get_request_url",
"url":22,
"doc":"Get the ephemeris search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted ephemeris searches. Args: request_id (str): The request identifier Returns: The request URL",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.EphemerisManager.create_response_format_template",
"url":22,
"doc":"Generate a template dictionary that can be used as the response_format parameter in an ephemeris search. Args: default (bool): The default value to set for every parameter that can be returned, defaults to True. Returns: A template dictionary for the response format",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes",
"url":23,
"doc":"Separated classes and functions used by the ephemeris module. Note that these classes and variables are all imported higher up at the top of the ephemeris module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.search.ephemeris.classes.ephemeris",
"url":24,
"doc":"Class definition for an ephemeris record"
},
{
"ref":"pyaurorax.search.ephemeris.classes.ephemeris.EphemerisData",
"url":24,
"doc":"Ephemeris object Attributes: data_source (DataSource): Data source that the ephemeris record is associated with epoch (datetime.datetime): Timestamp for the record (assumed it is in UTC) location_geo (Location): Location object containing geographic latitude and longitude location_gsm (Location): Location object containing GSM latitude and longitude (leave empty for data sources with a type of 'ground') nbtrace (Location): Location object with north B-trace geographic latitude and longitude sbtrace (Location): Location object with south B-trace geographic latitude and longitude metadata (Dict): Metadata for this record (arbitrary keys and values)"
},
{
"ref":"pyaurorax.search.ephemeris.classes.ephemeris.EphemerisData.to_json_serializable",
"url":24,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: A dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search",
"url":25,
"doc":"Class definition for an ephemeris search"
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch",
"url":25,
"doc":"Class representing an ephemeris search Note: At least one search criteria from programs, platforms, or instrument_types must be specified. Attributes: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of programs to search through, defaults to None platforms (List[str]): List of platforms to search through, defaults to None instrument_types (List[str]): List of instrument types to search through, defaults to None metadata_filters (MetadataFilter or List[Dict]): List of dictionaries describing metadata keys and values to filter on, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  AND or  OR ), defaults to  AND response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[EphemerisData]): The ephemeris records found logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.pretty_print",
"url":25,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.query",
"url":25,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.execute",
"url":25,
"doc":"Initiate ephemeris search request Raises: pyaurorax.exceptions.AuroraXError: Invalid request parameters are set",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.update_status",
"url":25,
"doc":"Update the status of this ephemeris search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.check_for_data",
"url":25,
"doc":"Check to see if data is available for this ephemeris search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.get_data",
"url":25,
"doc":"Retrieve the data available for this ephemeris search request",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.wait",
"url":25,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.cancel",
"url":25,
"doc":"Cancel the ephemeris search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.ephemeris.classes.search.EphemerisSearch.describe",
"url":25,
"doc":"Describe the ephemeris search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the ephemeris search object",
"func":1
},
{
"ref":"pyaurorax.search.data_products",
"url":26,
"doc":"Use the AuroraX search engine to search and upload data product records. Note that all functions and classes from submodules are all imported at this level of the data_products module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager",
"url":26,
"doc":"The DataProductsManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.search",
"url":26,
"doc":"Search for data product records By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Note: At least one search criteria from programs, platforms, or instrument_types, must be specified. Args: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of programs to search through, defaults to None platforms (List[str]): List of platforms to search through, defaults to None instrument_types (List[str]): List of instrument types to search through, defaults to None data_product_types (List[str]): List of strings describing data product types to filter on e.g. \"keogram\", defaults to None. Valid options are:  keogram ,  montage ,  movie ,  summary_plot , and  data_availability . metadata_filters (MetadataFilter or List[Dict]): The metadata filters to use when searching, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  and or  or ), defaults to  and . This parameter is deprecated in exchange for passing a MetadataFilter object into the metadata_filters parameter. response_format (Dict): JSON representation of desired data response format poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second return_immediately (bool): Initiate the search and return without waiting for data to be received, defaults to False verbose (bool): Output poll times and other progress messages, defaults to False Returns: A  pyaurorax.search.DataProductSearch object",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.upload",
"url":26,
"doc":"Upload data product records to AuroraX Args: identifier (int): The AuroraX data source ID records (List[DataProductData]): Data product records to upload validate_source (bool): Validate all records before uploading, defaults to False chunk_size (int): Number of records to upload in a single call, defaults to 500 Returns: 0 for success, raises exception on error Raises: pyaurorax.exceptions.AuroraXUploadError: Upload error pyaurorax.exceptions.AuroraXError: Data source validation error",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.delete_urls",
"url":26,
"doc":"Delete data products by URL. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source (DataSource): Data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) urls (List[str]): URLs of data product records to delete Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.delete",
"url":26,
"doc":"Delete data products associated with a data source within a date range. The API processes this request asynchronously, so this method will return immediately whether or not the data has already been deleted. Args: data_source (DataSource): Data source associated with the data product records (note that identifier, program, platform, and instrument_type are required) start (datetime.datetime): Timestamp marking beginning of range to delete records for, inclusive end (datetime.datetime): Timestamp marking end of range to delete records for, inclusive data_product_types (List[str]): Specific types of data product to delete, e.g. [\"keogram\", \"movie\"]. If omitted, all data product types will be deleted. Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXNotFoundError: Source not found pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.describe",
"url":26,
"doc":"Describe a data product search as an \"SQL-like\" string. Either a DataProductSearch object can be supplied, or a dictionary of the raw JSON query. Args: search_obj (DataProductSearch): The data product search to describe, optional query_dict (Dict): The data product search query represented as a raw dictionary, optional Returns: The \"SQL-like\" string describing the data product search object",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.get_request_url",
"url":26,
"doc":"Get the data product search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted data product searches. Args: request_id (str): The request identifier Returns: The request URL",
"func":1
},
{
"ref":"pyaurorax.search.data_products.DataProductsManager.create_response_format_template",
"url":26,
"doc":"Generate a template dictionary that can be used as the response_format parameter in a data products search. Args: default (bool): The default value to set for every parameter that can be returned, defaults to True. Returns: A template dictionary for the response format",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes",
"url":27,
"doc":"Separated classes and functions used by the data_products module. Note that these classes and variables are all imported higher up at the top of the data_products module. They can be referenced from there instead of digging in deeper to these submodules."
},
{
"ref":"pyaurorax.search.data_products.classes.data_product",
"url":28,
"doc":"Class definition for a data product"
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DATA_PRODUCT_TYPE_KEOGRAM",
"url":28,
"doc":"Data product type for keograms. Keograms are a 2-D representation of a series of images, and are one of the most popular data products that auroral science uses. More information can be found at https: docs.aurorax.space/about_the_data/standards/ keograms."
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DATA_PRODUCT_TYPE_MONTAGE",
"url":28,
"doc":"Data product type for montages. Like keograms, montages are another representation of a series of images. However, montages are not a 2D representation but rather a collage of thumnbail images for the period of time. An example can be found at https: data.phys.ucalgary.ca/sort_by_project/THEMIS/asi/stream2/2021/12/28/gill_themis19/20211228__gill_themis19_full-montage.pgm.jpg"
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DATA_PRODUCT_TYPE_MOVIE",
"url":28,
"doc":"Data product type for movies. Movies are timelapse video files of auroral data, usually as MP4 or MPEG. They can consist of frames for a whole night, or an hour, and can be at any cadence that is most appropriate."
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DATA_PRODUCT_TYPE_SUMMARY_PLOT",
"url":28,
"doc":"Data product type for summary plots. A summary plot can be any type of plot that shows auroral data in a summary format, for example a background-subtracted meridian scanning photometer plot showing counts in Rayleighs."
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DATA_PRODUCT_TYPE_DATA_AVAILABILITY",
"url":28,
"doc":"Data product type for data availability. The AuroraX data availability system does not account for times when data was not expected to be collected, such as summer shutdowns due to inadequate night hours. This data product type for 'data availability' is meant to be used as a smarter data availability mechanism for Aurora."
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DataProductData",
"url":28,
"doc":"Data product object Attributes: data_source (DataSource): Data source that the ephemeris record is associated with data_product_type (str): Data product type (\"keogram\", \"movie\", \"summary_plot\", etc.) start (datetime.datetime): Starting timestamp for the record (assumed it is in UTC), inclusive end (datetime.datetime): Ending timestamp for the record (assumed it is in UTC), inclusive url (str): The URL of data product metadata (Dict): Metadata for this record (arbitrary keys and values)"
},
{
"ref":"pyaurorax.search.data_products.classes.data_product.DataProductData.to_json_serializable",
"url":28,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: A dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search",
"url":29,
"doc":"Class definition for a data product search"
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch",
"url":29,
"doc":"Class representing a data product search Attributes: start (datetime.datetime): Start timestamp of the search (inclusive) end (datetime.datetime): End timestamp of the search (inclusive) programs (List[str]): List of program names to search platforms (List[str]): List of platform names to search instrument_types (List[str]): List of instrument types to search data_product_types (List[str]): List of strings describing data product types to filter on e.g. \"keogram\", defaults to None. Valid options are:  keogram ,  montage ,  movie ,  summary_plot , and  data_availability . metadata_filters (MetadataFilter or List[Dict]): The metadata filters to use when searching, defaults to None metadata_filters_logical_operator (str): The logical operator to use when evaluating metadata filters (either  and or  or ), defaults to  and . This parameter is deprecated in exchange for passing a MetadataFilter object into the metadata_filters parameter. response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[DataProductData]): The data product records found logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.pretty_print",
"url":29,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.query",
"url":29,
"doc":"Property for the query value"
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.execute",
"url":29,
"doc":"Initiate a data product search request",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.update_status",
"url":29,
"doc":"Update the status of this data product search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.check_for_data",
"url":29,
"doc":"Check to see if data is available for this data product search request Returns: True if data is available, else False",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.get_data",
"url":29,
"doc":"Retrieve the data available for this data product search request",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.wait",
"url":29,
"doc":"Block and wait for the request to complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.cancel",
"url":29,
"doc":"Cancel the data product search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to 1 second. verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.search.data_products.classes.search.DataProductSearch.describe",
"url":29,
"doc":"Describe the data products search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the data products search object",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions",
"url":30,
"doc":"Use the AuroraX search engine to find conjunctions between groupings of data sources. Note that all functions and classes from submodules are all imported at this level of the conjunctions module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager",
"url":30,
"doc":"The ConjunctionsManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.swarmaurora",
"url":30,
"doc":"Access to the  swarmaurora submodule from within a PyAuroraX object."
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.search",
"url":30,
"doc":"Search for conjunctions By default, this function will block and wait until the request completes and all data is downloaded. If you don't want to wait, set the 'return_immediately value to True. The Search object will be returned right after the search has been started, and you can use the helper functions as part of that object to get the data when it's done. Args: start (datetime.datetime): Start timestamp of the search (inclusive). end (datetime.datetime): End timestamp of the search (inclusive). distance (int or float or Dict): The maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground (List[GroundCriteriaBlock or Dict]): List of ground instrument criteria blocks, defaults to []. space (List[SpaceCriteriaBlock or Dict]): List of space instrument criteria blocks, defaults to []. events (List[EventsCriteriaBlock or Dict]): List of event criteria blocks, defaults to []. custom_locations (List[CustomLocationsCriteriaBlock or Dict]): List of custom location criteria blocks, defaults to []. conjunction_types (List[str]): List of conjunction types, defaults to [] (meaning all conjunction types). Valid options are 'nbtrace', 'sbtrace', and 'geographic'. Defaults to 'nbtrace'. response_format (Dict): JSON representation of desired data response format. poll_interval (bool): Seconds to wait between polling calls, defaults to 1 second. return_immediately (bool): Initiate the search and return without waiting for data to be received, defaults to  False . verbose (bool): Show the progress of the request using the request log, defaults to  False . Returns: A  pyaurorax.search.ConjunctionSearch object Raises: pyaurorax.exceptions.AuroraXSearchError: The API experienced a search error",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.search_from_raw_query",
"url":30,
"doc":"Search for conjunctions, using a query dictionary as the input. This is especially useful if you're working in the AuroraX Conjunction Search webpage to create a search and you'd like to port it over to this Python library with ease. Args: query (Dict or str): A query in dictionary or string format. If it's in string format, it should valid JSON. In the conjunction search web page (https: aurorax.space/conjunctionSearch/standard), click on the 'More' button under the 'Tools' section on the right of the page. Then click on 'About query' to bring up a modal. Copy the query in JSON format using the clipboard icon, and use this JSON string as input to the function. Many JSON strings can be pasted as a dictionary object without any adjustments, however, there are a few edge cases. For example, if the max_distances field has 'null' values in it, then it is not valid Python. In this case, enclose the JSON in a multi-line string (using the triple-quotes), and pass the query as a string to the function. poll_interval (bool): Seconds to wait between polling calls, defaults to 1 second. return_immediately (bool): Initiate the search and return without waiting for data to be received, defaults to  False . verbose (bool): Show the progress of the request using the request log, defaults to  False . Returns: A  ConjunctionSearch object. Raises: pyaurorax.exceptions.AuroraXSearchError: An error was encountered during the search process",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.describe",
"url":30,
"doc":"Describe a conjunction search as an \"SQL-like\" string. Either a ConjunctionSearch object can be supplied, or a dictionary of the raw JSON query. Args: search_obj (ConjunctionSearch): The conjunction search to describe, optional query_dict (Dict): The conjunction search query represented as a raw dictionary, optional Returns: The \"SQL-like\" string describing the conjunction search object Raises: pyaurorax.exceptions.AuroraXError: Invalid arguments",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.get_request_url",
"url":30,
"doc":"Get the conjunction search request URL for a given request ID. This URL can be used for subsequent pyaurorax.requests function calls. Primarily this method facilitates delving into details about a set of already-submitted conjunction searches. Args: request_id (str): The request identifier Returns: The request URL",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.create_advanced_distance_combos",
"url":30,
"doc":"Get the advanced distances combinations for the specified parameters Args: distance (int): The default distance to use, defaults to None ground (int): The number of ground criteria blocks, defaults to 0 space (int): The number of space criteria blocks, defaults to 0 events (int): The number of events criteria blocks, defaults to 0 custom (int): The number of custom location criteria blocks, defaults to 0 Returns: The advanced distances combinations",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.ConjunctionsManager.create_response_format_template",
"url":30,
"doc":"Generate a template dictionary that can be used as the response_format parameter in a conjunction search. Args: default (bool): The default value to set for every parameter that can be returned, defaults to True. Returns: A template dictionary for the response format",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.swarmaurora",
"url":31,
"doc":""
},
{
"ref":"pyaurorax.search.conjunctions.swarmaurora.SwarmAuroraManager",
"url":31,
"doc":"The SwarmAuroraManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.conjunctions.swarmaurora.SwarmAuroraManager.get_url",
"url":31,
"doc":"Get a URL that displays a conjunction search in the Swarm-Aurora Conjunction Finder Args: search_obj (ConjunctionSearch): A conjunction search object, must be a completed search with the 'request_id' value populated Returns: The Swarm-Aurora Conjunction Finder URL for this conjunction search",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.swarmaurora.SwarmAuroraManager.open_in_browser",
"url":31,
"doc":"In a browser, open a conjunction search in the Swarm-Aurora Conjunction Finder. Args: search_obj (ConjunctionSearch): A conjunction search object, must be a completed search with the 'request_id' value populated browser (str): The browser type to load using. Default is your default browser. Some common other options are \"google-chrome\", \"firefox\", or \"safari\". For all available options, refer to https: docs.python.org/3/library/webbrowser.html webbrowser.get Raises: ValueError: Unsupported browser specified",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.swarmaurora.SwarmAuroraManager.create_custom_import_file",
"url":31,
"doc":"Generate a Swarm-Aurora custom import file for a given conjunction search Args: search_obj (ConjunctionSearch): A conjunction search object, must be a completed search with the 'request_id' value populated filename (str): The output filename, default is 'swarmaurora_custom_import_file_{requestID}.json' return_dict (bool): Return the custom import file contents as a dictionary instead of saving a file, default is False Returns: The filename of the saved custom import file, or a dictionary with the file contents if  return_dict is set to True",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes",
"url":32,
"doc":""
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block",
"url":33,
"doc":"Class definition for a criteria block used for conjunction searches"
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.GroundCriteriaBlock",
"url":33,
"doc":"Representation of a ground criteria block used for conjunction searches. Attributes: programs (List[str]): List of program strings to use in this criteria block. Optional, default is  [] . platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.GroundCriteriaBlock.pretty_print",
"url":33,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.SpaceCriteriaBlock",
"url":33,
"doc":"Representation of a space criteria block used for conjunction searches. Attributes: programs (List[str]): List of program strings to use in this criteria block. Optional, default is  [] . platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . hemisphere (List[str]): List of hemisphere strings to use in this criteria block. Valid values are 'northern' or 'southern'. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.SpaceCriteriaBlock.pretty_print",
"url":33,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.EventsCriteriaBlock",
"url":33,
"doc":"Representation of a event criteria block used for conjunction searches. Attributes: platforms (List[str]): List of platform strings to use in this criteria block. Optional, default is  [] . instrument_types (List[str]): List of instrument type strings to use in this criteria block. Optional, default is  [] . metadata_filters (MetadataFilter): The metadata filters to use in this criteria block. Optional, default is None."
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.EventsCriteriaBlock.pretty_print",
"url":33,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.CustomLocationsCriteriaBlock",
"url":33,
"doc":"Representation of a custom location criteria block used for conjunction searches. Attributes: locations (List[Tuple[float, float ): List of locations to use in this criteria block. Location are 2-element tuples of (latitude, longitude). Latitude values must be between -90 and 90, and longitude values must be between -180 and 180. Optional, default is  [] ."
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.CustomLocationsCriteriaBlock.pretty_print",
"url":33,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.criteria_block.CustomLocationsCriteriaBlock.to_search_query_dict",
"url":33,
"doc":"",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search",
"url":34,
"doc":"Class definition for a conjunction search"
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch",
"url":34,
"doc":"Class representing a conjunction search Attributes: start (datetime.datetime): Start timestamp of the search (inclusive). end (datetime.datetime): End timestamp of the search (inclusive). distance (int or float or Dict): The maximum distance allowed between data sources when searching for conjunctions. This can either be a number (int or float), or a dictionary modified from the output of the \"get_advanced_distances_combos()\" function. ground (List[GroundCriteriaBlock or Dict]): List of ground instrument criteria blocks, defaults to []. space (List[SpaceCriteriaBlock or Dict]): List of space instrument criteria blocks, defaults to []. events (List[EventsCriteriaBlock or Dict]): List of event criteria blocks, defaults to []. custom_locations (List[CustomLocationsCriteriaBlock or Dict]): List of custom location criteria blocks, defaults to []. conjunction_types (List[str]): List of conjunction types, defaults to [] (meaning all conjunction types). Valid options are 'nbtrace', 'sbtrace', and 'geographic'. Defaults to 'nbtrace'. response_format (Dict): JSON representation of desired data response format request (AuroraXResponse): AuroraXResponse object returned when the search is executed request_id (str): Unique ID assigned to the request by the AuroraX API request_url (str): Unique URL assigned to the request by the AuroraX API executed (bool): Indicates if the search has been executed/started completed (bool): Indicates if the search has finished data_url (str): The URL where data is accessed query (Dict): The query for this request as JSON status (Dict): The status of the query data (List[Conjunction, Dict]): A list of the conjunctions found. The results will be dictionaries only if the response_format parameter was supplied. logs (List[Dict]): All log messages outputted by the AuroraX API for this request"
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.pretty_print",
"url":34,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.check_criteria_block_count_validity",
"url":34,
"doc":"Check the number of of criteria blocks to see if there is too many. A max of 10 is allowed by the AuroraX conjunction search engine. An exception is raised if it was determined to have too many. Raises: pyaurorax.exceptions.AuroraXError: Too many criteria blocks are found",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.get_advanced_distances_combos",
"url":34,
"doc":"Get the advanced distances combinations for this search Args: default_distance (int): The default distance to use, defaults to None Returns: The advanced distances combinations",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.distance",
"url":34,
"doc":"Property for the distance parameter Returns: The distance dictionary with all combinations"
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.query",
"url":34,
"doc":"Property for the query value Returns: The query parameter"
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.execute",
"url":34,
"doc":"Initiate a conjunction search request Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.update_status",
"url":34,
"doc":"Update the status of this conjunction search request Args: status (Dict): The previously-retrieved status of this request (include to avoid requesting it from the API again), defaults to None Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.check_for_data",
"url":34,
"doc":"Check to see if data is available for this conjunction search request Returns: True if data is available, else False Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.get_data",
"url":34,
"doc":"Retrieve the data available for this conjunction search request Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.wait",
"url":34,
"doc":"Block and wait until the request is complete and data is available for retrieval Args: poll_interval (float): Time in seconds to wait between polling attempts, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.cancel",
"url":34,
"doc":"Cancel the conjunction search request This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: wait (bool): Wait until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to STANDARD_POLLING_SLEEP_TIME. verbose (bool): Output poll times and other progress messages, defaults to False Returns: 1 on success Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.search.ConjunctionSearch.describe",
"url":34,
"doc":"Describe the conjunction search as an \"SQL-like\" string. Returns: The \"SQL-like\" string describing the conjunction search object",
"func":1
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction",
"url":35,
"doc":"Class definition for a conjunction"
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction.CONJUNCTION_TYPE_NBTRACE",
"url":35,
"doc":"Conjunction search 'conjunction_type' category for finding conjunctions using the north B-trace data"
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction.CONJUNCTION_TYPE_SBTRACE",
"url":35,
"doc":"Conjunction search 'conjunction_type' category for finding conjunctions using the south B-trace data"
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction.CONJUNCTION_TYPE_GEOGRAPHIC",
"url":35,
"doc":"Conjunction search 'conjunction_type' category for finding conjunctions using the geographic position data"
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction.Conjunction",
"url":35,
"doc":"Conjunction object Attributes: conjunction_type (str): The type of location data used when the conjunction was found (either  nbtrace ,  sbtrace , or  geographic ) start (datetime.datetime): Start timestamp of the conjunction end (datetime.datetime): End timestamp of the conjunction data_sources (List[DataSource]): Data sources in the conjunction min_distance (float): Minimum kilometer distance of the conjunction max_distance (float): Maximum kilometer distance of the conjunction events (List[Dict]): The sub-conjunctions that make up this over-arching conjunction (the conjunctions between each set of two data sources) closest_epoch (datetime.datetime): Timestamp for when data sources were closest farthest_epoch (datetime.datetime): Timestamp for when data sources were farthest"
},
{
"ref":"pyaurorax.search.conjunctions.classes.conjunction.Conjunction.pretty_print",
"url":35,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.requests",
"url":36,
"doc":"Helper methods for retrieving data from an AuroraX search engine API request. Note that all functions and classes from submodules are all imported at this level of the requests module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.search.requests.RequestsManager",
"url":36,
"doc":"The RequestsManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.requests.RequestsManager.get_status",
"url":36,
"doc":"Retrieve the status of a request Args: request_url (str): The URL of the request information Returns: The status information for the request",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.get_data",
"url":36,
"doc":"Retrieve the data for a request Args: data_url (str): The URL for the data of a request, response_format (Dict): The response format to send as post data, defaults to None skip_serializing (bool): Skip any object serializing, defaults to False Raises: pyaurorax.exceptions.AuroraXDataRetrievalError: Error retrieving data Returns: the data for this request",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.get_logs",
"url":36,
"doc":"Retrieve the logs for a request Args: request_url (str): The URL of the request information Returns: The log messages for the request",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.wait_for_data",
"url":36,
"doc":"Block and wait for the data to be made available for a request Args: request_url (str): The URL of the request information poll_interval (float): Seconds to wait between polling calls, defaults to 1 second verbose (bool): Output poll times and other progress messages, defaults to False Returns: the status information for the request",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.cancel",
"url":36,
"doc":"Cancel the request at the given URL. This method returns immediately by default since the API processes this request asynchronously. If you would prefer to wait for it to be completed, set the 'wait' parameter to True. You can adjust the polling time using the 'poll_interval' parameter. Args: request_url (str): The URL string of the request to be canceled wait (bool): Set to True to block until the cancellation request has been completed (may wait for several minutes) poll_interval (float): Seconds to wait between polling calls, defaults to 1 second verbose (bool): If True then output poll times and other progress, defaults to False Returns: 0 on success Raises: pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.list",
"url":36,
"doc":"Retrieve a list of search requests matching certain criteria. Administrators only. Args: search_type (str): The type of search request, valid values are 'conjunction', 'ephemeris', or 'data_product'. Exclusion of value will return all search requests of any type, defaults to None active (bool): Return searches that are currently active or not, exclude for both, defaults to None start (datetime.datetime): Start timestamp for narrowing down search timeframes, defaults to None end (datetime.datetime): End timestamp for narrowing down search timeframes, defaults to None file_size (int): Filter by result file size, measured in KB, defaults to None result_count (int): Filter by result count, defaults to None query_duration (int): Filter by query duration, measured in milliseconds, defaults to None error_condition (bool): Filter by if an error occurred or not, exclude for both, defaults to None Returns: List of matching search requests Raises: ValueError: Unsupported search type pyaurorax.exceptions.AuroraXUnauthorizedError: Invalid API key for this operation",
"func":1
},
{
"ref":"pyaurorax.search.requests.RequestsManager.delete",
"url":36,
"doc":"Entirely remove a search request from the AuroraX database. Administrators only. Args: request_id (str): Search request UUID Returns: 0 on success, raises error on failure Raises: pyaurorax.exceptions.AuroraXNotFoundError: Data source not found",
"func":1
},
{
"ref":"pyaurorax.search.api",
"url":37,
"doc":"Interface for AuroraX API requests. Primarily an under-the-hood module not needed for most use-cases."
},
{
"ref":"pyaurorax.search.api.AuroraXAPIRequest",
"url":37,
"doc":"Class definition for an AuroraX API request Attributes: url (str): API endpoint URL for the request method (str): The HTTP method to use. Valid values are:  get ,  post ,  put ,  delete ,  patch params (Dict): URL parameters to send in the request, defaults to  {} body (Dict): The body of the request (ie. post data), defaults to  {} headers (Dict): Any headers to send as part of the request (in addition to the default ones), defaults to  {} null_response (bool): Signifies if we expect a response from the API that has no body/data in it (ie. requests to upload data that respond with just a 202 status code), defaults to  False "
},
{
"ref":"pyaurorax.search.api.AuroraXAPIRequest.execute",
"url":37,
"doc":"Execute an AuroraX API request Returns: An  pyaurorax.search.api.AuroraXAPIResponse object Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXUnauthorizedError: Unauthorized user attempted to perform this action pyaurorax.exceptions.AuroraXMaintenanceError: AuroraX API is currently undergoing maintenance",
"func":1
},
{
"ref":"pyaurorax.search.api.AuroraXAPIResponse",
"url":37,
"doc":"Class definition for an AuroraX API response Attributes: request (Any): The request object data (Any): The data received as part of the request status_code (int): The HTTP status code received when making the request"
},
{
"ref":"pyaurorax.search.api.classes",
"url":38,
"doc":"Class definitions used by the  api submodule"
},
{
"ref":"pyaurorax.search.api.classes.request",
"url":39,
"doc":"Class definition for an AuroraX API request"
},
{
"ref":"pyaurorax.search.api.classes.request.AuroraXAPIRequest",
"url":39,
"doc":"Class definition for an AuroraX API request Attributes: url (str): API endpoint URL for the request method (str): The HTTP method to use. Valid values are:  get ,  post ,  put ,  delete ,  patch params (Dict): URL parameters to send in the request, defaults to  {} body (Dict): The body of the request (ie. post data), defaults to  {} headers (Dict): Any headers to send as part of the request (in addition to the default ones), defaults to  {} null_response (bool): Signifies if we expect a response from the API that has no body/data in it (ie. requests to upload data that respond with just a 202 status code), defaults to  False "
},
{
"ref":"pyaurorax.search.api.classes.request.AuroraXAPIRequest.execute",
"url":39,
"doc":"Execute an AuroraX API request Returns: An  pyaurorax.search.api.AuroraXAPIResponse object Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXUnauthorizedError: Unauthorized user attempted to perform this action pyaurorax.exceptions.AuroraXMaintenanceError: AuroraX API is currently undergoing maintenance",
"func":1
},
{
"ref":"pyaurorax.search.api.classes.response",
"url":40,
"doc":"Class definition for an AuroraX API response"
},
{
"ref":"pyaurorax.search.api.classes.response.AuroraXAPIResponse",
"url":40,
"doc":"Class definition for an AuroraX API response Attributes: request (Any): The request object data (Any): The data received as part of the request status_code (int): The HTTP status code received when making the request"
},
{
"ref":"pyaurorax.search.location",
"url":41,
"doc":"Class definition for AuroraX search engine location data"
},
{
"ref":"pyaurorax.search.location.Location",
"url":41,
"doc":"Representation for an AuroraX search engine location. This data can be in geodetic coordinates, GSM coordinates, or geodetic northern/southern B-trace magnetic footprints. Latitude and longitude values are in decimal degrees format, ranging from -90 to 90 for latitude and -180 to 180 for longitude. Note that latitude and longitude must both be numbers, or both be None. Attributes: lat (float): latitude value lon (float): longitude value Raises: ValueError: if both latitude and longitude are not real numbers, or not both None."
},
{
"ref":"pyaurorax.search.location.Location.lat",
"url":41,
"doc":""
},
{
"ref":"pyaurorax.search.location.Location.lon",
"url":41,
"doc":""
},
{
"ref":"pyaurorax.search.location.Location.to_json_serializable",
"url":41,
"doc":"Convert object to a JSON-serializable object (ie. translate datetime objects to strings) Returns: a dictionary object that is JSON-serializable",
"func":1
},
{
"ref":"pyaurorax.search.availability",
"url":42,
"doc":"Retrieve availability information about data in the AuroraX search engine."
},
{
"ref":"pyaurorax.search.availability.AvailabilityManager",
"url":42,
"doc":"The AvailabilityManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.availability.AvailabilityManager.ephemeris",
"url":42,
"doc":"Retrieve information about the number of existing ephemeris records Args: start (datetime.date): Start date to retrieve availability info for (inclusive) end (datetime.date): End date to retrieve availability info for (inclusive) program (str): Program name to filter sources by, defaults to  None platform (str): Platform name to filter sources by, defaults to  None instrument_type (str): Instrument type to filter sources by, defaults to  None source_type (str): The data source type to filter for, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. owner (str): Owner email address to filter sources by, defaults to  None format (str): The format of the data sources returned, defaults to  FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. slow (bool): Query the data using a slower, but more accurate method, defaults to  False Returns: Ephemeris availability information matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.availability.AvailabilityManager.data_products",
"url":42,
"doc":"Retrieve information about the number of existing data product records Args: start (datetime.date): Start date to retrieve availability info for (inclusive) end (datetime.date): End date to retrieve availability info for (inclusive) program (str): Program name to filter sources by, defaults to  None platform (str): Platform name to filter sources by, defaults to  None instrument_type (str): Instrument type to filter sources by, defaults to  None source_type (str): The data source type to filter for, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. owner (str): Owner email address to filter sources by, defaults to  None format (str): The format of the data sources returned, defaults to  FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. slow (bool): Query the data using a slower, but more accurate method, defaults to  False Returns: Data product availability information matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: An API error was encountered",
"func":1
},
{
"ref":"pyaurorax.search.availability.AvailabilityResult",
"url":42,
"doc":"Class definition for data availability information Attributes: data_source (pyaurorax.search.DataSource): The data source that the records are associated with available_ephemeris (Dict): The ephemeris availability information available_data_products (Dict): The data product availability information"
},
{
"ref":"pyaurorax.search.availability.AvailabilityResult.data_source",
"url":42,
"doc":""
},
{
"ref":"pyaurorax.search.availability.AvailabilityResult.available_data_products",
"url":42,
"doc":""
},
{
"ref":"pyaurorax.search.availability.AvailabilityResult.available_ephemeris",
"url":42,
"doc":""
},
{
"ref":"pyaurorax.search.availability.classes",
"url":43,
"doc":"Class definitions used by the  availability submodule"
},
{
"ref":"pyaurorax.search.availability.classes.availability_result",
"url":44,
"doc":"Class definition for data availability information"
},
{
"ref":"pyaurorax.search.availability.classes.availability_result.AvailabilityResult",
"url":44,
"doc":"Class definition for data availability information Attributes: data_source (pyaurorax.search.DataSource): The data source that the records are associated with available_ephemeris (Dict): The ephemeris availability information available_data_products (Dict): The data product availability information"
},
{
"ref":"pyaurorax.search.availability.classes.availability_result.AvailabilityResult.data_source",
"url":44,
"doc":""
},
{
"ref":"pyaurorax.search.availability.classes.availability_result.AvailabilityResult.available_data_products",
"url":44,
"doc":""
},
{
"ref":"pyaurorax.search.availability.classes.availability_result.AvailabilityResult.available_ephemeris",
"url":44,
"doc":""
},
{
"ref":"pyaurorax.search.sources",
"url":45,
"doc":"Manage AuroraX data sources utilized by the search engine."
},
{
"ref":"pyaurorax.search.sources.SourcesManager",
"url":45,
"doc":"The SourcesManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.sources.SourcesManager.list",
"url":45,
"doc":"Retrieve all data source records. Parameters can be used to filter as desired. Args: program (str): The program to filter for, defaults to  None platform (str): The platform to filter for, defaults to  None instrument_type (str): The instrument type to filter for, defaults to  None source_type (str): The data source type to filter for, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. owner (str): The owner's email address to filter for, defaults to  None format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. order (str): The category to order results by. Valid values are identifier, program, platform, instrument_type, display_name, or owner. Defaults to  identifier include_stats (bool): Include additional stats information about the data source, defaults to  False Returns: A list of  DataSource records matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.list_in_table",
"url":45,
"doc":"Display all data source records in a table. Parameters can be used to filter as desired. Args: program (str): The program to filter for, defaults to  None platform (str): The platform to filter for, defaults to  None instrument_type (str): The instrument type to filter for, defaults to  None source_type (str): The data source type to filter for, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. owner (str): The owner's email address to filter for, defaults to  None format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. order (str): The category to order results by. Valid values are identifier, program, platform, instrument_type, display_name, or owner. Defaults to  identifier table_max_width (int): Table maximum width, defaults to 200 limit (int): Limit the table rows to a certain value, regardless of how many sources it found to display Returns: No return, only prints a table Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.search",
"url":45,
"doc":"Search for data source records. Parameters can be used to filter as desired. This function is very similar to the  list() function, however multiple programs, platforms, and/or instrument types can be supplied here. The  list() function only supports single values for the parameters. Args: programs (List[str]): The programs to search for, defaults to  [] platforms (List[str]): The platforms to search for, defaults to  [] instrument_types (List[str]): The instrument types to search for, defaults to  [] format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. order (str): The category to order results by. Valid values are identifier, program, platform, instrument_type, display_name, or owner. Defaults to  identifier include_stats (bool): Include additional stats information about the data source, defaults to  False Returns: A list of  DataSource records matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.get",
"url":45,
"doc":"Retrieve a specific data source record Args: program (str): The program name platform (str): The platform name instrument_type (str): The instrument type name format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. include_stats (bool): Include additional stats information about the data source, defaults to  False Returns: The  DataSource matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXNotFoundError: Source not found",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.get_using_filters",
"url":45,
"doc":"Retrieve all data sources matching a filter Args: program (str): The program to filter for, defaults to  None platform (str): The platform to filter for, defaults to  None instrument_type (str): The instrument type to filter for, defaults to  None source_type (str): The data source type to filter for, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. owner (str): The owner's email address to filter for, defaults to  None format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. order (str): The category to order results by. Valid values are identifier, program, platform, instrument_type, display_name, or owner. Defaults to  identifier include_stats (bool): Include additional stats information about the data source, defaults to  False . Returns: A list of  DataSource records matching the requested parameters Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.get_using_identifier",
"url":45,
"doc":"Retrieve data source for a specific identifier Args: identifier (int): The AuroraX unique data source identifier number format (str): The format of the data sources returned, defaults to  classes.data_source.FORMAT_FULL_RECORD . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables. include_stats (bool): Include additional stats information about the data source, defaults to  False Returns: The  DataSource for the specified identifier Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.add",
"url":45,
"doc":"Add a new data source to the AuroraX search engine Args: data_source (DataSource): The data source to add. THe data source record must have at least the following values specified: program, platform, instrument_type, display_name, and source_type. Returns: The newly created  DataSource . Raises: ValueError: Invalid values for DataSource supplied pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXUnauthorizedError: Not allowed to perform task, or API key / user permissions are invalid pyaurorax.exceptions.AuroraXDuplicateError: Duplicate data source, already exists",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.delete",
"url":45,
"doc":"Delete a data source from the AuroraX search engine Args: identifier (int): The data source unique identifier to delete Returns: 0 on success, raises error if an issue was encountered Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXUnauthorizedError: Not allowed to perform task, or API key / user permissions are invalid pyaurorax.exceptions.AuroraXNotFoundError: Data source not found pyaurorax.exceptions.AuroraXConflictError: A conflict occurred",
"func":1
},
{
"ref":"pyaurorax.search.sources.SourcesManager.update",
"url":45,
"doc":"Update a data source in the AuroraX search engine. Omitted fields are ignored during the update. Note that the identifier cannot be updated. If you need to update the data source's identifier, we recommend deletion of the original data source and recreation using the desired identifier. Args: identifier (int): The AuroraX unique identifier for the data source, required and cannot be updated program (str): The new program for the data source, defaults to  None platform (str): The new platform for the data source, defaults to  None instrument_type (str): The new instrument type for the data source, defaults to  None source_type (str): The new source type for the data source, defaults to  None . Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. display_name (str): The new display name for the data source, defaults to  None metadata (Dict): The new metadata for the data source, defaults to  None owner (str): The new owner for the data source, defaults to  None maintainers (str): The new maintainer AuroraX account email addresses, defaults to  None ephemeris_metadata_schema (List[Dict]): A list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with the data source, defaults to  None data_product_metadata_schema (List[Dict]): A list of dictionaries capturing the metadata keys and values that can appear in data product records associated with the data source, defaults to  None Returns: The updated  DataSource record Raises: pyaurorax.exceptions.AuroraXAPIError: Error during API call pyaurorax.exceptions.AuroraXUnauthorizedError: Not allowed to perform task, or API key / user permissions are invalid pyaurorax.exceptions.AuroraXNotFoundError: Data source not found",
"func":1
},
{
"ref":"pyaurorax.search.sources.DataSource",
"url":45,
"doc":"AuroraX data source record Attributes: identifier (int): The unique AuroraX data source identifier program (str): The program for this data source platform (str): The platform for this data source instrument_type (str): The instrument type for this data source source_type (str): The data source type for this data source. Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. display_name (str): The display name for this data source metadata (Dict): Metadata for this data source (arbitrary keys and values) owner (str): The owner's email address of this data source maintainers (List[str]): The email addresses of AuroraX accounts that can alter this data source and its associated records ephemeris_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with this data source data_product_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in data product records associated with this data source stats (DataSourceStatistics): Data source statistics information format (str): The format used when printing the data source, defaults to  full_record . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables."
},
{
"ref":"pyaurorax.search.sources.DataSource.pretty_print",
"url":45,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.sources.DataSourceStatistics",
"url":45,
"doc":"Data source statistics information Attributes: ephemeris_count (int): Total number of ephemeris records for this data source data_product_count (int): Total number of ephemeris records for this data source earliest_ephemeris_loaded (datetime.datetime): Timestamp of the earliest ephemeris record latest_ephemeris_loaded (datetime.datetime): Timestamp of the latest ephemeris record earliest_data_product_loaded (datetime.datetime): Timestamp of the earliest data_product record latest_data_product_loaded (datetime.datetime): Timestamp of the latest data product record"
},
{
"ref":"pyaurorax.search.sources.DataSourceStatistics.pretty_print",
"url":45,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.sources.classes",
"url":46,
"doc":"Class definitions used by the  sources submodule"
},
{
"ref":"pyaurorax.search.sources.classes.data_source_stats",
"url":47,
"doc":"Data source statistics information"
},
{
"ref":"pyaurorax.search.sources.classes.data_source_stats.DataSourceStatistics",
"url":47,
"doc":"Data source statistics information Attributes: ephemeris_count (int): Total number of ephemeris records for this data source data_product_count (int): Total number of ephemeris records for this data source earliest_ephemeris_loaded (datetime.datetime): Timestamp of the earliest ephemeris record latest_ephemeris_loaded (datetime.datetime): Timestamp of the latest ephemeris record earliest_data_product_loaded (datetime.datetime): Timestamp of the earliest data_product record latest_data_product_loaded (datetime.datetime): Timestamp of the latest data product record"
},
{
"ref":"pyaurorax.search.sources.classes.data_source_stats.DataSourceStatistics.pretty_print",
"url":47,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.sources.classes.data_source",
"url":48,
"doc":"AuroraX data source record"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.FORMAT_BASIC_INFO",
"url":48,
"doc":"Data sources are returned with basic information: identifier, program, platform, instrument type, source type, and display name"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.FORMAT_BASIC_INFO_WITH_METADATA",
"url":48,
"doc":"Data sources are returned with basic information, plus the metadata"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.FORMAT_IDENTIFIER_ONLY",
"url":48,
"doc":"Data sources are returned with only the identifier"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.FORMAT_FULL_RECORD",
"url":48,
"doc":"Data sources are returned with all information."
},
{
"ref":"pyaurorax.search.sources.classes.data_source.FORMAT_DEFAULT",
"url":48,
"doc":"Default data source format (basic info)"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_GROUND",
"url":48,
"doc":"Data source 'source_type' category for a ground instrument"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_LEO",
"url":48,
"doc":"Data source 'source_type' category for a low-earth orbiting satellite"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_HEO",
"url":48,
"doc":"Data source 'source_type' category for a highly-elliptical orbiting satellite"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_LUNAR",
"url":48,
"doc":"Data source 'source_type' category for a lunar orbiting satellite"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_EVENT_LIST",
"url":48,
"doc":"Data source 'source_type' category for a specially-curated event list"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.SOURCE_TYPE_NOT_APPLICABLE",
"url":48,
"doc":"Data source 'source_type' category for a specially-curated event list"
},
{
"ref":"pyaurorax.search.sources.classes.data_source.DataSource",
"url":48,
"doc":"AuroraX data source record Attributes: identifier (int): The unique AuroraX data source identifier program (str): The program for this data source platform (str): The platform for this data source instrument_type (str): The instrument type for this data source source_type (str): The data source type for this data source. Options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.SOURCE_TYPE_ variables. display_name (str): The display name for this data source metadata (Dict): Metadata for this data source (arbitrary keys and values) owner (str): The owner's email address of this data source maintainers (List[str]): The email addresses of AuroraX accounts that can alter this data source and its associated records ephemeris_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in ephemeris records associated with this data source data_product_metadata_schema (Dict): A list of dictionaries capturing the metadata keys and values that can appear in data product records associated with this data source stats (DataSourceStatistics): Data source statistics information format (str): The format used when printing the data source, defaults to  full_record . Other options are in the pyaurorax.search.sources module, or at the top level using the pyaurorax.search.FORMAT_ variables."
},
{
"ref":"pyaurorax.search.sources.classes.data_source.DataSource.pretty_print",
"url":48,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.metadata_filters",
"url":49,
"doc":"Class definition for a metadata filter objects"
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilterExpression",
"url":49,
"doc":"Representation for an AuroraX search engine metadata filter expression. These are used as part of conjunction, ephemeris, and data product searching. Attributes: key (str): The special key for the metadata filter. For example, 'nbtrace_region'. values (Any or List[Any]): The value(s) that the search will use when filtering. This can either be a single value, or a list of values. operator (str): The operator to use when the search engine evaluates the expression. Valid choices are: \"=\", \"!=\", \">\", \" =\", \"<=\", \"between\", \"in\", \"not in\". The \"in\" and \"not in\" operators are meant exclusively for expressions where there are multiple values (ie. the values parameter is a list of strings). Raises: ValueError: if invalid operator was specified."
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilterExpression.operator",
"url":49,
"doc":""
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilterExpression.pretty_print",
"url":49,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilterExpression.to_query_dict",
"url":49,
"doc":"Convert the expression object to a dictionary that will be used when executing a search.",
"func":1
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilter",
"url":49,
"doc":"Representation for an AuroraX search engine metadata filter. These are used as part of conjunction, ephemeris, and data product searching. Attributes: expressions (List[MetadataFilterExpression]): The list of metadata filter expressions for use with conjunction, ephemeris, and data product searches. operator (str): The logical operator to use when the search engine will evaluate multiple expressions. If not supplied, the search engine will perform a logical 'AND' between each expression. Possible choices are 'and' or 'or'. Raises: ValueError: if invalid operator was specified."
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilter.operator",
"url":49,
"doc":""
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilter.pretty_print",
"url":49,
"doc":"A special print output for this class.",
"func":1
},
{
"ref":"pyaurorax.search.metadata_filters.MetadataFilter.to_query_dict",
"url":49,
"doc":"Convert the expression object to a dictionary that will be used when executing a search.",
"func":1
},
{
"ref":"pyaurorax.search.metadata",
"url":50,
"doc":"Interacting with the data source metadata schemas. Note that all functions and classes from submodules are all imported at this level of the metadata module. They can be referenced from here instead of digging in deeper to the submodules."
},
{
"ref":"pyaurorax.search.metadata.MetadataManager",
"url":50,
"doc":"The MetadataManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.metadata.MetadataManager.validate",
"url":50,
"doc":"Validate a metadata record against a schema. This checks that the key names match and there aren't fewer or more keys than expected. Args: schema (List[Dict]): The metadata schema to validate against record (Dict): Metadata record to validate quiet (bool): Suppress any stdout output Returns: True if the metadata record is valid, False if it is not",
"func":1
},
{
"ref":"pyaurorax.search.metadata.MetadataManager.get_ephemeris_schema",
"url":50,
"doc":"Retrieve the ephemeris metadata schema for a data source Args: identifier (int): The AuroraX data source ID Returns: The ephemeris metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.search.metadata.MetadataManager.get_data_products_schema",
"url":50,
"doc":"Retrieve the data products metadata schema for a data source Args: identifier (int): The AuroraX data source ID Returns: The data products metadata schema for the data source",
"func":1
},
{
"ref":"pyaurorax.search.util",
"url":51,
"doc":"Utility methods. For example, converting arbitrary geographic locations to North/South B-trace geographic locations."
},
{
"ref":"pyaurorax.search.util.UtilManager",
"url":51,
"doc":"The UtilManager object is initialized within every PyAuroraX object. It acts as a way to access the submodules and carry over configuration information in the super class."
},
{
"ref":"pyaurorax.search.util.UtilManager.ground_geo_to_nbtrace",
"url":51,
"doc":"Convert geographic location to North B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates using AACGM. This conversion is different based on the timestamp since the magnetic coordinates change over time. Args: geo_location (Location): A Location object representing the geographic location timestamp (datetime.datetime): Timestamp for this set of latitudes and longitudes Returns: The north B-trace location as a  Location object",
"func":1
},
{
"ref":"pyaurorax.search.util.UtilManager.ground_geo_to_sbtrace",
"url":51,
"doc":"Convert geographic location to South B-Trace geographic location The timestamp is required because when calculating the B-trace values, the location is converted into geomagnetic coordinates using AACGM. This conversion is different based on the timestamp since the magnetic coordinates change over time. Args: geo_location (Location): A Location object representing the geographic location timestamp (datetime.datetime): Timestamp for this set of latitudes and longitudes Returns: The south B-trace location as a  Location object",
"func":1
}
]