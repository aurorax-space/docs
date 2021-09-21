# Space-based Instruments

AuroraX contains footprints for satellites and operating flags for several onboard instruments. Below we discuss these data in more depth.

## Satellite Footprints

Three sets of satellite location information are contained in AuroraX, all of which are retrieved from [SSCWeb](https://sscweb.gsfc.nasa.gov/): geographic lat/lon, North B-Trace geo lat/lon, and South B-Trace geo lat/lon. The B-Trace values are the magnetic footprints for a satellite in each hemisphere, mapped in geographic coordinates. These B-Trace values are used for the conjunction search algorithm.

## Swarm

Metadata is included signifying if the Thermal Ion Imager (TII) is operating, and it's data quality, for each Swarm satellite. This information is determined from a combination of two sets of files available on the Swarm data website: the baselined data, and the general operation data (second is used in the case there is no baselined data available).

## ePOP

Metadata is included signifying if each ePOP instrument is operating. This information is determined using availability text files found on the ePOP data website.
