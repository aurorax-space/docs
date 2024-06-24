---
hide:
  - toc
---

# aurorax_bounding_box_extract_metric

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_BOUNDING_BOX_EXTRACT_METRIC
;
; PURPOSE:
;       Extract a luminosity related metric from a portion of an image.
;
; EXPLANATION:
;       Extract a metric, related to luminosity, from pixel data within
;       some bounded region within a single or set of ASI CCD images,
;       defined by CCD, lat/lon, elevation, or azimuth boundaries.
;
; CALLING SEQUENCE:
;       aurorax_bounding_box_extract_metric(images, mode, xy_bounds)
;
; PARAMETERS:
;       images          array of images to extract metric from
;       mode            string giving the input coordinate type ("geo", "mag", "ccd", "azim", "elev")
;       xy_bounds       a two or four element array giving the bounds of the region of interest,
;                       for the desired mode ([lon0,lon1,lat0,lat1], [min_elev,max_elev], ... etc.)
;       metric          the metric to compute, accepted is "median" (default), "mean", or "sum"
;       time_stamp      the timestamp to use for magnetic coordinate conversions, optional
;       skymap          the skymap to use for georeferencing, optional
;       altitude_km     the altitude of the image data for georeferencing, optional
;       n_channels      manually specify the image data channels, otherwise its estimated based on shape, optional
;
; KEYWORDS:
;       /SHOW_PREVIEW   plot a preview of the bounded area on top of the first image frame
;
; OUTPUT
;       extracted metric for all frames provided
;
; OUTPUT TYPE:
;       array
;
; EXAMPLES:
;       luminosity = aurorax_bounding_box_extract_metric(images, "geo", [-94, -95, 55, 55.5], skymap=skymap, altitude_km=110)
;+
;-------------------------------------------------------------
```