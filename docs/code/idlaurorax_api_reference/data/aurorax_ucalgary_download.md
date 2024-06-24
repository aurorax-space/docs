---
hide:
  - toc
---

# aurorax_ucalgary_download

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_UCALGARY_DOWNLOAD
;
; PURPOSE:
;       Download data from the UCalgary Open Data Platform
;
; EXPLANATION:
;       Download data from the UCalgary Open Data Platform, for the given
;       dataset, timeframe, and optional site/device.
;
; CALLING SEQUENCE:
;       aurorax_ucalgary_download(dataset_name, start_ts, end_ts)
;
; PARAMETERS:
;       dataset_name       name of the dataset to download data for
;       start_ts           start timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       end_ts             end timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       site_uid           unique 4-letter site UID to filter on (e.g., atha, gill, fsmi), optional
;       device_uid         unique device UID to filter on (e.g., themis08, rgb-09), optional
;       download_path      path to save data to, default is your home directory; optional
;
; KEYWORDS:
;       /OVERWRITE         download the files regardless of them existing locally already
;       /QUIET             no print messages, data download will be silent
;
; OUTPUT
;       information about the downloaded data
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       d = aurorax_ucalgary_download('THEMIS_ASI_RAW','2022-01-01T06:00:00','2022-01-01T06:59:59',site_uid='atha')
;       d = aurorax_ucalgary_download('TREX_RGB_RAW_NOMINAL','2022-01-01T06:00:00','2022-01-01T06:00:00',/overwrite)
;+
;-------------------------------------------------------------
```