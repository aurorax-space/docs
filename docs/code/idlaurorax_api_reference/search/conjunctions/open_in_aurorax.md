---
hide:
  - toc
---

# aurorax_open_conjunctions_in_aurorax

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_OPEN_CONJUNCTIONS_IN_AURORAX
;
; PURPOSE:
;       Show conjunction search results in AuroraX website
;
;
; EXPLANATION:
;       Realize a browser window showing conjunction search results
;       in the AuroraX conjunction search website
;
; CALLING SEQUENCE:
;       aurorax_open_conjunctions_in_aurorax,request_id
;
; PARAMETERS:
;       request_id       the request ID for the conjunction search
;       xsize            specify the width of the browser window rendered, optional,
;                        default is 95% of native screen width
;       ysize            specify the height of the browser window rendered, optional,
;                        default is 90% of native screen height
;
; KEYWORDS:
;       /CLIPBOARD       copy the AuroraX URL to the clipboard
;       /PRINT_URL       instead of rendering a browser window, print out the AuroraX URL
;       /EXPERT          open in the "expert mode" AuroraX conjunction search webpage
;
; EXAMPLES:
;       ...
;       ...
;       response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space)
;       aurorax_open_conjunctions_in_aurorax,response.request_id
;+
;-------------------------------------------------------------
```