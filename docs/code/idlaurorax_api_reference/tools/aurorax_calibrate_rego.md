---
hide:
  - toc
---

# aurorax_calibrate_rego

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CALIBRATE_REGO
;
; PURPOSE:
;       Calibrate one or more REGO images.
;
; EXPLANATION:
;       Apply a number of calibrations, such as dark frame subtraction,
;       flatfield calibration, and calibration to Rayleighs, one can
;       apply only certain calibration steps if desired.
;
; CALLING SEQUENCE:
;       aurorax_calibrate_rego(images, cal_flatfield, cal_rayleighs)
;
; PARAMETERS:
;       images                  array of images to calibrate
;       cal_flatfield           the flatfield calibration to use (if desired), usually a result of reading a calibration file, optional
;       cal_rayleighs           the rayleighs calibration to use (if desired), usually a result of reading a calibration file, optional
;       exposure_length_sec     the exposure length for the image data being calibrated, optional (defaults to 3.0)
;
; KEYWORDS:
;       /NO_DARK_SUBTRACT       omits the dark subtraction step of the calibration process
;
; OUTPUT
;       calibrated image data
;
; OUTPUT TYPE:
;       array
;
; EXAMPLES:
;       rayleighs_images = aurorax_calibrate_rego(images, cal_flatfield=flatfield_cal, cal_rayleighs=rayleighs_cal)
;       bg_subtracted_images = aurorax_calibrate_rego(images)
;+
;-------------------------------------------------------------
```