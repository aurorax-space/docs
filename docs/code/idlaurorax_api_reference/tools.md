---
hide:
  - toc
---

# Data Analysis

Below are all functions and procedures available in IDL-AuroraX for supporting data analysis.

- [`aurorax_bounding_box_extract_metric`](#aurorax_bounding_box_extract_metric)
- [`aurorax_calibrate_rego`](#aurorax_calibrate_rego)
- [`aurorax_calibrate_trex_nir`](#aurorax_calibrate_trex_nir)
- [`aurorax_ccd_contour`](#aurorax_ccd_contour)
- [`aurorax_fov_oplot`](#aurorax_fov_oplot)
- [`aurorax_prep_grid_image`](#aurorax_prep_grid_image)
- [`aurorax_keogram_add_axis`](#aurorax_keogram_add_axis)
- [`aurorax_keogram_create_custom`](#aurorax_keogram_create_custom)
- [`aurorax_keogram_create`](#aurorax_keogram_create)
- [`aurorax_keogram_inject_nans`](#aurorax_keogram_inject_nans)
- [`aurorax_keogram_plot`](#aurorax_keogram_plot)
- [`aurorax_montage_create`](#aurorax_montage_create)
- [`aurorax_mosaic_oplot`](#aurorax_mosaic_oplot)
- [`aurorax_mosaic_plot`](#aurorax_mosaic_plot)
- [`aurorax_prep_images`](#aurorax_prep_images)
- [`aurorax_prep_skymaps`](#aurorax_prep_skymaps)
- [`aurorax_spectra_get_intensity`](#aurorax_spectra_get_intensity)
- [`aurorax_spectra_plot`](#aurorax_spectra_plot)
- [`aurorax_get_decomposed_color`](#aurorax_get_decomposed_color)
- [`aurorax_create_movie`](#aurorax_create_movie)

## aurorax_bounding_box_extract_metric

```
;+
; :Description:
;       Extract a metric, related to luminosity, from pixel data within
;       some bounded region within a single or set of ASI CCD images,
;       defined by CCD, lat/lon, elevation, or azimuth boundaries.
;
; :Parameters:
;       images: in, required, Array
;         array of images to extract metric from
;       mode: in, required, String
;         string giving the input coordinate type ("geo", "mag", "ccd", "azim", "elev")
;       xy_bounds: in, required, Array
;         a two or four element array giving the bounds of the region of interest,
;         for the desired mode ([lon0,lon1,lat0,lat1], [min_elev,max_elev], ... etc.)
;
; :Keywords:
;       metric: in, optional, String
;         the metric to compute, accepted is "median" (default), "mean", or "sum"
;       percentile: in, optional, Float
;         the percentile for which luminosity/intensity is extracted
;       show_preview: in, optional, Boolean
;         plot a preview of the bounded area on top of the first image frame
;       skymap: in, optional, Struct
;         the skymap to use for georeferencing
;       altitude_km: in, optional, Integer or Float
;         the altitude of the image data for georeferencing - must be provided if
;         working with geographic or geomagnetic coordinates
;       n_channels: in, optional, Integer
;         manually specify the image data channels, otherwise its estimated based on shape
;       aacgm_date: in, optioinal, String
;         a date string in the format 'YYYY-MM-DD' specifying the date to use for AACGM
;         coordinate transformations
;       aacgm_height: in, optional, String
;         input altitude (km) for geomagnetic (AACGM) coordinate transformations - if
;         not supplied, default is 0.0
;
; :Returns:
;       Array
;
; :Examples:
;       luminosity = aurorax_bounding_box_extract_metric(images, "geo", [-94, -95, 55, 55.5], skymap=skymap, altitude_km=110)
;+
```

## aurorax_calibrate_rego

```
;+
; :Description:
;       Calibrate one or more REGO images by applying a number of calibrations,
;       such as dark frame subtraction, flatfield calibration, and calibration
;       to Rayleighs. Each calibration step can be omitted, if desired.
;
; :Parameters:
;       images: in, required, Array
;         array of images to calibrate
;
; :Keywords:
;       cal_flatfield: in, optional, Struct
;         the flatfield calibration to use (if desired), usually a result of reading a calibration file
;       cal_rayleighs: in, optional, Struct
;         the rayleighs calibration to use (if desired), usually a result of reading a calibration file
;       exposure_length_sec: in, optional, Float
;         the exposure length for the image data being calibrated, defaults to 3.0
;       no_dark_subtract: in, optional, Boolean
;         omits the dark subtraction step of the calibration process
;
; :Returns:
;       Array
;
; :Examples:
;       rayleighs_images = aurorax_calibrate_rego(images, cal_flatfield=flatfield_cal, cal_rayleighs=rayleighs_cal)
;       bg_subtracted_images = aurorax_calibrate_rego(images)
;+
```

## aurorax_calibrate_trex_nir

```
;+
; :Description:
;       Calibrate one or more TREx INR images by applying a number of calibrations,
;       such as dark frame subtraction, flatfield calibration, and calibration to
;       Rayleighs. Each calibration step can be omitted, if desired.

; :Parameters:
;       images: in, required, Array
;         array of images to calibrate
;
; :Keywords:
;       cal_flatfield: in, optional, Struct
;         the flatfield calibration to use (if desired), usually a result of reading a calibration file
;       cal_rayleighs: in, optional, Struct
;         the rayleighs calibration to use (if desired), usually a result of reading a calibration file
;       exposure_length_sec: in, optional, Float
;         the exposure length for the image data being calibrated (defaults to 5.0)
;       no_dark_subtract: in, optional, Boolean
;         omits the dark subtraction step of the calibration process
;
; :Returns:
;       Array
;
; :Examples:
;       rayleighs_images = aurorax_calibrate_trex_nir(images, cal_flatfield=flatfield_cal, cal_rayleighs=rayleighs_cal)
;       bg_subtracted_images = aurorax_calibrate_trex_nir(images)
;+
```

## aurorax_ccd_contour

```
;+
; :Description:
;       Obtain the CCD coordinates of a variety of different contours, given one of a
;       constant elevation, azimuth, geo or mag lat or lon, or arrays of lats/lons defining
;       a contour. Used for plotting on top of an image.
;
;       This function returns an array of shape (N,2), which are the x and y CCD coordinates
;       of the contour
;
; :Parameters:
;       skymap: in, required, Struct
;         the skymap to use for georeferencing
;
; :Keywords:
;       constant_azimuth: in, optional, Boolean
;         the desired constant azimuth, in degrees from north, to obtain contour for
;       constant_elevation: in, optional, Integer or Float
;         the desired constant elevation to obtain contour for
;       constant_lat: in, optional, Integer or Float
;         the desired constant latitude to obtain contour for
;       constant_lon: in, optional, Integer or Float
;         the desired constant longitude to obtain contour for
;       contour_lats: in, optional, Array
;         array of lats defining a contour
;       contour_lons: in, optional, Array
;         array of lons defining a contour
;       altitude_km: in, optional, Integer
;         the altitude of the image data for georeferencing if necessary
;
; :Keywords:
;       mag: in, optional, Boolean
;         use this keyword if lats/lons are supplied in magnetic coordinates
;       aacgm_date: in, optioinal, String
;         a date string in the format 'YYYY-MM-DD' specifying the date to use for AACGM
;         coordinate transformations
;       aacgm_height: in, optional, String
;         input altitude (km) for geomagnetic (AACGM) coordinate transformations - if
;         not supplied, default is 0.0
;       no_auto_flip: in, optional, Boolean
;         by defult, the skymap is oriented automatically so that the returned contours
;         are oriented such that when plotted on a window, the top of the window represents
;         North - if the no_auto_flip keyword is set, the skymap is used as it
;         
;
; :Returns:
;       Array
;
; :Examples:
;       contour = aurorax_ccd_contour(skymap, constant_lat = 67)
;       ccd_x = contour[*,0]
;       ccd_y = contour[*,1]
;+
```

## aurorax_fov_oplot

```
;+
; :Description:
;       Integrate spectrograph data to obtain absolute intensity, for a given common
;       auroral emission or a manually selected wavelength band.
;
; :Parameters:
;       site_lat: in, required, Float
;         the geographic latitude of the site / instrument location
;       site_lon: in, required, Float
;         the geographic longitude of the site / instrument location
;       altitude_km: in, required, Float
;         The altitude (in kilometers) at which the image data should be
;
; :Keywords:
;       min_elevation: in, optional, Float
;         the elevation angle in degrees, from the horizon, to map the FoV at
;       site_name: in, optional, String
;         a string giving the site name / label associated with FoV
;       spectrograph: in, optional, Boolean
;         if true, specifies that the FoV should be computed for a meridian
;         scanning spectrograph, as opposed ot an ASI (the default)
;       color: in, optional, Long Integer
;         long integer giving the color to plot in (default is 0 i.e. black)
;       linestyle: in, optional, Integer
;         integer giving IDL linestyle (default is 0, i.e. solid)
;       thick: in, optional, Integer
;         integer giving line thickness for any lines plotted (default is 1)
;       label_site: in, optional, Boolean
;         label FoV with the parameter supplied by site_name
;       label_color: in, optional, Long Integer
;         long integer giving the color to label in (default is 0 i.e. black)
;
; :Examples:
;       aurorax_fov_oplot, themis_lats, themis_lons, 110.0
;       aurorax_fov_oplot, rego_lats, rego_lons, 230.0, thick=2, site_name=rego_uids, /label_site
;+
```

## aurorax_prep_grid_image

```
;+
; :Description:
;       Prepare a grid file array to be plotted.
;
;       Takes a grid array, and converts it to RGBA format, masking
;       all empty cells with max transparency, so that it can be plotted
;       overtop of a map.
;
; :Parameters:
;       grid: in, required, Array
;         The grid array to prepare. Usually a result of reading a grid file
;         and obtaining grid data from said file.
;       fill_value: in, required, Float
;         The fill value that was used to fill grid cells containing no data.
;         Usually obtained from the grid file's metadata.
;
; :Keywords:
;       scale: in, optional, Array
;         A two-element array specifying the minimum and maximum values to
;         scale data between, optional (defaults to data min/max).
;       color_table: in, optional, Integer
;         An integer specifying the IDL rgb color table to use for preparing
;         single-channel data, optional (defaults to 0, gray).
;
; :Returns:
;       Array
;
; :Examples:
;       rgba_grid = aurorax_prep_grid_image(grid, -999.0, scale=[0, 5000], color_table=3)
;+
```

## aurorax_keogram_add_axis

```
;+
; :Description:
;       Add one or more desired physical axes to a keogram structure, which is
;       usually obtained via aurorax_keogram_create. Options are elevation, and
;       geographic/magnetic lats (lons for ewograms).
;
;       This function returns a keogram structure containing the new axes.
;
; :Parameters:
;       keogram_struct: in, required, Struct
;         keogram structure - usually the return value of aurorax_keogram_create()
;       skymap: in, required, Struct
;         the skymap to use for georeferencing
;
; :Keywords:
;       altitude_km: in, optional, Integer or Float
;         altitude, in kilometers, of the keogram data
;       geo: in, optional, Boolean
;         adds an axis of geographic coordinates
;       mag: in, optional, Boolean
;         adds an axis of geomagnetic coordinates
;       elev: in, optional, Boolean
;         adds an axis of elevation angles
;       aacgm_date: in, optioinal, String
;         a date string in the format 'YYYY-MM-DD' specifying the date to use for AACGM
;         coordinate transformations
;       aacgm_height: in, optional, String
;         input altitude (km) for geomagnetic (AACGM) coordinate transformations - if
;         not supplied, default is 0.0
;
; :Returns:
;       Struct
;
; :Examples:
;       keo = aurorax_keogram_add_axis(keo, skymap, /geo, /elev, altitude_km=110)
;+
```

## aurorax_keogram_create_custom

```
;+
; :Description:
;       Create a keogram by slicing image data along a custom contour
;       defined by lats/lons or CCD coordinates.
;
;       This function returns a custom keogram structure containing keogram
;       data and temporal axis
;
; :Parameters:
;       images: in, required, Array
;         array of images to extract metric from
;       time_stamp: in, required, Array
;         array of timestamps corresponding to each image frame
;       coordinate_system: in, required, String
;         a string giving the coordinate system ("ccd", "geo", "mag")
;       x_locs: in, required, Array
;         the x locations, in desired coordinate system, to slice keogram along
;       y_locs: in, required, Array
;         the y locations, in desired coordinate system, to slice keogram along
;
; :Keywords:
;       width: in, optional, Integer
;         the width of the keogram slice, in pixel units, optional (defaults to 2)
;       skymap: in, optional, Any
;         the skymap to use for georeferencing, optional
;       altitude_km: in, optional, Float
;         the altitude of the image data for georeferencing, optional
;       metric: in, optional, String
;         specify the metric to use to compute each keogram pixel "median" (default),
;         "mean", "sum", or "percentile" (in which case the percentile keyword should
;         also be supplied)
;       percentile: in, optional, Float
;         specifies the percentile to take as the metric, when the metric keyword
;         is set to percentile - defaults to 95.0 (e.g. percentile=99.0 specifies that
;         the 99th percentile should be computed to fill each keogram bin)
;       show_preview: in, optional, Boolean
;         plot a preview of the keogram slice on top of the first image frame
;       preview_scl_min: in, optional, Int
;         the minimum value to use for scaling the preview image
;       preview_scl_max: in, optional, Int
;         the maximum value to use for scaling the preview image
;
; :Returns:
;       Struct
;
; :Examples:
;       ccd_keo = aurorax_keogram_create_custom(img, time_stamp, "ccd", x_arr, y_arr, width=5, metric="sum", /show_preview)
;       geo_keo = aurorax_keogram_create_custom(img, time_stamp, "geo", longitudes, latitudes, skymap=skymap, altitude_km=113)
;+
```

## aurorax_keogram_create

```
;+
; :Description:
;       Create a keogram structure from an array of image data.
;
; :Parameters:
;       images: in, required, Array
;         array of images or spectrograph data to extract metric from
;       time_stamp: in, required, Array
;         array of timestamps corresponding to each frame in images
;
; :Keywords:
;       axis: in, optional, Integer
;         the axis index (1 or 0) to slice the keogram from - default is 1 (N-S slice)
;       spectra: in, optional, Boolean
;         indicates that spectrograph data is being passed in
;       spect_emission: in, optional, String
;         a string giving a known auroral emission to perform integration over for
;         creation of spectrograph keograms, either ['hbeta', 'blue', 'green', 'red'],
;         defaults to 'green'
;       spect_band_signal: in, optional, Float
;         a two-element array used to manually supply the wavelengths to use as the
;         lower and upper bounds of integration of the spectrum, useful for keograms
;         of emissions that are not available in the spect_emission parameter
;       spect_band_bg: in, optionial, Float
;         a two-element array specifying the wavelengths to use as the lower and
;         upper bounds of integration for a background channel, which is subtracted
;         from the integration over spect_band for manual emission selection
;       wavelength: in, optional, Float
;         the array of wavelengths corresponding to spectrograph data
;
; :Returns:
;       Struct
;
; :Examples:
;       keogram = aurorax_keogram_create(img, time_stamp)
;       ewogram = aurorax_keogram_create(img, time_stamp, axis=1)
;+
```

## aurorax_keogram_inject_nans

```
;+
; :Description:
;       Add NaN columns to a keogram to represent missing data. The imager cadence,
;       unless manually supplied, is automatically determined to decide where data
;       is missing in the keogram.
;
; :Parameters:
;       keogram: in, required, Struct
;         the keogram object to inject nans into
;
; :Keywords:
;       cadence: in, optional, Float or Int
;         the cadence, in seconds, of the keogram data - supplying a cadence will
;         override the default behaviour, which is to automatically determine the
;         imager cadence based on the keogram data
;       fill_val: in, optional, Float or Int
;         the value to represent missing data with. The default is !values.f_nan
;
; :Returns:
;       Struct
;
; :Examples:
;       keo = aurorax_keogram_create(img, time_stamp)
;       keo_with_missing_data = aurorax_keogram_inject_nans(keo)
;+
```

## aurorax_keogram_plot

```
;+
; :Description:
;       Plot a keogram object.
;
;       Defaults to CCD axis (use geo, mag, elev, to change this).
;
; :Parameters:
;       keogram_struct: in, required, Object
;         keogram object to plot, usually the return value of aurorax_keogram_create()
;
; :Keywords:
;       title: in, optional, String
;         string giving the plot title
;       dimensions: in, optional, Array
;         two-element array giving dimensions of the plotting window in device coordinates
;       location: in, optional, Array
;         two-element array giving location of the plotting window in device coordinates
;       x_tick_interval: in, optional, Integer
;         interval between ticks on the x-axis (default is 200)
;       y_tick_interval: in, optional, Integer
;         interval between ticks on the y-axis (default is 50)
;       aspect_ratio: in, optional, Float
;         float giving the aspect ratio to display keogram data
;       colortable: in, optional, Integer
;         int giving the IDL colortable to use for the keogram
;       geo: in, optional, Boolean
;         labels geographic coordinates on the y-axis (axis must exist in keogram structure)
;       mag: in, optional, Boolean
;         labels geomagnetic coordinates on the y-axis (axis must exist in keogram structure)
;       elev: in, optional, Boolean
;         labels elevation angles on the y-axis (axis must exist in keogram structure)
;
; :Returns:
;       reference to the created graphic
;
; :Examples:
;       p = aurorax_keogram_plot(keo, title="Geographic", /geo, location=[0,0], dimensions=[1000,400])
;+
```

## aurorax_montage_create

```
;+
; :Description:
;       Create a montage from a set of images, and display it.
;
; :Parameters:
;       images: in, required, Array
;         array of images to create the montage for
;       timestamps: in, required, Array
;         timestamps corresponding to each frame of images
;       n_cols: in, required, Integer
;         integer specifying the number of columns in the montage
;       n_rows: in, required, Integer
;         integer specifying the number of rows in the montage
;
; :Keywords:
;       colortable: in, optional, Integer
;         integer specifying the IDL colortable to use, optional (default is 0)
;       timestamps_fontsize: in, optional, Integer
;         font size for the timestamp labels, optional
;       frame_step: in, optional, Integer
;         interval to add frames from images to the montage, optional (default is 1)
;       dimensions: in, optional, Array
;         two-element array giving dimensions of the plotting window in device coordinates, optional
;       location: in, optional, Array
;         two-element array giving location of the plotting window in device coordinates, optional
;       timestamps_color: in, optional, String
;         a string giving the color to overplot timestamps, optional (default is 'white')
;       no_timestamps: in, optional, Boolean
;         disable default behaviour of plotting timestamps
;
; :Returns:
;       reference to the created graphic
;
; :Examples:
;       aurorax_montage_create, images, timestamps, 5, 5, colortable=7, timestamps_fontsize=16
;+
```

## aurorax_mosaic_oplot

```
;+
; :Description:
;       Plot lines of constant lat/lon, and custom points on a mosaic.
;
;       Plot either, or a combination of, lines of constant geographic or
;       geomagnetic latitude and/or longitude. Can also be used to plot
;       a single point in geographic or geomagnetic coordinates.
;
; :Keywords:
;       constant_lats: in, optional, Scalar or Array
;         a scalar or array giving latitude(s) to add constant lines
;       constant_lons: in, optional, Scalar or Array
;         a scalar or array giving longitude(s) to add constant lines
;       point: in, optional, Array
;         a two element array specifying the lon, lat to plot
;       color: in, optional, Long Integer
;         long integer giving the color to plot in (default is 0 i.e. black)
;       thick: in, optional, Integer
;         integer giving line thickness for any lines plotted (default is 1)
;       linestyle: in, optional, Integer
;         integer giving IDL linestyle (default is 0, i.e. solid)
;       symbol: in, optional, Integer
;         integer giving IDL symbol (default is 0, i.e. none for lines and circle for point)
;       symsize: in, optional, Integer
;         integer giving IDL symbol size (default is 1)
;       mag: in, optional, Boolean
;         specify that coordinates are given in geomagnetic coordinates (default is geographic)
;       aacgm_date: in, optioinal, String
;         a date string in the format 'YYYY-MM-DD' specifying the date to use for AACGM
;         coordinate transformations
;       aacgm_height: in, optional, String
;         input altitude (km) for geomagnetic (AACGM) coordinate transformations - if
;         not supplied, default is 0.0
;
; :Examples:
;       aurorax_mosaic_oplot, point=[245,61.2], color=aurorax_get_decomposed_color([0,0,255])
;       aurorax_mosaic_oplot, constant_lats=[40,50,60], constant_lons=[220,240,260], linestyle=2, thick=3
;+
```

## aurorax_mosaic_plot

```
;+
; :Description:
;       Plot a mosaic onto a pre-defined map window, using *prepared* image data and skymaps.
;
; :Parameters:
;       prepped_data: in, required, Structure or Array
;         single, or array of 'prepped_data' structures (the return of aurorax_mosaic_prep_data())
;       prepped_skymaps: in, required, Structure or Array
;         single, or array of 'prepped_data' structures (the return of aurorax_mosaic_prep_data())
;       mosaic_dt: in, required, String
;         date/timestamp of image data that is to be plotted
;
; :Keywords:
;       min_elevation: in, optional, Integer or Float or Array
;         int/float, or array (same length as prepped_data) of ints/floats specifying the minimum
;         elevation in degrees to begin plotting data, optional (default is 5 deg)
;       intensity_scales: in, optional, Array or Hash
;         a two element array, or hash of two element arrays (for scaling on a per-site basis),
;         giving the min/max scale bounds for data (default is [0,20000])
;       spect_intensity_scales: in, optional, Array or Hash
;         a two element array, or hash of two element arrays (for scaling on a per-site basis),
;         giving the min/max scale bounds in Rayleighs for spectrograph data (default is [0,5000])
;       colortable: in, optional, Integer or Array
;         an integer, or array of integers with the same length as prepped_data, specifying the
;         IDL colortable to plot data with, optional (default is 0, i.e. gray)
;       elevation_increment: in, optional, Float
;         a parameter that affects the plotting algorithm - the default is 0.25 - increasing this
;         parameter can speed up plotting, and decreasing it can help make boundaries between sites
;         more distinct (if they appear to be getting blended)
;
; :Examples:
;       aurorax_mosaic_plot, prepped_data, prepped_skymap, image_idx, min_elevation=7, intensity_scales=[500,10000], colortable=3
;+
```

## aurorax_prep_images

```
;+
; :Description:
;       Prepare image data to create a mosaic.
;
;       Takes image data and formats it in a way such that it
;       can be fed into the aurorax_mosaic_plot routine.
;
; :Parameters:
;       image_list: in, required, List
;         A list of image data objects, where each object is usually the return
;         value of aurorax_ucalgary_read(). Note that even if preparing a single
;         image data object, it must be enclosed in a list.
;
; :Keywords:
;       spect_emission: in, optional, String
;         a string giving a known auroral emission to perform integration over,
;         either ['hbeta', 'blue', 'green', 'red'], defaults to 'green'
;       spect_band_signal: in, optional, Float
;         a two-element array used to manually supply the wavelengths to use as the
;         lower and upper bounds of integration of the spectrum
;       spect_band_bg: in, optionial, Float
;         a two-element array specifying the wavelengths to use as the lower and
;         upper bounds of integration for a background channel, which is subtracted
;         from the integration over spect_band for manual emission selection
;
; :Returns:
;       Struct
;
; :Examples:
;       prepped_data = aurorax_prep_images(list(aurorax_ucalgary_read(d.dataset, d.filenames)))
;+
```

## aurorax_prep_skymaps

```
;+
; :Description:
;       Prepare skymaps to create a mosaic.
;
;       Takes skymap(s) and formats them in a way such that they
;       can be fed into the aurorax_mosaic_plot routine.
;
; :Parameters:
;       skymap_list: in, required, List
;         A list of skymap data objects, where each object is usually the return
;         value of aurorax_ucalgary_read(). Note that even if preparing a single
;         skymap object, it must be enclosed in a list.
;       altitude_km: in, required, Float
;         The altitude (in kilometers) at which the image data should be
;         prepared for mosaicing.
;
; :Returns:
;       Struct
;
; :Examples:
;       prepped_skymap = aurorax_prep_skymaps(list(aurorax_ucalgary_read(d.dataset, d.filenames)))
;+
```

## aurorax_spectra_get_intensity

```
;+
; :Description:
;       Integrate spectrograph data to obtain absolute intensity, for a given common
;       auroral emission or a manually selected wavelength band.
;
; :Parameters:
;       spect_data: in, required, Struct
;         spectrograph data object to integrate, usually the return value of aurorax_ucalgary_read()
;       time_stamp: in, required, String
;         timestamp(s) for which spectral data will be integrated
;       spect_loc: in, required, Int
;         the bin number, corresponding to the spatial axis of the spectrograph
;         data, to integrate data for
;
; :Keywords:
;       spect_emission: in, optional, String
;         a string giving a known auroral emission to perform integration over,
;         either ['hbeta', 'blue', 'green', 'red'], defaults to 'green'
;       spect_band_signal: in, optional, Float
;         a two-element array used to manually supply the wavelengths to use as the
;         lower and upper bounds of integration of the spectrum
;       spect_band_bg: in, optionial, Float
;         a two-element array specifying the wavelengths to use as the lower and
;         upper bounds of integration for a background channel, which is subtracted
;         from the integration over spect_band for manual emission selection
;
;  :Returns:
;       Float, giving the calculated intensity
;
; :Examples:
;       i_4278 = aurorax_spectra_get_intensity(spect_data, '2021-02-16T09:30:00', 125, spect_emission='blue')
;       i_4861 = aurorax_spectra_get_intensity(spect_data, '2021-02-16T09:30:00', 125, spect_emission='hbeta')
;       i_5577 = aurorax_spectra_get_intensity(spect_data, '2021-02-16T09:30:00', 125, spect_emission='green')
;       i_6300 = aurorax_spectra_get_intensity(spect_data, '2021-02-16T09:30:00', 125, spect_emission='red')
;+
```

## aurorax_spectra_plot

```
;+
; :Description:
;       Plot individual spectra from a spectrograph data object.
;
; :Parameters:
;       spect_data: in, required, Struct
;         spectrograph data object to plot from, usually the return value of aurorax_ucalgary_read()
;       time_stamp: in, required, String
;         timestamp(s) for which spectral data will be plotted
;       spect_loc: in, required, Int
;         the bin number(s), corresponding to the spatial axis of the spectrograph data, to plot
;
; :Keywords:
;       title: in, optional, String
;         string giving the plot title
;       dimensions: in, optional, Array
;         two-element array giving dimensions of the plotting window in device coordinates
;       location: in, optional, Array
;         two-element array giving location of the plotting window in device coordinates
;       position: in, optional, Array
;         four-element array giving position [x0, y0, x1, y1] in normal coordinates (0.-1.)
;         of the plot within the window
;       color: in, optional, String
;         string(s) specifying an IDL color(s) to use for plotting spectra
;       thick: in, optional, Int
;         a scalar integer specifying the thickness of plotted spectra
;       xlabel: in, optional, String
;         string specifying the x-axis title
;       ylabel: in, optional, String
;         string specifying the y-axis title
;       ylim: in, optional, Float
;         a two element vector specifying the [min, max] intensities to plot for the y-axis
;       xlim: in, optional, Float
;         a two element vector specifying the [min, max] wavelengths (in nm) to plot for the x-axis
;       overplot: in, optional, Boolean
;         plots over the current function graphics plotting window (which must exist)
;       auto_legend: in, optional, Boolean
;         plots a legend with automatically determined labels
;       legend_position: in, optional, Float
;         the position, in normalized (0.0-1.0) coordinates, of the top right corner of the legend
;
; :Returns:
;       reference to the created graphic
;
; :Examples:
;       d = aurorax_ucalgary_download('TREX_SPECT_PROCESSED_V1', '2021-02-16T09:00', '2021-02-16T09:59', site_uid = 'rabb')
;       spect_data = aurorax_ucalgary_read(d.dataset, d.filenames)
;       p = aurorax_spectra_plot, spect_data, "2021-02-16T09:30:00", 150
;+
```

## aurorax_get_decomposed_color

```
;+
; :Description:
;       Convert RGB triple to decomposed long integer format.
;
;       This function is useful for plotting in decomposed color mode.
;       It converts an RGB triple to a long integer that can be used
;       to plot the corresponding color in decomposed color mode.
;
; :Parameters:
;       rgb_triple: in, required, Array
;         a three element array specifying the RGB color to convert
;
; :Returns:
;       Long
;
; :Examples:
;       long_cyan = aurorax_get_decomposed_color([0,255,255])
;+
```

## aurorax_create_movie

```
;+
; :Description:
;   Given a list of filenames referencing images, create and save a movie.
;
; :Arguments:
;   input_filenames: in, required, String
;     an array of strings giving filenames of all images
;   output_filename: in, required, String
;     the filename location at which to save the image
;   fps: in, required, String
;     integer giving the frames per second to create movie at
;
; :Examples:
;   aurorax_create_movie, file_search("path\to\images\*.png"), "movie.mp4", 30
;-
```