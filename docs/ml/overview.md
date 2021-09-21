# Machine Learning

One of the major goals of AuroraX is to leverage machine learning to enhance the discoverability of auroral data, providing a way to sift through images and quickly find what you're looking for. Since ASIs collect significant volumes of data (hundreds of TBs) we would benefit from a way to determine the content in images automatically, and be able to search looking for specific types of aurora.

Metadata derived from machine learning models is included in the AuroraX database. This allows the AuroraX search engine to filter on image content derived from any number of models. For example, searching for conjunctions that are not cloudy, or contain specific kinds of aurora.

## How are models used in AuroraX?

Machine learning models are currently used to enhance the AuroraX Conjunction Search capabilities. For example, you can perform searches with metadata filters specified to reduce the search down to only times when it was not cloudy, or an imager had Amorphous Pulsating Aurora (APA) in the field of view.

You can try this functionality out by clicking on "Example 7" on the [Conjunction Search](https://aurorax.space/conjunctionSearch/dropdowns) page. This example searches for conjunctions between any THEMIS ASI and any THEMIS satellite, where the "ucalgary_apa" ML model says there's amorphous pulsating aurora in the field of view of the camera. You can perform the search and view the data using the Swarm-Aurora "open all results" button, as seen in the below screenshots.

<figure>
  <a href="/img/conjunction_search_screenshot_1.png" target="_blank">s
    <img src="/img/conjunction_search_screenshot_1.png" />
  </a>
  <figcaption>Conjunction search results from "example 7". Conjunctions between THEMIS-ASI and THEMIS spacecrafts where the "ucalgary_apa" ML model believes there's Amorphous Pulsating Aurora (APA) in the field of view of a camera.</figcaption>
</figure>

<figure>
  <a href="/img/swarmaurora_apa_example.png" target="_blank">
    <img src="/img/swarmaurora_apa_example.png" />
  </a>
  <figcaption>Swarm-Aurora interface showing the first result from the above conjunction search</figcaption>
</figure>

## What models are available?

We currently only have models for the THEMIS ASI array. There exist three models, Lasse Clausen's OATH 6-class model, a UCalgary binary classifier for cloud/not-cloud, and a UCalgary binary classifier for APA/not-APA (Amorphous Pulsating Aurora).

Further information on these models can be found here:

* [UCalgary Cloud model](/ml/models/ucalgary_cloud)
* [UCalgary Amorphous Pulsating Aurora (APA) model](/ml/models/ucalgary_apa)
* [Lasse Clausen OATH model](/ml/models/clausen_oath)
