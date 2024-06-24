---
hide:
  - toc
---

# aurorax_keogram_create

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_KEOGRAM_CREATE
;
; PURPOSE:
;       Create a keogram object.
;
; EXPLANATION:
;       Create a keogram structure from an array of image data.
;
; CALLING SEQUENCE:
;       aurorax_keogram_create(img, time_stamp)
;
; PARAMETERS:
;       images          array of images to extract metric from
;       time_stamp      array of timestamps corresponding to each frame in images
;       axis            the axis index (1 or 0) to slice the keogram from - defualt is 1 (N-S slice)
;
; KEYWORDS:
;
; OUTPUT
;       keogram object structure containing data and axes
;
; OUTPUT TYPE:
;       struct
;
; EXAMPLES:
;       keogram = aurorax_keogram_create(img, time_stamp)
;       ewogram = aurorax_keogram_create(img, time_stamp, axis=1)
;+
;-------------------------------------------------------------
```