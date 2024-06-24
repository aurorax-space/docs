---
hide:
  - toc
---

# aurorax_montage_create

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_MONTAGE_CREATE
;
; PURPOSE:
;       Create and display a montage.
;
; EXPLANATION:
;       Create a montage from a set of images, and display
;       it, accompanied by timestamps.
;
; CALLING SEQUENCE:
;       aurorax_montage_create, images, time_stamp, n_cols, n_rows
;
; PARAMETERS:
;       images                  array of images to create the montage for 
;       timestamps              timestamps corresponding to each frame of images
;       n_cols                  integer specifying the number of columns in the montage
;       n_rows                  integer specifying the number of rows in the montage
;       colortable              integer specifying the IDL colortable to use, optional (default is 0)
;       timestamps_fontsize     font size for the timestamp labals, optional
;       frame_step              interval to add frames from images to the montage, optional (default is 1)
;       dimensions              two-element array giving dimensions of the plotting window in device coordinates, optional
;       location                two-element array giving location of the plotting window in device coordinates, optional
;       timestamps_color        a string giving the color to overplot timestamps, optional (default is 'white')
;       
; KEYWORDS:
;       /NO_TIMESTAMPS          disable default behaviour of plotting timestamps
;       
; OUTPUT
;
; OUTPUT TYPE:
;
; EXAMPLES:
;       aurorax_montage_create, images, timestamps, 5, 5, colortable=7, timestamps_fontsize=16
;+
;-------------------------------------------------------------
```