---
hide:
  - toc
---

# aurorax_mosaic_prep_images

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_MOSAIC_PREP_IMAGES
;
; PURPOSE:
;       Prepare image data to create a mosaic
;
; EXPLANATION:
;       Takes image data and formats it in a way such that it
;       can be fed into the aurorax_mosaic_plot routine
;
; CALLING SEQUENCE:
;       aurorax_mosaic_prep_images(list(img_data1, image_data2))
;
; PARAMETERS:
;       image_data        a list of image data objects, where each object is usually the return
;                         value of aurorax_ucalgary_read(). Note that even if preparing a single
;                         image data object, it must be enclosed in a list.
;
; KEYWORDS:
;
; OUTPUT
;       a prepped_data structure
;
; OUTPUT TYPE:
;       struct
;
; EXAMPLES:
;       prepped_data = aurorax_prep_images(list(aurorax_ucalgary_read(d.dataset, d.filenames)))
;+
;-------------------------------------------------------------
```