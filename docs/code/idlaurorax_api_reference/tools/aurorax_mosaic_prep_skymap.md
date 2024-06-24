---
hide:
  - toc
---

# aurorax_mosaic_prep_skymap

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_MOSAIC_PREP_SKYMAPS
;
; PURPOSE:
;       Prepare skymaps to create a mosaic
;
; EXPLANATION:
;       Takes skymap(s) and formats them in a way such that they
;       can be fed into the aurorax_mosaic_plot routine
;
; CALLING SEQUENCE:
;       aurorax_mosaic_prep_skymap(list(skymap1, skymap2))
;
; PARAMETERS:
;       image_data        a list of skymap data objects, where each object is usually the return
;                         value of aurorax_ucalgary_read(). Note that even if preparing a single
;                         skymap object, it must be enclosed in a list.
;       altitude_km       the altitude (in kilometers) at which the image data should be
;                         prepared for mosaicking
;
; KEYWORDS:
;
; OUTPUT
;       a prepped_skymap structure
;
; OUTPUT TYPE:
;       struct
;
; EXAMPLES:
;       prepped_skymap = aurorax_prep_skymaps(list(aurorax_ucalgary_read(d.dataset, d.filenames)))
;+
;-------------------------------------------------------------
```