---
hide:
  - toc
---

# aurorax_ucalgary_is_read_supported

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_UCALGARY_IS_READ_SUPPORTED
;
; PURPOSE:
;       Determine if a given dataset is supported in the aurorax_ucalgary_read()
;       function.
;
; EXPLANATION:
;       Some datasets provided by UCalgary require special readfile routines. This
;       function provides the ability to programmatically determine if a dataset
;       is supported in the aurorax_ucalgary_read() function.
;
;       Some datasets are simple enough for special read routines to be needed. For
;       example, 'THEMIS_ASI_DAILY_KEOGRAM_JPG', can be read in using the built-in
;       READ_JPEG procedure.
;
; CALLING SEQUENCE:
;       aurorax_ucalgary_is_read_supported(dataset_name)
;
; PARAMETERS:
;       dataset_name       name of the dataset check for read support
;
; OUTPUT
;       0 for False, 1 for True
;
; OUTPUT TYPE:
;       integer
;
; EXAMPLES:
;       supported = aurorax_ucalgary_is_read_supported('THEMIS_ASI_RAW')
;       supported = aurorax_ucalgary_is_read_supported('THEMIS_ASI_DAILY_KEOGRAM_JPG')
;+
;-------------------------------------------------------------
```