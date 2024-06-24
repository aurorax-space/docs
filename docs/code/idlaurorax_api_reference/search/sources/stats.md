---
hide:
  - toc
---

# aurorax_sources_get_stats

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_SOURCES_GET_STATS
;
; PURPOSE:
;       Retrieve AuroraX data source stats
;
; EXPLANATION:
;       Retrieve some additional information about a data source on the
;       AuroraX platform, such as the earliest and latest ephemeris
;       and data product records.
;
; CALLING SEQUENCE:
;       aurorax_sources_get_stats()
;
; PARAMETERS:
;       identifier        data source identifier, integer
;
; OUTPUT:
;       stats about the data source
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       source = aurorax_sources_list(program='swarm', platform='swarma')
;       stats = aurorax_sources_get_stats(source[0].identifier)
;+
;-------------------------------------------------------------
```