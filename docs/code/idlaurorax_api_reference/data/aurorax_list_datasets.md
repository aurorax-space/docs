---
hide:
  - toc
---

# aurorax_list_datasets

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_LIST_DATASETS
;
; PURPOSE:
;       Retrieve list of available datasets for which you can
;       download data.
;
; EXPLANATION:
;       Retrieve information about available datasets, including provider,
;       short+long descriptions, and DOI details. Optional parameters are
;       used to filter for certain matching datasets.
;
; CALLING SEQUENCE:
;       aurorax_list_datasets()
;
; PARAMETERS:
;       name         dataset name for filter on, case-sensitive and partial
;                    matches are allowed. Optional.
;
; OUTPUT
;       the found datasets
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       datasets = aurorax_list_datasets()
;       datasets = aurorax_list_datasets(name='THEMIS_ASI')
;+
;-------------------------------------------------------------
```