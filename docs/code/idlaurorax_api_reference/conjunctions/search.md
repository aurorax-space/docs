---
hide:
  - toc
---

# aurorax_conjunction_search

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_CONJUNCTION_SEARCH
;
; PURPOSE:
;       Search AuroraX for conjunctions
;
; EXPLANATION:
;       Search the AuroraX platform for conjunctions using the supplied
;       filter criteria
;
; CALLING SEQUENCE:
;       aurorax_conjunction_search(start_dt, end_dt, distance)
;
; PARAMETERS:
;       start_dt           start datetime, string (different formats allowed, see below)
;       end_dt             end datetime, string (different formats allowed, see below)
;       distance           max distance between criteria blocks, integer or hash (different
;                          formats allowed, see below)
;       ground             ground criteria blocks, list, optional
;       space              space criteria blocks, list, optional
;       events             events criteria blocks, list, optional
;       poll_interval      sleep time between polling events while waiting for data, integer,
;                          optional (in seconds; default is 1s)
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
;       /NBTRACE         search for nbtrace conjunctions
;       /SBTRACE         search for sbtrace conjunctions
;       /GEOGRAPHIC      search for geographic conjunctions
;       /QUIET           quiet output when searching, no print messages will be shown
;       /DRYRUN          run in dry-run mode, which will exit before sending the search
;                        request to AuroraX. The query will be printed though, so that
;                        users can check to make sure it would have sent the request
;                        that they wanted it to send.
;
; OUTPUT:
;       the found conjunctions
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       ; simple example
;       distance = 500
;       start_dt = '2019-01-01T00:00:00'
;       end_dt = '2019-01-03T23:59:59'
;       ground1 = aurorax_create_criteria_block(programs=['themis-asi'],platforms=['fort smith', 'gillam'],/GROUND)
;       ground = list(ground1)
;       space1 = aurorax_create_criteria_block(programs=['swarm'],hemisphere=['northern'],/SPACE)
;       space = list(space1)
;       data = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/nbtrace)
;
;       ; example with metadata
;       distance = 500
;       start_dt = '2008-01-01T00:00:00'
;       end_dt = '2008-01-31T23:59:59'
;       expression1 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1', list('classified as APA'),/OPERATOR_IN)
;       expression2 = aurorax_create_metadata_filter_expression('calgary_apa_ml_v1_confidence', 95,/OPERATOR_GE)
;       expressions = list(expression1, expression2)
;       ground_metadata_filters = aurorax_create_metadata_filter(expressions,/OPERATOR_AND)
;       ground1 = aurorax_create_criteria_block(programs=['themis-asi'],metadata_filters=ground_metadata_filters,/GROUND)
;       ground = list(ground1)
;       space1 = aurorax_create_criteria_block(programs=['themis'],hemisphere=['northern'],/SPACE)
;       space = list(space1)
;       data = aurorax_conjunction_search(start_dt,end_dt,distance,ground=ground,space=space,/nbtrace)
;+
;-------------------------------------------------------------
```
