---
hide:
  - toc
---

# aurorax_atm_inverse

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_ATM_INVERSE
;
; PURPOSE:
;       Perform TREx Auroral Transport Model (ATM) 'inverse' calculations.
;
; EXPLANATION:
;       Perform a inverse calculation using the TREx Auroral Transport Model
;       and the supplied input parameters. Note that this function utilizes the
;       UCalgary Space Remote Sensing API to perform the calculation.
;
; CALLING SEQUENCE:
;       aurorax_atm_inverse(time_stamp,geo_lat,geo_lon,intensity_4278,intensity_5577,intensity_6300,intensity_8446,output_flags,...)
;
; PARAMETERS:
;       time_stamp                            Timestamp in UTC, format must be YYYY-MM-DDTHH:MM:SS. Required
;       geo_lat                               Latitude in geodetic coordinates. Currently limited to the Transition Region Explorer 
;                                               (TREx) region of >=50.0 and <61.5 degrees. An error will be raised if outside of this 
;                                               range. This parameter is required.
;       geo_lon                               Longitude in geodetic coordinates. Currently limited to the Transition Region Explorer 
;                                               (TREx) region of >=-110 and <-70 degrees. An error will be raised if outside of this 
;                                               range. This parameter is required.
;       intensity_4278                        Intensity of the 427.8nm (blue) wavelength in Rayleighs. This parameter is required.
;       intensity_5577                        Intensity of the 557.7nm (green) wavelength in Rayleighs. This parameter is required.
;       intensity_6300                        Intensity of the 630.0nm (red) wavelength in Rayleighs. This parameter is required.
;       intensity_8446                        Intensity of the 844.6nm (near infrared) wavelength in Rayleighs. This parameter is required.
;       output_flags                          Flags to indictate which values are included in the output, generated
;                                             using the aurorax_atm_forward_get_output_flags() function. Required
;       precipitation_flux_spectral_type      The precipitation flux spectral type to use. Possible values are gaussian or maxwellian. The 
;                                               default is gaussian. This parameter is optional.
;       nrlmsis_model_version                 NRLMSIS version number. Possible values are 00 or 2.0. Default is 2.0. This parameter
;                                               is optional. More details about this empirical model can be found here, and here.
;       atmospheric_attenuation_correction    Apply an atmospheric attenuation correction factor. Default is 0. Set to 1 to enable.
;       atm_model_version                     ATM model version number. Possible values are only '1.0' at this time, but will have
;                                               additional possible values in the future. This parameter is optional.
;
; KEYWORDS:
;       /NO_CACHE         The UCalgary Space Remote Sensing API utilizes a caching layer for performing ATM
;                         calculations. If this variation of input parameters has been run before (and the
;                         cache is still valid), then it will not re-run the calculation. Instead it will
;                         return the cached results immediately. To disable the caching layer, use this keyword.
;
; OUTPUT
;       Calculated results
;
; OUTPUT TYPE:
;       a struct
;
; EXAMPLES:
;       Refer to examples directory, or data.phys.ucalgary.ca
;+
;-------------------------------------------------------------
```