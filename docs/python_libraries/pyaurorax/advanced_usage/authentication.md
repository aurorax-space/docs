# Authenticating with PyAuroraX

With the goal of being widely accessible, the AuroraX API makes many of its features available to use anonymously and without the need to create an AuroraX account. Features such as conjunction search, searching and filtering ephemeris and data product records, retrieving availability of ephemeris and data product records, and retrieving details and statistics about data sources all utilize anonymous endpoints.

Some features of the API, such as managing your organization's data sources or managing ephemeris and data product records, **do** require authentication and an AuroraX account.

Visit the AuroraX website to [create an account](https://aurorax.space/createAccount).

## API keys
At this time PyAuroraX only supports authenticated access using API keys. If you don't have one yet, log in to AuroraX and [request an API key](https://aurorax.space/accountSettings/requestApiKey). Keep this key private and safe, as it can be used to modify and delete any data you own on AuroraX.

*Please note that only one API key is valid at a time! If you request a new key, you will have to update it wherever your old key was used.*

Set the API key using the ```api.authenticate``` function. The API key will be used for the remainder of your program.
```python
# set API key
aurorax.api.authenticate("API_KEY_HERE")

# change the API key
aurorax.api.authenticate("ANOTHER_API_KEY")
```

To view the API key currently set:
```python
key = aurorax.api.get_api_key() # key = ANOTHER_API_KEY
```

