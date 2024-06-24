---
hide:
  - toc
---

# aurorax_get_decomposed_color

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_GET_DECOMPOSED_COLOR
;
; PURPOSE:
;       Convert RGB triple to decomposed long integer format.
;
; EXPLANATION:
;       This function is useful for plotting in decomposed color mode.
;       It converts an RGB triple to a long integer that can be used
;       to plot the corresponding color in decomposed color mode.
;
; CALLING SEQUENCE:
;       aurorax_get_decomposed_color([r,g,b])
;
; PARAMETERS:
;       rgb_triple        a three element array specifying the RGB color to convert
;
; KEYWORDS:
;
; OUTPUT
;       the decomposed long integer representation of the color
;
; OUTPUT TYPE:
;       long
;
; EXAMPLES:
;       long_cyan = aurorax_get_decomposed_color([0,255,255])
;+
;-------------------------------------------------------------
```