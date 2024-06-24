---
hide:
  - toc
---

# aurorax_ucalgary_get_urls

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_UCALGARY_GET_URLS
;
; PURPOSE:
;       Retrieve list of URLS that can be downloaded from the UCalgary
;       Open Data Platform.
;
; EXPLANATION:
;       Retrieve the URLs of files available for download from the UCalgary
;       Open Data Platform, for the given dataset, timeframe, and optional
;       site/device. This function is used by the aurorax_ucalgary_download()
;       function.
;
; CALLING SEQUENCE:
;       aurorax_ucalgary_get_urls(dataset_name, start_ts, end_ts)
;
; PARAMETERS:
;       dataset_name       name of the dataset to get URLs of data files for
;       start_ts           start timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       end_ts             end timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       site_uid           unique 4-letter site UID to filter on (e.g., atha, gill, fsmi), optional
;       device_uid         unique device UID to filter on (e.g., themis08, rgb-09), optional
;
; OUTPUT
;       information about the available URLs of data files
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       u = aurorax_ucalgary_get_urls('THEMIS_ASI_RAW','2022-01-01T06:00:00','2022-01-01T06:59:59',site_uid='atha')
;       u = aurorax_ucalgary_get_urls('TREX_RGB_RAW_NOMINAL','2022-01-01T06:00:00','2022-01-01T06:00:00')
;+
;-------------------------------------------------------------
```