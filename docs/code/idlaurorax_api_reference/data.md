---
hide:
  - toc
---

# Data Access

Below are all functions and procedures available in IDL-AuroraX related to data access.

- [`aurorax_list_datasets`](#aurorax_list_datasets)
- [`aurorax_get_dataset`](#aurorax_get_dataset)
- [`aurorax_list_observatories`](#aurorax_list_observatories)
- [`aurorax_ucalgary_download_best_calibration`](#aurorax_ucalgary_download_best_calibration)
- [`aurorax_ucalgary_download_best_skymap`](#aurorax_ucalgary_download_best_skymap)
- [`aurorax_ucalgary_download`](#aurorax_ucalgary_download)
- [`aurorax_ucalgary_get_urls`](#aurorax_ucalgary_get_urls)
- [`aurorax_ucalgary_is_read_supported`](#aurorax_ucalgary_is_read_supported)
- [`aurorax_ucalgary_read`](#aurorax_ucalgary_read)

## aurorax_list_datasets

```
;+
; :Description:
;       Retrieve information about available datasets, including provider,
;       short+long descriptions, and DOI details. Optional parameters are
;       used to filter for certain matching datasets.
;
; :Keywords:
;       name: in, optional, String
;         The dataset name to filter on. This is used for partial matches too, and is
;         case insensitive.
;       level: in, optional, String
;         Supply a level string for filtering. Valid strings are: L0, L1, L1A, L2, L3. Value
;         is case insensitive.
;
; :Returns:
;       List(Structure)
;
; :Examples:
;       datasets = aurorax_list_datasets(name='themis_asi')
;       datasets = aurorax_list_datasets(name='trex')
;+
```

## aurorax_get_dataset

```
;+
; :Description:
;       Retrieve information about a specific dataset for which you can
;       download data for. Information includes details such as provider,
;       short and long descriptions, and DOI details.
;
; :Parameters:
;       name: in, required, String
;         dataset name to retrieve, case-insensitive
;
; :Returns:
;       Struct
;
; :Examples:
;       dataset = aurorax_get_dataset("THEMIS_ASI_RAW")
;+
```

## aurorax_list_observatories

```
;+
; :Description:
;       Retrieve list of available observatories where an instrument exist,
;       including full name, geodetic latitude and longitude. Optional parameters
;       are used to filter for certain matching observatories.
;
; :Parameters:
;       instrument_array: in, required, String
;         the instrument array. Possible values are 'themis_asi', 'rego', 'trex_rgb',
;         'trex_nir', 'trex_blue', 'trex_spectrograph', and 'smile_asi'.
;
; :Keywords:
;       uid: in, optional, String
;         site unique identifier to filter on
;
; :Returns:
;       List(Structure)
;
; :Examples:
;       observatories = aurorax_list_observatories('themis_asi')
;       observatories = aurorax_list_observatories('trex_rgb', uid='gill')
;+
```

## aurorax_ucalgary_download_best_calibration

```
;+
; :Description:
;       Download the best calibration file for the given dataset name, timestamp, and site UID.
;
; :Parameters:
;       dataset_name: in, required, String
;         name of the calibration dataset to download data for
;       device_uid: in, required, String
;         the device UID to evaluate.
;       time_stamp: in, required, String
;         timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;
; :Keywords:
;       download_path: in, optional, String
;         path to save data to, default is your home directory
;       overwrite: in, optional, Boolean
;         download the files regardless of them existing locally already
;       quiet: in, optional, Boolean
;         no print messages, data download will be silent
;
; :Returns:
;       Struct
;
; :Examples:
;       d = aurorax_ucalgary_download_best_calibration('REGO_CALIBRATION_FLATFIELD_IDLSAV', '654', '2021-11-04T00:00:00')
;       d = aurorax_ucalgary_download_best_calibration('TREX_NIR_CALIBRATION_RAYLEIGHS_IDLSAV', '216', '2021-11-04T00:00:00', /overwrite)
;+
```

# aurorax_ucalgary_download_best_skymap

```
;+
; :Description:
;       Download the best skymap for the given dataset name, timestamp, and site UID.
;
; :Parameters:
;       dataset_name: in, required, String
;         name of the skymap dataset to download data for
;       site_uid: in, required, String
;         unique 4-letter site UID to retrieve skymap for
;       time_stamp: in, required, String
;         timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;
; :Keywords:
;       download_path: in, optional, String
;         path to save data to, default is your home directory
;       overwrite: in, optional, Boolean
;         download the skymap files regardless of them existing locally already
;       quiet: in, optional, Boolean
;         no print messages, data download will be silent
;
; :Returns:
;       Struct
;
; :Examples:
;       d = aurorax_ucalgary_download_best_skymap('THEMIS_ASI_SKYMAP_IDLSAV','atha','2020-01-01T00:00:00')
;       d = aurorax_ucalgary_download_best_skymap('TREX_RGB_SKYMAP_IDLSAV','gill','2023-02-01T06:00:00',/overwrite)
;+
```

# aurorax_ucalgary_download

```
;+
; :Description:
;       Download data from the UCalgary Open Data Platform, for the given
;       dataset, timeframe, and optional site/device.
;
; :Parameters:
;       dataset_name: in, required, String
;         name of the dataset to download data for
;       start_ts: in, required, String
;         start timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       end_ts: in, required, String
;         end timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;
; :Keywords:
;       site_uid: in, optional, String
;         unique 4-letter site UID to filter on (e.g., atha, gill, fsmi)
;       device_uid: in, optional, String
;         unique device UID to filter on (e.g., themis08, rgb-09)
;       download_path: in, optional, String
;         path to save data to, default is your home directory
;       overwrite: in, optional, Boolean
;         download the files regardless of them existing locally already
;       quiet: in, optional, Boolean
;         no print messages, data download will be silent
;
; :Returns:
;       Struct
;
; :Examples:
;       d = aurorax_ucalgary_download('THEMIS_ASI_RAW','2022-01-01T06:00:00','2022-01-01T06:59:59',site_uid='atha')
;       d = aurorax_ucalgary_download('TREX_RGB_RAW_NOMINAL','2022-01-01T06:00:00','2022-01-01T06:00:00',/overwrite)
;+
```

# aurorax_ucalgary_get_urls

```
;+
; :Description:
;       Retrieve the URLs of files available for download from the UCalgary
;       Open Data Platform, for the given dataset, timeframe, and optional
;       site/device. This function is used by the aurorax_ucalgary_download()
;       function.
;
; :Parameters:
;       dataset_name: in, required, String
;         name of the dataset to get URLs of data files for
;       start_ts: in, required, String
;         start timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       end_ts: in, required, String
;         end timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;
; :Keywords:
;       site_uid: in, optional, String
;         unique 4-letter site UID to filter on (e.g., atha, gill, fsmi)
;       device_uid: in, optional, String
;         unique device UID to filter on (e.g., themis08, rgb-09)
;
; :Returns:
;       Struct
;
; :Examples:
;       u = aurorax_ucalgary_get_urls('THEMIS_ASI_RAW','2022-01-01T06:00:00','2022-01-01T06:59:59', site_uid='atha')
;       u = aurorax_ucalgary_get_urls('TREX_RGB_RAW_NOMINAL','2022-01-01T06:00:00','2022-01-01T06:00:00')
;+
```

# aurorax_ucalgary_is_read_supported

```
;+
; :Description:
;       Determine if a given dataset is supported in the aurorax_ucalgary_read()
;       function. This function will return 0 for False, 1 for True.
;
;       Some datasets provided by UCalgary require special readfile routines. This
;       function provides the ability to programmatically determine if a dataset
;       is supported in the aurorax_ucalgary_read() function.
;
;       Some datasets are simple enough for special read routines to be needed. For
;       example, 'THEMIS_ASI_DAILY_KEOGRAM_JPG', can be read in using the built-in
;       READ_JPEG procedure.
;
; :Parameters:
;       dataset_name: in, required, String
;         name of the dataset to check for read support
;
; :Returns:
;       Integer
;
; :Examples:
;       supported = aurorax_ucalgary_is_read_supported('THEMIS_ASI_RAW')
;       supported = aurorax_ucalgary_is_read_supported('THEMIS_ASI_DAILY_KEOGRAM_JPG')
;+
```

# aurorax_ucalgary_read

```
;+
; :Description:
;       Read data files that were downloaded from the UCalgary Open Data Platform.
;
; :Parameters:
;       dataset: in, required, Struct
;         struct for the dataset that is being read in (retrieved from aurorax_list_dataset() function)
;       file_list: in, required, String or Array
;         list of files on the local computer to read in (can also be a single filename string)
;
; :Keywords:
;       start_dt: in, optional, String
;         string giving the start timestamp to read data for (format: 'yyyy-mm-ddTHH:MM:SS')
;       end_dt: in, optional, String
;         string giving the end timestamp to read data for (format: 'yyyy-mm-ddTHH:MM:SS')
;       first_record: in, optional, Boolean
;         only read the first record/frame/image in each file
;       no_metadata: in, optional, Boolean
;         exclude reading of metadata
;       quiet: in, optional, Boolean
;         read data silently, no print messages will be shown
;
; :Returns:
;       Struct
;
; :Examples:
;       download_obj = aurorax_ucalgary_download('THEMIS_ASI_RAW', '2022-01-01T06:00:00', '2022-01-01T06:59:59', site_uid = 'gill')
;       data = aurorax_ucalgary_read(download_obj.dataset, download_obj.filenames)
;       help,data
;
;       data = aurorax_ucalgary_read(download_obj.dataset, download_obj.filenames, start_dt = '2022-01-01T06:13:00', end_dt = '2022-01-01T06:40:00')
;       help, data
;+
```