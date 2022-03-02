---
hide:
  - toc
---

# aurorax_data_products_availability

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_DATA_PRODUCTS_AVAILABILITY
;
; PURPOSE:
;       Retrieve data availability information for data product records
;
; EXPLANATION:
;       Retrieve data availability information for data product records
;       in the AuroraX platform. Optional parameters are used to filter
;       unwanted data sources out.
;
; CALLING SEQUENCE:
;       aurorax_data_products_availability(start_date, end_date)
;
; PARAMETERS:
;       start_date        start year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;       end_date          end year to use, string (YYYY, YYYYMM, or YYYYMMDD)
;       program           program to filter on, string, optional
;       platform          platform to filter on, string, optional
;       instrument_type   instrument type to filter on, string, optional
;       source_type       source type to filter on (valid values are: leo, heo,
;                         lunar, ground, event_list), string, optional
;
; OUTPUT
;       retrieved data availability information
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       data = aurorax_data_products_availability('20200101','20200105',program='auroramax')
;       data = aurorax_data_products_availability('2020-01-01','2020-03-15',program='trex',platform='gillam')
;+
;-------------------------------------------------------------
```