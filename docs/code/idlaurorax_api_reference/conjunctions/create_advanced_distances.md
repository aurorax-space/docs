---
hide:
  - toc
---

# aurorax_create_advanced_distances_hash

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CREATE_ADVANCED_DISTANCES_HASH
;
; PURPOSE:
;       Create advanced distances pairing for a conjunction search
;
; EXPLANATION:
;       The AuroraX conjunction search requires distance pairings for every
;       possibility of criteria blocks. This function will generate all
;       possibilities for you.
;
; CALLING SEQUENCE:
;       aurorax_create_advanced_distances_hash(distance)
;
; PARAMETERS:
;       distance           default distance for each pairing, integer
;       ground_count       number of ground criteria blocks, integer, optional
;       space_count        number of space criteria blocks, integer, optional
;       events_count       number of events criteria blocks, integer, optional
;
; OUTPUT:
;       the advanced distances
;
; OUTPUT TYPE:
;       a hash, with the default value for each value being the 'distance' variable supplied
;
; EXAMPLES:
;       distances = aurorax_create_advanced_distances_hash(500, ground_count=1, space_count=2)
;+
;-------------------------------------------------------------
```