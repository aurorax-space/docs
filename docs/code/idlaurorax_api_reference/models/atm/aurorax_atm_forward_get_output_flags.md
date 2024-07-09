---
hide:
  - toc
---

# aurorax_atm_forward_get_output_flags

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_ATM_FORWARD_GET_OUTPUT_FLAGS
;
; PURPOSE:
;       Initialize ATM 'forward' calculation output flag settings.
;
; EXPLANATION:
;       Create an hash object which used to represent all output values included in 
;       an ATM forward calculation. ATM calculations are performed in a way where 
;       you can toggle ON/OFF whichever pieces of information you do or don't want. 
;       This improves efficiency of the calculation routine resulting in faster queries.
;       
;       By default, all output flags are disabled. There exist several helper keywords
;       to enable all flags, or enable only height-integrated Rayleighs flags.
;
; CALLING SEQUENCE:
;       aurorax_atm_forward_get_output_flags()
;
; KEYWORDS:
;       /SET_ALL_TRUE                               enable all output flags to 
;       /ENABLE_ONLY_HEIGHT_INTEGRATED_RAYLEIGHS    enable only all height-integrated Rayleighs flags
;
; OUTPUT
;       Output flags hash
;
; OUTPUT TYPE:
;       a hash
;
; EXAMPLES:
;       aurorax_atm_forward_get_output_flags()
;       aurorax_atm_forward_get_output_flags(/SET_ALL_TRUE)
;       aurorax_atm_forward_get_output_flags(/ENABLE_ONLY_HEIGHT_INTEGRATED_RAYLEIGHS)
;+
;-------------------------------------------------------------
```