---
hide:
  - toc
---

# aurorax_sources_list

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_SOURCES_LIST
;
; PURPOSE:
;       Retrieve AuroraX data sources
;
; EXPLANATION:
;       Retrieve a list of data sources from the AuroraX platform, with optional
;       parameters used to filter unwanted data sources out.
;
; CALLING SEQUENCE:
;       aurorax_sources_list()
;
; PARAMETERS:
;       program           program to filter on, string, optional
;       platform          platform to filter on, string, optional
;       instrument_type   instrument type to filter on, string, optional
;       source_type       source type to filter on (valid values are: leo, heo,
;                         lunar, ground, event_list), string, optional
;
; KEYWORDS:
;       /FORMAT_FULL_RECORD       data sources returned have all available information
;                                 about them
;       /FORMAT_IDENTIFIER_ONLY   data sources returned have minimal information about
;                                 them, just the identifier
;
; OUTPUT:
;       the found data sources
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       data = aurorax_sources_list()
;       data = aurorax_sources_list(program='swarm',/FORMAT_FULL_RECORD)
;       data = aurorax_sources_list(platform='gillam')
;       data = aurorax_sources_list(program='trex', platform='fort smith')
;+
;-------------------------------------------------------------
```