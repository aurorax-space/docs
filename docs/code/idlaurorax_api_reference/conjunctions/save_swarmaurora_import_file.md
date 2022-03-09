---
hide:
  - toc
---

# aurorax_save_swarmaurora_custom_import_file

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_SAVE_SWARMAURORA_CUSTOM_IMPORT_FILE
;
; PURPOSE:
;       Download a Swarm-Aurora custom import file
;
; EXPLANATION:
;       Retrieve a Swarm-Aurora custom import file for a conjunction
;       search request, and save it to a JSON file
;
; CALLING SEQUENCE:
;       aurorax_get_swarmaurora_custom_import_file,request_id
;
; PARAMETERS:
;       request_id       the request ID for the conjunction search
;       filename         the filename to save the custom import file to, optional,
;                        default is a filename made up from the current working directory
;                        of the IDL instance
;
; EXAMPLES:
;       ...
;       ...
;       response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space)
;       aurorax_save_swarmaurora_custom_import_file,response.request_id
;+
;-------------------------------------------------------------
```