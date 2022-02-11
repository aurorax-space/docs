# Lasse Clausen OATH model

For further information about this model, please see the below links to the paper and a webpage containing the model. This paper has two versions of the model, one that is a binary classifier (aurora/no aurora), and one that is a 6-class classifier. AuroraX currently only contains metadata derived from the 6-class model.

* DOI: [https://doi.org/10.1029/2018JA025274](https://doi.org/10.1029/2018JA025274){:target="_blank"}
* More details: [http://tid.uio.no/plasma/oath](http://tid.uio.no/plasma/oath){:target="_blank"}

You can use this model in the Conjunction Search webpage and the Ephemeris search PyAuroraX/API functions with the below values:

* Metadata field: clausen_ml_oath
* Allowed values:
    * classified as arc
    * classified as diffuse
    * classified as discrete
    * classified as cloudy
    * classified as moon
    * classified as no aurora
    * not classified

<figure style="padding-top: 10px;">
  <a href="/_extras/img/ml_screenshot_clausen.png" target="_blank">
    <img src="/_extras/img/ml_screenshot_clausen.png" />
  </a>
  <figcaption>AuroraX Conjunction Search metadata filter modal showing the "clausen_ml_oath" field.</figcaption>
</figure>
