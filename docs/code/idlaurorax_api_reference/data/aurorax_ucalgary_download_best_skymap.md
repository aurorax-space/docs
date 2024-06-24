---
hide:
  - toc
---

# aurorax_ucalgary_download_best_skymap

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_UCALGARY_DOWNLOAD_BEST_SKYMAP
;
; PURPOSE:
;       Download the best skymap for the corresponding parameters
;
; EXPLANATION:
;       Download the best skymap for the given dataset name, timestamp, and site UID
;
; CALLING SEQUENCE:
;       aurorax_ucalgary_download_best_skymap(dataset_name, site_uid, time_stamp)
;
; PARAMETERS:
;       dataset_name       name of the skymap dataset to download data for
;       site_uid           unique 4-letter site UID to retrieve skymap for
;       time_stamp         timestamp, format as ISO time string (YYYY-MM-DDTHH:MM:SS)
;       download_path      path to save data to, default is your home directory; optional
;
; KEYWORDS:
;       /OVERWRITE         download the skymap files regardless of them existing locally already
;       /QUIET             no print messages, data download will be silent
;
; OUTPUT
;       information about the downloaded data
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       d = aurorax_ucalgary_download_best_skymap('THEMIS_ASI_SKYMAP_IDLSAV','atha','2020-01-01T00:00:00')
;       d = aurorax_ucalgary_download_best_skymap('TREX_RGB_SKYMAP_IDLSAV','gill','2023-02-01T06:00:00',/overwrite)
;+
;-------------------------------------------------------------
```