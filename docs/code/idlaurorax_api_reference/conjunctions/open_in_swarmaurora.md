---
hide:
  - toc
---

# aurorax_open_conjunctions_in_swarmaurora

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_OPEN_CONJUNCTIONS_IN_SWARMAURORA
;
; PURPOSE:
;       Show conjunction search results in Swarm-Aurora
;
; EXPLANATION:
;       Realize a browser window showing conjunction search results
;       in Swarm-Aurora
;
; CALLING SEQUENCE:
;       aurorax_open_conjunctions_in_swarmaurora,request_id
;
; PARAMETERS:
;       request_id       the request ID for the conjunction search
;       xsize            specify the width of the browser window rendered, optional,
;                        default is 95% of native screen width
;       ysize            specify the height of the browser window rendered, optional,
;                        default is 90% of native screen height
;
; KEYWORDS:
;       /CLIPBOARD       copy the Swarm-Aurora URL to the clipboard
;       /PRINT_URL       instead of rendering a browser window, print out the Swarm-Aurora URL
;
; EXAMPLES:
;       ...
;       ...
;       response = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space)
;       aurorax_open_conjunctions_in_swarmaurora,response.request_id
;+
;-------------------------------------------------------------
```