# UCalgary APA detection model

This model is a binary classifier which predicts whether Amorphous Pulsating Aurora (APA) is visible in THEMIS ASI data. APA is a type of pulsating aurora, discussed in the paper <a href="https://angeo.copernicus.org/articles/36/891/2018/" target="_blank">Grono, Donovan [2018]</a>.

You can use this model in the Conjunction Search webpage and the Ephemeris search PyAuroraX/API functions with the below values:

<figure>
  <a href="/img/apa_example_1.jpg" target="_blank">
    <img src="/img/apa_example_1.jpg" />
  </a>
  <figcaption>Hourly keogram showing an example of Amorphous Pulsating Aurora from Fort Smith, Canada (2019-03-16 UT11)</figcaption>
</figure>


* Metadata field: calgary_apa_ml_v1
    * Allowed values
        * classified as APA
        * classified as not APA
        * not classified
* Metadata field: calgary_apa_ml_v1_confidence
    * Allowed values
        * float between 0.0 and 100.0

<br />

<figure>
  <a href="/img/ml_screenshot_apa.png" target="_blank">
    <img src="/img/ml_screenshot_apa.png" />
  </a>
  <figcaption>AuroraX Conjunction Search metadata filter modal showing the "calgary_apa_ml_v1" and "calgary_apa_ml_v1_confidence" fields.</figcaption>
</figure>
