# Creating an account using the AuroraX API

Accounts are required for maintaining data sources and ephemeris/data products data. Once an account is created, an API key may be obtained. See [authentication](/code/advanced_usage/authentication) for details on how to authenticate with an API key. Accounts may also be created using the AuroraX website using the [create an account](https://aurorax.space/createAccount){:target="_blank"} feature. This page discusses how to create an account directly using the API interface.


!!! example "Example - create an account"

    === "Direct HTTPS-based API requests"

    Construct a JSON document and save it to a file called 'payload.json'
    ```
    {
    "email_address": "your_email@your_server.org",
    "first_name": "First",
    "last_name": "Last",
    "agree_terms": "2022-09-09T03:48:54.203Z",
    "password": "1 Using a long passphrase is often better than a password!"
    }
    ```
    Issue a POST request to `https://api.aurorax.space/api/v1/accounts`. For example, using curl:
    ```
    curl -X 'POST' 'https://api.aurorax.space/api/v1/accounts' -H 'accept: application/json' -H 'Content-Type: application/json' -d payload.json
    ```
