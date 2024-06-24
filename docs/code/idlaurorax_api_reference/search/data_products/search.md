---
hide:
  - toc
---

# aurorax_data_product_search

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_DATA_PRODUCT_SEARCH
;
; PURPOSE:
;       Retrieve AuroraX data product records
;
; EXPLANATION:
;       Retrieve data product records from the AuroraX platform, with optional
;       parameters used to filter for specific matching data.
;
; CALLING SEQUENCE:
;       aurorax_data_product_search(start_dt, end_dt)
;
; PARAMETERS:
;       start_dt             start datetime, string (different formats allowed, see below)
;       end_dt               end datetime, string (different formats allowed, see below)
;       programs             programs to filter for, list(string), optional
;       platforms            platforms to filter for, list(string), optional
;       instrument_types     instrument types to filter for, list(string), optional
;       data_product_types   data product types to filter for, list(string), optional
;       metadata_filters     metadata filters to filter for, hash, optional
;       poll_interval        sleep time between polling events while waiting for data, integer,
;                            optional (in seconds; default is 1s)
;
;       The 'start_dt' and 'end_dt' parameters are to be timestamps in a variety of formats. The
;       following are examples of what is allowed:
;
;       The following are all interpreted as '2020-01-01T00:00:00':
;         start_dt = '2020'
;         start_dt = '202001'
;         start_dt = '20200101'
;         start_dt = '2020010100'
;         start_dt = '202001010000'
;         start_dt = '2020-01-01'
;         start_dt = '2020/01/01T00:00'
;         start_dt = '2020-01-01 00:00'
;
;       The following are all interpreted as '2020-12-31T23:59:59':
;         end_dt = '2020'
;         end_dt = '202012'
;         end_dt = '20201231'
;         end_dt = '2020123123'
;         end_dt = '202012312359'
;         end_dt = '2020-12-31'
;         end_dt = '2020/12/31T23'
;         end_dt = '2020-12-31 23'
;
; KEYWORDS:
;       /QUIET           quiet output when searching, no print messages will be shown
;       /DRYRUN          run in dry-run mode, which will exit before sending the search
;                        request to AuroraX. The query will be printed though, so that
;                        users can check to make sure it would have sent the request
;                        that they wanted it to send.
;
; OUTPUT:
;       the found data product records
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       ; simple example
;       data = aurorax_data_product_search('2020-01-01T00:00','2020-01-01T23:59',programs=['trex'],platforms=['gillam'],instrument_types=['RGB ASI'])
;
;       ; example with metadata
;       expression = aurorax_create_metadata_filter_expression('keogram_type', list('daily'),/OPERATOR_IN)
;       expressions = list(expression)
;       metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;       data = aurorax_data_product_search('2020-01-01T00:00','2020-01-01T23:59',programs=['trex'],metadata_filters=metadata_filters)
;+
;-------------------------------------------------------------
```