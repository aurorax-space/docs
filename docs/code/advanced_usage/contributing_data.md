# Uploading data to AuroraX

!!! warning - only on PyAuroraX and REST API

    Please note, uploading data to AuroraX is only supported on PyAuroraX and when using the RESTful API directly. The `idl-aurorax` library **does not** support this functionality.

    Therefore, all following information on this page is specific to Python and PyAuroraX.

PyAuroraX provides built-in functionality for data providers to upload and manage their organization's metadata and/or summary data to the AuroraX database. Please see the [AuroraX data policy](/about_the_data/policy/) page and review the [recommended standards](/about_the_data/standards/) before proceeding.

Data sources, data products, and ephemeris records can all be added to the AuroraX database and managed by AuroraX users.

## Account privilege levels

Contributing and managing data in AuroraX requires an account with special privileges. If you do not yet have an account, [sign up](https://aurorax.space/createAccount){:target="_blank"} and then [contact us](https://aurorax.space/contact){:target="_blank"} to request enhanced privileges.

There are four account types in AuroraX: 

* **User:** the default role upon account creation. The User role has no data creation, modification, or deletion privileges.
* **Maintainer:** can create and modify ephemeris and data product records associated with data sources they are assigned to. No data deletion privileges. Must be assigned to a data source by the Owner or an Administrator.
* **Owner:** can create and modify their owned data sources and any associated ephemeris and data product records. No data deletion privileges. This role must be assigned by an Administrator.
* **Administrator:** has full write and delete privileges. 

|  | User | Maintainer * | Owner | Administrator |
| - | :-: | :-: | :-: | :-: |
| Create data source | <font color="red"><font color="red">&#10007;</font></font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update data source | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete data source | <font color="red">&#10007;</font> | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Create ephemeris record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update ephemeris record **| <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete ephemeris record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Create data product record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Update data product record **| <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |
| Delete data product record | <font color="red">&#10007;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> | <font color="green">&#10004;</font> |

\* Maintainers must be assigned to a data source by the Owner of the data source

\** Updating is done by re-uploading the modified record 

## Data sources

After obtaining sufficient privileges, the first step in uploading data to AuroraX is to create a data source. This data source will be associated with ephemeris and data product records in the database. In PyAuroraX the [`sources`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html){:target="_blank"} module has the [`DataSource`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource){:target="_blank"} class and the [`add`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.add){:target="_blank"} function to facilitate this.

### Adding a data source

The [`DataSource`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource){:target="_blank"} class is used to add data sources to AuroraX. Some of the class attributes are required to create the data source in the database, while others are optional and can be added later:

**Required attributes:**

* [`program`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.program){:target="_blank"}
* [`platform`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.platform){:target="_blank"}
* [`instrument_type`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.instrument_type){:target="_blank"}
* [`source_type`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.source_type){:target="_blank"}
* [`display_name`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.display_name){:target="_blank"}

**Optional attributes:**

* [`identifier`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.identifier){:target="_blank"}
* [`metadata`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.metadata){:target="_blank"}
* [`maintainers`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.maintainers){:target="_blank"}
* [`ephemeris_metadata_schema`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.ephemeris_metadata_schema){:target="_blank"}
* [`data_product_metadata_schema`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.DataSource.data_product_metadata_schema){:target="_blank"}

### Example: adding a data source

In this example we add a data source using the required attributes along with the optional `metadata_schema_ephemeris` and `metadata_schema_data_products`.

```python
# imports
import pyaurorax

# set data source values
program = "example-program"
platform = "example-platform"
instrument_type = "example-instrument"
source_type = "ground"
display_name = "Example Instrument"
metadata_schema_ephemeris = [
    {
        "field_name": "example_meta1",
        "description": "example metadata field 1",
        "data_type": "string",
        "allowed_values": [],
    },
    {
        "field_name": "example_meta2",
        "description": "example metadata field 2",
        "data_type": "string",
        "allowed_values": [],
    }
]
metadata_schema_data_products = [
    {
        "field_name": "example_meta1",
        "description": "example metadata field 1",
        "data_type": "string",
        "allowed_values": [],
    },
    {
        "field_name": "example_meta2",
        "description": "example metadata field 2",
        "data_type": "string",
        "allowed_values": [],
    }
]

# make DataSource object 
data_source = pyaurorax.sources.DataSource(program=program,
                                           platform=platform,
                                           instrument_type=instrument_type,
                                           source_type=source_type, display_name=display_name,
                                           ephemeris_metadata_schema=metadata_schema_ephemeris,
                                           data_product_metadata_schema=metadata_schema_data_products)

# add to AuroraX
r = pyaurorax.sources.add(source)
identifier = r.identifier
```

When the adding operation is successful, the return value `r` from the API is a `DataSource` object. This object contains the full record from the database including default values for attributes we omitted. In this case, since we didn't specify an identifier, we can find out what identifier our new data source was assigned by accessing its `identifier` attribute.

### Updating data sources

There are two functions for updating the information associated with a data source in the AuroraX database: [`sources.update_partial`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.update_partial){:target="_blank"}, which updates the values for specified attributes, and a full [`sources.update`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.update){:target="_blank"} function that replaces the database record with a new DataSource object passed in. We recommend using `sources.update_partial` whenever possible because it reduces the risk of accidental data loss.

### Example: partial update of a data source

In this example we perform partial updates to the data source `r` we created in the previous example. To use the [`sources.update_partial`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.update_partial){:target="_blank"} function we have to include the identifier of the data source, then any fields we want to modify. We will change the display name of the data source and add an existing AuroraX account as a maintainer.

```python
identifier = r.identifier
updated_r = pyaurorax.sources.update_partial(identifier=ds.identifier,
                                             display_name="New Display Name",
                                             maintainers=["maintainer@program.com"])
```

### Example: full update of a data source

The same task of modifying data source attributes can be accomplished with the [`sources.update`](/code/pyaurorax_api_reference/pyaurorax/sources/index.html#pyaurorax.sources.update){:target="_blank"} function. The difference in using this function is that we must pass in a full `DataSource` as the argument, and this object must have the changes we wish to be made. 

Continuing with the example of adding a data source, `r`, we will update its display name and maintainers list. For the sake of completeness, let us retrieve the data source from the database first. Note that since `sources.update` will rewrite the database with the argument we pass in, it's important to retrieve our working data source with the `format="full_record"` option so that it contains all the information.

```python
ds = pyaurorax.sources.get(program="example-program",
                           platform="example-platform",
                           instrument_type="example-instrument",
                           format="full_record")

# update data source's attributes
ds.display_name = "New Display Name"
ds.maintainers = ["maintainer@program.com"]

# update on AuroraX
updated_ds = pyaurorax.sources.update(ds)
```

## Ephemeris records

Ephemeris records uploaded to AuroraX can be found in conjunction searches and ephemeris searches by anyone using the platform. Using the [`ephemeris`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html){:target="_blank"} module, records are uploaded and updated using the [`Ephemeris`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.Ephemeris){:target="_blank"} class and [`upload`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.upload){:target="_blank"} function.

### Example: uploading an ephemeris record

In this example we create two `Ephemeris` objects associated with the same data source and upload them to the database. `Ephemeris` objects hold a reference to their data source, and so we first have to retrieve the data source.

```python
ds = pyaurorax.sources.get(program="example-program",
                           platform="example-platform",
                           instrument_type="example-instrument")
```

Next, we create two `Ephemeris` objects one minute apart. Note that the location attributes are passed in as a [`pyaurorax.Location`](/code/pyaurorax_api_reference/pyaurorax/location.html#pyaurorax.location.Location){:target="_blank"} object.

```python
epoch = datetime.datetime(2020, 1, 1, 0, 0)
location_geo = pyaurorax.Location(lat=51.049999, lon=-114.066666)
location_gsm = pyaurorax.Location(lat=150.25, lon=-10.75)
nbtrace = pyaurorax.Location(lat=1.23, lon=45.6)
sbtrace = pyaurorax.Location(lat=7.89, lon=101.23)
metadata = {
    "example_meta1": "testing1",
    "example_meta2": "testing2",
}

# create first Ephemeris object
e1 = pyaurorax.ephemeris.Ephemeris(data_source=ds,
                                   epoch=epoch,
                                   location_geo=location_geo,
                                   location_gsm=location_gsm,
                                   nbtrace=nbtrace,
                                   sbtrace=sbtrace,
                                   metadata=metadata)

# create second Ephemeris object
epoch2 = datetime.datetime(2020, 1, 1, 0, 1)
metadata2 = {
    "example_meta1": "testing12",
    "example_meta2": "testing22",
}
e2 = pyaurorax.ephemeris.Ephemeris(data_source=ds,
                                   epoch=epoch2,
                                   location_geo=location_geo,
                                   location_gsm=location_gsm,
                                   nbtrace=nbtrace,
                                   sbtrace=sbtrace,
                                   metadata=metadata2)
```

To upload the records, we pass them in a list to the [`upload`](/code/pyaurorax_api_reference/pyaurorax/ephemeris/index.html#pyaurorax.ephemeris.upload){:target="_blank"} function along with the identifier of the data source. `validate_source` is an optional argument that, if True, will independently check the validity of each record's `data_source` attribute against the data source associated with the `identifier` argument in the database. It is recommended to use this optional check.

```python
pyaurorax.ephemeris.upload(identifier=ds.identifier,
                           records=[e1, e2],
                           validate_source=True)
```

### Updating ephemeris records

Updating ephemeris records is also done using the `upload` function. Ephemeris records are uniquely identified by the combination of their data source and epoch. Uploading a new record with the same data source and epoch as an existing record will overwrite the existing record with the new values.

### Example: updating an ephemeris record

In this example we use the same variables as the previous example and update the metadata field of one of the records we uploaded. 

```python
e1.metadata = {
    "example_meta1": "testing1_updated",
    "example_meta2": "testing2_updated",
}

pyaurorax.ephemeris.upload(identifier=ds.identifier,
                           records=[e1],
                           validate_source=True)
```

## Data product records

Data product records uploaded to AuroraX can be found in data product searches by anyone using the platform. Using the [`data_products`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html){:target="_blank"} module, records are uploaded and updated using the [`DataProduct`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.DataProduct){:target="_blank"} class and [`upload`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.upload){:target="_blank"} function.

### Example: uploading a data product record

In this example we create two `DataProduct` objects associated with the same data source and upload them to the database. `DataProduct` objects hold a reference to their data source, and so we first have to retrieve the data source.

```python
ds = pyaurorax.sources.get(program="example-program",
                           platform="example-platform",
                           instrument_type="example-instrument")
```

Next, we create two `DataProduct` objects one day apart.

```python
# set data product values
url = "example1.jpg"
metadata = {
    "example_meta1": "example1",
    "example_meta2": "example2",
}
data_product_type = "keogram"
start_dt = datetime.datetime(2020, 1, 1, 0, 0, 0)
end_dt = start_dt.replace(hour=23, minute=59, second=59)

# create first DataProduct object
dp1 = pyaurorax.data_products.DataProduct(data_source=ds,
                                          data_product_type=data_product_type,
                                          url=url,
                                          start=start_dt,
                                          end=end_dt,
                                          metadata=metadata)

# create second DataProduct object
start_dt2 = datetime.datetime(2020, 1, 2, 0, 0, 0)
end_dt2 = start_dt2.replace(hour=23, minute=59, second=59)
url2 = "example2.jpg"
dp2 = pyaurorax.data_products.DataProduct(data_source=ds,
                                          data_product_type=data_product_type,
                                          url=url2,
                                          start=start_dt2,
                                          end=end_dt2,
                                          metadata=metadata)
```

To upload the records, we pass them in a list to the [`upload`](/code/pyaurorax_api_reference/pyaurorax/data_products/index.html#pyaurorax.data_products.upload){:target="_blank"} function along with the identifier of the data source. `validate_source` is an optional argument that, if True, will independently check the validity of each record's `data_source` attribute against the data source associated with the `identifier` argument in the database. It is recommended to use this optional check.

```python
pyaurorax.data_products.upload(identifier=ds.identifier,
                               records=[dp1, dp2],
                               validate_source=True)
```

### Updating data product records

Updating data product records is also done using the `upload` function. Data product records are uniquely identified by the combination of their data source and URL. Uploading a new record with the same data source and URL as an existing record will overwrite the existing record with the new values.

### Example: updating a data product record

In this example we use the same variables as the previous example and update the metadata field of one of the records we uploaded. 

```python
dp1.metadata = {
    "example_meta1": "example1_updated",
    "example_meta2": "example2_updated",
}

pyaurorax.data_products.upload(identifier=ds.identifier,
                               records=[dp1],
                               validate_source=True)
```