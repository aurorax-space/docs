---
hide:
  - toc
---

# aurorax_create_metadata_filter

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CREATE_METADATA_FILTER
;
; PURPOSE:
;       Create metadata filter object for searches
;
; EXPLANATION:
;       The AuroraX ephemeris, data products, and conjunction searches can take
;       metadata filters to help refine your search. This function provides
;       an easy way to create a metadata filter object using a list of expressions.
;
; CALLING SEQUENCE:
;       aurorax_create_metadata_filter(expressions)
;
; PARAMETERS:
;       expressions       the expressions to use for this metadata filter, list (use
;                         aurorax_create_metadata_filter_expressions() function to
;                         create the expression(s))
;
; OUTPUT:
;       the metadata filter
;
; OUTPUT TYPE:
;       a hash
;
; EXAMPLES:
;       expression1 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1', list('classified as APA'),/OPERATOR_IN)
;       expression2 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence', 95,/OPERATOR_GE)
;       expressions = list(expression1, expression2)
;       metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;+
;-------------------------------------------------------------
```