---
hide:
  - toc
---

# aurorax_list_sources

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_LIST_SOURCES
;
; PURPOSE:
;       Retrieve AuroraX Search Engine data sources
;
; EXPLANATION:
;       Retrieve a list of data sources available in the AuroraX Search
;       Engine, with optional parameters used to filter for certain data
;       sources.
;
; CALLING SEQUENCE:
;       aurorax_list_sources()
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
;       /INCLUDE_STATS            include stats information
;
; OUTPUT:
;       the found data sources
;
; OUTPUT TYPE:
;       a list of structs
;
; EXAMPLES:
;       data = aurorax_list_sources()
;       data = aurorax_list_sources(program='swarm',/FORMAT_FULL_RECORD)
;       data = aurorax_list_sources(platform='gillam')
;       data = aurorax_list_sources(program='trex', platform='fort smith')
;       data = aurorax_list_sources(program='trex', /INCLUDE_STATS)
;+
;-------------------------------------------------------------
```