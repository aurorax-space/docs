---
hide:
  - toc
---

# aurorax_create_metadata_filter_expression

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CREATE_METADATA_FILTER_EXPRESSION
;
; PURPOSE:
;       Create metadata filter expression for searches
;
; EXPLANATION:
;       The AuroraX ephemeris, data products, and conjunction searches can take
;       metadata filters to help refine your search. This function provides
;       an easy way to create metadata filter expressions which will be added
;       to a metadata_filter object later on.
;
; CALLING SEQUENCE:
;       aurorax_create_metadata_filter_expression(key,values)
;
; PARAMETERS:
;       key           the metadata field key, string
;       values        the values to filter on, string or list
;
; KEYWORDS:
;       /OPERATOR_EQ          operator for this expression will be '='
;       /OPERATOR_NE          operator for this expression will be '!='
;       /OPERATOR_GT          operator for this expression will be '>'
;       /OPERATOR_LT          operator for this expression will be '<'
;       /OPERATOR_GE          operator for this expression will be '>='
;       /OPERATOR_LE          operator for this expression will be '<='
;       /OPERATOR_BETWEEN     operator for this expression will be 'between'
;       /OPERATOR_IN          operator for this expression will be 'in'
;
; OUTPUT:
;       a metadata filter expression
;
; OUTPUT TYPE:
;       a hash
;
; EXAMPLES:
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1',list('classified as APA'),/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence',95,/OPERATOR_GE)
;       expression = aurorax_create_metadata_filter_expression('tii_on','true',/OPERATOR_IN)
;       expression = aurorax_create_metadata_filter_expression('tii_quality_vixh','0,2',/OPERATOR_BETWEEN)
;+
;-------------------------------------------------------------
```