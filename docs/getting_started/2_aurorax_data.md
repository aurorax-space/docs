# A Brief Look at AuroraX Data

The AuroraX database consists of metadata about ground-based auroral instrumentation and spacecrafts. AuroraX doesn't contain any raw data, and any summary data products (ie. keograms and movies) are linked to via URL records in the database. Data in AuroraX is **not owned by this project**, but rather is an aggregated database of different types of metadata. This helps keep the database slim and optimized for the search engine (still >1 billion records, but manageable).

The metadata in the AuroraX database is derived from several ground-based ASI arrays, spacecrafts, and spacecrafts on-board instruments. We organize the metadata into two categories:

1. [ephemeris](/about_the_data/categories#ephemeris) records which provide location and operational information for a given ground/space data source
2. [data product](/about_the_data/categories#data-products) metadata describing keograms or other summary products (note: no images are stored in the database, only URLs which are used as unique identifiers)

To view what ASI arrays and spacecrafts are currently in AuroraX, you can look at either the [Data Availability](https://aurorax.space/data/availability){:target="_blank"} webpage or [further documentation we have available](https://docs.aurorax.space/about_the_data/metadata_in_aurorax){:target="_blank"}. 

We are working hard to add more and the mentioned lists will be updated as new metadata is integrated. If you're interested in getting metadata for your instrumentation into the system, please reach out to <a href='&#109;ailt&#111;&#58;edono%76&#97;&#37;6E&#64;uc%&#54;1lg%6&#49;%7&#50;y&#46;&#99;a'>Eric Donovan</a> and/or <a href='mail&#116;o&#58;%6&#52;%63ha%&#54;4%&#54;4o&#99;&#64;u&#99;%61lg&#97;ry&#46;%&#54;3a'>Darren Chaddock</a>.

## What is ephemeris data?

Ephemeris data are 1-minute location records corresponding the times that a ground-based or space-based instrument was operating. One of the defining qualities of AuroraX is that data contained in the database consists of only times that instruments definitively collected data. This allows applications such as the [Conjunction Search](https://aurorax.space/conjunctionSearch/dropdowns){:target="_blank"} to return more useful query results; ones where theres definitely data that can be further evaluated by researchers.

The following is an example of a single ground-based ephemeris record:

```json
{
  "data_source": {
    "identifier": 46,
    "program": "themis-asi",
    "platform": "gillam",
    "instrument_type": "panchromatic ASI",
    "source_type": "ground",
    "display_name": "THEMIS-ASI GILL"
  },
  "epoch": "2020-01-01T00:00:00",
  "location_geo": {
    "lat": 56.376723,
    "lon": -94.643664
  },
  "location_gsm": {
    "lat": null,
    "lon": null
  },
  "nbtrace": {
    "lat": 56.376723,
    "lon": -94.643664
  },
  "sbtrace": {
    "lat": -72.76907128936035,
    "lon": -134.6681254931047
  },
  "metadata": {
    "clausen_ml_oath": "classified as discrete",
    "calgary_apa_ml_v1": "classified as not APA",
    "calgary_cloud_ml_v1": "classified as cloudy",
    "calgary_apa_ml_v1_confidence": 100,
    "calgary_cloud_ml_v1_confidence": 99.94
  }
}
```

## What are data products?

In addition to ephemeris metadata, AuroraX also contains metadata representing data products. There are several different types currently: keogram, montage, average, movie, summary_plot, data_availability, and gridded_data.

Keograms are the most recognizable data product for ground-based ASIs; they are images that represent a period of time for imaging. More information about them can be found [here](/about_the_data/instruments/ground/asis/#keograms).

<figure>
  <img src="https://data.swarm-aurora.com/data/summary_data/2008/20080904/themis-asi/20080904_07_gill_themis19_full-keogram.pgm.jpg" />
  <figcaption>THEMIS ASI hourly keogram from Gillam, MB, representing the hour 2008-09-04 UT07</figcaption>
</figure>

AuroraX contains data product records for an assortment of different projects and are used by web applications such as [Keogramist](https://aurorax.space/keogramist). Below is an example of a daily keogram record in AuroraX:

```json
{
  "start": "2020-01-01T00:00:00",
  "end": "2020-01-01T23:59:00",
  "data_source": {
    "identifier": 103,
    "program": "trex",
    "platform": "gillam",
    "instrument_type": "RGB ASI",
    "source_type": "ground",
    "display_name": "TREx RGB GILL"
  },
  "url": "https://data.phys.ucalgary.ca/sort_by_project/TREx/RGB/stream2/2020/01/01/gill_rgb-04/20200101__gill_rgb-04_full-keogram.jpg",
  "data_product_type": "keogram",
  "metadata": {
    "keogram_type": "daily",
    "imaging_end_time": "2020-01-01T13:16:00.000000",
    "imaging_start_time": "2019-12-31T23:30:00.000000"
  }
}
```

## Learn more about ephemeris and data product records

If you want to learn more about ephemeris and data product records, have a look at:

- [Data Categories](/about_the_data/data_categories)
- [Instrument Descriptions: Ground-based](/about_the_data/instruments/ground)
- [Instrument Descriptions: Space-based](/about_the_data/instruments/space)

## Next step

Now that you know what kind of data is in the AuroraX database, let's investigate one of the most powerful features: conjunctions.

[Next step&nbsp;&nbsp;:octicons-arrow-right-16:](/getting_started/3_what_are_conjunctions/){.md-button}
