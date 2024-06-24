---
hide:
  - toc
---

# aurorax_list_observatories

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_LIST_OVSERVATORIES
;
; PURPOSE:
;       Retrieve list of available observatories where an instrument exists.
;
; EXPLANATION:
;       Retrieve information about observatories, including full name, geodetic
;       latitude and longitude. Optional parameters are used to filter for certain
;       matching observatories.
;
; CALLING SEQUENCE:
;       aurorax_list_observatories(instrument_array)
;
; PARAMETERS:
;       insrument_array     the insrument array. Possible values are 'themis_asi',
;                           'rego', 'trex_rgb', 'trex_nir', and 'trex_blue'.
;       uid                 site unique identifier to filter on, optional
;
; OUTPUT
;       the found observatories
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       observatories = aurorax_list_observatories('themis_asi')
;       observatories = aurorax_list_datasets('trex_rgb', uid='gill')
;+
;-------------------------------------------------------------
```