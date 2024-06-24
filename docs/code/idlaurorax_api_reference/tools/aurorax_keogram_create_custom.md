---
hide:
  - toc
---

# aurorax_keogram_create_custom

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_KEOGRAM_CREATE_CUSTOM
;
; PURPOSE:
;       Create a keogram from a custom slice of image data.
;
; EXPLANATION:
;       Create a keogram by slicing image data along a custom contour
;       defined by lats/lons or CCD coordintes.
;
; CALLING SEQUENCE:
;       aurorax_keogram_create_custom(images, time_stamp, "ccd", x_locs, y_locs)
;
; PARAMETERS:
;       images                array of images to extract metric from
;       time_stamp            array of timestamps corresponding to each image frame
;       coordinate_system     a string giving the coordinate system ("ccd", "geo", "mag")
;       x_locs                the x locations, in desired coordinate system, to slice keogram along
;       y_locs                the y locations, in desired coordinate system, to slice keogram along
;       width                 the width of the keogram slice, in pixel units, optional (defaults to 2)
;       skymap                the skymap to use for georeferencing, optional
;       altitude_km           the altitude of the image data for georeferencing, optional
;       metric                the metric to use to compute each keogram pixel "median" (default), "mean", or "sum", optional
;
; KEYWORDS:
;       /SHOW_PREVIEW         plot a preview of the keogram slice on top of the first image frame
;
; OUTPUT
;       custom keogram structure containing keogram data and temporal axis
;
; OUTPUT TYPE:
;       struct
;
; EXAMPLES:
;       ccd_keo = aurorax_keogram_create_custom(img, time_stamp, "ccd", x_arr, y_arr, width=5, metric="sum", /show_preview)
;       geo_keo = aurorax_keogram_create_custom(img, time_stamp, "geo", longitudes, latitudes, skymap=skymap, altitude_km=113)
;+
;-------------------------------------------------------------
```