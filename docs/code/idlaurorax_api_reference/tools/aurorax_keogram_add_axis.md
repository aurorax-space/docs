---
hide:
  - toc
---

# aurorax_keogram_add_axis

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_KEOGRAM_ADD_AXIS
;
; PURPOSE:
;       Add a georeferenced axis to a keogram structure.
;
; EXPLANATION:
;       Add one or more desired physical axes to a keogram structure, which is
;       usually obtained via aurorax_keogram_create. Options are elevation, and
;       geographic/magnetic lats (lons for ewograms).
;
; CALLING SEQUENCE:
;       aurorax_keogram_add_axis(keogram_struct, skymap, /axis_type)
;
; PARAMETERS:
;       keogram_struct      keogram structure - usually the return value of aurorax_keogram_create()
;       skymap              the skymap to use for georeferencing
;       altitude_km         altitude, in kilometers, of the keogram data, optional
;
; KEYWORDS:
;       /GEO        adds an axis of geographic coordinates
;       /GEO        adds an axis of geomagnetic coordinates
;       /GEO        adds an axis of elevation angles
;
; OUTPUT
;       keogram structure containing new axes
;
; OUTPUT TYPE:
;       struct
;
; EXAMPLES:
;       keo = aurorax_keogram_add_axis(keo, skymap, /geo, /elev, altitude_km=110)
;+
;-------------------------------------------------------------
```