---
hide:
  - toc
---

# What metadata is in the AuroraX database?

The AuroraX database contains metadata from numerous ground-based and space-based system. Below we have a few tables that outline what we currently have metadata for.

!!! note 

    The "operational status" column is an indicator of the mission/project status, instead of an AuroraX-specific operational indicator.

## Ground-based

| Project/Instrument Name | Type | Description | Operational Status | AuroraX usage |
| ----------------------  | ---- | ----------- | ------------------ | ------------- |
| AuroraMAX | ASI | HD colour DSLR all-sky imager in Yellowknife, NWT, Canada. 6s cadence, 4s exposure (<a href="https://ucalgary.ca/aurora/projects/auroramax" target="_blank">more info</a>) | Operational | Conjunction Search, Keogramist |
| REGO | ASI | Redline all-sky imager array deployed across Canada and US. 3s cadence, 2s exposure, deep-cooled detector (<a href="https://ucalgary.ca/aurora/projects/rego" target="_blank">more info</a>) | Operational | Conjunction Search, Swarm-Aurora |
| CGSM/GO-Canada Rainbow | ASI | CMYG colour all-sky imager array deployed across Canada. 6s cadence, 5s exposure (<a href="https://ucalgary.ca/aurora/projects/ago" target="_blank">more info</a>)| Decommissioned | Conjunction Search, Swarm-Aurora |
| THEMIS | ASI | White-light all-sky imager array deployed across Canada and US. 3s cadence, 1s exposure (<a href="https://ucalgary.ca/aurora/projects/themis" target="_blank">more info</a>) | Operational | Conjunction Search, Swarm-Aurora |
| TREx Blueline | ASI | Blueline all-sky imager array deployed across Canada. 3s cadence, ~2.99s exposure, 1Hz-10Hz burst mode (<a href="https://ucalgary.ca/aurora/projects/trex" target="_blank">more info</a>) | Operational | Conjunction Search, Swarm-Aurora |
| TREx RGB | ASI | RGB colour all-sky imager array deployed across Canada. 3s cadence, 3s exposure, 3Hz burst mode (<a href="https://ucalgary.ca/aurora/projects/trex" target="_blank">more info</a>) | Operational | Conjunction Search, Keogramist, Swarm-Aurora |
| TREx NIR | ASI | Near-infrared all-sky imager array deployed across Canada. 6s cadence, 5s exposure (<a href="https://ucalgary.ca/aurora/projects/trex" target="_blank">more info</a>) | Operational | Conjunction Search, Swarm-Aurora |
| TREx Spectrograph | Spectrograph | Spectrograph imager array deployed across Canada. 15s cadence, 13s exposure (<a href="https://ucalgary.ca/aurora/projects/trex" target="_blank">more info</a>) | Operational | Conjunction Search, Swarm-Aurora |
| CGSM/GO-Canada Riometers | Riometer | Wide-beam riometers deployed across Canada (<a href="https://ucalgary.ca/aurora/projects/rio" target="_blank">more info</a>) | Operational | Conjunction Search |

## Space-based

### With on-board instrument metadata

For some satellites, AuroraX contains metadata about the operational state and quality of some onboard instruments. Below is the list outlining what instruments this includes.

| Project/Instrument Name | Orbit Type | Description | Operational Status | AuroraX usage |
| ----------------------  | ---- | ----------- | ------------------ | ------------- |
| ePOP/Cassiope | LEO | Satellite collecting data on space storms and associated plasma outflows from the Earth’s ionosphere. All instruments onboard have metadata in AuroraX (CER, FAI, GAP, IRM, MGF, NMS, RRI, SEI) | Operational | Conjunction Search, Swarm-Aurora |
| FAST | HEO | Satellite studying plasma physics. FAST ESA IES (ElectroStatic Analyzer Ion) keograms are available in Swarm-Aurora. | Decommissioned | Conjunction Search, Swarm-Aurora |
| Swarm | LEO | Consellation of satellites studying the magnetic field. Metadata from the Thermal Ion Imagers are in AuroraX | Operational | Conjunction Search, Swarm-Aurora |

### Only spacecraft location metadata

| Project/Instrument Name | Orbit Type | Description | Operational Status | AuroraX usage |
| ----------------------  | ---- | ----------- | ------------------ | ------------- |
| Arase (ERG) | HEO | Satellite studying the Van Allen radiation belts | Operational | Conjunction Search, Swarm-Aurora |
| Cluster | HEO | Satellite studying the Earth's magnetic environment and its interaction with the solar wind in three dimensions. Only Cluster-1 is in AuroraX | Operational | Conjunction Search, Swarm-Aurora |
| DMSP | LEO | Set of satellites monitoring meteorological, oceanographic, and solar-terrestrial physics. DMSP-08 to DMSP-21 are in AuroraX | Operational | Conjunction Search, Swarm-Aurora |
| MMS | HEO | Constellation of satellites measuring magnetic field lines and charged particles in 3 dimensions. Only MMS-1 is in AuroraX and Swarm-Aurora. | Operational | Conjunction Search, Swarm-Aurora |
| NOAA | LEO | Set of satellites. NOAA-8 to NOAA-20 are integrated into AuroraX and Swarm-Aurora. | Operational | Conjunction Search, Swarm-Aurora |
| RBSP | HEO | Two satellites studying the Van Allen radiation belts | Decommissioned | Conjunction Search, Swarm-Aurora |
| SAMPEX | LEO | Satellite measuring energetic electrons and ion composition of particle populations in the near polar orbit | Decommissioned | Conjunction Search, Swarm-Aurora |
| THEMIS | HEO | Constellation of satellites studying substorms | Operational | Conjunction Search, Swarm-Aurora |
