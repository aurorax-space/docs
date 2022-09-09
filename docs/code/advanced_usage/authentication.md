# Authentication and AuroraX

With the goal of being widely accessible, the AuroraX API makes many of its features available to use anonymously and without the need to create an AuroraX account. Features such as conjunction, ephemeris, and data product searches, retrieving data source availability/statistics all don't require authentication.

Some features of the API, such as managing your organization's data sources and ephemeris/data products data, **does** [require an AuroraX account](/code/advanced_usage/creating_an_account) and some form of authentication.

AuroraX's main authentication method is the use of an API key, which can be provided in the header of the request.

!!! info "Need an API key?"

    If you need an API key to use secure endpoints, visit the AuroraX website to [create an account](https://aurorax.space/createAccount){:target="_blank"}. Once you have an account, you can use the "Request API Key" and "Manage API Keys" pages. 
    
    Once you get an API key, **keep it private and safe**, as it can be used to modify and delete any data you own on AuroraX.

!!! warning "Only one API key at a time"

    Please note that only one API key is valid at a time. If you request a new key, the old key will be rendered invalid.

## How to authenticate

Below we'll show an example of how to use your API key for interacting with secure functions.

!!! example "Example - get data sources"

    === "Python"

        Set the API key using the [`pyaurorax.authenticate()`](/code/pyaurorax_api_reference/pyaurorax/api/index.html#pyaurorax.api.authenticate) function. After authenticating, the API key supplied will be used for the remainder of your program.

        ```python
        import pyaurorax
        pyaurorax.authenticate("API_KEY_HERE")
        ```
        
        If needed, you can get the currently-set API key for your application:

        ```python
        import pyaurorax
        pyaurorax.authenticate("API_KEY_HERE")
        api_key = pyaurorax.api.get_api_key() # key = ANOTHER_API_KEY
        print(api_key)
        ```

    === "Command Line"

        Using the `aurorax-cli` tool, you can perform commands that need an API key using the `--api-key` parameter. Note that this parameter **MUST** right after the first command string.

        ```console
        $ aurorax-cli --api-key=$AURORAX_API_KEY sources add --help 
        ```

        The above command assumes that your API key is in an environment variable called `AURORAX_API_KEY`.

    === "Direct HTTPS-based API requests"

        When sending a raw HTTP query directly to the API, you must provide an additional header with your API key.

        Include the header `x-aurorax-api-key` with your API key as the value.
