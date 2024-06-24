---
hide:
  - toc
---

# aurorax_mosaic_oplot

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_MOSAIC_OPLOT
;
; PURPOSE:
;       Plot lines of constant lat/lon, and custom points on a mosaic.
;
; EXPLANATION:
;       Plot either, or a combination of, lines of constant geographic or
;       geomagnetic latitude and/or longitude. Can also be used to plot
;       a single point in geographic or geomagnetic coordinates.
;
; CALLING SEQUENCE:
;       aurorax_mosaic_oplot, constant_lats=lats, constant_lons=lons, point=[lon,lat]
;
; PARAMETERS:
;       constant_lats     a scalar or array giving latitude(s) to add constant lines, optional
;       constant_lots     a scalar or array giving longitude(s) to add constant lines, optional
;       point             a two element array specifying the lon, lat to plot, optional
;       color             long integer giving the color to plot in, optional (default is 0 i.e. black)
;       thick             integer giving line thickness for any lines plotted, optional (default is 1)
;       linestyle         integer giving IDL linestyle, optional (default is 0, i.e. solid)
;       symbol            integer giving IDL symbol, optional (default is 0, i.e. none for lines and circle for point)
;       symsize           integer giving IDL symbol size, optional (default is 1)
;
; KEYWORDS:
;       /MAG              specify that coordinates are given in geomagnetic coordinates (default is geographic)
;
; OUTPUT
;
; OUTPUT TYPE:
;
; EXAMPLES:
;       aurorax_mosaic_oplot, point=[245,61.2], color=aurorax_get_decomposed_color([0,0,255])
;       aurorax_mosaic_oplot, constant_lats=[40,50,60], constant_lons=[220,240,260], linestyle=2, thick=3
;+
;-------------------------------------------------------------
```