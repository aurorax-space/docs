---
hide:
  - toc
---

# aurorax_ucalgary_read

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_UCALGARY_READ
;
; PURPOSE:
;       Read data downloaded from the UCalgary Open Data Platform
;
; EXPLANATION:
;       Read data files that were dowloaded from the UCalgary Open
;       Data Platform.
;
; CALLING SEQUENCE:
;       aurorax_ucalgary_read(dataset, file_list)
;
; PARAMETERS:
;       dataset            struct for the dataset that is being read in (retrieved from aurorax_list_dataset() function)
;       file_list          list of files on the local computer to read in (can also be a single filename string)
;
; KEYWORDS:
;       /FIRST_RECORD      only read the first record/frame/image in each file
;       /NO_METADATA       exclude reading of metadata
;       /QUIET             read data silently, no print messages will be shown
;
; OUTPUT
;       the loaded data
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       download_obj = aurorax_ucalgary_download('THEMIS_ASI_RAW','2022-01-01T06:00:00','2022-01-01T06:59:59',site_uid='gill')
;       data = aurorax_ucalgary_read(d.dataset,f)
;       help,data
;+
;-------------------------------------------------------------
```