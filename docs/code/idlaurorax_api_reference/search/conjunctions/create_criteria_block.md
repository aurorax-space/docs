---
hide:
  - toc
---

# aurorax_create_criteria_block

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CREATE_CRITERIA_BLOCK
;
; PURPOSE:
;       Create conjunction search criteria block
;
; EXPLANATION:
;       The AuroraX conjunction search takes in sets of ground, space,
;       and/or events "criteria blocks". These are objects describing
;       the items to search for conjunction between. This function is
;       meant to be an easy way to create a criteria block object
;       for use in a subsequent conjunction search.
;
; CALLING SEQUENCE:
;       aurorax_create_criteria_block
;
; PARAMETERS:
;       programs           programs for this criteria block, list(string), optional
;       platforms          platforms for this criteria block, list(string), optional
;       instrument_types   instrument types for this criteria block, list(string), optional
;       hemisphere         hemisphere values for this criteria block, list(string),
;                          optional (valid values are 'northern' and/or 'southern')
;       metadata_filters   metadata filters to filter for, hash, optional
;
; KEYWORDS:
;       /GROUND            create a "ground" criteria block
;       /SPACE             create a "space" criteria block
;       /EVENTS            create a "events" criteria block
;
; OUTPUT:
;       the criteria block
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1',list('classified as APA'),/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence',95,/OPERATOR_GE)
;       expression = aurorax_create_metadata_filter_expression('tii_on','true',/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('tii_quality_vixh','0,2',/OPERATOR_BETWEEN)
;+
;-------------------------------------------------------------
```