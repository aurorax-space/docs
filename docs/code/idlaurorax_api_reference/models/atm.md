---
hide:
  - toc
---

# TREx Auroral Transport Model (ATM)

Below are all functions and procedures available in IDL-AuroraX related to using the TREx Auroral Transport Model (ATM).

- [`aurorax_atm_forward`](#aurorax_atm_forward)
- [`aurorax_atm_forward_get_output_flags`](#aurorax_atm_forward_get_output_flags)
- [`aurorax_atm_inverse`](#aurorax_atm_inverse)
- [`aurorax_atm_inverse_get_output_flags`](#aurorax_atm_inverse_get_output_flags)


## aurorax_atm_forward

```
;+
; :Description:
;       Perform TREx Auroral Transport Model (ATM) 'forward' calculations.
;
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
; :Parameters:
;       time_stamp: in, required, String
;         Timestamp in UTC, format must be YYYY-MM-DDTHH:MM:SS.
;       geo_lat: in, required, Float
;         Latitude in geodetic coordinates: -90.0 to 90.0.
;       geo_lon: in, required, Float
;         Longitude in geodetic coordinates: -180.0 to 180.0.
;       output_flags: in, required, Hash
;         Flags to indicate which values are included in the output, generated
;         using the aurorax_atm_forward_get_output_flags() function.
;
; :Keywords:
;       maxwellian_energy_flux: in, optional, Float
;         Maxwellian energy flux in erg/cm2/s. Default is 10.
;       gaussian_energy_flux: in, optional, Float
;         Gaussian energy flux in erg/cm2/s. Default is 0.0. Note that gaussian_peak_energy
;         and gaussian_spectral_width must be specified if the gaussian_energy_flux is not 0.
;       maxwellian_characteristic_energy: in, optional, Float
;         Maxwellian characteristic energy in eV. Default is 5000. Note that maxwellian_characteristic_energy
;         must be specified if the maxwellian_energy_flux is not 0.
;       gaussian_peak_energy: in, optional, Float
;         Gaussian peak energy in eV. Default is 1000. Note this parameter must be specified
;         if the gaussian_energy_flux is not 0.
;       gaussian_spectral_width: in, optional, Float
;         Gaussian spectral width in eV. Default is 100. Note this parameter must be specified
;         if the gaussian_energy_flux is not 0.
;       kappa_energy_flux: in, optional, Float
;         Kappa energy flux in erg/cm2/s. Default is 0, meaning all kappa parameters will be disabled. Note that
;         `kappa_mean_energy` and `kappa_k_index` should be specified if `kappa_energy_flux` is not 0. If they are not, then
;         their defaults will be used. This parameter is optional.
;       kappa_mean_energy: in, optional, Float
;         Kappa mean energy in eV. Default is 30000. Note this parameter should be specified if the `kappa_energy_flux`
;         is not 0. This parameter is optional.
;       kappa_k_index: in, optional, Float
;         Kappa k-index. Default is 5. Note this parameter should be specified if the `kappa_energy_flux` is not 0. This
;         parameter is optional.
;       exponential_energy_flux: in, optional, Float
;         Exponential energy flux, in erg/cm2/s. Default is 0, meaning all exponential parameters will be disabled. Note that
;         `exponential_characteristic_energy` and `exponential_starting_energy` should be specified if `exponential_energy_flux`
;         is not 0. If it is not, then the default will be used. This parameter is optional.
;       exponential_characteristic_energy: in, optional, Float
;         Exponential characteristic energy, in eV. Default is 50000. Note this parameter should be specified if the
;         `exponential_energy_flux` is not 0. This parameter is optional.
;       exponential_starting_energy: in, optional, Float
;         Exponential starting energy, in eV. Default is 50000. Note this parameter should be specified if the
;         `exponential_energy_flux` is not 0. This parameter is optional.
;       proton_energy_flux: in, optional, Float
;         Proton energy flux, in erg/cm2/s. Default is 0, meaning all proton parameters will be disabled. Note that
;         `proton_characteristic_energy` should be specified if `proton_energy_flux` is not 0. If it is not, then the default
;         will be used. This parameter is optional.
;       proton_characteristic_energy: in, optionial, Float
;         Proton characteristic energy, in eV. Default is 10000. Not this parameter should be specified if the
;         `proton_energy_flux` is not 0. This parameter is optional.
;       d_region: in, optional, Boolean
;         Flag to enable D-region evaluation. Default is False. 
;       nrlmsis_model_version: in, optional, String
;         NRLMSIS version number. Possible values are 00 or 2.0. Default is 2.0.
;       oxygen_correction_factor: in, optional, Float
;         Oxygen correction factor used to multiply by in the empirical model. Default is 1.
;       timescale_auroral: in, optional, Float
;         The duration of the precipitation, in seconds. Default is 600 (10 minutes).
;       timescale_transport: in, optional, Float
;         Defined by L/v0, in which L is the dimension of the auroral structure, and v0 is
;         the cross-structure drift speed. Represented in seconds. Default is 600 (10 minutes).
;       atm_model_version: in, optional, String
;         ATM model version number. Possible values are '1.0' and '2.0'. Default is '2.0'.
;       custom_spectrum: in, optional, Struct
;         A struct containing two 1D float arrays. One array containing values representing the
;         energy in eV, and another representing flux in 1/cm2/sr/eV. Note that this array
;         cannot contain negative values.
;       custom_neutral_profile: in, optional, Float
;         A 2-dimensional float array containing values representing the energy in eV, and flux
;         in 1/cm2/sr/eV. The shape is expected to be [N, 2], with energy in [*, 0] and flux
;         in [*, 1].
;         Note that this array cannot contain negative values (API Error 
;         will be raised if so). This parameter is optional.
;         Users are responsible for fully covering the altitude range of interest in the
;         provided profile (80-800 km if d_region_flag=0, or 50-500 km if d_region_flag=1). The
;         model only performs interpolation, not extrapolation.
;       no_cache: in, optional, Boolean
;         The UCalgary Space Remote Sensing API utilizes a caching layer for performing ATM
;         calculations. If this variation of input parameters has been run before (and the
;         cache is still valid), then it will not re-run the calculation. Instead it will
;         return the cached results immediately. To disable the caching layer, use this keyword.
;
; :Returns:
;       Struct
;
; :Examples:
;       Refer to examples directory, or data.phys.ucalgary.ca
;+
```

## aurorax_atm_forward_get_output_flags

```
;+
; :Description:
;       Initialize ATM 'forward' calculation output flag settings.
;
;       Create a hash object which is used to represent all output values included in
;       an ATM forward calculation. ATM calculations are performed in a way where
;       you can toggle ON/OFF whichever pieces of information you do or don't want.
;       This improves the efficiency of the calculation routine resulting in faster queries.
;
;       By default, all output flags are disabled. There exist several helper keywords
;       to enable all flags, or enable only height-integrated Rayleighs flags.
;
; :Keywords:
;       set_all_true: in, optional, Boolean
;         Enable all output flags.
;       enable_only_height_integrated_rayleighs: in, optional, Boolean
;         Enable only all height-integrated Rayleighs flags.
;
; :Returns:
;       Hash
;
; :Examples:
;       aurorax_atm_forward_get_output_flags()
;       aurorax_atm_forward_get_output_flags(/SET_ALL_TRUE)
;       aurorax_atm_forward_get_output_flags(/ENABLE_ONLY_HEIGHT_INTEGRATED_RAYLEIGHS)
;+
```

## aurorax_atm_inverse

```
;+
; :Description:
;       Perform TREx Auroral Transport Model (ATM) 'inverse' calculations.
;
;       Perform an inverse calculation using the TREx Auroral Transport Model and the supplied input
;       parameters. Note that this function utilizes the UCalgary Space Remote Sensing API to perform
;       the calculation.
;
;       Note -- The `atmospheric_attenuation_correction` parameter was deprecated in v1.6.0, and removed
;       in v1.7.0. Please ensure you perform this conversion yourself on the results, if desired.
;
;       Note -- As of v1.7.0, the output flag `characteristic_energy` was renamed to `mean_energy`.
;
; :Parameters:
;       time_stamp: in, required, String
;         Timestamp in UTC, format must be YYYY-MM-DDTHH:MM:SS.
;       geo_lat: in, required, Float
;         Latitude in geodetic coordinates. Currently limited to the Transition Region Explorer
;         (TREx) region of >=50.0 and <61.5 degrees. An error will be raised if outside of this range.
;       geo_lon: in, required, Float
;         Longitude in geodetic coordinates. Currently limited to the Transition Region Explorer
;         (TREx) region of >=-110 and <-70 degrees. An error will be raised if outside of this range.
;       intensity_4278: in, required, Float
;         Intensity of the 427.8nm (blue) wavelength in Rayleighs.
;       intensity_5577: in, required, Float
;         Intensity of the 557.7nm (green) wavelength in Rayleighs.
;       intensity_6300: in, required, Float
;         Intensity of the 630.0nm (red) wavelength in Rayleighs.
;       intensity_8446: in, required, Float
;         Intensity of the 844.6nm (near infrared) wavelength in Rayleighs.
;       output_flags: in, required, Hash
;         Flags to indicate which values are included in the output, generated
;         using the aurorax_atm_forward_get_output_flags() function.
;
; :Keywords:
;       precipitation_flux_spectral_type: in, optional, String
;         The precipitation flux spectral type to use. Possible values are gaussian or maxwellian. The default is gaussian.
;       nrlmsis_model_version: in, optional, String
;         NRLMSIS version number. Possible values are 00 or 2.0. Default is 2.0.
;       special_logic_keyword: in, optional, String
;         Use a special keyword provided by UCalgary staff to apply alternative logic during
;         an ATM inversion request.
;       atm_model_version: in, optional, String
;         ATM model version number. Possible values are '1.0' and '2.0'. Default is '2.0'.
;       no_cache: in, optional, Boolean
;         The UCalgary Space Remote Sensing API utilizes a caching layer for performing ATM
;         calculations. If this variation of input parameters has been run before (and the
;         cache is still valid), then it will not re-run the calculation. Instead it will
;         return the cached results immediately. To disable the caching layer, use this keyword.
;
; :Returns:
;       Struct
;
; :Examples:
;       Refer to examples directory, or data.phys.ucalgary.ca
;+
```

## aurorax_atm_inverse_get_output_flags

```
;+
; :Description:
;       Initialize ATM 'inverse' calculation output flag settings.
;
;       Create a hash object which is used to represent all output values included in
;       an ATM inverse calculation. ATM calculations are performed in a way where
;       you can toggle ON/OFF whichever pieces of information you do or don't want.
;       This improves the efficiency of the calculation routine resulting in faster queries.
;
;       By default, all output flags are disabled. There exist several helper keywords
;       to enable all flags, or enable only height-integrated Rayleighs flags.
;
; :Keywords:
;       set_all_true: in, optional, Boolean
;         Enable all output flags.
;
; :Returns:
;       Hash
;
; :Examples:
;       aurorax_atm_inverse_get_output_flags()
;       aurorax_atm_inverse_get_output_flags(/SET_ALL_TRUE)
;+
```