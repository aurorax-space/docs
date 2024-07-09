---
hide:
  - toc
---

# aurorax_atm_forward

```
;-------------------------------------------------------------
;+
; NAME:
;       AURORAX_ATM_FORWARD
;
; PURPOSE:
;       Perform TREx Auroral Transport Model (ATM) 'forward' calculations.
;
; EXPLANATION:
;       Perform a forward calculation using the TREx Auroral Transport Model
;       and the supplied input parameters. Note that this function utilizes the
;       UCalgary Space Remote Sensing API to perform the calculation.
;
;       The ATM model is 1D and time-independent. However, the optional parameters
;       timescale_auroral and timescale_transport provide limited support for time-dependent
;       and transport process. The timescale_auroral parameter (T0) is the duration
;       of the precipitation. The timescale_transport parameter is defined by L/v0,
;       in which L is the dimension of the auroral structure, and v0 is the cross-structure
;       drift speed. The model quasi-analytically solves the continuity equation under
;       a square input (with time duration T0 and spatial width L) input of precipitation.
;       The initial/boundary conditions are given by IRI. The output yields the mean
;       density/VER over [0-L] at time T0.
;
; CALLING SEQUENCE:
;       aurorax_atm_forward(time_stamp,geo_lat,geo_lon,output_flags,...)
;
; PARAMETERS:
;       time_stamp                          Timestamp in UTC, format must be YYYY-MM-DDTHH:MM:SS. Required
;       geo_lat                             Latitude in geodetic coordinates: -90.0 to 90.0. Required
;       geo_lon                             Longitude in geodetic coordinates: -180.0 to 180.0. Required
;       output_flags                        Flags to indictate which values are included in the output, generated
;                                           using the aurorax_atm_forward_get_output_flags() function. Required
;       maxwellian_energy_flux              Maxwellian energy flux in erg/cm2/s. Default is 10. This parameter is optional.
;       gaussian_energy_flux                Gaussian energy flux in erg/cm2/s. Default is 0.0. Note that gaussian_peak_energy 
;                                             and gaussian_spectral_width must be specified if the gaussian_energy_flux is not 
;                                             0. This parameter is optional.
;       maxwellian_characteristic_energy    Maxwellian characteristic energy in eV. Default is 5000. Note that maxwellian_characteristic_energy 
;                                             must be specified if the maxwellian_energy_flux is not 0. This parameter is optional.
;       gaussian_peak_energy                Gaussian peak energy in eV. Default is 1000. Note this parameter must be specified 
;                                             if the gaussian_energy_flux is not 0. This parameter is optional.
;       gaussian_spectral_width             Gaussian spectral width in eV. Default is 100. Note this parameter must be specified 
;                                             if the gaussian_energy_flux is not 0. This parameter is optional.
;       nrlmsis_model_version               NRLMSIS version number. Possible values are 00 or 2.0. Default is 2.0. This parameter 
;                                             is optional. More details about this empirical model can be found here, and here.
;       oxygen_correction_factor            Oxygen correction factor used to multiply by in the empirical model. Default is 1. 
;                                             This parameter is optional.
;       timescale_auroral                   The duration of the precipitation, in seconds. Default is 600 (10 minutes). This 
;                                             parameter is optional.
;       timescale_transport                 Defined by L/v0, in which L is the dimension of the auroral structure, and v0 is 
;                                             the cross-structure drift speed. Represented in seconds. Default is 600 (10 minutes). 
;                                             This parameter is optional.
;       atm_model_version                   ATM model version number. Possible values are only '1.0' at this time, but will have 
;                                             additional possible values in the future. This parameter is optional.
;       custom_spectrum                     A struct containing two 1D float arrays. One array containing values representing the 
;                                             energy in eV, and another representing flux in 1/cm2/sr/eV. Note that this array 
;                                             cannot contain negative values. This parameter is optional.
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