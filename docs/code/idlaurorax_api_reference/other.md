---
hide:
  - toc
---

# Other

Below are a collection of miscellaneous functions and procedures available in IDL-AuroraX.

- [`aurorax_set_proxy`](#aurorax_set_proxy)
- [`aurorax_get_proxy`](#aurorax_get_proxy)
- [`aurorax_clear_proxy`](#aurorax_clear_proxy)
- [`aurorax_check_version`](#aurorax_check_version)

## aurorax_set_proxy

```
;+
; :Description:
;       Configure IDL-AuroraX library to utilize a proxy connection when communicating
;       with the API and the data archive.
;
; :Arguments:
;       hostname: in, required, String
;         The hostname for the proxy connection. Usually this is 'localhost'.
;       port: in, required, Integer
;         The port number for the proxy connection.
;
; :Keywords:
;       username: in, optional, String
;         The username for the proxy connection, if required.
;       password: in, optional, String
;         The password for the proxy connection, if required.
;
; :Examples:
;       aurorax_set_proxy,'localhost',9000
;       aurorax_set_proxy,'localhost',8888,username=someone,password=something
;+
```

## aurorax_get_proxy

```
;+
; :Description:
;       Get the proxy connection details that the IDL-AuroraX library will use when
;       communicating with the API and the data archive.
;
; :Returns:
;       Struct
;
; :Examples:
;       aurorax_get_proxy
;+
```

## aurorax_clear_proxy

```
;+
; :Description:
;       Clear the proxy connection details that the IDL-AuroraX library will use when
;       communicating with the API and the data archive.
;
; :Examples:
;       aurorax_clear_proxy
;+
```

## aurorax_check_version

```
;+
; :Description:
;       Check if there is a new version available.
;
;       This function will return an integer:
;         0 = update not available
;         1 = update available
;         2 = error encountered
;
; :Keywords:
;       quiet: in, optional, Boolean
;         Do not output any print statements
;       init_mode: in, optional, Boolean
;         Indicate that the function is being run during the IDL-AuroraX initialization phase
;
; :Returns:
;       Struct

; :Examples:
;       aurorax_check_version
;+
```