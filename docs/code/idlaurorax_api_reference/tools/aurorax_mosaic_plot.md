---
hide:
  - toc
---

# aurorax_mosaic_plot

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_MOSAIC_PLOT
;
; PURPOSE:
;       Create a mosaic
;
; EXPLANATION:
;       Plot a mosaic onto a pre-defined map window, using *prepared*
;       image data and skymaps.
;
; CALLING SEQUENCE:
;       aurorax_mosaic_plot, prepped_data, prepped_skymap, image_idx, min_elevation=5

;
; PARAMETERS:
;       prepped_data          single, or array of 'prepped_data' structures (the return of aurorax_mosaic_prep_data())
;       prepped_skymaps       single, or array of 'prepped_data' structures (the return of aurorax_mosaic_prep_data())
;       frame_idx             integer specifying the frame idx of image data that is to be plotted
;       min_elevation         int/float, or array (same length as prepped_data) of ints/floats specifying the minimum
;                             elevation in degrees to begin plotting data, optional (default is 5 deg)
;       intensity_scales      a two element array, or hash of two element arrays (for scaling on a per-site basis),
;                             giving the min/max scale bounds for data (default is [0,20000])
;       colortable            an integer, or array of integers with the same length as prepped_data, specifying the
;                             IDL colortable to plot data with, optional (default is 0, i.e. gray)
;       elevation_increment   a parameter that affects the plotting algorithm - the default is 0.25 - increasing this
;                             parameter can speed up plotting, and decreasing it can help make boundaries between sites
;                             more distinct (if they appear to be getting blended)
;
; KEYWORDS:
;
; OUTPUT
;
; OUTPUT TYPE:
;
; EXAMPLES:
;       aurorax_mosaic_plot, prepped_data, prepped_skymap, image_idx, min_elevation=7, intensity_scales=[500,10000], colortable=3
;
;+
;-------------------------------------------------------------
```