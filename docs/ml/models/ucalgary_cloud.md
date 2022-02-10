# UCalgary Cloud detection model

This model is a binary classifier which predicts whether clouds are visible in THEMIS ASI data.

You can use this model in the Conjunction Search webpage and the Ephemeris search PyAuroraX/API functions with the below values:

* Metadata field: calgary_cloud_ml_v1
    * Allowed values
        * classified as cloudy
        * classified as not cloudy
        * not classified
* Metadata field: calgary_cloud_ml_v1_confidence
    * Allowed values
        * float between 0.0 and 100.0

<figure style="padding-top: 10px;">
  <a href="/_extras/img/ml_screenshot_cloud.png" target="_blank">
    <img src="/_extras/img/ml_screenshot_cloud.png" />
  </a>
  <figcaption>AuroraX Conjunction Search metadata filter modal showing the "calgary_cloud_ml_v1" and "calgary_cloud_ml_v1_confidence" fields.</figcaption>
</figure>
