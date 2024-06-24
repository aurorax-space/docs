---
hide:
  - toc
---

# aurorax_keogram_plot

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_KEOGRAM_PLOT
;
; PURPOSE:
;       Plot a keogram object.
;
; EXPLANATION:
;       Plot keogram data, adding axes stored in the keogram
;       structure as desired, defaults to CCD axis.
;
; CALLING SEQUENCE:
;       aurorax_keogram_plot, keogram_struct, /keyword_args
;
; PARAMETERS:
;       keogram_struct      keogram object to plot, usually the return value of aurorax_keogram_create()
;       title               string giving the plot title, optional
;       dimensions          two-element array giving dimensions of the plotting window in device coordinates, optional
;       location            two-element array giving location of the plotting window in device coordinates, optional
;       x_tick_interval     interval between ticks on the x-axis, optional (default is 200)
;       y_tick_interval     interval between ticks on the y-axis, optional (default is 50)
;       aspect_ratio        float giving the aspect ratio to display keogram data
;
; KEYWORDS:
;       /GEO                labels geographic coordinates on the y-axis (axis must exist in keogram structure)
;       /MAG                labels geomagnetic coordinates on the y-axis (axis must exist in keogram structure)
;       /ELEV               labels elevation angles on the y-axis (axis must exist in keogram structure)
;
; OUTPUT
;
; OUTPUT TYPE:
;
; EXAMPLES:
;       aurorax_keogram_plot, keo, title="Geographic", /geo, location=[0,0], dimensions=[1000,400]
;+
;-------------------------------------------------------------
```